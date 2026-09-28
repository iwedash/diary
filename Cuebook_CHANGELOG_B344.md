# Cuebook Build 344 Changelog

Baseline: `json-b343` / `v14.33.00`
New build: `json-b344` / `v14.34.00`

## Implemented

### May 2022 audit
- **Hairspray — 2022-05-13 evening**: added Broadway Direct Lottery ticket detail, 7:30 PM curtain, $60.00 total for 2 tickets ($25 ticket + $5 handling fee per ticket), with existing Holly Hassett companion preserved.
- **Hairspray — 2022-05-15 evening**: added Broadway Direct Lottery ticket detail, 7:30 PM curtain, $60.00 total for 2 tickets.
- **Into the Woods — 2022-05-22 evening**: added 7:00 PM curtain and marked Comp / Helen Hayes Judge Slot.
- **John Proctor is the Villain — 2022-05-28 evening**: added Studio Theatre comp ticket detail from PDF: Mead, Center, Row D, Seat 202, order #817040, 8:00 PM.

### Name cleanup
- Corrected canonical **Robert Biederman** to **Robert Biedermann**.
- Preserved `Robert Biederman` as an alias.

### Homepage UI
- Added final desktop CSS override so the homepage weekly activity counter renders the full 104 generated weeks as a two-year grid on desktop, rather than collapsing into a scrolling strip.

### 2025 London ticket-cost pass
- Applied Isaac-supplied July 24–August 16, 2025 ticket costs to matching existing performances.
- Applied corrected totals for:
  - **The Book of Mormon — 2025-08-01 matinee**: £60.00 total (£58 voucher + £2 new payment).
  - **Titanique — 2025-08-03 evening**: $110.43 for 2 ($39.76 voucher + $70.67 new payment).
  - **Till the Stars Come Down — 2025-08-07 matinee**: $55.54 ($50.25 voucher + $5.29 new payment; separate $5.88 rewards discount remains deducted).

## Held / not changed
- **101 Dalmatians — 2025-08-01 7:00 PM — £60.00** was not added because Build 343 has no matching 101 Dalmatians performance record. Current Aug. 1 evening record is **Clueless**. Held pending confirmation/source/cast.
- No May 2022 cast, cover, conductor, creative-credit, or production-archive rows were changed.
- Hairspray public-tour role/cast checks were used only as a broad consistency check; the performance-specific actual-cast rows remain the existing sourced rows.

## Validation
- JSON parse check passed after edits.
- Source refs added for all new email/user-table evidence.
- No orphaned source refs introduced.
