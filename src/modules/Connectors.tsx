import type { ChipProps } from "@tscircuit/props"

const batteryPinLabels = {
  pin1: "BAT",
  pin2: "GND",
} as const

export const BatteryConnector2P = (props: ChipProps<typeof batteryPinLabels>) => (
  <chip
    pinLabels={batteryPinLabels}
    manufacturerPartNumber="S2B-PH-SM4-TB_LF__SN_"
    footprint={
      <footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.2mm" pcbY="0mm" width="1.4mm" height="2.2mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="1.2mm" pcbY="0mm" width="1.4mm" height="2.2mm" shape="rect" />
        <courtyardoutline outline={[{ x: -3.2, y: 2 }, { x: 3.2, y: 2 }, { x: 3.2, y: -2 }, { x: -3.2, y: -2 }, { x: -3.2, y: 2 }]} />
      </footprint>
    }
    {...props}
  />
)

const loadCellPinLabels = {
  pin1: "E_PLUS",
  pin2: "A_PLUS",
  pin3: "A_MINUS",
  pin4: "E_MINUS",
} as const

export const LoadCellConnector4P = (props: ChipProps<typeof loadCellPinLabels>) => (
  <chip
    pinLabels={loadCellPinLabels}
    manufacturerPartNumber="LOAD_CELL_4P_GENERIC"
    footprint={
      <footprint>
        <smtpad portHints={["pin1"]} pcbX="-3.81mm" pcbY="0mm" width="1.2mm" height="2mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="-1.27mm" pcbY="0mm" width="1.2mm" height="2mm" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX="1.27mm" pcbY="0mm" width="1.2mm" height="2mm" shape="rect" />
        <smtpad portHints={["pin4"]} pcbX="3.81mm" pcbY="0mm" width="1.2mm" height="2mm" shape="rect" />
        <courtyardoutline outline={[{ x: -6.2, y: 2.4 }, { x: 6.2, y: 2.4 }, { x: 6.2, y: -2.4 }, { x: -6.2, y: -2.4 }, { x: -6.2, y: 2.4 }]} />
      </footprint>
    }
    {...props}
  />
)

const factoryPadLabels = {
  pin1: "GND",
  pin2: "VBAT",
  pin3: "V3_0",
  pin4: "EN",
  pin5: "BOOT",
  pin6: "TXD0",
  pin7: "RXD0",
} as const

export const FactoryPads = (props: ChipProps<typeof factoryPadLabels>) => (
  <chip
    pinLabels={factoryPadLabels}
    manufacturerPartNumber="FACTORY_PADS_7"
    footprint={
      <footprint>
        <smtpad portHints={["pin1"]} pcbX="-6mm" pcbY="0mm" width="1.2mm" height="2mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="-4mm" pcbY="0mm" width="1.2mm" height="2mm" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX="-2mm" pcbY="0mm" width="1.2mm" height="2mm" shape="rect" />
        <smtpad portHints={["pin4"]} pcbX="0mm" pcbY="0mm" width="1.2mm" height="2mm" shape="rect" />
        <smtpad portHints={["pin5"]} pcbX="2mm" pcbY="0mm" width="1.2mm" height="2mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX="4mm" pcbY="0mm" width="1.2mm" height="2mm" shape="rect" />
        <smtpad portHints={["pin7"]} pcbX="6mm" pcbY="0mm" width="1.2mm" height="2mm" shape="rect" />
        <courtyardoutline outline={[{ x: -7.2, y: 1.5 }, { x: 7.2, y: 1.5 }, { x: 7.2, y: -1.5 }, { x: -7.2, y: -1.5 }, { x: -7.2, y: 1.5 }]} />
      </footprint>
    }
    {...props}
  />
)
