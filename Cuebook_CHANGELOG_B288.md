# Cuebook Build 288

Baseline: json-b287 / v13.77.00
Build: json-b288 / v13.78.00
Date: 2026-09-22

## Implemented

- Applied pending & Juliet stage-management performance-report data for 2026-04-12, 2026-05-01, 2026-05-10, 2026-05-14, 2026-06-04, 2026-06-14, 2026-06-25, and 2026-07-21: normalized covered-person links and actual performance band/sub status only.
- Added canonical musician records for Marc Malesgna, Amy Ralske, and Lavinia Pavlish because the supplied performance reports directly verify those names.
- Corrected the & Juliet swing-name rule fallout: Alaina Vi Maderal is Gwynne (not synthesized Gwynne/Gregory, Gwynne/Imogen, or Imogen when covering those tracks); Daniel J. Maldonado uses Fletcher rather than Alejandro MullerDahlberg's Crosse identity when covering Reese Britts's track.
- Deleted bad synthesized roles `Gwynne / Gregory` and `Gwynne / Imogen` after repointing their only appearances to canonical `Gwynne`.
- Standardized the existing Fletcher composite canonical role to `Fletcher / Lord Capulet / Bouncer` and repointed Daniel's affected appearances.
- Confirmed Reese Britts as temporary replacement (`t/r`) Lance on 2026-06-25.
- Repaired missing show links for `Hannibal Lecter` and `Dream Clarice` to *Silence! The Musical*.
- Completed audit of the nine same-person/multiple-underlying-row performance cases. All nine are legitimate separate underlying assignments; no appearance rows were merged or deleted.
- Private operational, injury, rehearsal, contract, audience, and backstage content from RCI reports was not stored.

## Validation targets

- No live role remains without a showId as a result of the four-role audit.
- No references remain to deleted role IDs 6382 or 6383.
- Manifest-listed JSON must parse and hashes/byte counts must match.
- All appearance person/role/performance references and orchestra person references must resolve.
- JavaScript syntax and ZIP integrity must pass.
