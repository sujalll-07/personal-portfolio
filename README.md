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


