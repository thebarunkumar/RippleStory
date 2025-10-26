# RippleStory

RippleStory is a full‑stack blogging app with a React + Vite frontend and an Express + MongoDB API. It features a rich editor (Quill), ImageKit uploads, an admin dashboard for posts and comments, and deploys on Vercel (client + serverless API).

---

## Features

- Write, edit, and manage blog posts
- Admin dashboard and comments
- Image uploads (ImageKit)
- Optional AI helper (Gemini)
- Mobile‑responsive UI (Tailwind CSS)

---

## Monorepo Structure

```
RippleStory/
  client/           # React + Vite + Tailwind front‑end
  server/           # Express API + MongoDB + Mongoose
  .gitignore
  README.md
```

---

## Tech Stack

- Frontend: React 19, Vite, React Router, Tailwind CSS, Quill, Axios, react-hot-toast
- Backend: Node.js, Express, Mongoose, Multer, CORS, dotenv, JWT
- Infra: Vercel (client and server), MongoDB Atlas, ImageKit

---

## Prerequisites

- Node.js 18+ and npm
- Git + GitHub account
- Vercel account
- MongoDB Atlas project/database
- ImageKit account (for image uploads)

---

## Local Setup

1) Clone the repo

```
git clone <your-repo-url>
```

2) Install dependencies

```
cd client && npm install
cd ../server && npm install
```

3) Environment variables

Create the following files. Do NOT commit secrets. `.gitignore` already ignores them.

- `client/.env`

```
VITE_BASE_URL=http://localhost:3000
```

- `server/.env`

```
# Auth
JWT_SECRET=<your-random-secret>
ADMIN_EMAIL=<your-admin-email>
ADMIN_PASSWORD=<your-admin-password>

# Mongo
MONGODB_URI=<your-mongodb-atlas-uri>

# ImageKit
IMAGEKIT_PUBLIC_KEY=<your-imagekit-public-key>
IMAGEKIT_PRIVATE_KEY=<your-imagekit-private-key>
IMAGEKIT_URL_ENDPOINT=<your-imagekit-url-endpoint>

# Gemini (optional)
GEMINI_API_KEY=<your-gemini-api-key>
```

4) Run locally

In one terminal:

```
cd server
npm run dev
```

In another terminal:

```
cd client
npm run dev
```

---

## Useful Scripts

- Client
  - `npm run dev` – start Vite dev server
  - `npm run build` – build production assets
  - `npm run preview` – preview production build

- Server
  - `npm run dev` – start with nodemon
  - `npm start` – start with node

---

## Deploying to Vercel (Monorepo)

You will create TWO Vercel projects pointing to the same GitHub repo, each with a different root directory.

1) Push to GitHub

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

2) Deploy the server (API)

- On Vercel, New Project → Import your GitHub repo
- Project Settings → General → Root Directory: `server`
- Build & Output Settings:
  - Framework Preset: None
  - Install Command: `npm install`
  - Build Command: (leave empty)
  - Output: (handled by `server/vercel.json`)
- Environment Variables (add the ones from `server/.env`)
- Deploy

Notes:
- `server/index.js` exports the Express app and only starts listening locally. Vercel invokes it as a Serverless Function.
- `server/vercel.json` routes all requests to `index.js`.

3) Deploy the client (Web)

- On Vercel, New Project → Import the same GitHub repo again
- Project Settings → General → Root Directory: `client`
- Framework Preset: Vite (or React)
- Build & Output Settings:
  - Install Command: `npm install`
  - Build Command: `npm run build`
  - Output Directory: `dist`
- Environment Variables:
  - `VITE_BASE_URL=https://<your-server-project>.vercel.app`
- Deploy

4) Client SPA routing

- `client/vercel.json` already rewrites all routes to `/` so React Router works on refresh.

---

## Environment Variables Reference

- Client
  - `VITE_BASE_URL` – Base URL for the API (your server Vercel URL in production)

- Server
  - `JWT_SECRET`
  - `ADMIN_EMAIL`
  - `ADMIN_PASSWORD`
  - `MONGODB_URI`
  - `IMAGEKIT_PUBLIC_KEY`
  - `IMAGEKIT_PRIVATE_KEY`
  - `IMAGEKIT_URL_ENDPOINT`
  - `GEMINI_API_KEY` (optional)

---

## Troubleshooting

- 404s on client routes after deploy: ensure `client/vercel.json` exists (SPA rewrites).
- CORS errors: confirm server is sending CORS and `VITE_BASE_URL` points to the right API URL.
- 500 on serverless: check Vercel logs and that all required env vars are set.

---

## License

Proprietary – for personal or internal use unless otherwise specified by the author.
