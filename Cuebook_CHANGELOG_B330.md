# Cuebook Build 330 / v14.20.00

## Boot diagnostics rescue

- Added a tiny preboot guard immediately after the splash element so startup status changes before the large app script is parsed.
- Installed preboot `error` and `unhandledrejection` handlers that replace the frozen splash with a diagnostic card if the main script fails before first render.
- Made `data-loader.js` non-blocking with `defer`; the inline fallback loader now becomes available without waiting on the external loader request.
- Main app script now marks `Main Cuebook script executing…` at the top of execution, before indexes/routes are built.
- `cueBootStatus()` now delegates to the preboot status setter, so all startup phases use the same visible splash message.
- Updated build/cache token to `json-b330`.
