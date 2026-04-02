import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND17"],
  pin2: ["GND18"],
  pin3: ["3V3"],
  pin4: ["NC5"],
  pin5: ["IO2"],
  pin6: ["IO3"],
  pin7: ["NC6"],
  pin8: ["EN"],
  pin9: ["NC7"],
  pin10: ["NC8"],
  pin11: ["GND19"],
  pin12: ["IO0"],
  pin13: ["IO1"],
  pin14: ["GNDNC"],
  pin15: ["NC4"],
  pin16: ["IO10"],
  pin17: ["NC9"],
  pin18: ["IO4"],
  pin19: ["IO5"],
  pin20: ["IO6"],
  pin21: ["IO7"],
  pin22: ["IO8"],
  pin23: ["IO9"],
  pin24: ["NC10"],
  pin25: ["NC3"],
  pin26: ["IO18"],
  pin27: ["IO19"],
  pin28: ["NC2"],
  pin29: ["NC1"],
  pin30: ["RXD0"],
  pin31: ["TXD0"],
  pin32: ["NC11"],
  pin33: ["NC12"],
  pin34: ["NC13"],
  pin35: ["NC14"],
  pin36: ["GND11"],
  pin37: ["GND10"],
  pin38: ["GND9"],
  pin39: ["GND8"],
  pin40: ["GND7"],
  pin41: ["GND6"],
  pin42: ["GND5"],
  pin43: ["GND4"],
  pin44: ["GND3"],
  pin45: ["GND2"],
  pin46: ["GND1"],
  pin47: ["GND20"],
  pin48: ["GND21"],
  pin49: ["GND12"],
  pin50: ["GND16"],
  pin51: ["GND15"],
  pin52: ["GND14"],
  pin53: ["GND13"],
  pin54: ["pin54"],
  pin55: ["pin55"],
  pin56: ["pin56"],
  pin57: ["pin57"],
  pin58: ["pin58"],
  pin59: ["pin59"],
  pin60: ["pin60"],
  pin61: ["pin61"]
} as const

export const ESP32_C3_MINI_1U_H4 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3013922"
  ]
}}
      manufacturerPartNumber="ESP32_C3_MINI_1U_H4"
      footprint={<footprint>
        <smtpad portHints={["pin46"]} pcbX="-3.1998920000002045mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="-2.3997920000001614mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="-1.5999460000002728mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="-0.7998460000002297mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="0.000253999999813459mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="0.8000999999999294mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="1.6001999999998588mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="2.400045999999861mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="3.2001459999997905mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="3.999991999999793mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="4.800091999999836mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="5.949949999999944mm" pcbY="0mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="5.949949999999944mm" pcbY="-0.8001000000000431mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="5.949949999999944mm" pcbY="-1.5999459999999317mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="5.949949999999944mm" pcbY="-2.400045999999975mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="5.949949999999944mm" pcbY="-3.200146000000018mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="5.949949999999944mm" pcbY="-3.99999200000002mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-4.800092000000177mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-3.99999200000002mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-3.200146000000018mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-2.4000460000000885mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="-1.1368683772161603e-13mm" pcbY="0mm" width="1.4500098000000001mm" height="1.4500098000000001mm" shape="rect" />
<smtpad portHints={["pin53"]} pcbX="-5.949950000000058mm" pcbY="4.949951999999939mm" width="0.8999982mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin52"]} pcbX="-5.949950000000058mm" pcbY="-4.949951999999939mm" width="0.8999982mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="5.949949999999944mm" pcbY="-4.949951999999939mm" width="0.8999982mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="5.949949999999944mm" pcbY="4.949951999999939mm" width="0.8999982mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-5.949950000000058mm" pcbY="3.99999200000002mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-5.949950000000058mm" pcbY="3.199891999999977mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-5.949950000000058mm" pcbY="2.400045999999975mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-5.949950000000058mm" pcbY="1.5999460000000454mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-5.949950000000058mm" pcbY="0.8001000000000431mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-5.949950000000058mm" pcbY="0mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-5.949950000000058mm" pcbY="-0.7998460000000023mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-5.949950000000058mm" pcbY="-1.5999459999999317mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-5.949950000000058mm" pcbY="-2.400045999999975mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-5.949950000000058mm" pcbY="-3.199891999999977mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-5.949950000000058mm" pcbY="-3.99999200000002mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-1.5999460000002728mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-0.7998460000002297mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-1.1368683772161603e-13mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.8000999999999294mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="1.599945999999818mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="2.400045999999861mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="3.199891999999977mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="3.999991999999793mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="4.800091999999836mm" pcbY="-4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="5.949949999999944mm" pcbY="0.7998459999998886mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="5.949949999999944mm" pcbY="1.5999460000000454mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="5.949949999999944mm" pcbY="2.399791999999934mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="5.949949999999944mm" pcbY="3.200146000000018mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="5.949949999999944mm" pcbY="3.99999200000002mm" width="0.8500109999999999mm" height="0.5500115999999999mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-3.99999200000002mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-4.800092000000177mm" pcbY="4.949951999999939mm" width="0.5500115999999999mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin58"]} pcbX="1.9748499999999467mm" pcbY="0mm" width="1.4500098000000001mm" height="1.4500098000000001mm" shape="rect" />
<smtpad portHints={["pin57"]} pcbX="1.9748499999999467mm" pcbY="1.9748499999999467mm" width="1.4500098000000001mm" height="1.4500098000000001mm" shape="rect" />
<smtpad portHints={["pin56"]} pcbX="-1.1368683772161603e-13mm" pcbY="1.9748499999999467mm" width="1.4500098000000001mm" height="1.4500098000000001mm" shape="rect" />
<smtpad portHints={["pin54"]} pcbX="-1.9751040000001012mm" pcbY="0mm" width="1.4500098000000001mm" height="1.4500098000000001mm" shape="rect" />
<smtpad portHints={["pin59"]} pcbX="-1.9751040000001012mm" pcbY="-1.9751039999999875mm" width="1.4500098000000001mm" height="1.4500098000000001mm" shape="rect" />
<smtpad portHints={["pin60"]} pcbX="-1.1368683772161603e-13mm" pcbY="-1.9751039999999875mm" width="1.4500098000000001mm" height="1.4500098000000001mm" shape="rect" />
<smtpad portHints={["pin61"]} pcbX="1.9748499999999467mm" pcbY="-1.9751039999999875mm" width="1.4500098000000001mm" height="1.4500098000000001mm" shape="rect" />
<smtpad portHints={["pin55"]} points={[{x: "-2.7001216000001023mm", y: "2.0999449999999342mm"}, {x: "-2.100122800000122mm", y: "2.699943800000028mm"}, {x: "-1.2501372000001538mm", y: "2.699943800000028mm"}, {x: "-1.2501372000001538mm", y: "1.2499594000000798mm"}, {x: "-2.7001216000001023mm", y: "1.2499594000000798mm"}]} shape="polygon" />
<silkscreenpath route={[{"x":6.699859599999968,"y":6.999935200000095},{"x":-6.7001136000001225,"y":6.999935200000095},{"x":-6.7001136000001225,"y":3.4499296000001323}]} />
<silkscreenpath route={[{"x":6.699859599999968,"y":-5.700039399999923},{"x":6.699859599999968,"y":6.999935200000095}]} />
<silkscreenpath route={[{"x":-6.7001136000001225,"y":3.499942199999964},{"x":-6.7001136000001225,"y":-5.700039399999923},{"x":6.699859599999968,"y":-5.700039399999923}]} />
<courtyardoutline outline={[{"x":-7.805738000000247,"y":7.246938},{"x":6.943661999999904,"y":7.246938},{"x":6.943661999999904,"y":-5.953062000000045},{"x":-7.805738000000247,"y":-5.953062000000045},{"x":-7.805738000000247,"y":7.246938}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3013922.obj?uuid=d36b71bb5ba844769d58e04be93da1ea",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3013922.step?uuid=d36b71bb5ba844769d58e04be93da1ea",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  )
}