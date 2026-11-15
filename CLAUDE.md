# Mac's Australia Adventure 2027 – trip tracker (PWA)

Ryan's family trip tracker, hosted on GitHub Pages from the repo root (`main`, `/`).
Live: https://rm501-code.github.io/macs-aus-2027/

## How it's built
- `src/data.js` – the itinerary (edit this for trip changes). Times are LOCAL with the place's GMT offset.
- `src/app.html` – the app template (UI, calendar buttons, costs tab).
- `build.mjs` – `node build.mjs <family-code>` → writes `index.html`, `manifest.webmanifest`, `sw.js` at the root.
- Icons: `icon-180/192/512.png`.

## Rules
- The repo is PUBLIC. Never commit booking reference numbers, passport details or plain-text costs.
- Costs are encrypted inside `index.html` with the family code. `src/costs.json` is gitignored;
  if it's missing, `build.mjs` recovers it by decrypting the existing blob – ask Ryan for the family code.
  Delete `src/costs.json` again after building.
- All costs in GBP. Statuses: booked ✅ / details ❓ / tobook ⚠️ / idea 💡.
