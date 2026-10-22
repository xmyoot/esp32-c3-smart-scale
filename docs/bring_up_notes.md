# Bring-Up Notes — Rev A

## 1. Before power

- Visual/AOI: U2 (SOIC-16) pin 1 at the top-left, U1 module orientation (U.FL toward the top edge), D1 polarity.
- Ohm checks: VBUS–GND, +BATT–GND and +3V0–GND should not be shorted (> 1 kΩ).
- J2 pin 1 = **BAT+**, pin 2 = GND. Confirm the battery harness polarity before connecting, because JST PH battery leads are not standardized.

## 2. Power from a bench supply (no cell)

1. Apply 3.8 V, current-limited to 100 mA, to the J4 VB pad (or J2).
2. +3V0 should read 3.00 V ±1.5 % at C3 and at J4 "3V0".
3. Idle current with blank firmware is about 20–25 mA (module running). Note it.

## 3. USB and charging

1. Plug in USB-C with a cell (or a 3.7 V supply that can sink current) on J2.
2. VBUS ≈ 5 V at C1. D1 (CHG) lights while charging.
3. Charge current should be ≈ 455 mA (R3 = 2.2 k) in constant-current mode.
4. With USB removed, VBUS must stay near 0 V (no back-feed from the cell).

## 4. Programming

- **Normal:** USB-C enumerates as *USB JTAG/serial debug unit* (VID 303A). Flash with `esptool.py --chip esp32c3` or `idf.py flash`.
- **Recovery/fixture:** hold **IO9** low on J4, pulse **EN** low, then release EN. The ROM enters download mode on UART0 (J4 TX/RX, 115200 baud) or USB.
- J4 pad order on the underside, viewed from the bottom: VB, 3V0, EN, IO9, TX, RX, GND (silk-labelled).

## 5. Load cell

| J3 pin | Signal | Typical wire colour |
|---|---|---|
| 1 | EXC+ | red |
| 2 | SIG− | white |
| 3 | SIG+ | green |
| 4 | EXC− (GND) | black |

1. With PD_SCK low, EXC+ should read ≈ 2.75 V. With PD_SCK held high for more than 60 µs, EXC+ should drop to ≈ 0 V (excitation off).
2. Read channel A at gain 128, 10 SPS (RATE tied low). Record the zero offset, then do a two-point calibration with known masses.
3. If the reading decreases with load, swap SIG+/SIG− in firmware or in the harness.

## 6. Low-power verification

1. Firmware: put the HX711 in power-down (PD_SCK high), configure IO3 as an active-high deep-sleep wake source, then enter deep sleep.
2. Measure battery current at J2 with a µA meter: target **≤ 40 µA**.
3. Battery ADC: sample IO4 briefly after wake. The divider is always connected (3.2 µA), so there is no enable GPIO to manage.

## 7. RF

- Connect a 2.4 GHz U.FL pigtail antenna before any TX test. Don't transmit without an antenna attached.
