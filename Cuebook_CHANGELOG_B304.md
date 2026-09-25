# Cuebook Build 304 — Homepage polish + October 2017 audit corrections

Baseline: json-b303 / v13.93.00

## Implemented

- Homepage Recently Seen table no longer shows a `Show #` pill/button.
- The show number is now a plain, left-justified block before the date in each Recently Seen row.
- Matinee/evening daypart now displays only beside the date on the front page.
- Seat and ticket/cost details are removed from the front-page Recently Seen table.

## October 2017 data corrections

- The Effect 2017-10-03: ticket set to Comp.
- The Price 2017-10-05: ticket set to Comp.
- Skeleton Crew 2017-10-06: ticket set to Comp; erroneous Chris Blasting companion link removed.
- In the Heights 2017-10-18: ticket set to Comp.
- Skeleton Crew 2017-10-19: ticket set to Comp.
- Waitress 2017-10-21: Ticketmaster order details refreshed; retained Mezzanine Row E Seats 1 and 3, confirmation 3-53261/NY4, $131.70 all-in order total.
- The Wild Party: corrected date from 2017-10-23 to 2017-10-11 and added Constellation Theatre Company ticket details, Level A Row D Seats 105–106, $25 each / $50 total.
- Mean Girls 2017-10-29: ticket set to Comp.

## Audit workflow notes

- Future historical audit packets should assume Studio Theatre and Arena Stage attendances are Comp unless Isaac supplies a different ticket type/price.
- `on for` track-owner pairings should only be added or changed when supported by the current database, supplied performance notices/program slips, or explicit source verification.
