// ===== Mac's Australia Adventure 2027 — trip data =====
// Times are LOCAL to where the thing happens; tz is that place's offset from GMT in Feb/Mar 2027.
// UK is on GMT then. Singapore +08:00 · Queensland +10:00 (no daylight saving) · NSW/Sydney +11:00 · Beijing/Shanghai +08:00
// status: booked ✅ | details ❓ (booked, need details) | tobook ⚠️ | idea 💡
// NOTHING SENSITIVE IN HERE — no booking refs. "held" says where the booking lives.

const P = ["mum", "dad"];
const PB = ["mum", "dad", "bobbi"];
const ALL = ["mum", "dad", "bobbi", "ryan"];

const TRIP = {
  title: "Mac's Australia Adventure 2027",
  people: { mum: "Mum", dad: "Dad", ryan: "Ryan", bobbi: "Bobbi" },
  items: [
    // ================= MUM & DAD: SINGAPORE =================
    { id: "p-uk-sg", type: "flight", who: P, status: "details",
      title: "London → Singapore", date: "2027-02-08", tz: "+00:00",
      notes: "Booked. Need flight number, times and whose phone it's on." },
    { id: "p-sg-stay", type: "stay", who: P, status: "booked",
      title: "PARKROYAL COLLECTION Marina Bay", date: "2027-02-09", endDate: "2027-02-13", tz: "+08:00",
      place: "PARKROYAL COLLECTION Marina Bay Singapore" },
    { id: "p-sg-syd", type: "flight", who: P, status: "details",
      title: "Singapore → Sydney", date: "2027-02-14", tz: "+11:00",
      notes: "Lands Sun 14 Feb. Is this booked? Need flight number + times." },

    // ================= SYDNEY (Bobbi joins) =================
    { id: "syd-1", type: "stay", who: PB, status: "tobook",
      title: "Sydney hotel", date: "2027-02-14", endDate: "2027-02-18", tz: "+11:00",
      place: "Sydney NSW", notes: "Bobbi joins in Sydney as Mum & Dad land." },
    { id: "syd-cns", type: "flight", who: PB, status: "tobook",
      title: "Sydney → Cairns", date: "2027-02-18", tz: "+10:00",
      notes: "Queensland is 1 hour behind Sydney (no daylight saving)." },

    // ================= CAIRNS =================
    { id: "cns-stay", type: "stay", who: PB, status: "booked",
      title: "Cairns Aquarius", date: "2027-02-18", endDate: "2027-02-21", tz: "+10:00",
      place: "Cairns Aquarius" },
    { id: "cns-reef", type: "activity", who: PB, status: "tobook",
      title: "Great Barrier Reef + scuba", date: "2027-02-19", tz: "+10:00",
      place: "Reef Fleet Terminal Cairns",
      lookup: [["Outer reef trips with intro/certified dives", "Reef Fleet Terminal operators"]] },
    { id: "cns-daintree", type: "activity", who: PB, status: "tobook",
      title: "Daintree Rainforest", date: "2027-02-20", tz: "+10:00",
      place: "Daintree Rainforest",
      lookup: [["Day tours from Cairns (incl. Cape Tribulation / Mossman Gorge)", "tour sites / Tripadvisor"]] },

    // ================= AIRLIE BEACH =================
    { id: "cns-pro", type: "flight", who: PB, status: "tobook",
      title: "Cairns → Proserpine (Skytrans?)", date: "2027-02-21", time: "09:55", tz: "+10:00",
      depPlace: "Cairns", depTime: "09:55", depTz: "+10:00", arrPlace: "Proserpine", arrDate: "2027-02-21", arrTime: "11:20", arrTz: "+10:00",
      notes: "Times are a guess (~09:55 → 11:20). Then taxi to Airlie Beach (~35 min).",
      lookup: [["Confirm flight days + times", "skytrans.com.au"]] },
    { id: "airlie-stay", type: "stay", who: PB, status: "booked",
      title: "Airlie Beach Hotel", date: "2027-02-21", endDate: "2027-02-22", tz: "+10:00",
      place: "Airlie Beach Hotel" },

    // ================= RYAN ARRIVES =================
    { id: "r-lhr-pek", type: "flight", who: ["ryan"], status: "booked",
      title: "London Heathrow → Beijing · CA938", date: "2027-02-19", tz: "+00:00",
      depPlace: "Heathrow", depTime: "20:25", depTz: "+00:00",
      arrPlace: "Beijing", arrDate: "2027-02-20", arrTime: "14:30", arrTz: "+08:00",
      held: "Booking.com – Ryan's phone", notes: "11-hour layover in Beijing – Great Wall plan." },
    { id: "r-pek-syd", type: "flight", who: ["ryan"], status: "booked",
      title: "Beijing → Sydney · CA177", date: "2027-02-21", tz: "+11:00",
      depPlace: "Beijing", depTime: "01:40", depTz: "+08:00",
      arrPlace: "Sydney", arrDate: "2027-02-21", arrTime: "15:50", arrTz: "+11:00",
      place: "Sydney Airport", held: "Booking.com – Ryan's phone" },
    { id: "r-syd-night", type: "stay", who: ["ryan"], status: "booked",
      title: "Sydney airport hotel", date: "2027-02-21", endDate: "2027-02-22", tz: "+11:00",
      place: "Sydney Airport", notes: "Which hotel? Tell Ryan to add the name." },

    // ================= HAMILTON ISLAND – everyone together =================
    { id: "ham-ferry", type: "ferry", who: PB, status: "tobook",
      title: "Ferry: Port of Airlie → Hamilton Island", date: "2027-02-22", time: "09:00", tz: "+10:00",
      place: "Port of Airlie", notes: "Morning ferry, ~9–9:30am.",
      lookup: [["Ferry times + tickets", "Cruise Whitsundays website"]] },
    { id: "r-syd-ham", type: "flight", who: ["ryan"], status: "details",
      title: "Sydney → Hamilton Island", date: "2027-02-22", tz: "+10:00",
      place: "Hamilton Island Airport", notes: "Booked. Need flight number + landing time." },
    { id: "ham-stay", type: "stay", who: ALL, status: "booked",
      title: "Frangipani Apartments", date: "2027-02-22", endDate: "2027-02-25", tz: "+10:00",
      place: "Frangipani Hamilton Island", notes: "🎉 Everyone together from here." },
    { id: "ham-hop", type: "activity", who: ALL, status: "idea",
      title: "Island hopping / Airlie", date: "2027-02-23", tz: "+10:00",
      lookup: [["Whitehaven Beach + Hill Inlet trips", "Cruise Whitsundays / local operators"]] },
    { id: "ham-reefworld", type: "activity", who: ALL, status: "tobook",
      title: "Reefworld (fly or cruise)", date: "2027-02-24", tz: "+10:00",
      lookup: [["Reefworld day trip vs scenic flight", "Cruise Whitsundays website"]] },

    // ================= BRISBANE =================
    { id: "ham-bne", type: "flight", who: ALL, status: "tobook",
      title: "Hamilton Island → Brisbane", date: "2027-02-25", tz: "+10:00" },
    { id: "bne-stay", type: "stay", who: ALL, status: "booked",
      title: "Oaks Brisbane on Margaret Suites", date: "2027-02-25", endDate: "2027-02-27", tz: "+10:00",
      place: "Oaks Brisbane on Margaret Suites" },
    { id: "bne-zoo", type: "activity", who: ALL, status: "tobook",
      title: "Australia Zoo", date: "2027-02-26", tz: "+10:00", place: "Australia Zoo",
      notes: "~1h15 north of Brisbane – but the hire car isn't until Sat. Pick the car up Fri instead, or book a transfer?",
      lookup: [["Tickets + opening hours", "australiazoo.com.au"]] },

    // ================= ROAD TRIP =================
    { id: "car-pickup", type: "car", who: ALL, status: "tobook",
      title: "Hire car pick-up – Brisbane", date: "2027-02-27", tz: "+10:00", place: "Brisbane CBD",
      notes: "Ryan driving. Room for 4 + luggage.",
      lookup: [["One-way QLD → NSW drop-off fee (can be big)", "compare on rental sites"]] },
    { id: "d1", type: "drive", who: ALL, status: "idea",
      title: "Brisbane → Byron Bay", date: "2027-02-27", tz: "+11:00",
      hrs: "~2h", stops: ["Gold Coast – lunch"],
      notes: "⏰ Clocks jump forward 1 hour at the NSW border." },
    { id: "byron-stay", type: "stay", who: ALL, status: "booked",
      title: "Byron Quarter Apartments", date: "2027-02-27", endDate: "2027-03-01", tz: "+11:00",
      place: "Byron Quarter Apartments Byron Bay" },
    { id: "byron-day", type: "activity", who: ALL, status: "idea",
      title: "Byron Bay – free day", date: "2027-02-28", tz: "+11:00", place: "Cape Byron Lighthouse" },
    { id: "d2", type: "drive", who: ALL, status: "idea",
      title: "Byron Bay → Port Macquarie", date: "2027-03-01", tz: "+11:00",
      hrs: "~5h", stops: ["Coffs Harbour or Yamba – lunch"] },
    { id: "pm-stay", type: "stay", who: ALL, status: "booked",
      title: "Rydges Port Macquarie", date: "2027-03-01", endDate: "2027-03-02", tz: "+11:00",
      place: "Rydges Port Macquarie" },
    { id: "pm-koala", type: "activity", who: ALL, status: "idea",
      title: "Koala Hospital", date: "2027-03-02", time: "08:30", tz: "+11:00",
      place: "Koala Hospital Port Macquarie" },
    { id: "d3", type: "drive", who: ALL, status: "idea",
      title: "Port Macquarie → Blue Mountains", date: "2027-03-02", time: "09:30", tz: "+11:00",
      hrs: "~5h30–6h", stops: ["Newcastle – lunch", "Three Sisters at sunset"] },
    { id: "bm-stay", type: "stay", who: ALL, status: "booked",
      title: "Montblu at Echo Point", date: "2027-03-02", endDate: "2027-03-03", tz: "+11:00",
      place: "Montblu Echo Point Katoomba" },
    { id: "bm-scenic", type: "activity", who: ALL, status: "idea",
      title: "Scenic World + Leura", date: "2027-03-03", tz: "+11:00", place: "Scenic World Katoomba",
      lookup: [["Tickets + opening times", "scenicworld.com.au"]] },
    { id: "d4", type: "drive", who: ALL, status: "idea",
      title: "Blue Mountains → Sydney", date: "2027-03-03", tz: "+11:00",
      hrs: "~1h30–2h", notes: "Drop the car off in Sydney." },
    { id: "car-drop", type: "car", who: ALL, status: "tobook",
      title: "Hire car drop-off – Sydney", date: "2027-03-03", tz: "+11:00", place: "Sydney NSW" },

    // ================= SYDNEY FINALE =================
    { id: "syd-end-r", type: "stay", who: ["ryan"], status: "tobook",
      title: "Sydney hotel", date: "2027-03-03", endDate: "2027-03-06", tz: "+11:00",
      place: "Sydney NSW", notes: "Same hotel as Mum & Dad?" },
    { id: "syd-end-p", type: "stay", who: PB, status: "tobook",
      title: "Sydney hotel", date: "2027-03-03", endDate: "2027-03-08", tz: "+11:00",
      place: "Sydney NSW", notes: "When does Bobbi head off?" },
    { id: "r-home", type: "flight", who: ["ryan"], status: "booked",
      title: "Sydney → Shanghai → Gatwick · China Eastern", date: "2027-03-06", tz: "+11:00",
      depPlace: "Sydney", depTime: "21:30", depTz: "+11:00",
      arrPlace: "Gatwick", arrDate: "2027-03-07", arrTime: "14:00", arrTz: "+00:00",
      place: "Sydney Airport", held: "Ryan's phone" },

    // ================= MUM & DAD: HOME VIA SENTOSA =================
    { id: "p-syd-sg", type: "flight", who: P, status: "details",
      title: "Sydney → Singapore", date: "2027-03-08", tz: "+11:00",
      notes: "Leave Australia 8 Mar. Need flight details." },
    { id: "p-sentosa", type: "stay", who: P, status: "tobook", approx: true,
      title: "Shangri-La Rasa Sentosa", date: "2027-03-08", endDate: "2027-03-11", tz: "+08:00",
      place: "Shangri-La Rasa Sentosa Singapore", notes: "Dates TBC." },
    { id: "p-home", type: "flight", who: P, status: "details", approx: true,
      title: "Singapore → London", date: "2027-03-11", tz: "+08:00" }
  ]
};
