# MatricMate SA — first working build

## What's working
- Responsive mobile-first web app
- Subject search and starter revision cards
- Study goals with optional target dates
- Mark goals complete, delete goals, and view progress
- Saves planner data and selected grade in the browser's local storage
- PWA manifest and service worker for install/offline support once hosted over HTTPS

## Important limitations
This is an early functional MVP, not a finished national curriculum platform. The subject catalogue is a starting point and is not guaranteed to include every CAPS subject or subject variant. The included revision text is starter content, not an officially verified CAPS resource. There are no accounts, cloud sync, real exam countdown configuration, paid packs, or multilingual translation engine yet.

## Test locally
Open `index.html` in a modern browser. Most UI features work locally. Installation and service-worker/offline support require hosting through HTTPS or localhost.

## Publish free
1. Create a GitHub account (if you don't already have one).
2. Create a public repository named `matricmate-sa`.
3. Upload all files from this folder to the repository root.
4. In repository Settings → Pages, choose deploy from a branch, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to provide the published URL. Open it in Chrome on Android.
6. In Chrome's menu, choose "Install app" or "Add to Home screen" if offered.

GitHub Pages is a hosting option, not an affiliation with MatricMate SA. Publishing requires the account owner's action.
