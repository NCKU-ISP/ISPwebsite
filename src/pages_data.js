import splash_logo from './routers/projects/Splash/splash_logo.png';

const teams = [
  {
    name: {
      zh: '推進',
      en: 'Propulsion'
    },
    description: ''
  },
  {
    name: {
      zh: '航電',
      en: 'Avionics'
    },
    description: ''
  },
  {
    name: {
      zh: '結構',
      en: 'Structure'
    },
    description: ''
  },
];

const projects_list = [
  {
    cover: null,
    url: 'https://hackmd.io/@ISPFAR2023/Bytk0UJKo',
    name: '2023 FAR-51025',
    description: '這項比賽是由 Friend of Amateur Rocketry 機構所舉辦的年度業餘火箭大賽。我們的目標是拿下 10000 英尺（約3公里）組的冠軍。並且火箭中的固態發動機、航電系統、立方衛星酬載、箭體本身都是由我們獨立研發建造。',
    teams: null
  },
  {
    cover: splash_logo,
    url: null,
    name: 'SPLASH 水火箭計劃',
    description: '團隊的雛型成型於新生的「航太公司」分組，我們最初即選擇以水火箭作為研究項目是基於安全性、成本、製作難度等考量，後期我們也決議以水火箭作為「2021 臺灣黑客松 Taiwan Space Hackathon」的參賽項目。',
    teams: null
  },
  {
    cover: null,
    url: null,
    name: '發動機 Port 構型計算',
    description: '為使固態發動機運作過程中有持續而穩定的推力，以避免不平衡的推力造成發動機損壞，發動機需要維持相同的燃燒面積；因此研發出擁有等面積燃燒特性的 Port 構型，正是我們期望的目標。',
    teams: teams[0]
  },
  {
    cover: null,
    url: null,
    name: '固態燃料發動機',
    description: '為提供火箭主要動力來源而開發，推進組研發不同材質、噴嘴、管徑之固態發動機，目前主要使用 KNSB 固態燃料。',
    teams: teams[0]
  },
  {
    cover: null,
    url: null,
    name: '發動機噴嘴',
    description: '噴嘴是至關重要的存在，為使燃燒後的氣體能夠加速到超音速，就必須經過設計構型後的噴嘴，才能達到此目的。',
    teams: teams[0]
  },
  {
    cover: null,
    url: null,
    name: '水平推力測試臺',
    description: '推力測試臺是非常重要的測試平臺，在發動機製作完成後需要放到推力測試臺進行推力測試，目的是藉由點火測試檢查此發動機有無問題，並藉由推力讀值判定是否有達到設計標準。',
    teams: teams[0]
  },
  {
    cover: null,
    url: null,
    name: '大型火箭發射架',
    description: '為了滿足大火箭發射需求，需要更加穩固以及具有更長軌道距離的發射架，該發射架具有四公尺的最長軌道距離，並且可以藉由調整支撐桿的角度，彈性調整不同的發射仰角。',
    teams: teams[2]
  },
  {
    cover: null,
    url: null,
    name: '火藥式開傘系統',
    description: '為求飛行效率、開傘機率以及高適應能力而設計的開傘系統',
    teams: teams[2]
  },
  {
    cover: null,
    url: null,
    name: '燒線式開傘系統',
    description: '專為工作坊這樣有生產快速、組裝簡單等需求的活動而設計的開傘系統',
    teams: teams[2]
  },
  {
    cover: null,
    url: null,
    name: '固定式推力測試臺',
    description: '為提供社團進行高推力、大尺寸火箭發動機推力測試而設計之大型固定式推力測試台',
    teams: teams[2]
  },
  {
    cover: null,
    url: null,
    name: '降落傘',
    description: '為了讓社團發射的火箭能順利回收而設計之降落傘',
    teams: teams[2]
  },
  {
    cover: null,
    url: null,
    name: '玻璃纖維箭身',
    description: '承擔社團推力越來越高的發動機而開發的高強度箭身，現社團內根據使用的發動機推力不同，有兩種不同的製作方式，分別為：在紙管外部增加玻纖作為加固、直接製作純玻纖製作而成的箭身。',
    teams: teams[2]
  },
  {
    cover: null,
    url: null,
    name: 'QFH 天線',
    description: '該計畫最初源起為成大莊智清老師實驗室有衛星訊號接收需求，需要能夠接收衛星訊號的高度指向性天線，因此委託本社團製作天線。由於開發該天線亦能應用於本社火箭通訊需求，因此決定以學術互助模式共同分享資源及技術。',
    teams: teams[1]
  },
  {
    cover: null,
    url: null,
    name: 'Owl 地面控制站',
    description: '使用 Javascript 撰寫而成的地面站網頁，可以提供高度、速度、加速度、角速度、姿態、位置、壓力、溫度、箭載影像、通訊強度、火箭狀態等等各式資料。並且也可以遠端控制火箭發射及發送各式命令',
    teams: teams[1]
  },
  {
    cover: null,
    url: null,
    name: 'ISP32 航電板',
    description: 'ISP32 是自主研發多功能航電板，配備了多種感測器（氣壓、加速度、陀螺儀、磁力計與 GPS），並支援 LoRa 傳輸協定，可進行長距離通訊。內部配備了 ESP32 SoC，藉由強大的運算能力實現大型模型火箭的控制。',
    teams: teams[1]
  },
  {
    cover: null,
    url: null,
    name: 'ISP8266 航電板',
    description: 'ISP8266 實現了小火箭的無線傳輸功能，板載了 9 軸感測器及氣壓計，可以做到基礎的火箭姿態控制，相較 ISP328P 更為強大也更為穩定。',
    teams: teams[1]
  },
  {
    cover: null,
    url: null,
    name: 'ISPuno 航電板',
    description: 'ISPuno 為航電組的開山之作，為了獲取小火箭飛試過程的各項資料，並且控制小火箭的開傘機構，因此航電板的開發需求成為航電組的第一項重要任務。',
    teams: teams[1]
  },
  {
    cover: null,
    url: null,
    name: 'ISP555 航電板',
    description: 'ISP555 的誕生是為了提供社員及火箭工作坊的學員成本低廉的航電板，航電板上沒有使用 MCU 而是使用了兩個 NE555 實現了計時點火、開傘、伺服馬達控制等火箭基礎需求。',
    teams: teams[1]
  },
];

const mission_classifications = [
  {
    name: {
      zh: "飛行測試",
      en: "LAUNCHES"
    },
    description: "",
  },
  // {
  //   name: {
  //     zh: "發動機推力測試",
  //     en: "Thrust Test"
  //   },
  //   description: "",
  // },
];

const missions = [
  {
    date: 1671321600000,
    title: "雁丞一號 v3.2",
    missions: [
      "DL 開傘系統 v1",
      "發動機環 v3.1 強度",
      "新型點火系統（EIS v2.1）",
      "ESP NOW 通訊距離",
      "地面站及時圖表",
    ],
    classification: mission_classifications[0],
  },
  {
    date: 1668816000000,
    title: "雁丞一號 v3.1",
    missions: [
      "新型點火系統（EIS V2.1）適當電壓範圍"
    ],
    classification: mission_classifications[0],
  },
  {
    date: 1667606400000,
    title: "迷你火箭",
    missions: [
      "社員自製迷你火箭",
      "展示用小火箭"
    ],
    classification: mission_classifications[0],
  },
  {
    date: 1653696000000,
    title: "雁丞一號 v3.0",
    missions: [
      "航電系統穩定性",
      "開傘機構 v3",
      "艦載攝影機架 v2"
    ],
    classification: mission_classifications[0],
  },
  {
    date: 1648339200000,
    title: "雁丞一號 v2.2 & 雁丞三號",
    missions: [
      "雁丞一號 - 全系統穩定性再驗證",
      "雁丞三號 - 展開機翼結構之飛行測試"
    ],
    classification: mission_classifications[0],
  },
  {
    date: 1634947200000,
    title: "雁承一號 v2.2",
    missions: [
      "改良版開傘系統",
      "航電通訊",
      "箭載攝影機架",
      "滑塊整合之結構",
      "全箭飛行穩定性",
      "社員迷你火箭體驗"
    ],
    classification: mission_classifications[0],
  },
  {
    date: 1633132800000,
    title: "雁承一號 v2.1",
    missions: [
      "航電板數據紀錄、傳輸、及穩定性",
      "PVC 箭身之結構強度"
    ],
    classification: mission_classifications[0],
  },
  {
    date: 1632528000000,
    title: "雁丞一號 v2.0",
    missions: [
      "遠端點火系統",
      "簡易地面站運作",
      "開傘機構穩定性",
      "降落傘"
    ],
    classification: mission_classifications[0],
  },
  {
    date: 1665705600000,
    title: "Coyote v1",
    missions: [
      "Explosive parachute ejection mechanism",
      "Metal solid-state motor",
      "Nipple launch rail",
    ],
    classification: mission_classifications[0],
  },
  {
    date: 1670025600000,
    title: "Coyote v2",
    missions: [
      "Explosive parachute ejection mechanism",
      "20cm Nipple made solid-state motor",
      "Nipple made launch rail",
      "Reaction wheel for spin control",
      "Video transmission",
      "New ground station interface",
    ],
    classification: mission_classifications[0],
  },
  {
    date: 1671148800000,
    title: "Coyote Dummy",
    missions: [
      "20cm Nipple made solid-state motor",
      "Nipple made launch rail",
      "New rail button",
    ],
    classification: mission_classifications[0],
  },
];

export { teams, projects_list, mission_classifications, missions };