# Mac's Australia Adventure 2027 – trip tracker (PWA)

Ryan's family trip tracker, hosted on GitHub Pages from the repo root (`main`, `/`).
Live: https://rm501-code.github.io/macs-aus-2027/

## How it's built
- `src/data.js` – the itinerary (edit this for trip changes). Times are LOCAL with the place's GMT offset.
- `src/app.html` – the app template (UI, calendar buttons, costs tab).
- `build.mjs` – `node build.mjs ryan dad mum` → writes `index.html`, `manifest.webmanifest`, `sw.js` at the root.
  Every code listed can unlock Costs (each gets its own encrypted copy).
- Sign-in: codes are names (ryan, dad, mum, bobbi). Signed-in people open on their own view and see their own checklist; Bobbi has no Costs.
- Map: Timeline → List/Map switch. Leaflet in `vendor/`, Esri light-grey tiles (no key needed), road lines from the OSRM demo server (cached per phone). Stays need `lat`, `lng`, `arrive` (fly/road/ferry).
- Icons: `icon-180/192/512.png`.

## Rules
- The repo is PUBLIC. Never commit booking reference numbers, passport details or plain-text costs.
- Costs are encrypted inside `index.html` with each cost code. `src/costs.json` is gitignored;
  if it's missing, `build.mjs` recovers it by decrypting the existing blob – uses the first code given (e.g. ryan).
  Delete `src/costs.json` again after building.
- All costs in GBP. Each cost line has "item": <timeline id> so the Costs tab sorts by date – always set it on new lines. Statuses: booked ✅ / details ❓ / tobook ⚠️ / idea 💡.
