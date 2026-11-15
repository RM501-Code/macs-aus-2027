// ===== Mac's Australia Adventure 2027 — trip data =====
// Times are LOCAL to where the thing happens; tz is that place's offset from GMT in Feb/Mar 2027.
// UK is on GMT then. Singapore +08:00 · Uluru (NT) +09:30 · Queensland +10:00 · NSW/Sydney +11:00 · Beijing/Shanghai +08:00
// status: booked ✅ | details ❓ (booked, need details) | tobook ⚠️ | idea 💡
// approx: true = dates are a placeholder, not confirmed
// NOTHING SENSITIVE IN HERE — no booking refs. "held" says where the booking lives.

const P = ["mum", "dad"];
const ALL3 = ["mum", "dad", "ryan"];

const TRIP = {
  title: "Mac's Australia Adventure 2027",
  people: { mum: "Mum", dad: "Dad", ryan: "Ryan", bobbi: "Bobbi" },
  items: [
    // ---------- Mum & Dad: out via Singapore ----------
    { id: "p-uk-sg", type: "flight", who: P, status: "details", approx: true,
      title: "London → Singapore", date: "2027-02-11", tz: "+00:00",
      notes: "Business class. Send Ryan the flight numbers + times." },
    { id: "p-sg-stay", type: "stay", who: P, status: "tobook", approx: true,
      title: "Mondrian Singapore Duxton", date: "2027-02-11", endDate: "2027-02-14", tz: "+08:00",
      place: "Mondrian Singapore Duxton",
      notes: "Front-runner: Executive King with club benefits. 3 nights." },
    { id: "p-sg-syd", type: "flight", who: P, status: "details",
      title: "Singapore → Sydney", date: "2027-02-14", tz: "+11:00",
      notes: "Land in Sydney 14 Feb. Need flight number + times." },
    { id: "p-syd-1", type: "stay", who: P, status: "tobook", approx: true,
      title: "Sydney – before Uluru", date: "2027-02-14", endDate: "2027-02-15", tz: "+11:00",
      place: "Sydney NSW", notes: "Is there a night in Sydney before Uluru?" },

    // ---------- Uluru ----------
    { id: "p-syd-uluru", type: "flight", who: P, status: "tobook", approx: true,
      title: "Sydney → Uluru (Ayers Rock)", date: "2027-02-15", tz: "+09:30",
      notes: "Uluru is GMT+9:30 – half an hour off Queensland." },
    { id: "p-uluru-stay", type: "stay", who: P, status: "tobook", approx: true,
      title: "Ayers Rock Resort", date: "2027-02-15", endDate: "2027-02-18", tz: "+09:30",
      place: "Ayers Rock Resort Yulara NT" },
    { id: "p-uluru-sunrise", type: "activity", who: P, status: "idea", approx: true,
      title: "Uluru sunrise + base walk", date: "2027-02-16", tz: "+09:30",
      place: "Uluru Sunrise Viewing Area",
      notes: "Feb is hot – base walk closes early on very hot days.",
      lookup: [["Park pass + hot-weather closures", "parksaustralia.gov.au/uluru"]] },
    { id: "p-field-light", type: "activity", who: P, status: "idea", approx: true,
      title: "Field of Light", date: "2027-02-16", tz: "+09:30",
      place: "Field of Light Uluru",
      lookup: [["Tickets + timings", "ayersrockresort.com.au"]] },

    // ---------- Cairns ----------
    { id: "p-uluru-cns", type: "flight", who: P, status: "tobook", approx: true,
      title: "Uluru → Cairns", date: "2027-02-18", tz: "+10:00",
      lookup: [["Which days fly direct", "Virgin Australia / Jetstar sites"]] },
    { id: "p-cns-stay", type: "stay", who: P, status: "details", approx: true,
      title: "Cairns Airbnb", date: "2027-02-18", endDate: "2027-02-22", tz: "+10:00",
      place: "Cairns QLD", held: "Airbnb – whose phone?",
      notes: "Need: dates, address, payment date, cancellation date." },
    { id: "p-reef", type: "activity", who: P, status: "tobook", approx: true,
      title: "Great Barrier Reef day trip", date: "2027-02-20", tz: "+10:00",
      place: "Reef Fleet Terminal Cairns",
      lookup: [["Outer reef trips (snorkel / dive)", "Reef Fleet Terminal operators"]] },

    // ---------- Ryan arrives ----------
    { id: "r-bjs-syd", type: "flight", who: ["ryan"], status: "booked",
      title: "Beijing → Sydney · CA177",
      depPlace: "Beijing", depTime: "01:40", depTz: "+08:00",
      date: "2027-02-21", time: "15:50", tz: "+11:00",
      place: "Sydney Airport", held: "Booking.com – Ryan's phone",
      notes: "Ryan's bag checked through from Heathrow." },
    { id: "r-syd-night", type: "stay", who: ["ryan"], status: "tobook",
      title: "Sydney – arrival night", date: "2027-02-21", endDate: "2027-02-22", tz: "+11:00",
      place: "Sydney NSW" },

    // ---------- Meet-up: Whitsundays ----------
    { id: "r-meet", type: "flight", who: ["ryan"], status: "tobook", approx: true,
      title: "Sydney → Whitsundays (Hamilton Island?)", date: "2027-02-22", tz: "+10:00",
      notes: "Meet-up point TBC – Hamilton Island or Brisbane, not Cairns." },
    { id: "p-meet", type: "flight", who: P, status: "tobook", approx: true,
      title: "Cairns → Whitsundays", date: "2027-02-22", tz: "+10:00",
      lookup: [["Cairns → Hamilton Island / Proserpine flights", "Qantas / Virgin"]] },
    { id: "whit-stay", type: "stay", who: ALL3, status: "idea", approx: true,
      title: "Whitsundays resort", date: "2027-02-22", endDate: "2027-02-24", tz: "+10:00",
      place: "Hamilton Island QLD", notes: "Short resort stay." },
    { id: "whit-ferry", type: "ferry", who: ALL3, status: "idea", approx: true,
      title: "Ferry: Hamilton Island → Airlie Beach", date: "2027-02-24", tz: "+10:00",
      place: "Port of Airlie",
      notes: "No hire cars on Hamilton Island – the road trip starts on the mainland.",
      lookup: [["Ferry times", "Cruise Whitsundays website"]] },
    { id: "car-pickup", type: "car", who: ALL3, status: "tobook", approx: true,
      title: "Hire car pick-up – Airlie Beach / Proserpine", date: "2027-02-24", tz: "+10:00",
      place: "Proserpine Airport",
      notes: "Ryan's the driver. Big enough for 3 + luggage.",
      lookup: [["One-way QLD → NSW drop-off fee (can be big)", "compare on rental sites"]] },

    // ---------- Road trip south ----------
    { id: "d1", type: "drive", who: ALL3, status: "idea", approx: true,
      title: "Airlie Beach → Yeppoon", date: "2027-02-24", tz: "+10:00",
      km: 480, hrs: "~5h", stops: ["Mackay – lunch"] },
    { id: "s-yeppoon", type: "stay", who: ALL3, status: "idea", approx: true,
      title: "Yeppoon", date: "2027-02-24", endDate: "2027-02-25", tz: "+10:00", place: "Yeppoon QLD" },
    { id: "d2", type: "drive", who: ALL3, status: "idea", approx: true,
      title: "Yeppoon → Agnes Water", date: "2027-02-25", tz: "+10:00",
      km: 300, hrs: "~3h30", stops: ["Rockhampton"] },
    { id: "s-agnes", type: "stay", who: ALL3, status: "idea", approx: true,
      title: "Agnes Water / 1770", date: "2027-02-25", endDate: "2027-02-26", tz: "+10:00", place: "Agnes Water QLD" },
    { id: "d3", type: "drive", who: ALL3, status: "idea", approx: true,
      title: "Agnes Water → Rainbow Beach", date: "2027-02-26", tz: "+10:00",
      km: 330, hrs: "~4h", stops: ["Childers", "Bundaberg Rum distillery?"] },
    { id: "s-rainbow", type: "stay", who: ALL3, status: "idea", approx: true,
      title: "Rainbow Beach", date: "2027-02-26", endDate: "2027-02-27", tz: "+10:00", place: "Rainbow Beach QLD" },
    { id: "a-carlo", type: "activity", who: ALL3, status: "idea", approx: true,
      title: "Carlo Sandblow at sunset", date: "2027-02-26", tz: "+10:00", place: "Carlo Sandblow" },
    { id: "d4", type: "drive", who: ALL3, status: "idea", approx: true,
      title: "Rainbow Beach → Australia Zoo → Gold Coast", date: "2027-02-27", tz: "+10:00",
      km: 300, hrs: "~3h45 + zoo", stops: ["Australia Zoo (1h45 in)"] },
    { id: "a-zoo", type: "activity", who: ALL3, status: "tobook", approx: true,
      title: "Australia Zoo", date: "2027-02-27", tz: "+10:00", place: "Australia Zoo",
      lookup: [["Tickets + opening hours", "australiazoo.com.au"]] },
    { id: "s-gc", type: "stay", who: ALL3, status: "idea", approx: true,
      title: "Gold Coast", date: "2027-02-27", endDate: "2027-03-01", tz: "+10:00", place: "Surfers Paradise QLD" },
    { id: "d5", type: "drive", who: ALL3, status: "idea", approx: true,
      title: "Gold Coast → Byron Bay", date: "2027-03-01", tz: "+11:00",
      km: 100, hrs: "~1h15",
      notes: "⏰ Clocks jump forward 1 hour at the NSW border (QLD has no daylight saving)." },
    { id: "s-byron", type: "stay", who: ALL3, status: "idea", approx: true,
      title: "Byron Bay", date: "2027-03-01", endDate: "2027-03-02", tz: "+11:00", place: "Byron Bay NSW" },
    { id: "d6", type: "drive", who: ALL3, status: "idea", approx: true,
      title: "Byron Bay → Port Macquarie", date: "2027-03-02", tz: "+11:00",
      km: 400, hrs: "~4h30", stops: ["Coffs Harbour"] },
    { id: "s-portmac", type: "stay", who: ALL3, status: "idea", approx: true,
      title: "Port Macquarie", date: "2027-03-02", endDate: "2027-03-03", tz: "+11:00", place: "Port Macquarie NSW" },
    { id: "d7", type: "drive", who: ALL3, status: "idea", approx: true,
      title: "Port Macquarie → Sydney", date: "2027-03-03", tz: "+11:00",
      km: 390, hrs: "~4h30", notes: "Goal: back in Sydney by 3 March." },
    { id: "car-drop", type: "car", who: ALL3, status: "tobook", approx: true,
      title: "Hire car drop-off – Sydney", date: "2027-03-03", tz: "+11:00", place: "Sydney Airport" },

    // ---------- Sydney finale ----------
    { id: "syd-end", type: "stay", who: ALL3, status: "tobook", approx: true,
      title: "Sydney", date: "2027-03-03", endDate: "2027-03-06", tz: "+11:00", place: "Sydney NSW" },
    { id: "r-home", type: "flight", who: ["ryan"], status: "booked",
      title: "Sydney → Shanghai → Gatwick · China Eastern",
      depPlace: "Sydney", depTime: "21:30", depTz: "+11:00",
      date: "2027-03-06", time: "21:30", tz: "+11:00",
      arrPlace: "Gatwick", arrDate: "2027-03-07", arrTime: "14:00", arrTz: "+00:00",
      place: "Sydney Airport", held: "Ryan's phone" },

    // ---------- Mum & Dad: home via Sentosa ----------
    { id: "p-syd-sg", type: "flight", who: P, status: "details", approx: true,
      title: "Sydney → Singapore", date: "2027-03-06", tz: "+11:00" },
    { id: "p-sentosa", type: "stay", who: P, status: "tobook", approx: true,
      title: "Shangri-La Rasa Sentosa", date: "2027-03-06", endDate: "2027-03-09", tz: "+08:00",
      place: "Shangri-La Rasa Sentosa Singapore", notes: "Relaxing beach finish." },
    { id: "p-home", type: "flight", who: P, status: "details", approx: true,
      title: "Singapore → London", date: "2027-03-09", tz: "+08:00" }
  ]
};
