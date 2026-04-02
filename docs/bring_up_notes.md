# Bring-Up Notes

## First Power Checks

- Inspect polarity on the battery connector before connecting a cell.
- Power the board first from a current-limited bench source set to the expected LiPo range.
- Confirm `VBAT` is present at the battery input and charger output.
- Confirm `V3_0` is present at the LDO output and on the factory pad rail.

## USB And Charging

- Verify `USB-C` `VBUS` reaches the charger input.
- Check charge current against the `2 kOhm` `PROG` resistor expectation.
- Confirm the battery does not back-drive `VBUS`.

## Programming And Boot

- Use the factory pads for `GND`, `3V0`, `EN`, `BOOT`, `TXD0`, and `RXD0`.
- Hold `BOOT` low and toggle `EN` for recovery flashing if normal USB flashing is unavailable.
- Verify USB `D+` and `D-` enumerate through the `ESP32-C3` USB Serial/JTAG path.

## Load Cell Path

- Start with the load cell disconnected and confirm the `HX711` digital interface responds.
- Connect the bridge and confirm `E+`, `E-`, `A+`, and `A-` are wired in the expected order.
- Record a zero-load offset and a two-point calibration using known weights.
- Confirm the `RATE` pin remains in the intended low-rate noise-optimized mode.

## Low-Power Checks

- Measure deep-sleep current at the battery input, not only at `3V0`.
- Verify firmware turns off or power-downs the `HX711` when sleeping.
- Confirm battery ADC measurement is not left sampling continuously.

## Manufacturing Caveat

Do not treat this revision as production-ready until the `tsci build` routing and DRC findings in `docs/testing.md` are resolved.
