# The People's Mandate — Malaysia-inspired political browser game

A playable, single-player 2D political strategy prototype. It uses fictional parties, candidates, events and election modelling. It is not an official Malaysian election simulator or a representation of real political actors.

## Features in this prototype

- English / Bahasa Melayu interface toggle
- Create a fictional political movement and leader
- Choose one of three political approaches
- Campaign actions with trade-offs
- Five national indicators: public support, economic confidence, public trust, political stability and infrastructure
- Illustrative 222-seat parliamentary projection
- Election result and coalition negotiation
- Government policy actions
- Randomised fictional national briefings
- Save / continue using browser local storage
- Responsive 2D interface for desktop and mobile

## Run locally

No build tools or package installation are required.

1. Extract the ZIP file.
2. Open the `putrajaya-mandate` folder.
3. Double-click `index.html` to open it in a modern browser.

For a local web server (recommended), open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create or sign in to a GitHub account.
2. Create a new public repository, for example `putrajaya-mandate`.
3. Upload `index.html`, `style.css`, `game.js` and this README. Keep the files in the repository root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for GitHub Pages to publish. Your site will be available at the URL shown in Settings → Pages.

## Project structure

```text
putrajaya-mandate/
├── index.html      # Screen structure and UI
├── style.css       # Responsive 2D visual design
├── game.js         # Game state, election model, actions and bilingual text
├── README.md       # Setup and publishing guide
└── assets/         # Reserved for future artwork, audio and map assets
```

## Gameplay notes

- The player starts with 22% base support. Chosen political approach adds a small starting bonus.
- A campaign lasts four action turns, followed by an election.
- Two actions are available per turn.
- The election projection converts a simplified support model into 222 illustrative seats. It is a game mechanic, not a statistically valid prediction.
- A player with at least 112 seats forms a government. Otherwise, the player can attempt to negotiate a coalition.
- The government phase has policy actions and an illustrative six-turn first term.

## Important next steps before a public launch

This is a complete playable prototype, not a finished commercial game. Before a larger release:
- Replace the simplified seat conversion with constituency-level, documented game data.
- Add accessibility testing, browser testing and more robust save validation.
- Add original map artwork, sound and visual assets with clear licences.
- Write a privacy policy if accounts, analytics or personal data are added.
- Keep real public facts separate from fictional parties, politicians and scenarios.
- Clearly label the work as fiction and avoid implying endorsement by Malaysian public institutions or political parties.

## Technology

Plain HTML5, CSS and JavaScript. The first version deliberately avoids a framework so it can be hosted as a static website at little or no cost.
