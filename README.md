# 💼 Workora

> **A modern full-stack job portal connecting job seekers and recruiters through a streamlined, skill-focused hiring experience.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://workora-theta.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge\&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge\&logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge\&logo=express)](https://expressjs.com/)

---

## 🌐 Live Demo

### 🚀 Workora

**Frontend:** https://workora-theta.vercel.app/

> If the backend is deployed separately, add the backend API URL here.

---

## 📌 About Workora

**Workora** is a full-stack MERN job portal designed to simplify the process of discovering jobs, applying for opportunities, and managing recruitment workflows.

The platform provides separate experiences for **job seekers and recruiters**, allowing candidates to discover relevant opportunities while recruiters can manage companies, create job listings, and handle applications.

The project follows a modern client-server architecture:

```text
React Frontend
      ↓
REST API
      ↓
Node.js + Express
      ↓
MongoDB
```

The repository is organized into independent `frontend` and `backend` applications.

---

# 🎯 Problem Statement

Traditional job portals can make the hiring process overwhelming for both candidates and recruiters.

### For job seekers

Candidates often need to:

* Search through large numbers of jobs
* Filter opportunities manually
* Track applications
* Maintain their profile
* Review individual job descriptions

### For recruiters

Recruiters need to:

* Manage company information
* Create job postings
* Receive applications
* Review candidates
* Manage hiring workflows

**Workora brings these workflows together into a single platform.**

---

# 💡 What Makes Workora Different?

Workora is designed around a more **candidate-focused and skill-oriented hiring experience** rather than being only a traditional job listing website.

### 🧠 Skill-Focused Job Discovery

Instead of relying only on job titles, Workora can be extended toward matching candidates with opportunities based on:

* Skills
* Experience
* Job preferences
* Profile information
* Job requirements

This creates a foundation for future intelligent job recommendations.

### 🎯 Two-Sided Platform

Workora is designed for both sides of the hiring process:

```text
                 WORKORA
                    │
          ┌─────────┴─────────┐
          │                   │
          ▼                   ▼
     JOB SEEKERS         RECRUITERS
          │                   │
      Find Jobs          Post Jobs
      Apply             Manage Jobs
      Profile           Manage Company
      Track Apps        Review Applicants
```

### 🚀 Future-Ready Architecture

The project architecture makes it possible to add advanced functionality such as:

* AI-powered job matching
* Resume parsing
* Skill-gap analysis
* Candidate recommendations
* AI-assisted job descriptions
* Interview preparation
* Career analytics

These can be added without replacing the existing core architecture.

---

# ✨ Key Features

## 👨‍💻 For Job Seekers

### 🔐 Authentication

Users can create accounts and log in through dedicated authentication flows.

* Signup
* Login
* Protected user workflows
* JWT-based authentication

### 🔎 Job Discovery

Candidates can browse available opportunities through the job listing interface.

### 🧭 Job Browsing

Workora provides a dedicated browse experience for discovering available jobs.

### 📄 Job Details

Candidates can open individual job descriptions to review:

* Job title
* Company
* Requirements
* Description
* Other job-related information

### 📝 Job Applications

Candidates can apply for available positions and manage their application-related information.

### 👤 Profile Management

Users can manage their professional profile through the profile interface.

### 📋 Applied Jobs

The frontend contains an `AppliedJobTable` component for displaying application-related information.

---

# 🏢 For Recruiters

### 🏭 Company Management

Recruiter-side functionality includes company management through dedicated backend controllers, models and routes.

### 📢 Job Posting

Recruiters can create and manage job opportunities.

### 👥 Application Management

Applications are handled through dedicated backend application routes and controllers.

### 🗂️ Job Management

Jobs are represented through dedicated models, controllers and routes, providing a structured backend architecture.

---

# 🎨 Frontend Features

The React frontend currently includes:

* Home page
* Login
* Signup
* Job listing
* Job description
* Browse jobs
* User profile
* Applied job table
* Job cards
* Latest jobs
* Category carousel
* Filters
* Profile update dialog
* Shared UI components

These components are organized under `frontend/src/components`.

---

# 🖼️ Project Preview

> **Recommended:** Add real screenshots here. A strong hero image is especially valuable for a pinned GitHub repository.

### 🏠 Home Page

![Workora Home](./screenshots/home.png)

### 🔎 Job Search

![Workora Jobs](./screenshots/jobs.png)

### 📄 Job Description

![Workora Job Description](./screenshots/job-description.png)

### 👤 Profile

![Workora Profile](./screenshots/profile.png)

### 📋 Applications

![Workora Applications](./screenshots/applications.png)

---

# 🛠️ Technology Stack

## Frontend

| Technology       | Purpose                       |
| ---------------- | ----------------------------- |
| React 19         | UI development                |
| React Router DOM | Application routing           |
| Redux Toolkit    | Global state management       |
| React Redux      | Redux integration             |
| Axios            | API communication             |
| Tailwind CSS     | Styling                       |
| Framer Motion    | Animations                    |
| Radix UI         | Accessible UI primitives      |
| Lucide React     | Icons                         |
| Vite             | Development and build tooling |

The current frontend `package.json` confirms React 19, React Router DOM 7, Redux Toolkit, Axios, Tailwind CSS, Framer Motion, Radix UI and Vite.

---

## Backend

| Technology    | Purpose                        |
| ------------- | ------------------------------ |
| Node.js       | Backend runtime                |
| Express.js    | REST API                       |
| MongoDB       | Database                       |
| Mongoose      | MongoDB ODM                    |
| JWT           | Authentication                 |
| bcryptjs      | Password hashing               |
| Cookie Parser | Authentication/session cookies |
| CORS          | Cross-origin communication     |
| Multer        | File uploads                   |
| Cloudinary    | Cloud-based media storage      |
| dotenv        | Environment configuration      |
| Nodemon       | Development server             |

These dependencies are defined in the backend package configuration.

---

# 🏗️ Architecture

Workora follows a **MERN-based client-server architecture**.

```text
┌──────────────────────────────────────────────┐
│                 WORKORA                      │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│              React Frontend                  │
│                                              │
│  Home │ Jobs │ Browse │ Profile │ Auth       │
│                                              │
│  Redux Toolkit │ Axios │ React Router        │
└──────────────────────┬───────────────────────┘
                       │
                       │ HTTP / REST API
                       ▼
┌──────────────────────────────────────────────┐
│             Node + Express API               │
│                                              │
│  Controllers │ Routes │ Middleware            │
│                                              │
│  Authentication │ Jobs │ Companies            │
│  Users │ Applications                         │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│                  MongoDB                     │
│                                              │
│  Users │ Jobs │ Companies │ Applications     │
└──────────────────────────────────────────────┘
```

The backend entry point registers dedicated routers for users, companies, jobs and applications.

---

# 📂 Project Structure

```text
Workora/
│
├── backend/
│   │
│   ├── configs/
│   │
│   ├── controllers/
│   │   ├── application.controller.js
│   │   ├── company.controller.js
│   │   ├── job.controller.js
│   │   └── user.controller.js
│   │
│   ├── middlewares/
│   │
│   ├── models/
│   │   ├── application.model.js
│   │   ├── company.model.js
│   │   ├── job.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── application.route.js
│   │   ├── company.route.js
│   │   ├── job.route.js
│   │   └── user.route.js
│   │
│   ├── utils/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   ├── shared/
│   │   │   ├── ui/
│   │   │   ├── Browse.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Job.jsx
│   │   │   ├── Jobs.jsx
│   │   │   ├── JobDescription.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── ...
│   │   │
│   │   ├── lib/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── unique.text
└── README.md
```

The actual repository contains dedicated backend controllers/models/routes for users, companies, jobs and applications, while the frontend separates authentication, shared UI and feature components.

---

# 🔐 Authentication & Security

Workora uses several backend technologies to support authentication and secure application workflows:

* JWT
* bcryptjs
* HTTP cookies
* Cookie parser
* CORS
* Protected API workflows

Passwords are handled using hashing through `bcryptjs`, while JWT is included for token-based authentication.

> **Security Notice:** Never commit your `.env` file or production secrets to GitHub.

---

# 🔌 API Architecture

The backend exposes REST-style API groups for the major application domains:

```text
/api/v1/user
/api/v1/company
/api/v1/job
/api/v1/application
```

These route groups are registered by the Express application.

### User API

```text
/api/v1/user/*
```

Handles user-related functionality.

### Company API

```text
/api/v1/company/*
```

Handles company-related functionality.

### Job API

```text
/api/v1/job/*
```

Handles job creation and job-related operations.

### Application API

```text
/api/v1/application/*
```

Handles job application workflows.

---

# ⚙️ Local Development Setup

## Prerequisites

Install the following:

* Node.js
* npm
* MongoDB
* Git

---

## 1. Clone the Repository

```bash
git clone https://github.com/Shivam8175/Workora.git
cd Workora
```

---

# 🖥️ Backend Setup

Open a terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> Use the exact environment-variable names expected by the backend configuration in your local version.

Start development server:

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

The backend package defines both `dev` and `start` scripts.

---

# 🌐 Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

The frontend uses Vite and provides `dev`, `build`, `lint`, and `preview` scripts.

---

# 🔗 Frontend ↔ Backend

For local development:

```text
Frontend
http://localhost:5173

       ↓

Backend
http://localhost:3000

       ↓

MongoDB
```

The current Express configuration allows the Vite development origin and enables credentials for cross-origin requests.

---

# 📱 Main Frontend Routes

| Route              | Purpose            |
| ------------------ | ------------------ |
| `/`                | Home               |
| `/login`           | User login         |
| `/signup`          | User registration  |
| `/job`             | Job listings       |
| `/description/:id` | Job details        |
| `/browse`          | Browse/search jobs |
| `/profile`         | User profile       |

These routes are currently defined in `frontend/src/App.jsx`.

---

# 🧠 Design Decisions

## Component-Based React Architecture

The frontend is divided into reusable components and feature-specific components to make the application easier to maintain.

## Redux Toolkit

Redux Toolkit is used for centralized client-side state management.

## REST API Architecture

The frontend communicates with the backend through HTTP API requests rather than directly accessing the database.

## MVC-Inspired Backend Organization

The backend separates:

```text
Routes
   ↓
Controllers
   ↓
Models
   ↓
MongoDB
```

This separation makes the backend easier to extend and maintain.

## Separate Frontend & Backend

Keeping the frontend and backend separate allows them to be developed, tested and deployed independently.

---

# 🚀 Future Improvements

Workora has a strong foundation for several advanced features.

### 🤖 AI Job Matching

Calculate a compatibility score between:

```text
Candidate Skills
        +
Experience
        +
Job Requirements
        ↓
   Match Score %
```

### 📄 AI Resume Analysis

Automatically extract:

* Skills
* Experience
* Education
* Projects
* Certifications

from uploaded resumes.

### 🧭 Skill Gap Analysis

Show candidates:

> "You match 78% of this job. Improve these 3 skills to increase your chances."

### 💬 Recruiter-Candidate Chat

Enable real-time communication between recruiters and candidates.

### 🎥 Video Resume

Allow candidates to create short video introductions.

### 🧪 Skill-Based Assessments

Recruiters could create coding or technical assessments before shortlisting candidates.

### 📊 Career Analytics

Provide candidates with:

* Applications sent
* Interviews received
* Shortlist rate
* Most requested skills
* Job-market trends

### 🏢 Verified Companies

Introduce verified company profiles and trust indicators.

### 🔔 Smart Job Alerts

Notify candidates when a new job strongly matches their profile.

---

# 🎥 Project Walkthrough

## Product Demo

> Add a 1–3 minute video showing the complete user experience.

```text
🎥 Demo:
YOUR_VIDEO_URL
```

## Codebase Walkthrough

> Add a 1–5 minute walkthrough explaining the frontend, backend, database and architecture.

```text
🎥 Codebase:
YOUR_VIDEO_URL
```

---

# 📸 Recommended GitHub Screenshots

For a professional pinned repository, add:

```text
screenshots/
├── hero.png
├── home.png
├── jobs.png
├── job-description.png
├── browse.png
├── login.png
├── signup.png
├── profile.png
└── applications.png
```

Then add them to this README:

```markdown
![Workora Home](./screenshots/home.png)
```

### ⭐ Hero Image Recommendation

Use your best dashboard/home screenshot as the README hero image:

```markdown
<p align="center">
  <img src="./screenshots/hero.png" alt="Workora Job Portal" width="100%">
</p>
```

This will make the repository much more attractive when someone opens your pinned project.

---

# 🧪 Testing Checklist

Before presenting Workora to recruiters:

* [ ] Signup works
* [ ] Login works
* [ ] Logout works
* [ ] Jobs load correctly
* [ ] Job search works
* [ ] Job filters work
* [ ] Job details open correctly
* [ ] Applications work
* [ ] Profile updates work
* [ ] Recruiter workflows work
* [ ] Company creation works
* [ ] Job creation works
* [ ] Backend APIs work
* [ ] MongoDB connection works
* [ ] Production frontend works
* [ ] Production backend works
* [ ] Environment variables are configured
* [ ] No secrets are committed

---

# 📚 What I Learned

Building Workora provided hands-on experience with:

* MERN stack development
* React 19
* REST API development
* MongoDB and Mongoose
* JWT authentication
* Password hashing
* Redux Toolkit
* React Router
* Tailwind CSS
* File uploads
* Cloudinary
* Frontend/backend integration
* API architecture
* Database modeling
* Role-based application workflows
* Full-stack project deployment

---

# 🤝 Contributing

Contributions, suggestions and improvements are welcome.

### 1. Fork the repository

### 2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

### 3. Make your changes

### 4. Commit your changes

```bash
git commit -m "feat: add your feature"
```

### 5. Push your branch

```bash
git push origin feature/your-feature
```

### 6. Open a Pull Request

---

# 📄 License

This project is currently intended primarily as a portfolio and learning project.

---

# 👨‍💻 Author

## Shivam Thakre

Full-Stack / MERN Developer

**GitHub:**
https://github.com/Shivam8175

**Project:**
https://github.com/Shivam8175/Workora

**Live Demo:**
https://workora-theta.vercel.app/

---

# ⭐ Support

If you found Workora interesting, consider giving the repository a ⭐.

### Built with

**React • Node.js • Express • MongoDB • Redux Toolkit • Tailwind CSS**
