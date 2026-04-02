# Testing

Date of latest validation pass: `2026-04-02`

## Commands Run

```bash
npm run typecheck
npx tsci check netlist
npx tsci check placement
npx tsci snapshot --pcb-only
npx tsci build
```

## Results

- `npm run typecheck`: passed
- `npx tsci check netlist`: passed with `Errors: 0` and `Warnings: 0`
- `npx tsci check placement`: passed with `no placement issues`
- `npx tsci snapshot --pcb-only`: passed and wrote `__snapshots__/index.circuit-pcb.snap.svg`
- `npx tsci build`: completed and wrote `dist/index/circuit.json`, but reported PCB build errors

## Important Build Findings

The current build output is good enough to confirm the design intent and produce review artifacts, but it is not yet clean enough for fabrication.

Main issue classes reported by `tsci build`:

- `no possible endpoints, can't stitch` during routing/snapshot generation
- accidental copper contacts between traces, vias, and pads
- via-to-via spacing violations
- traces and a via too close to or crossing the board edge near the USB-C side
- invalid near-zero `calc()` pad coordinates on some custom SMT-pad footprints
- metadata warnings on imported or generic components with underspecified pin attributes

## Interpretation

- Electrical intent: acceptable for a first-pass prototype review
- Component placement: acceptable
- Autorouted PCB / DRC: not acceptable for release

## Release Gate Before Fabrication

Do all of the following before ordering boards:

1. Rework routing around `U1`, `TP1`, `J1`, `U3`, and the HX711/ESP32 connections.
2. Fix edge clearance at the USB-C top edge.
3. Revisit the custom connector footprints in `src/modules/Connectors.tsx`.
4. Re-run `npx tsci build` until the PCB error list is clean, not just the placement check.
