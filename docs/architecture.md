# System Architecture — ESP32-C3 Smart Scale, Rev A

Battery-powered Wi-Fi/BLE weigh-scale main board. 2-layer, 52 × 38 mm, single-sided SMT assembly (JLCPCB PCBA).

## Block diagram

```text
                 ┌──────────── VBUS 5 V ─────────────┐
 USB-C (J1) ──┬──┤ USBLC6 ESD (U5)                   │
   CC1/CC2    │  └─ D+/D- ──────────────────────────────────────► ESP32-C3 USB Serial/JTAG
   5.1k pull- │                                       ▼
   downs      │                          MCP73831 charger (U3) ── CHG LED (D1)
              │                                       │ 455 mA CC/CV, 4.20 V
              │                                       ▼
              │                     1S Li-ion ◄──── VBAT ────► 1M/330k divider ──► IO4 (ADC)
              │                    (J2, JST PH)       │
              │                                       ▼
              │                         TLV75530 LDO (U4), 25 µA Iq
              │                                       │ +3V0
              │              ┌────────────────────────┼─────────────────────┐
              │              ▼                        ▼                     ▼
              │     ESP32-C3-MINI-1U (U1)       HX711 (U2) VSUP/DVDD   MMBT5401 (Q1)
              │      U.FL ext. antenna           DOUT ──► IO5           excitation pass
              │      IO3 ◄── TARE/WAKE (SW1)     PD_SCK ◄─ IO6          element, switched
              │      EN/IO9/TXD0/RXD0 ──► pogo pads (J4, underside)     by HX711 BASE
              │                                                         │ EXC+ 2.75 V
              │                                    load cell (J3) ◄─────┘
              │                                    SIG± ──► HX711 channel A (×128)
```

## Design decisions

| Area | Decision | Why |
|---|---|---|
| MCU | ESP32-C3-MINI-1U-H4 | Wi-Fi + BLE, native USB Serial/JTAG (no USB-UART bridge), U.FL for the required external antenna, 5 µA deep sleep. |
| Load-cell ADC | HX711 | Lowest-cost dedicated bridge ADC with on-chip PGA, internal oscillator and an excitation regulator controller. |
| Excitation switching | HX711 BASE driving Q1 (PNP pass element) | A 1 kΩ bridge draws ~3 mA continuously. Using the HX711's own regulator loop, excitation turns **off** when PD_SCK is held high, so the bridge costs nothing in sleep. EXC+ = 1.25 V × (1 + R12/R13) = 2.75 V, leaving 250 mV headroom below the 3.0 V rail. |
| Charger | MCP73831-2 (4.20 V) | Single-chip linear CC/CV, tiny BOM. R3 = 2.2 kΩ sets 455 mA (≈0.15 C on a 3000 mAh cell) and keeps the whole board inside a USB 2.0 500 mA budget. |
| Power path | Battery-backed: system always runs from VBAT | Product always contains a cell; avoids a power-path IC. |
| Regulator | TLV75530 3.0 V LDO, 500 mA | 25 µA Iq, 238 mV dropout. 3.0 V (not 3.3 V) keeps the ESP32-C3 in spec down to ~3.25 V cell voltage, using most of the Li-ion discharge curve. Buck rejected: cost/EMI not justified for an intermittently awake scale. |
| Battery sensing | 1 MΩ / 330 kΩ divider + 100 nF into IO4 | 4.2 V → 1.04 V (ADC atten 2.5 dB). 3.2 µA standing current is cheaper than a load switch or fuel gauge. |
| USB protection | USBLC6-2SC6 on D+/D−/VBUS | Real-product ESD on the only user-accessible signal connector. |
| Strapping | IO2, IO8 pulled up (10 k); IO9 uses the module's internal pull-up; EN has 10 k / 1 µF RC | Espressif hardware-design-guide defaults. IO9 is exposed on J4 so the factory fixture can force download mode. |
| User input | TARE/WAKE on IO3, active-high with 100 k pull-down | IO3 is in the RTC domain, so it can wake the C3 from deep sleep; pull-down means zero idle current. |
| Programming | USB-C (USB Serial/JTAG) primary; 7 pogo pads on the underside (VBAT, 3V0, EN, IO9, TXD0, RXD0, GND) | No connector cost; supports a bed-of-nails flashing/test fixture. |

## Sleep current budget (battery side)

| Item | Typical |
|---|---|
| ESP32-C3-MINI-1U deep sleep (RTC timer + GPIO wake) | 5 µA |
| TLV75530 quiescent | 25 µA |
| VBAT divider (1.33 MΩ) | 3.2 µA |
| HX711 power-down (PD_SCK high), excitation off | < 1 µA |
| MCP73831 with no VBUS (reverse leakage) | ~1 µA |
| **Total** | **≈ 35 µA** → ≈ 9.5 years of standby on 3000 mAh (self-discharge dominates) |

## Rails

| Net | Source | Load | Track |
|---|---|---|---|
| VBUS | USB-C | U3, U5, D1 | 0.4 mm |
| +BATT (VBAT) | Cell / U3 | U4, divider, J4 | 0.4 mm |
| +3V0 | U4 | U1, U2, Q1, pull-ups, J4 | 0.4 mm trunks |
| EXC+ | Q1 collector | load-cell bridge, HX711 AVDD | 0.3 mm |
| GND | — | solid pour on both layers, ~110 stitching vias | pour |

## PCB layout

- 2 layers, 1.6 mm FR-4, JLCPCB standard rules (0.2 mm default track/clearance, 0.6/0.3 mm vias; a few 0.45/0.2 mm vias at the USB-C fan-out).
- **Zoning:** RF module top-right with the U.FL at the board edge; power entry (USB-C, ESD, charger, battery) bottom-right/bottom-centre; analog front end (HX711, excitation regulator, load-cell connector) on the left, away from the radio and the charger.
- HX711 → ESP32 data runs as a straight two-line bus; the load-cell SIG± pair is a short, straight run on the top layer next to its EXC+/E− returns.
- Hand-placed trunk routes for VBAT, 3V0 and USB; the remaining local nets were completed with [KiCadRoutingTools](https://github.com/drandyhaas/KiCadRoutingTools) at JLC standard fab tier, then checked with KiCad DRC and schematic parity.
- 4 × M2 mounting holes, 3 fiducials, rounded 2 mm corners.
