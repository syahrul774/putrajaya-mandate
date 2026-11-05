# The People's Mandate

A self-contained, single-player Malaysian political strategy browser game prototype.

## Features

- Original dark navy-and-gold 2D interface
- English and Bahasa Malaysia interface toggle
- Create a fictional political movement, choose an ideology and difficulty
- Four-week campaign with funds, public support, credibility and regional support
- Campaign actions with costs and consequences
- Simulated 222-seat general election and popular vote
- Coalition negotiations using a 112-seat simple-majority threshold
- Government policy decisions, national events and public-mood indicators
- Browser save / continue using `localStorage`
- Responsive layout for desktop and mobile

## Project structure

```text
the-peoples-mandate/
├── index.html
├── style.css
├── game.js
├── README.md
└── assets/
    └── mark.svg
```

## Run locally

No framework, package manager, database or build step is required.

1. Extract the ZIP.
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox or Opera).
3. Select **Begin Your Mandate**, create your movement and play.

For a local development server, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new **public** repository, for example `the-peoples-mandate`.
2. Upload `index.html`, `style.css`, `game.js`, `README.md`, and the `assets` folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for the Pages deployment to finish. Your site will be available at:
   `https://YOUR-USERNAME.github.io/the-peoples-mandate/`

If you use a different repository name, the URL will use that name.

## Publish with Netlify

1. Extract the ZIP.
2. Sign in to Netlify.
3. Choose **Add new site → Deploy manually**.
4. Drag the extracted project folder (the folder containing `index.html`) into the deploy area.
5. Netlify will provide a public URL. You can set a custom domain in Site configuration.

## Game rules and assumptions

- The game uses a fictional 222-seat legislature and a simple-majority threshold of 112.
- All political parties, politicians, constituencies, polling and events are fictional. The simulation is not a prediction of any real Malaysian election.
- Campaign actions consume abstract campaign funds. The four campaign weeks culminate in a generated election result.
- Coalition partner selection is required when the player's party does not hold 112 seats alone.
- Government performance is represented by economic health, public approval, institutional trust and coalition stability.
- Progress is saved in the current browser on the current device. Clearing browser site data removes the save.

## Customisation

- Change interface wording in the `copy` object near the top of `game.js`.
- Adjust campaign actions in `campaignActions`.
- Adjust government policies in `policies`.
- Adjust random campaign and governance events in `events` and `govEvents`.
- Adjust visual design tokens in `:root` at the top of `style.css`.

## Current prototype limitations

This is a front-end prototype. It has no server, online multiplayer, account system, live election data, real constituency boundaries, or cloud saves. Election outcomes are intentionally simplified for playability. The sound control is a visual prototype toggle and does not play audio.
