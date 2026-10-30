# Attendance corrections

Install this complete package in iwedash/diary first, including attendance-overrides.json, cuebook-attendance.js, sw.js and the artwork folder.

On a visit, choose More → Edit visit. Review changes, then save a local draft. Corrections → Download file or Copy JSON gives the complete attendance-overrides.json. Open GitHub file, replace its contents and commit. After GitHub Pages updates, discard the matching local draft to use the published record. Local drafts affect this browser only; committing updates the site across devices.

Date, daypart, seat, ticket price/currency/type, companions and seat notes are supported. Blank price is unknown; zero is a comp/free ticket. Names separated by semicolons. No company or cast records are changed by the editor. Original program/attendance notes remain source evidence.

For later full app builds, preserve the published attendance-overrides.json: merge it into the next package, never replace it with a blank template. The service worker verifies static asset hashes, while the validated attendance-overrides.json is intentionally mutable without rebuilding the manifest.

Offline saving requires HTTPS (GitHub Pages supports this) and a compatible browser. Open Offline → Save / update offline and wait for Saved before disconnecting. The complete data and bundled title artwork are cached, including Money, Companions, Cast Book and QA. Browser storage may be evicted. Artwork is title identification, not the program from a particular visit; sources are available under Offline.
