# Testing

Date of latest validation pass: `2026-04-02`

## Commands Run

```bash
npm run typecheck
npx tsci check netlist
npx tsci check placement
npx tsci snapshot --pcb-only
npx tsci snapshot --pcb-only --update
npx tsci build
```

## Results

- `npm run typecheck`: passed
- `npx tsci check netlist`: passed with `Errors: 0` and `Warnings: 6`
- `npx tsci check placement`: passed with `no placement issues`
- `npx tsci snapshot --pcb-only`: reported a snapshot mismatch after the routing changes
- `npx tsci snapshot --pcb-only --update`: passed, refreshed `__snapshots__/index.circuit-pcb.snap.svg`, and emitted the same single autorouter solver error seen in the build
- `npx tsci build`: completed and wrote `dist/index/circuit.json`

## Important Build Findings

The current build is materially cleaner than the first routed pass, but it is not yet clean enough for fabrication release.

Main issue classes reported by `tsci build`:

- `pcb_trace_error` count in `dist/index/circuit.json`: `0`
- `pcb_trace_missing_error` count in `dist/index/circuit.json`: `0`
- `pcb_port_not_connected_error` count in `dist/index/circuit.json`: `0`
- edge-clearance failures reported in the original pass: no longer present
- one remaining `pcb_autorouting_error` from the TS autorouter:
  `Failed to solve 1 nodes, cmn_214`
- repeated `source_invalid_component_property_error` messages from custom SMT-pad footprints with near-zero `calc()` coordinates
- generic imported-part metadata warnings are still present, but they are not the current routing blocker

## Interpretation

- Electrical intent: acceptable
- Component placement: acceptable
- Autorouted PCB / DRC: substantially improved, with no remaining trace-level DRC or missing-trace errors in `circuit.json`, but still not fully release-ready because one internal autorouter solve remains unresolved

## Release Gate Before Fabrication

Do all of the following before ordering boards:

1. Resolve or work around the remaining single-node `pcb_autorouting_error` from the TS autorouter so the build is fully clean.
2. Revisit the custom connector footprints in `src/modules/Connectors.tsx` to eliminate the near-zero `calc()` pad-coordinate errors.
3. Re-run `npx tsci build` until both the autorouter error and the footprint-property errors are gone.
