# FitSync

AI-powered full-stack health & workout management system that helps you track meals, log workouts, and stay on top of your daily fitness goals.

**Live App:** [fit-sync-ai-two.vercel.app](https://fit-sync-ai-two.vercel.app)

---

## ✨ Features

- **AI Food Snap** — Snap a photo of your meal and let AI (Gemini) automatically recognize the food and estimate calories
- **Food Logging** — Track meals by type (breakfast, lunch, dinner, snack) with calorie breakdowns
- **Activity Logging** — Log workouts with quick-add presets or custom entries, track duration and calories burned
- **Personalized Onboarding** — Set your goal (lose / maintain / gain weight) and get tailored daily calorie targets
- **Auth** — Secure signup/login with JWT-based authentication
- **Dark Mode** — Clean, responsive UI with light/dark theme support

---

## 🛠️ Tech Stack

**Frontend**
- React + TypeScript
- Vite
- Tailwind CSS
- Deployed on [Vercel](https://vercel.com)

**Backend**
- [Strapi](https://strapi.io) (Headless CMS / REST API)
- PostgreSQL (hosted on [Neon](https://neon.tech))
- Google Gemini API for AI food recognition
- Deployed on [Render](https://render.com)

---

## 📁 Project Structure

```
FitSync-AI/
├── client/          # React + TypeScript frontend
└── server/          # Strapi backend
```

---

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `server/` (see `.env.example` for reference):

```dotenv
HOST=0.0.0.0
PORT=1337

APP_KEYS=your_app_keys
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
TRANSFER_TOKEN_SALT=your_transfer_token_salt
ENCRYPTION_KEY=your_encryption_key
JWT_SECRET=your_jwt_secret

DATABASE_CLIENT=postgres
DATABASE_URL=your_postgres_connection_string
DATABASE_SSL=true

GEMINI_API_KEY=your_gemini_api_key
```

Run the development server:

```bash
npm run develop
```

The Strapi admin panel will be available at `http://localhost:1337/admin`.

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file in `client/` with your backend API URL:

```dotenv
VITE_API_URL=http://localhost:1337
```

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🌐 Deployment

- **Frontend** is deployed on **Vercel**, connected to the `client/` directory.
- **Backend** is deployed on **Render** as a Node.js web service, connected to the `server/` directory, with a managed **PostgreSQL** database on **Neon**.

---

## 📄 License

This project is for personal/portfolio use.
