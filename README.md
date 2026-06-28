# Interview AI

An AI-powered interview preparation platform that generates personalized interview strategies, technical and behavioral questions, and preparation roadmaps based on your resume and target job description.

**Stack:** Node.js + Express | React + Vite | MongoDB | Google Gemini AI

---

## Features

- **User Authentication** — Register, login, logout with JWT (HTTP-only cookies)
- **Resume Upload** — Upload PDF resumes; AI extracts text automatically
- **Self Description** — Optional text profile for candidates without a resume
- **AI Interview Plan** — Match score, technical questions, behavioral questions, skill gaps, day-wise prep roadmap
- **Download Resume** — PDF resume tailored for the target job
- **Recent Reports** — Browse previously generated interview plans

---

## Project Structure

```
Interview AI/
├── Backend/
│   ├── src/
│   │   ├── app.js, server.js
│   │   ├── config/database.js
│   │   ├── controllers/ (auth, interview)
│   │   ├── middlewares/ (auth, file upload)
│   │   ├── models/ (user, blacklist, interviewReport)
│   │   ├── routes/ (auth, interview)
│   │   └── services/ (ai, temp)
│   ├── .env
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── App.jsx, main.jsx, app.routes.jsx
│   │   └── features/
│   │       ├── auth/ (context, hooks, pages, services)
│   │       └── interview/ (context, hooks, pages, services, styles)
│   ├── vite.config.js
│   └── package.json
│
└── 4layer.readme
```

---

## Frontend Architecture (4-Layer)

```
UI Layer:      pages/ → components/
Hook Layer:    hooks/ (useAuth, useInterview)
State Layer:   *.context.jsx (AuthContext, InterviewContext)
API Layer:     services/*.api.js (auth.api, interview.api)
```

Rule: each layer talks only to adjacent layers. Pages call Hooks; Hooks call APIs and Context; APIs make requests; Context stores state.

---

## Getting Started

### Prerequisites

- Node.js >= 20.16 or >= 22.3
- MongoDB (local or MongoDB Atlas)
- Google GenAI API key

### 1. Backend

```bash
cd Backend
npm install
```

Create `.env` in `Backend/`:
```env
MONGO_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/interview-master
JWT_SECRET=<your-secret>
GOOGLE_GENAI_API_KEY=<your-key>
```

Run:
```bash
npm run dev    # nodemon
npm start      # production
```

Server: http://localhost:3000

### 2. Frontend

```bash
cd Frontend
npm install
npm run dev
```

App: http://localhost:5173

---

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register |
| POST | `/api/auth/login` | Login |
| GET | `/api/auth/logout` | Logout |
| GET | `/api/auth/get-me` | Current user |

### Interview
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/interview/` | Generate report |
| GET | `/api/interview/report/:id` | Get report |
| GET | `/api/interview/` | All reports |
| POST | `/api/interview/resume/pdf/:id` | Download PDF |

---

## Environment Variables

| Key | Required | Description |
|-----|----------|-------------|
| `MONGO_URI` | Yes | MongoDB connection string |
| `JWT_SECRET` | Yes | JWT signing secret |
| `GOOGLE_GENAI_API_KEY` | Yes | Google GenAI key |

---

## Notes

- Root `node_modules/` is orphaned — delete it, `Backend/` and `Frontend/` each have their own
- No tests configured
- JWT stored in cookies (not localStorage) for XSS protection
- `AuthProvider` loading starts as `true` to prevent flash-of-login on reload

---

## License

ISC
