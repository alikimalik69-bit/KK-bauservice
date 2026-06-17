# KK Bauservice – Website

Premium one-page website for **KK Bauservice**, specialised in fiber-optic
expansion (Glasfaserausbau), cable laying, civil engineering (Tiefbau) and
asphalt works. Built with React + Tailwind CSS (frontend) and FastAPI + MongoDB
(backend).

> The public website is **frontend-only** — it does not depend on the backend
> at runtime (the contact form shows a success message). This means the
> `frontend` can be deployed as a static site (e.g. Cloudflare Pages, Vercel,
> Netlify) on its own.

---

## 📁 Project structure

```
.
├── frontend/        # React app (this is what you deploy as a static site)
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env.example
└── backend/         # FastAPI server (optional, not required for the website)
    ├── server.py
    └── requirements.txt
```

---

## ☁️ Deploy the frontend to Cloudflare Pages

In the Cloudflare Pages **"Set up build"** screen, use these settings:

| Setting                    | Value                |
|----------------------------|----------------------|
| Framework preset           | Create React App     |
| **Root directory**         | `frontend`           |
| **Build command**          | `yarn build`         |
| **Build output directory** | `build`              |

Add one environment variable:

| Name                    | Value                                   |
|-------------------------|-----------------------------------------|
| `REACT_APP_BACKEND_URL` | any value (e.g. your site URL)          |

> ⚠️ Do **not** flatten the folders. Setting **Root directory = `frontend`** is
> the key — it tells Cloudflare to build inside that folder.

The included `frontend/public/_redirects` file (`/* /index.html 200`) makes
single-page routing work correctly on Cloudflare/Netlify.

---

## 💻 Run locally

### Frontend
```bash
cd frontend
cp .env.example .env      # then edit if needed
yarn install
yarn start                # http://localhost:3000
```

### Backend (optional)
```bash
cd backend
pip install -r requirements.txt
# create a .env file with:
#   MONGO_URL="mongodb://localhost:27017"
#   DB_NAME="kk_bauservice"
uvicorn server:app --reload --port 8001
```

---

## 🛠️ Build for production
```bash
cd frontend
yarn build                # output in frontend/build/
```

---

© KK Bauservice. All rights reserved.
