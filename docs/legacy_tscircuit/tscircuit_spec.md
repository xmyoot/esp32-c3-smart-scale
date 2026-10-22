# tscircuit Project Spec — ESP32-C3 Smart Scale

> Revision: `A0`
> Date: `2026-04-02`

This spec translates the client brief into a tscircuit-first implementation plan.

---

## 1 — Project Overview

| Field | Value |
|-------|-------|
| Project name | `esp32-c3-smart-scale` |
| Description | Low-power Wi-Fi/BLE smart-scale main board using `ESP32-C3-MINI-1U`, a 1S LiPo, USB-C charge input, and a 24-bit load-cell front end |
| Number of PCBs | 1 |
| Fab target | JLCPCB PCBA + hand assembly for battery / antenna / load-cell harness if needed |
| Sample run | 5–10 units |
| Production target | 100+ units |

### Board

| Board | Entrypoint | Expected output dir | Size |
|------|------------|---------------------|------|
| Main board | `index.circuit.tsx` | `dist/esp32-c3-smart-scale/` | `45 mm x 35 mm` assumed |

### Power & signal chain

```text
USB-C 5V -> ESD + CC resistors -> MCP73831 LiPo charger -> 1S 3000 mAh LiPo
LiPo -> TLV75530 3.0 V rail -> ESP32-C3-MINI-1U + HX711 + support passives
Load cell bridge -> HX711 channel A -> ESP32-C3 GPIO
Battery -> switched resistor divider -> ESP32-C3 ADC
USB-C D+/D- -> ESP32-C3 GPIO19/GPIO18 for USB Serial/JTAG and factory flashing
```

---

## 2 — Recommended Architecture

### Recommended option

Use:

- `ESP32-C3-MINI-1U-H4` (`LCSC C3013922`)
- `HX711` load-cell ADC (`LCSC C43656`)
- `MCP73831T-2ACI/OT` linear 4.2 V Li-ion charger (`LCSC C424093`)
- `TLV75530PDBVR` 3.0 V / 500 mA low-IQ LDO (`LCSC C507268`)
- switched high-value divider into the ESP32 ADC for battery measurement
- USB-C receptacle with CC pull-downs and direct D+/D- routing to the ESP32-C3 USB Serial/JTAG pins
- factory pogo/test pads for `GND`, `VBAT`, `3V0`, `EN`, `GPIO9/BOOT`, `U0TXD`, `U0RXD`

### Why this is the cheapest sensible architecture

1. `HX711` is still the lowest-cost dedicated scale ADC that is widely used for product weigh-scale designs, and it supports power-down from `PD_SCK`.
2. `MCP73831` keeps the charge path simple and compact with very low external-part count, which fits a battery-always-present consumer product.
3. A `3.0 V` LDO avoids the cost and complexity of a buck-boost stage while still using most of the LiPo discharge curve within the `ESP32-C3-MINI-1U` `3.0 V to 3.6 V` supply range.
4. The scale use case is intermittent, not continuous high-throughput radio, so the active-efficiency penalty of an LDO is acceptable for the BOM savings.
5. Battery measurement is cheapest with a switched resistor divider rather than a dedicated fuel gauge.

### Explicit assumptions

- The product always contains a battery during normal operation. This architecture does **not** optimize for battery-less operation from USB only.
- The scale wakes periodically or on user interaction, samples weight, then returns to deep sleep.
- A `45 mm x 35 mm` board envelope is acceptable for the first pass.
- The load cell is a standard 4-wire bridge type in the `1 mV/V` to `2 mV/V` class.

If any of those assumptions are wrong, the power architecture should be revisited before layout freeze.

---

## 3 — Alternative Architectures Considered

### Option A — Recommended / lowest-cost product architecture

- `ESP32-C3-MINI-1U`
- `HX711`
- `MCP73831`
- `TLV75530` `3.0 V`
- switched battery divider

Pros:

- lowest BOM cost
- low part count
- easy sourcing from JLC/LCSC for core ICs
- low sleep current is still achievable

Cons:

- no true power-path manager
- lower active efficiency than a buck converter
- board should be treated as battery-backed, not USB-powered-first

### Option B — better battery efficiency, slightly higher cost

- same front end
- replace LDO with a low-IQ buck converter

Pros:

- better efficiency during Wi-Fi bursts
- more thermal margin at high TX current

Cons:

- extra cost
- larger layout and EMI burden
- not necessary for an intermittent scale with a 3000 mAh pack

### Option C — higher-performance metrology / charging architecture

- precision ADC such as `ADS1232` or `ADS1220`
- charger with true power-path management
- optional dedicated gauge

Pros:

- best measurement flexibility
- best system behavior on USB while battery is low or absent

Cons:

- clearly more expensive
- more software and layout work
- outside the “cheapest sensible” target

---

## 4 — Project Structure

```text
esp32-c3-smart-scale/
├── docs/
│   ├── client_request.md
│   ├── design_brief.html
│   ├── tscircuit_spec.md
│   ├── usage.md
│   ├── testing.md
│   ├── bring_up_notes.md
│   └── timeline.md
├── __snapshots__/
│   └── index.circuit-pcb.snap.svg
├── dist/
│   ├── exports/
│   │   ├── pcb.svg
│   │   ├── schematic.svg
│   │   ├── readable-netlist.txt
│   │   ├── preliminary-bom.csv
│   │   └── preliminary-pnp.csv
│   └── index/
│       └── circuit.json
├── imports/
│   ├── ESP32_C3_MINI_1U_H4.tsx
│   ├── HX711.tsx
│   ├── MCP73831T_2ACI_OT.tsx
│   ├── TLV75530PDBVR.tsx
│   └── TYPE_C_31_M_12.tsx
├── index.circuit.tsx
├── src/
│   └── modules/
│       └── Connectors.tsx
├── package.json
├── tsconfig.json
└── tscircuit.config.json
```

Current implementation note:

- The first validated pass keeps the full board assembly in `index.circuit.tsx` and only factors out the custom connectors into `src/modules/Connectors.tsx`.

---

## 5 — Component Inventory

| Method | Package / part | Role |
|-------|-----------------|------|
| `tsci import` | `C3013922` / `ESP32-C3-MINI-1U-H4` | main MCU / radio module |
| `tsci import` | `C43656` / `HX711` | 24-bit load-cell ADC |
| `tsci import` | `C424093` / `MCP73831T-2ACI/OT` | single-cell Li-ion charger |
| `tsci import` | `C507268` / `TLV75530PDBVR` | 3.0 V system LDO |
| `tsci import` | `C165948` / `TYPE-C-31-M-12` | USB-C receptacle |
| local wrapper or generic | JST battery connector | 1S LiPo connection |
| local wrapper or generic | 4-pin load-cell connector | load-cell harness |
| local wrapper | PFET or analog switch | optional bridge / divider gating |
| primitives | resistors / capacitors / LED / test pads / traces | support circuitry |

### Planned support parts

- `2 x 5.1 kΩ` CC pull-down resistors on `CC1` / `CC2`
- USB D+/D- ESD protection
- charger `PROG` resistor sized for `500 mA`
- battery divider around `1.5 MΩ / 499 kΩ` total, switched or GPIO-gated
- `100 nF` local decoupling at each IC supply pin
- bulk `10 µF` on USB `VBUS`, battery node, and `3V0`

---

## 6 — Circuit File Specifications

### File: `src/modules/UsbChargeFrontEnd.tsx`

Purpose:

- USB-C sink front end
- ESD and CC resistors
- charger IC
- battery connector
- direct USB data routing for built-in USB Serial/JTAG

Main connections:

- `VBUS` -> charger input
- `USB_D_P` -> `ESP32 GPIO19`
- `USB_D_N` -> `ESP32 GPIO18`
- charger `VBAT` -> battery connector and system battery net

Key notes:

- no USB-UART bridge
- no USB-PD negotiation
- charger current target `500 mA`

### File: `src/modules/LoadCellFrontEnd.tsx`

Purpose:

- `HX711`
- load-cell connector
- reference filtering and gain path

Main connections:

- load-cell `E+`, `E-`, `A+`, `A-` -> `HX711`
- `HX711 DOUT`, `PD_SCK` -> ESP32 GPIOs
- optional PFET gating for bridge excitation if layout and software budget allow

Key notes:

- run `HX711` at `10 SPS` for best noise performance
- use short symmetric routing around `INA+` / `INA-`
- keep noisy USB and antenna currents away from the analog front end

### File: `src/modules/BatterySense.tsx`

Purpose:

- switched high-value divider into ESP32 ADC pin

Main connections:

- `VBAT` -> divider -> ADC input
- GPIO-enabled low-side or high-side switch to eliminate sleep bleed

Key notes:

- do not leave a low-value always-on divider across the pack
- calibrate ADC in firmware against two pack-voltage points

### File: `src/modules/Esp32Core.tsx`

Purpose:

- place `ESP32-C3-MINI-1U`
- decoupling
- boot/enable pull resistors
- antenna keepout

Main connections:

- `3V0` -> module supply
- USB `D+` / `D-` -> GPIO19 / GPIO18
- `EN`, `GPIO9` -> buttons or test pads
- `HX711`, battery ADC, status LED, optional user button -> GPIOs

Key notes:

- preserve external-antenna connector access and keepout
- keep a solid ground reference under digital sections and honor the antenna keepout at the module edge

### File: `src/modules/FactoryPads.tsx`

Purpose:

- pogo-programming and bring-up access

Pads:

- `GND`
- `VBAT`
- `3V0`
- `EN`
- `GPIO9 / BOOT`
- `U0TXD`
- `U0RXD`
- optional `USB_D_P` / `USB_D_N`

---

## 7 — Net Plan

Named nets:

- `net.GND`
- `net.VBUS`
- `net.VBAT`
- `net.V3_0`
- `net.USB_D_P`
- `net.USB_D_N`
- `net.HX711_DOUT`
- `net.HX711_SCK`
- `net.BAT_SENSE`
- `net.EN`
- `net.BOOT`
- `net.U0TXD`
- `net.U0RXD`

---

## 8 — Layout Constraints

- Keep the `ESP32-C3-MINI-1U` external antenna edge clear of copper and tall metal in the module keepout region.
- Put the USB-C connector and charger together on one board edge.
- Keep `HX711` and the load-cell connector away from the antenna edge and USB connector.
- Route `INA+` / `INA-` as a tightly coupled, quiet differential pair with no digital routing underneath if avoidable.
- Use a continuous ground reference and short `3V0` distribution from the LDO to the ESP32 and ADC.
- Put factory pads on one accessible edge for pogo-fixture use.

---

## 9 — Validation Sequence

```bash
tsci check netlist
tsci snapshot
tsci check placement
tsci check routing-difficulty
tsci build
tsci export index.circuit.tsx -f schematic-svg
tsci export index.circuit.tsx -f pcb-svg
tsci export index.circuit.tsx -f gerbers
tsci export index.circuit.tsx -f kicad_zip
```

---

## 10 — Bring-Up Plan

1. Verify no short between `VBAT`, `VBUS`, and `3V0`.
2. Power from bench supply at battery input, confirm LDO output is `3.0 V`.
3. Verify USB-C charge input and charge current setpoint.
4. Flash a minimal USB Serial/JTAG firmware image through USB-C.
5. Read battery divider and calibrate.
6. Verify `HX711` counts with no load and with a known calibration mass.
7. Measure deep-sleep current with radio off and `HX711` in power-down.

---

## 11 — Sources Used For Architecture

- Espressif `ESP32-C3-MINI-1U` datasheet and power range
- Espressif hardware design guidance for module placement and power routing
- Espressif USB Serial/JTAG documentation for using `GPIO19` / `GPIO18`
- Microchip `MCP73831` product page and datasheet
- TI `TLV755P` product page and datasheet
- Avia `HX711` datasheet
- LCSC listings for:
  `ESP32-C3-MINI-1U-H4 C3013922`,
  `HX711 C43656`,
  `MCP73831T-2ACI/OT C424093`,
  `TLV75530PDBVR C507268`,
  `TYPE-C-31-M-12 C165948`
