# Hexlet Chat Application

### Hexlet tests and linter status:

[![Actions Status](https://github.com/furtivite/js-react-development-project-12/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/furtivite/js-react-development-project-12/actions)

## Live Demo

[Live Application](https://js-react-development-project-12-lb3f.onrender.com)

## Project Overview

This repository contains a full-stack chat application built using the Hexlet Chat Server and a React frontend scaffolded with Vite. The server is powered by the `@hexlet/chat-server` package, and the frontend follows Feature-Sliced Design (FSD) principles.

## Prerequisites

* [Node.js](https://nodejs.org/) (>=14.x)
* npm (comes with Node.js)
* Git

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/furtivite/js-react-development-project-12.git
   cd js-react-development-project-12
   ```

2. **Install root dependencies**

   ```bash
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd frontend
   npm install
   cd ..
   ```

## Development

During development, you need to run both the backend server and the frontend dev server.

1. **Run the backend server**

   ```bash
   # In the project root
   npx start-server
   ```

   The server will start on `http://localhost:5001` by default.

2. **Run the frontend dev server**

   ```bash
   # In the project root
   cd frontend
   npm run dev
   ```

   The Vite dev server will start on `http://localhost:5173` and proxy `/api` requests to the backend.

3. **Access the application**
   Open your browser and navigate to `http://localhost:5173`. The frontend will proxy API calls to `http://localhost:5001`.

## Production Build

To build and run the application in production mode, use the provided `Makefile` commands.

1. **Build the frontend**

   ```bash
   make build
   ```

   This command runs `npm run build` inside the `frontend` directory, producing static assets in `frontend/dist`.

2. **Start the server with static assets**

   ```bash
   make start
   ```

   This command runs the chat server and serves the compiled frontend from `./frontend/dist`. By default, it will listen on port `5001` unless the `PORT` environment variable is set.

3. **Access the application**
   Open your browser and navigate to `http://localhost:5001` (or the port specified by `PORT`).

## Environment Variables

* `PORT`: Optional. Defines the port on which the chat server will listen. Defaults to `5001` if not set.

## Project Structure

```
js-react-development-project-12/
├── frontend/                # React application (Vite)
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── Makefile                 # Build and start commands
├── package.json             # Root-level dependencies (chat-server)
├── .gitignore
└── README.md                # This file
```

## Contributing

Feel free to open issues or create pull requests with improvements. Follow the [Conventional Commits](https://www.conventionalcommits.org/) convention for commit messages.

## License

This project is released under the [MIT License](LICENSE).
