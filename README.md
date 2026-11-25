# Pokémon Application

A small React + Vite app that lets you browse the original 151 Pokémon. Pick one
from the dropdown and the app fetches its details — sprite, type, weight and
height — from the [PokéAPI](https://pokeapi.co/). Styled with a retro Game Boy
look and feel.

## Features

- Loads the first 151 Pokémon into a searchable dropdown.
- Fetches full details on demand when a Pokémon is selected.
- Displays sprite, type(s), weight (kg) and height (cm).
- Game Boy–inspired styling and responsive layout.

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) with the React Compiler enabled
- [PokéAPI](https://pokeapi.co/) as the data source

## Getting started

Requires [Node.js](https://nodejs.org/) (18+ recommended).

```bash
# Install dependencies
npm install

# Start the dev server (with HMR)
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173).

## Available scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reloading |
| `npm run build`   | Build the app for production into `dist/`    |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run ESLint over the project                  |

## Project structure

```
src/
├── App.jsx                        # Entry component with Start/Close toggle
├── components/
│   ├── PokemonApplication.jsx     # Fetches the list and selected details
│   └── Pokemon.jsx                # Presentational card for one Pokémon
├── App.css / index.css            # Styling
└── main.jsx                       # React root
```

## How it works

1. `App` renders a title and a **Start** button that mounts the Pokémon app.
2. `PokemonApplication` fetches the list of 151 Pokémon on mount and populates
   the dropdown.
3. When a Pokémon is selected, a second request fetches its details, which are
   passed to the `Pokemon` component for display.
