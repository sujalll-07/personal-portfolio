# Sujal Shetty – Portfolio

A modern, animated developer portfolio built with **React**, **Vite**, **Framer Motion**, and custom CSS. The site uses a black‑and‑white gradient aesthetic with subtle color accents and a playful access‑gate intro.

## Tech Stack
- **Frontend**: React + Vite
- **Styling**: Custom CSS (no utility framework), gradients, flexbox, CSS grid
- **Animation**: Framer Motion
- **Syntax Highlighting**: `react-syntax-highlighter` (VSC Dark+ theme)
- **Icons**: Font Awesome

## App Flow

1. **Access Gate (Riddle Screen)**
   - The first screen is a gate that asks a riddle:
     > I am an odd number. Take one letter away and I become even. What number am I?
   - Correct answer: **7**.
   - On correct submission, a success state is shown for ~1 second, then the app transitions to a loading screen.

2. **Loading Experience**
   - A full‑screen loader simulates a boot‑up/progress experience before revealing the main portfolio.
   - After the loader completes, the main app is mounted.

3. **Main Portfolio Layout**
   - Fixed **navbar** with section links.
   - Sections in order:
     1. **Home (Hero)**
     2. **About Me**
     3. **Skills**
     4. **Projects**
     5. **Life Beyond Coding (Gallery)**
     6. **Get in Touch (Contact)**
   - Each section uses Framer Motion for entrance animations and smooth scrolling from the navbar.

## Components & Sections

### Navbar (`src/components/Navbar.jsx`)
- Animated fixed navbar with logo text: **“Sujal's Portfolio”**.
- Uses Framer Motion for slide‑in and hover scaling.
- Navigation links (anchor IDs):
  - `#home`
  - `#about`
  - `#skills`
  - `#projects`
  - `#gallery`
  - `#contact`

### Hero (`src/components/Hero.jsx`)
- Full‑viewport hero with black‑to‑white gradient background.
- **Typewriter name/role:** cycles phrases like "Sujal Shetty", "Web Developer", "Chessaholic♟️", "Designer".
- Subtitle: _“Learning Developer & Creative Designer”_.
- Short description about building beautiful, functional digital experiences.
- Call‑to‑action buttons:
  - **View My Work** → `#projects`
  - **Contact Me** → `#contact`
- Social links row (GitHub, LinkedIn, Instagram, Chess.com) with hover tooltips and animations.
- Right side shows a floating code panel with a TypeScript‑style `aboutMe` object and a floating mini‑card that animates up and down.

### About Me (`src/components/About.jsx`)
- Black‑and‑white gradient background, centered section title:
  - Kicker: **About Me**
  - Title: **“Engineering Student & Developer”** (with white highlight on `& Developer`).
- **Avatar**
  - Glowing circular avatar ring.
  - Uses `public/avatar.jpg` as a circular profile image.
  - `object-fit: cover` and `object-position` tuned so the face is visible inside the ring.
- **Description**
  - Two paragraphs about being an engineering student/dev, interested in tech, design, business and shipping impactful products.
- **Education block**
  - **Computer Engineering**
  - Fr. Conceicao Rodrigues College of Engineering
  - Graduation: **2029**
- **Feature cards row** with hover animation and teal box shadow:
  - **Web Development** – Full‑stack development with modern technologies.
  - **UI/UX Design** – Creating intuitive and beautiful interfaces.
  - **Problem Solving** – Analytical thinking with practical solutions.
  - **Stock Market** – Exploring markets, price action, and long‑term investing.

### Skills (`src/components/Skills.jsx`)
- Section title: **Skills / Tech Stack**.
- Subtitle: _“My core technologies — the stack I use to turn ideas into polished results.”_
- Black‑and‑white gradient background.
- Responsive grid of skill cards, each with:
  - White circular logo container displaying a colored logo (`/skills/*.svg`).
  - Name + percentage.
  - Black‑and‑white progress bar.
- Skills configured:
  - **HTML** – 100%
  - **CSS** – 100%
  - **JavaScript** – 85%
  - **Tailwind CSS** – 100%
  - **Next.js** – 70%
  - **C** – 100%
  - **Python** – 60%
- Hover animation: cards lift slightly, scale up, and get a teal `#00b8ae` glow via box‑shadow.

### Projects (`src/components/Projects.jsx`)
- Section title: **“My Projects (In Future)”**.
- Gradient background matched with the overall theme.
- Uses a CSS grid to show three project cards:
  1. **AI SaaS Platform** – Next.js + OpenAI demo UI.
  2. **Social Media Dashboard** – React/Node/MongoDB dashboard.
  3. **Productivity Timer** – React + TypeScript app.
- Each card includes:
  - Project image (`public/projects/ai-saas.jpg`, `social-media.jpg`, `stopwatch.jpg`).
  - Title and short description.
  - Tech badges row.
- Cards share the same hover animation and teal box‑shadow as About/Skills.

### Life Beyond Coding – Gallery (`src/components/Gallery.jsx`)
- Section ID: `gallery`, heading: **“Life Beyond Coding”** (centered, black text).
- Uses the same `project-card` styles so gallery and projects look consistent.
- Responsive grid of **9** cards, each using `public/projects/imageX.jpg`.
- Captions and `alt` text are driven by a `galleryCaptions` map:
  1. **Malabar Hill Skywalk**
  2. **Velankanni Beach**
  3. **Café Coffee Day**
  4. **Chinchpokli Cha Chintamani**
  5. **Balaji Temple(Mira-Road)**
  6. **PVR Mira Road**
  7. **Chess Tournament**
  8. **Cutie Cat**
  9. **Marine Lines**
- Captions appear centered in a dark rounded bar at the bottom of each card.
- Media (images) use `object-fit: cover` so vertical photos fill the card without distortion.

### Contact – Get in Touch (`src/components/Contact.jsx`)
- Section title: **“Get in Touch”**.
- Simple contact form:
  - Name
  - Email
  - Message
- All fields required; submission simulates success (no backend) and clears the form.
- Status message box shows success feedback.
- Black‑and‑white themed inputs and submit button with a subtle gradient effect on hover.

### Footer
- Animated `motion.footer` with centered text:
  - `© 2025 Sujal Shetty. All rights reserved.`

## Styling Overview
- Global theme variables defined in `src/App.css` (`:root`) for colors and backgrounds.
- Heavy use of **linear and radial gradients** for sections.
- **CSS Grid** for project and gallery cards.
- **Framer Motion** variants for fade‑in and slide animations across sections.
- Consistent teal accent color (`#00b8ae`) used for hover glows on cards.

## Assets

Place the following in `public/`:

- **Avatar**
  - `avatar.jpg` – circular profile image used in the About section.

- **Project images** (in `public/projects/`):
  - `ai-saas.jpg`
  - `social-media.jpg`
  - `stopwatch.jpg`

- **Gallery images** (in `public/projects/`):
  - `image1.jpg` … `image9.jpg` corresponding to the captions above.

- **Skill logos** (in `public/skills/`):
  - `html.svg`
  - `css.svg`
  - `javascript.svg`
  - `tailwind.svg`
  - `nextjs.svg`
  - `c.svg`
  - `python.svg`

## Running the Project

```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

Open the dev server URL (usually `http://localhost:5173`) to view the portfolio.

## Future Enhancements
- Integrate a real backend/email service for the contact form.
- Add more real projects once they are completed.
- Improve accessibility (ARIA attributes, color contrast checks).
- Optional theme toggle (light/dark or accent color switch).

<div align="center">
  <br />
  <a href="https://youtu.be/KSQOPRea-P4" target="_blank">

  <img width="1280" height="720" alt="Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of 10,000 REACT COMPONENTS (3)" src="https://github.com/user-attachments/assets/44608dad-40be-4a71-ae43-a0a76f1505d8" />

  </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/-Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-EmailJS-FF5C83?style=for-the-badge&logo=emailjs&logoColor=white" alt="EmailJS" />
  </div>
  <h3 align="center">Craft a Stunning Personal Portfolio with Vite, React & Framer Motion</h3>
  <div align="center">
    Follow the full video tutorial on  
    <a href="https://youtu.be/YOUR_VIDEO_ID" target="_blank"><b>YouTube</b></a>
  </div>
  <br />
</div>

## 📋 Table of Contents

1. [Introduction](#-introduction)
2. [Tech Stack](#-tech-stack)
3. [Features](#-features)
4. [Quick Start](#-quick-start)
5. [Screenshots](#-screenshots)
6. [Deployment](#-deployment)

---

## 🚀 Introduction

In this comprehensive tutorial, you’ll build a modern **Developer Portfolio** from scratch using **Vite**, **React**, and **Framer Motion**. You’ll implement an animated navbar, glitch title effect, floating cards, responsive hero, projects grid, a fully working contact form powered by EmailJS, and an animated footer—then deploy to Vercel.

**Timestamps at a glance:**

* 00:00 Intro & What We’ll Build
* 12:04 Animated Navbar with Framer Motion
* 31:49 Hero Section Entrance Animation
* 40:49 Glitch Title Effect
* 55:12 Syntax‑Highlighted Code Block
* 57:05 Floating Card Animation
* 1:14:03 Projects Grid Layout
* 1:36:04 Contact Section UI
* 1:50:47 EmailJS Configuration
* 2:09:38 Animated Footer
* 2:13:02 Deploying to Vercel

🎥 Watch the full tutorial: [YouTube](https://youtu.be/KSQOPRea-P4)

---

## ⚙️ Tech Stack

* **Vite** – Next‑generation frontend tooling
* **React 18** – Component‑based UI
* **Framer Motion** – Fluid animations & gestures
* **TailwindCSS** – Utility‑first styling
* **EmailJS** – Client‑side email sending
* **TypeScript** (optional) – Static type checking

---

## ⚡️ Features

* ✨ **Animated Navbar**
  Smooth entrance and hover states built with Framer Motion.

* 🚀 **Hero Section**
  Engaging entrance animation, glitch title effect & call‑to‑action buttons.

* 🃏 **Floating Card**
  Interactive profile card floating on scroll.

* 💻 **Embedded Code Block**
  Syntax-highlighted code snippet in the hero.

* 🎨 **Projects Showcase**
  Responsive grid of project cards with glassy hover effects.

* 📱 **Mobile Responsiveness**
  Tweaks for a perfect experience on all screen sizes.

* 📨 **Contact Form**
  Styled form with glassy submit button, integrated with EmailJS.

* 🎬 **Animated Footer**
  Subtle motion effects to wrap up the page.

* ☁️ **One‑Click Deployment**
  Deploy your portfolio to Vercel in seconds.

---

## 👌 Quick Start

### Prerequisites

* [Node.js](https://nodejs.org/) (v14+)
* [EmailJS Account](https://www.emailjs.com/)

### Clone and Run

```bash
git clone https://github.com/yourusername/portfolio-vite-framer.git
cd portfolio-vite-framer
npm install
```

1. Copy `.env.example` to `.env.local` and add your EmailJS service ID, template ID & public key.
2. Start the development server:

   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🖼️ Screenshots

<img width="1200" alt="Hero Animation" src="https://github.com/user-attachments/assets/hero-screenshot.png" />  
<img width="1200" alt="Projects Grid" src="https://github.com/user-attachments/assets/projects-screenshot.png" />  
<img width="1200" alt="Contact Form" src="https://github.com/user-attachments/assets/contact-screenshot.png" />

---

## ☁️ Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/) and import your repo
3. Add your EmailJS keys as Environment Variables in Vercel dashboard
4. Click **Deploy** — your live portfolio will be online in moments!

---

## 🔗 Useful Links

* [Vite Docs](https://vitejs.dev/)
* [React Docs](https://reactjs.org/docs)
* [Framer Motion Docs](https://www.framer.com/motion/)
* [Tailwind CSS Docs](https://tailwindcss.com/docs)
* [EmailJS Docs](https://www.emailjs.com/docs/)
* [Vercel](https://vercel.com/)

---
