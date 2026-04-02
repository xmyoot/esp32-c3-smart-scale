import { ESP32_C3_MINI_1U_H4 } from "./imports/ESP32_C3_MINI_1U_H4"
import { HX711 } from "./imports/HX711"
import { MCP73831T_2ACI_OT } from "./imports/MCP73831T_2ACI_OT"
import { TLV75530PDBVR } from "./imports/TLV75530PDBVR"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"
import { BatteryConnector2P, FactoryPads, LoadCellConnector4P } from "./src/modules/Connectors"

export default () => (
  <board
    width="48mm"
    height="38mm"
    layers={2}
    minTraceWidth="0.18mm"
    autorouter={{ preset: "auto_local", local: true, traceClearance: "0.18mm" }}
    autorouterEffortLevel="100x"
    autorouterVersion="latest"
  >
    <group pcbX="-12" pcbY="-10">
      <TYPE_C_31_M_12 name="J1" pcbX="0" pcbY="-4.5" pcbRotation="180deg" schX={-72} schY={-46} />
      <MCP73831T_2ACI_OT name="U3" pcbX="7.4" pcbY="1.8" pcbRotation="90deg" schX={-28} schY={-46} />
      <TLV75530PDBVR name="U4" pcbX="11.4" pcbY="1.8" pcbRotation="90deg" schX={8} schY={-46} />
      <BatteryConnector2P name="J2" pcbX="-3.2" pcbY="11" schX={-48} schY={6} />

      <resistor name="R1" resistance="5.1k" footprint="0402" pcbX="-1.6" pcbY="6.5" schX={-82} schY={-12} />
      <resistor name="R2" resistance="5.1k" footprint="0402" pcbX="1.6" pcbY="6.5" schX={-72} schY={-12} />
      <resistor name="R3" resistance="2k" footprint="0402" pcbX="8.2" pcbY="5" schX={-20} schY={-14} />

      <capacitor name="C1" capacitance="10uF" footprint="0603" pcbX="-6.8" pcbY="-4.2" schX={-90} schY={-34} />
      <capacitor name="C2" capacitance="4.7uF" footprint="0603" pcbX="6.9" pcbY="-4.2" schX={-40} schY={-34} />
      <capacitor name="C3" capacitance="4.7uF" footprint="0603" pcbX="10.4" pcbY="-4.2" schX={-8} schY={-34} />
      <capacitor name="C4" capacitance="10uF" footprint="0603" pcbX="13.6" pcbY="-4.2" schX={18} schY={-34} />
    </group>

    <group pcbX="8" pcbY="0">
      <ESP32_C3_MINI_1U_H4 name="U1" pcbX="0" pcbY="0" schX={28} schY={-6} />
      <resistor name="R4" resistance="10k" footprint="0402" pcbX="-12.4" pcbY="-1.8" schX={8} schY={-28} />
      <capacitor name="C5" capacitance="1uF" footprint="0402" pcbX="-15" pcbY="-3.2" schX={16} schY={-28} />
      <resistor name="R5" resistance="10k" footprint="0402" pcbX="0.6" pcbY="-8.8" schX={52} schY={-28} />
      <capacitor name="C6" capacitance="10uF" footprint="0603" pcbX="8.8" pcbY="-1.8" schX={30} schY={16} />
      <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX="8.8" pcbY="0.4" schX={38} schY={16} />

      <resistor name="R6" resistance="1.5M" footprint="0402" pcbX="-16.2" pcbY="7.2" schX={4} schY={18} />
      <resistor name="R7" resistance="499k" footprint="0402" pcbX="-16.2" pcbY="9.4" schX={12} schY={18} />
    </group>

    <group pcbX="4" pcbY="11.5">
      <HX711 name="U2" pcbX="0" pcbY="0" pcbRotation="180deg" schX={22} schY={48} />
      <LoadCellConnector4P name="J3" pcbX="14.3" pcbY="0" schX={-34} schY={56} />
      <capacitor name="C8" capacitance="100nF" footprint="0402" pcbX="-8.8" pcbY="-4" schX={4} schY={58} />
      <capacitor name="C9" capacitance="10uF" footprint="0603" pcbX="-8.8" pcbY="-1.2" schX={12} schY={58} />
    </group>

    <FactoryPads name="TP1" pcbX="-10" pcbY="16.5" schX={72} schY={54} />

    <copperpour
      name="GND_BOTTOM"
      layer="bottom"
      connectsTo="net.GND"
      boardEdgeMargin="0.35mm"
      clearance="0.18mm"
      padMargin="0.18mm"
      traceMargin="0.18mm"
    />

    <trace from="J1.EH1" to="net.GND" />
    <trace from="J1.EH2" to="net.GND" />
    <trace from="J1.EH3" to="net.GND" />
    <trace from="J1.EH4" to="net.GND" />
    <trace from="U1.GND17" to="net.GND" />
    <trace from="U1.GND18" to="net.GND" />
    <trace from="U1.GND19" to="net.GND" />
    <trace from="U1.GNDNC" to="net.GND" />
    <trace from="U1.GND11" to="net.GND" />
    <trace from="U1.GND10" to="net.GND" />
    <trace from="U1.GND9" to="net.GND" />
    <trace from="U1.GND8" to="net.GND" />
    <trace from="U1.GND7" to="net.GND" />
    <trace from="U1.GND6" to="net.GND" />
    <trace from="U1.GND5" to="net.GND" />
    <trace from="U1.GND4" to="net.GND" />
    <trace from="U1.GND3" to="net.GND" />
    <trace from="U1.GND2" to="net.GND" />
    <trace from="U1.GND1" to="net.GND" />
    <trace from="U1.GND20" to="net.GND" />
    <trace from="U1.GND21" to="net.GND" />
    <trace from="U1.GND12" to="net.GND" />
    <trace from="U1.GND16" to="net.GND" />
    <trace from="U1.GND15" to="net.GND" />
    <trace from="U1.GND14" to="net.GND" />
    <trace from="U1.GND13" to="net.GND" />
    <trace from="J1.A1B12" to="net.GND" />
    <trace from="J1.B1A12" to="net.GND" />
    <trace path={["J1.A5", "R1.pin1"]} />
    <trace from="R1.pin2" to="net.GND" />
    <trace path={["J1.B5", "R2.pin1"]} />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="J1.A4B9" to="net.VBUS" />
    <trace from="J1.B4A9" to="net.VBUS" />
    <trace from="J1.A6" to="net.USB_D_P" />
    <trace from="J1.B6" to="net.USB_D_P" />
    <trace from="J1.A7" to="net.USB_D_N" />
    <trace from="J1.B7" to="net.USB_D_N" />

    <trace from="U3.VDD" to="net.VBUS" />
    <trace from="U3.VSS" to="net.GND" />
    <trace from="U3.VBAT" to="net.VBAT" />
    <trace path={["U3.PROG", "R3.pin1"]} />
    <trace from="R3.pin2" to="net.GND" />

    <trace from="U4.IN" to="net.VBAT" />
    <trace from="U4.GND" to="net.GND" />
    <trace from="U4.EN" to="net.VBAT" />
    <trace from="U4.OUT" to="net.V3_0" />

    <trace from="J2.BAT" to="net.VBAT" />
    <trace from="J2.GND" to="net.GND" />

    <trace from="C1.pin1" to="net.VBUS" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.VBUS" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="C3.pin1" to="net.VBAT" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin1" to="net.V3_0" />
    <trace from="C4.pin2" to="net.GND" />

    <trace from="U1.3V3" to="net.V3_0" />
    <trace
      from="U1.IO19"
      to="net.USB_D_P"
      pcbRouteHints={[
        { x: -12, y: -14 },
        { x: -2, y: -14 },
        { x: 10, y: -8.5 },
      ]}
    />
    <trace
      from="U1.IO18"
      to="net.USB_D_N"
      pcbRouteHints={[
        { x: -13, y: -12.8 },
        { x: -1.5, y: -12.8 },
        { x: 9.5, y: -7.2 },
      ]}
    />
    <trace from="R4.pin2" to="net.V3_0" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="R5.pin2" to="net.V3_0" />
    <trace from="C6.pin1" to="net.V3_0" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="C7.pin1" to="net.V3_0" />
    <trace from="C7.pin2" to="net.GND" />

    <trace from="R6.pin1" to="net.VBAT" />
    <trace from="R7.pin2" to="net.GND" />

    <trace from="U2.VSUP" to="net.V3_0" />
    <trace from="U2.AVDD" to="net.V3_0" />
    <trace from="U2.AGND" to="net.GND" />
    <trace from="U2.VFB" to="net.GND" />
    <trace from="U2.XI" to="net.GND" />
    <trace from="U2.RATE" to="net.GND" />
    <trace from="C8.pin1" to="net.V3_0" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="C9.pin1" to="net.V3_0" />
    <trace from="C9.pin2" to="net.GND" />

    <trace from="J3.E_PLUS" to="net.V3_0" />
    <trace from="J3.E_MINUS" to="net.GND" />
    <trace from="TP1.GND" to="net.GND" />
    <trace from="TP1.VBAT" to="net.VBAT" />
    <trace from="TP1.V3_0" to="net.V3_0" />

    <trace from="U1.EN" to="R4.pin1" />
    <trace from="R4.pin1" to="C5.pin1" />
    <trace
      from="C5.pin1"
      to="TP1.EN"
      pcbRouteHints={[
        { x: -9, y: 8.5 },
        { x: -9, y: 13.5 },
      ]}
    />
    <trace from="U1.IO9" to="R5.pin1" />
    <trace
      from="R5.pin1"
      to="TP1.BOOT"
      pcbRouteHints={[
        { x: 12, y: 12.5 },
        { x: -6.5, y: 12.5 },
      ]}
    />
    <trace
      path={["U1.IO6", "U2.PD_SCK"]}
      pcbRouteHints={[
        { x: 10.8, y: 3.5 },
        { x: 10.8, y: 8.5 },
      ]}
    />
    <trace
      path={["U1.IO5", "U2.DOUT"]}
      pcbRouteHints={[
        { x: 9.2, y: 4 },
        { x: 9.2, y: 9.5 },
      ]}
    />
    <trace from="U1.IO4" to="R6.pin2" pcbRouteHints={[{ x: -3, y: 10.5 }, { x: -6.5, y: 10.5 }]} />
    <trace from="R6.pin2" to="R7.pin1" />
    <trace
      path={["U1.TXD0", "TP1.TXD0"]}
      pcbRouteHints={[
        { x: 16, y: 14.8 },
        { x: 0, y: 14.8 },
      ]}
    />
    <trace
      path={["U1.RXD0", "TP1.RXD0"]}
      pcbRouteHints={[
        { x: 15, y: 15.8 },
        { x: 2, y: 15.8 },
      ]}
    />
    <trace
      path={["U2.INPA", "J3.A_PLUS"]}
      pcbRouteHints={[
        { x: 12, y: 14.2 },
        { x: 18.3, y: 14.2 },
      ]}
    />
    <trace
      path={["U2.INNA", "J3.A_MINUS"]}
      pcbRouteHints={[
        { x: 12, y: 8.8 },
        { x: 20.8, y: 8.8 },
      ]}
    />
  </board>
)
