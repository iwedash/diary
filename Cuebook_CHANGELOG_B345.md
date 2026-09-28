# Cuebook Build 345 Changelog

Baseline: `json-b344` / `v14.34.00`
New build: `json-b345` / `v14.35.00`

## Implemented

### 2025 ticket-cost audit rows
- Applied Isaac-supplied **September 2025** costs for SIX, Exorcistic, Heathers, and Aladdin.
- Applied Isaac-supplied **October 2025** costs for matching existing entries.
- Corrected **The Least Problematic Woman in the World — 2025-10-12** from matinee to **7:00 PM evening** based on the supplied receipt row.
- Applied Isaac-supplied **November 2025** costs for matching existing entries.
- Applied Isaac-supplied **December 2025** costs for Heathers rushes and A Christmas Carol at PAC NYC.

### Reunions — new missing attendance entry
- Added **Reunions — 2025-10-26 evening / 7:30 PM** as a new Off-Broadway attendance at **New York City Center - Stage II**.
- Added ticket metadata: **TDF, $44.00**.
- Added production basics from Isaac-supplied Playbill details:
  - Director: Gabriel Barre
  - Book: Jeffrey Scharf
  - Music: Jimmy Calire
  - Lyrics: Jeffrey Scharf
- Added cast rows from Playbill/TodayTix-sourced role list:
  - Bryan Fenkart — Sir Harry
  - Joanna Glushak — Dona Laura
  - Chilina Kennedy — Kate
  - Courtney Reed — Lady Sims
  - Daniel Torres — Edward / Juanito
  - Chip Zien — Don Gonzalo

### June–July 2022 audit
- **Drumfolk — 2022-06-26**: marked comp by standing Arena Stage audit rule.
- **The Play That Goes Wrong — 2022-06-30**: corrected to **2:00 PM matinee**; added Telecharge ticket details, Orchestra Center Row J seats 101–102, $49 each, total $98.00.
- **SIX — 2022-07-07**: added Broadway Direct Lottery detail from Holly-forwarded payment confirmation, total $70.00 for 2; added Holly Hassett as companion in metadata.
- **tick, tick...BOOM! — 2022-07-17**: marked Comp / Helen Hayes Judge Slot; added 2:00 PM curtain.
- **American Prophet — 2022-07-28**: marked comp by standing Arena Stage audit rule.
- **SIX — 2022-07-31**: added Broadway Direct Lottery detail, total $70.00 for 2.

## Held / not added
- **101 Dalmatians — 2025-08-01** remains not added; Isaac confirmed no Dalmatians.
- **HEAUX CHURCH — 2025-11-05** was not added; Isaac clarified he did not attend, and no existing attendance shell was present.

## Validation
- JSON parse check passed after edits.
- Build/version updated to `json-b345` / `v14.35.00`.
- Added Reunions show, venue, roles, people only where missing.
- New source refs are valid.
- No unsupported 2022 cast, cover, conductor, or role changes made.
