# Usage

## Prerequisites

- `node` and `npm`
- network access for the current `tsci` flows

Install dependencies from the repo root:

```bash
npm install
```

## Main Commands

Validate the source:

```bash
npm run typecheck
npx tsci check netlist
npx tsci check placement
```

Generate a PCB snapshot:

```bash
npx tsci snapshot --pcb-only
```

Run the full tscircuit build:

```bash
npx tsci build
```

## Expected Outputs

The repo currently tracks these headless outputs:

- `dist/exports/pcb.svg`
- `dist/exports/schematic.svg`
- `dist/exports/readable-netlist.txt`
- `dist/exports/preliminary-bom.csv`
- `dist/exports/preliminary-pnp.csv`
- `dist/index/circuit.json`
- `__snapshots__/index.circuit-pcb.snap.svg`

## Notes On Exports

- `pcb.svg` and `schematic.svg` exported successfully with `tsci export`
- `readable-netlist.txt` was captured from `npx tsci check netlist`
- the preliminary BOM and PnP CSVs were derived from `dist/index/circuit.json`
- timed attempts at direct `kicad_sch`, `kicad_pcb`, and `gerbers` exports did not produce files during this run

## Practical Reading Of Current State

- The netlist and placement are stable enough for architecture review and firmware bring-up planning.
- The current autorouted copper is not release quality yet.
- Do not order boards from this repo state without resolving the `tsci build` routing / DRC findings documented in `docs/testing.md`.
