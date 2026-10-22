# Design Review — Rev A

Date: 2026-10-22 · Tools: KiCad 10.0.7 (`kicad-cli`), [kicad-happy](https://github.com/aklofas/kicad-happy) analyzers, [KiCadRoutingTools](https://github.com/drandyhaas/KiCadRoutingTools)

## Results

| Check | Result |
|---|---|
| ERC, all severities | **0 violations** |
| DRC, errors | **0 violations, 0 unconnected** |
| Schematic ↔ PCB parity | **0 issues** |
| kicad-happy schematic analysis | 0 errors; 3 warnings (triaged below) |
| kicad-happy PCB analysis (`--full`) | 0 errors; warnings triaged below |
| kicad-happy Gerber analysis | 0 findings (11 layers, 2 drill files) |
| Routing | 100 % (49 nets), 2 layers |

## Warning triage

| Finding | Disposition |
|---|---|
| PU-001: MCP73831 STAT has no pull-up | False positive. STAT is open-drain and pulled up through R4/D1 to VBUS. |
| RS-001: VBAT_ADC has no declared source | False positive. Divider output of R10/R11. |
| DS-002: no datasheets directory | Accepted. All 34 parts carry MPN + LCSC numbers; values were checked by hand against the vendor datasheets. |
| EP-AUD: J3/J4 without ESD | Accepted. J3 goes to an internal load cell; J4 is a factory-only pogo interface. |
| TV-001: ESP32 module ground pad thermal vias | Accepted. The pad has 6 vias to the bottom ground pour; the module dissipates < 0.3 W at low duty cycle. |
| TE-001: test-point coverage | Accepted. J4 pogo pads cover VBAT, 3V0, EN, BOOT, UART and GND for the fixture. |
| silk_edge_clearance (J1) | Expected. The USB-C receptacle intentionally overhangs the board edge. |

## Hand calculations

- **Charge current:** I = 1000 V / 2.2 kΩ = 455 mA.
- **Excitation:** EXC+ = 1.25 V × (1 + 12 k / 10 k) = 2.75 V. With a 1 kΩ bridge that is 2.75 mA, and 0.25 V headroom across Q1.
- **Bridge signal:** a 2 mV/V cell gives 5.5 mV full-scale. At gain 128 the HX711 Ch A input range is ±0.5 × AVDD / 128 = ±10.7 mV, so the cell uses about half the range, leaving margin for offset and overload.
- **VBAT ADC:** 4.20 V × 330 k / 1.33 M = 1.042 V (IO4, 2.5 dB attenuation, 0–1.05 V range). Source impedance is 248 kΩ, buffered by C7 = 100 nF (τ = 25 ms).
- **LDO dropout:** 238 mV at 500 mA, so the 3.0 V rail holds down to a VBAT of ≈ 3.24 V under a Wi-Fi TX burst (≈ 350 mA).
- **EN reset:** R5·C6 = 10 ms, which meets the Espressif EN-after-supply-stable requirement.

## Open items for Rev B

- Verify the USB-C mounting depth against the enclosure (the footprint overhangs the edge by about 0.8 mm).
- Optional: add a P-FET reverse-polarity guard on J2 if the battery harness isn't keyed by the supplier.
- Optional: an RC input filter on SIG± (e.g. 2 × 100 Ω + 100 nF differential) if field noise testing shows mains pickup.
