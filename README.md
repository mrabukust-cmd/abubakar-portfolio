# Abubakar Siddique — Developer Portfolio

A production-ready, dark-themed personal portfolio website built with **React.js**, **Vite**, **Framer Motion**, and **React Icons**. 

Designed specifically for **Abubakar Siddique** (Software Engineering Student & Flutter Developer) to showcase real-world mobile applications, technical skills, academic journey, and contact options.

---

## 🚀 Tech Stack

- **Framework**: React.js (Vite)
- **Styling**: Custom Dark Design System (Vanilla CSS3 & HSL Slate Palette)
- **Animations**: Framer Motion
- **Icons**: React Icons (FontAwesome & Simple Icons)
- **Interactive Feedback**: Canvas Confetti
- **Deployment**: Vercel ready

---

## 📁 Project Architecture

```text
d:\portfolio\
├── index.html
├── package.json
├── vercel.json
├── README.md
├── src/
│   ├── assets/
│   │   └── images/          # Project mockups & hero visuals
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky glassmorphism header & drawer
│   │   ├── Hero.jsx          # Hero section + interactive Dart code visual & stats
│   │   ├── About.jsx         # Background story + Development Philosophy card
│   │   ├── Skills.jsx        # Categorized skills grid (Mobile, Backend, Real-Time, SE)
│   │   ├── Projects.jsx      # Filterable project gallery
│   │   ├── ProjectCard.jsx   # Project cards with tags & links
│   │   ├── ProjectModal.jsx  # Detailed modal overlay (Problem/Solution/Tech/Challenges)
│   │   ├── Journey.jsx       # Development journey timeline
│   │   ├── Services.jsx      # "What I Can Build" services grid
│   │   ├── GithubSection.jsx # "Building in Public" section + terminal graphic
│   │   ├── Contact.jsx       # Contact form + direct social links
│   │   └── Footer.jsx        # Footer branding & quick navigation
│   ├── data/
│   │   ├── profile.js        # Personal details, bio, philosophy, stats & journey
│   │   ├── projects.js       # ZiloLive, Copono, Mentora, School Management System
│   │   ├── skills.js         # Skill categories & tech stack items
│   │   └── services.js       # Core service offerings
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Core CSS variables, typography & layout utilities
```

---

## ⚡ Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates optimized static assets inside `dist/`.

---

## 🛠️ Customization Guide

All text content, social links, and project details are decoupled from UI components. You can update your portfolio content in a single place:

### Update Profile Info
Edit `src/data/profile.js`:
- `name`, `title`, `email`, `status`
- `socials` (GitHub, LinkedIn)
- `aboutText`, `philosophy`, `stats`, `journey`

### Update Projects
Edit `src/data/projects.js`:
- Add or modify projects (ZiloLive, Copono, Mentora, School Management System)
- Change images, technologies, GitHub links, and deep-dive modal descriptions.

### Update Skills & Services
Edit `src/data/skills.js` and `src/data/services.js`.

---

## ☁️ Vercel Deployment

1. Push your repository to **GitHub**.
2. Connect your GitHub repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect **Vite** and set the build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your website will be live at a custom `.vercel.app` URL.

---

## 📄 License
© 2026 Abubakar Siddique. All rights reserved.
