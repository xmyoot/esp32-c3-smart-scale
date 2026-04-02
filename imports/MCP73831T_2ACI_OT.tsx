import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["STAT"],
  pin2: ["VSS"],
  pin3: ["VBAT"],
  pin4: ["VDD"],
  pin5: ["PROG"]
} as const

export const MCP73831T_2ACI_OT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C424093"
  ]
}}
      manufacturerPartNumber="MCP73831T_2ACI_OT"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.9499599999999191mm" pcbY="-1.1581701499999326mm" width="0.48999139999999997mm" height="1.1569954mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-1.1581701499999326mm" width="0.48999139999999997mm" height="1.1569954mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.9499599999998054mm" pcbY="-1.1581701499999326mm" width="0.48999139999999997mm" height="1.1569954mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.9499599999998054mm" pcbY="1.1491658500000312mm" width="0.48999139999999997mm" height="1.1750040000000002mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.9499599999999191mm" pcbY="1.1491658500000312mm" width="0.48999139999999997mm" height="1.1750040000000002mm" shape="rect" />
<silkscreenpath route={[{"x":-1.5262098000000606,"y":-0.8557069500000125},{"x":-1.5262098000000606,"y":0.8467026499999974}]} />
<silkscreenpath route={[{"x":1.5262097999998332,"y":-0.8557069500000125},{"x":1.5262097999998332,"y":0.8467026499999974}]} />
<silkscreenpath route={[{"x":0.4764023999998699,"y":0.8467026499999974},{"x":-0.4764023999999836,"y":0.8467026499999974}]} />
<courtyardoutline outline={[{"x":-2.0534000000000106,"y":1.998097850000022},{"x":1.7739999999998872,"y":1.998097850000022},{"x":1.7739999999998872,"y":-2.108702149999999},{"x":-2.0534000000000106,"y":-2.108702149999999},{"x":-2.0534000000000106,"y":1.998097850000022}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C424093.obj?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C424093.step?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: -0.049083 },
      }}
      {...props}
    />
  )
}