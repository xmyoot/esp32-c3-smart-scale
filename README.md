# ESP32-C3 Smart Scale

Low-power smart-scale reference board built in tscircuit around `ESP32-C3-MINI-1U`, `HX711`, a `1S` LiPo charger, and a `3.0 V` low-IQ rail.

## Status

The repo is in a solid prototype state:

- `npm run typecheck` passes
- `npx tsci check netlist` passes
- `npx tsci check placement` passes
- `npx tsci snapshot --pcb-only` passes and writes `__snapshots__/index.circuit-pcb.snap.svg`
- `npx tsci build` completes and writes `dist/index/circuit.json`

The board is not yet fabrication-ready. The current `tsci build` still reports autorouting / DRC issues, including accidental copper contacts, via spacing problems, and edge-clearance violations around the current board outline and routed result.

## Architecture

- `ESP32-C3-MINI-1U-H4` for Wi-Fi, BLE, and USB Serial/JTAG
- `HX711` for the 4-wire load cell
- `MCP73831T-2ACI/OT` for `1S` LiPo charging from `USB-C`
- `TLV75530PDBVR` for the always-on `3.0 V` rail
- high-value battery divider into `ESP32-C3` ADC
- factory pads for `GND`, `VBAT`, `3V0`, `EN`, `BOOT`, `TXD0`, and `RXD0`

## Tracked Outputs

- `docs/` for the client request, design brief, implementation spec, testing, usage, timeline, and bring-up notes
- `dist/exports/pcb.svg`
- `dist/exports/schematic.svg`
- `dist/exports/readable-netlist.txt`
- `dist/exports/preliminary-bom.csv`
- `dist/exports/preliminary-pnp.csv`
- `dist/index/circuit.json`
- `__snapshots__/index.circuit-pcb.snap.svg`

## Quick Start

```bash
npm install
npm run typecheck
npx tsci check netlist
npx tsci check placement
npx tsci snapshot --pcb-only
npx tsci build
```

See `docs/usage.md`, `docs/testing.md`, and `docs/bring_up_notes.md` before treating this as a fabrication candidate.
