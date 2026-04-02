# Timeline

## Session Notes

- Primary workflow source: `/home/dev/Dev/hector-jimenez-agent-ts/fullAgent.md`
- Transient tool session IDs observed during validation/export: `49023` for snapshot, `75746` for build, `88275` for headless export chain, and `34400` / `90219` / `7762` for timed KiCad/Gerber export attempts
- Those IDs were process-local and are not durable reconnect targets after exit

## Sequence

1. Created `docs/client_request.md` as a faithful copy of the client brief.
2. Researched the low-cost smart-scale architecture and selected the `ESP32-C3-MINI-1U`, `HX711`, `MCP73831`, and `TLV75530` approach.
3. Authored `docs/design_brief.html` with the recommended architecture, assumptions, tradeoffs, diagrams, and sourcing notes.
4. Authored `docs/tscircuit_spec.md` to turn the brief into an implementation-ready plan.
5. Bootstrapped the repo with `npx tsci init -y`.
6. Imported the exact JLC-targeted parts with `tsci import` for the ESP32 module, charger, LDO, HX711, and USB-C connector.
7. Added `src/modules/Connectors.tsx` for the battery connector, load-cell connector, and factory pad footprint wrappers.
8. Implemented the first-pass board in `index.circuit.tsx`.
9. Ran `npm run typecheck`, `npx tsci check netlist`, and `npx tsci check placement`.
10. Iterated placement repeatedly until `npx tsci check placement` reported `no placement issues`.
11. Removed the React `key` warning path by inlining the ground traces instead of mapping a helper component.
12. Ran `npx tsci snapshot --pcb-only` and captured `__snapshots__/index.circuit-pcb.snap.svg`.
13. Ran `npx tsci build`, which completed and wrote `dist/index/circuit.json` but still reported routing/DRC issues.
14. Exported `dist/exports/pcb.svg` and `dist/exports/schematic.svg`.
15. Captured `dist/exports/readable-netlist.txt` from `npx tsci check netlist`.
16. Generated `dist/exports/preliminary-bom.csv` and `dist/exports/preliminary-pnp.csv` from `dist/index/circuit.json`.
17. Attempted timed `kicad_sch`, `kicad_pcb`, and `gerbers` exports; those did not produce files during this session.
18. Added `README.md`, `docs/usage.md`, `docs/testing.md`, `docs/bring_up_notes.md`, and this timeline.
19. Prepared the repo for git tracking, including unignoring the selected build outputs under `dist/`.
20. Reworked the board for the local TS autorouter by enlarging the outline to `48 mm x 38 mm`, enabling `auto_local` at `100x`, and keeping routing driven through `tsci build`.
21. Confirmed that bare `<net />` definitions did not satisfy the PCB build stage for shared rails in this toolchain, then restored explicit trace participation on the power and ground nets.
22. Added targeted routing hints around the USB data pair, factory programming pads, battery-sense divider, and HX711/load-cell signal routes.
23. Eliminated the previous overlap and board-edge routing errors from `dist/index/circuit.json`, reducing the remaining routed-build issue set to a single `pcb_autorouting_error`.
24. Refreshed `__snapshots__/index.circuit-pcb.snap.svg` with `npx tsci snapshot --pcb-only --update` after the routing changes.
25. Focused on the remaining autorouter failure by splitting the shared `EN`, `BOOT`, and battery-sense chains into pairwise traces and simplifying the board to a bottom-only ground pour.
26. Tested alternate TS autorouter strategies, including an explicit `sequential_trace` preset and lower effort levels; both were worse than `auto_local`.
27. Restored the best-known configuration: `auto_local` at `100x`, pairwise critical traces, and one bottom-side `GND` pour.
28. Confirmed the best current result still has `0` `pcb_trace_error`, `0` `pcb_trace_missing_error`, and `0` `pcb_port_not_connected_error`, with only a single remaining `pcb_autorouting_error` (`cmn_214`).
29. Refreshed `__snapshots__/index.circuit-pcb.snap.svg` again for the final best-known routing state.

## Decisions

- Increased the board from `45 mm x 35 mm` to `48 mm x 38 mm` to give the TS autorouter more clearance around the USB-C and programming regions.
- Kept the final best-known board on a single bottom-side ground pour because that reduced routing complexity without reintroducing the earlier overlap and edge-clearance failures.
- Preferred a simple `LiPo -> LDO -> 3.0 V` rail instead of a more expensive buck or power-path-heavy architecture.
- Used a high-value battery divider instead of a dedicated gauge to stay aligned with the low-cost brief.
- Treated the generic battery/load-cell/factory connectors as local wrappers so the imported core ICs stayed tied to real JLC parts.

## Current Blockers

- The autorouted PCB still has one unresolved single-node `pcb_autorouting_error` and is not yet ready for manufacturing release.
- Direct headless exports to KiCad and Gerbers did not complete during this run.
- The custom connector wrappers still need footprint cleanup because the build emits near-zero `calc()` pad-coordinate errors from those local footprints.
