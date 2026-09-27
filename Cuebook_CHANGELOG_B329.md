# Cuebook Build 329 / v14.19.00

Emergency boot-path repair after Build 328 still remained on the splash screen in mobile Safari/GitHub Pages.

Changes:
- Fixed splash progress selector so startup status actually appears.
- Boot now calls `window.loadCuebookData` / `window.CuebookDataLoader.load` directly instead of relying on a free global binding.
- Added a hard first-render watchdog with a visible diagnostic if essential JSON never finishes loading.
- Added immediate “Starting Cuebook loader…” status so we can tell whether the main script is executing at all.
- Added `globalThis` loader exposure in `data-loader.js`.
- Updated cache tokens to `json-b329` and kept package changelog-clean.
