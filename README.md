# Abubakar Siddique — Developer Portfolio

[![CI Pipeline](https://github.com/mrabukust-cmd/abubakar-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/mrabukust-cmd/abubakar-portfolio/actions/workflows/ci.yml)

A production-ready, dark/light themed personal portfolio website built with **React.js**, **Vite**, **Framer Motion**, and **React Icons**. 

Designed specifically for **Abubakar Siddique** (Software Engineering Student & Flutter Developer) to showcase real-world mobile applications, technical skills, academic journey, and contact options.

---

## 🚀 Tech Stack

- **Framework**: React.js (Vite)
- **Styling**: Nordic Architectural Design System (Vanilla CSS3 Tokens & Theme Switcher)
- **Animations**: Framer Motion
- **Typography**: Instrument Serif, Syne, DM Sans, Space Mono
- **Icons**: React Icons (FontAwesome & Simple Icons)
- **Deployment**: Vercel ready

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Available quality checks:

```bash
npm run lint
npm test
npm run build
```

The CI workflow runs these same checks for every pull request and push to
`main`, so changes are validated before deployment.

For a single local verification command, run `npm run check`.

### Accessibility

The portfolio includes a skip link, visible keyboard focus styles, semantic
navigation landmarks, and reduced-motion support. Check the site with keyboard
navigation after making UI changes to preserve these safeguards.

The repository targets Node.js 20 or newer. If you use `nvm`, run `nvm use`
from the project root to select the version recorded in `.nvmrc`.

The contact form uses the mail client fallback by default. To enable Web3Forms,
copy `.env.example` to `.env.local` and add `VITE_WEB3FORMS_KEY`.

Never commit `.env.local` or expose the Web3Forms key in documentation. Vite
only exposes variables prefixed with `VITE_`, so keep production secrets in
your hosting provider's environment settings.

---

## 📁 Project Architecture

```text
portfolio/
├── index.html
├── package.json
├── vercel.json
├── README.md
├── src/
│   ├── assets/
│   │   └── images/          # Project mockups & profile imagery
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation header & theme toggle
│   │   ├── Hero.jsx          # Hero section + interactive Dart code visual & stats
│   │   ├── About.jsx         # Story, Engineering Philosophy & 4-step Approach
│   │   ├── Projects.jsx      # Grouped project showcase & contribution summaries
│   │   ├── ProjectCard.jsx   # Project card component
│   │   ├── ProjectModal.jsx  # Deep-dive project modal overlay
│   │   ├── Skills.jsx        # Categorized technical skills stack
│   │   ├── Journey.jsx       # Academic & development path timeline
│   │   ├── GithubSection.jsx # "Building in Public" terminal activity panel
│   │   ├── Contact.jsx       # Contact form + direct social links
│   │   ├── ResumeModal.jsx   # Printable developer CV overlay
│   │   ├── ScrollToTop.jsx   # Back-to-top floating button
│   │   ├── AnimatedCounter.jsx # Animated statistics counter
│   │   ├── __tests__/
│   │   │   ├── App.test.jsx     # Application smoke and data tests
│   │   │   └── Contact.test.jsx # Contact component tests
│   │   └── Footer.jsx        # Footer branding & quick links
│   ├── data/
│   │   ├── profile.js        # Bio, stats, journey timeline & engineering approach
│   │   ├── projects.js       # Mentora, ZiloLive, School Management System
│   │   ├── skills.js         # Skill categories & tech stack items
│   │   ├── navigation.js     # Nav items and icons
│   │   └── socialLinks.js    # Contact email, GitHub & LinkedIn URLs
│   ├── styles/
│   │   └── modal-shared.css  # Shared modal chrome styles
│   ├── utils/
│   │   └── iconMap.jsx       # Icon and demo-type mappings
│   ├── test/
│   │   └── setup.js          # Vitest setup
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Design tokens, typography & global layout rules
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
- `aboutText`, `philosophy`, `howIBuild`, `stats`, `journey`

### Update Projects
Edit `src/data/projects.js`:
- Add or modify projects, roles, team context, and contribution records.
- Change images, technologies, GitHub links, and deep-dive modal descriptions.

### Update Skills
Edit `src/data/skills.js`.

---

## ☁️ Vercel Deployment

1. Push your repository to **GitHub**.
2. Connect your GitHub repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect **Vite** and set the build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your website will be live at a custom `.vercel.app` URL.

### Contact Form Configuration

For production form delivery, add `VITE_WEB3FORMS_KEY` to the Vercel project environment variables and redeploy. If the key is unavailable, the form presents a direct email fallback instead of silently failing.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

- **Source Code**: You are free to use, modify, and distribute the application code under the terms of the MIT License.
- **Personal Content & Imagery**: All personal content, bio details, project descriptions, imagery, and personal branding remain © 2026 Abubakar Siddique. All rights reserved.
