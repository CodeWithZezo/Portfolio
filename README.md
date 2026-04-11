# Zeeshan Saleem — Developer Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Private-red)](#)

A terminal-themed personal portfolio built with **React 19** and **Vite 6**, showcasing backend engineering projects, skills, and experience. Designed to feel like a developer's workspace — not a generic resume site.

**Live at:** [your-domain.com](https://your-domain.com) &nbsp;|&nbsp; [LinkedIn](https://linkedin.com/in/zeeshan-saleem-2a7000379) &nbsp;|&nbsp; [GitHub](https://github.com/codewithzezo)

---

## Features

- **Terminal aesthetic** — command-line UI with typing animation, prompt styling, and monospace design language
- **Dark/light theme** — context-driven theme toggle persisted across the session
- **Animated sections** — fade-in transitions and staggered delays on scroll
- **Responsive layout** — fully mobile-friendly across all breakpoints
- **Resume download** — one-click PDF download served from `/public`
- **Project cards** — per-project metrics, key engineering decisions, and live/in-progress status badges
- **Contact form** — mailto-integrated with social links

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 6 + `@vitejs/plugin-react` |
| Bundler Optimization | Terser (minification) |
| Styling | Custom CSS (CSS variables, no framework) |
| State | React Context API (`ThemeContext`) |
| Hooks | Custom `useTypingEffect` |
| Linting | ESLint |

---

## Project Structure

```
vite-project-upgraded/
├── public/
│   ├── favicon.png
│   └── Zeeshan_Saleem_Resume.pdf   # Served at /Zeeshan_Saleem_Resume.pdf
│
├── src/
│   ├── assets/                     # Static SVGs and images
│   ├── component/
│   │   ├── About.jsx               # About section with "why hire me" grid
│   │   ├── Contact.jsx             # Contact form + social links
│   │   ├── Education.jsx           # Education timeline
│   │   ├── Footer.jsx              # Footer
│   │   ├── Hero.jsx                # Landing section with typing effect & stats
│   │   ├── Navbar.jsx              # Sticky nav with theme toggle
│   │   ├── Projects.jsx            # Project cards with metrics
│   │   ├── Skills.jsx              # Skills grid
│   │   └── UI.jsx                  # Shared UI primitives (TerminalBar, Cursor, etc.)
│   ├── context/
│   │   └── ThemeContext.jsx        # Dark/light theme provider
│   ├── data/
│   │   └── index.js                # All content data (projects, skills, stats, nav links)
│   ├── hooks/
│   │   └── index.js                # useTypingEffect custom hook
│   ├── pages/
│   │   ├── Portfolio.jsx           # Page shell — composes all sections
│   │   └── styles.css              # All styles (~35KB, single stylesheet)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── .gitignore
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/codewithzezo/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

The output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

---

## Customization

All content lives in a single file — no hunting through components:

**`src/data/index.js`** — edit this to update:
- `PROJECTS` — project cards, descriptions, metrics, stack, GitHub links
- `SKILLS` — skill categories and highlighted ("hot") items
- `HERO_STATS` — the four stat cards in the hero section
- `NAV_LINKS` — navigation items

**Resume** — replace `public/Zeeshan_Saleem_Resume.pdf` with your updated PDF. The download link in `Hero.jsx` points to `/Zeeshan_Saleem_Resume.pdf`.

---

## Featured Projects

### Clerk Auth System
Multi-tenant authentication platform with JWT rotation, workspace-scoped RBAC, and Redis-backed session management. Built so cross-tenant data leaks are architecturally impossible.

> Stack: Node.js · TypeScript · Express · MongoDB · Redis · Bull · Docker · GitHub Actions

### Real-Time Analytics Engine
50K events/sec ingestion pipeline with TimescaleDB hypertables and a Redis Sorted Set rolling window, serving live metrics to 5K+ concurrent WebSocket connections.

> Stack: Node.js · TypeScript · Socket.IO · TimescaleDB · Redis · Bull · Docker

---

## Deployment

This is a static site — deploy anywhere that serves static files:

| Platform | Command |
|---|---|
| **Vercel** | `vercel --prod` (auto-detected as Vite) |
| **Netlify** | Drag `dist/` folder or connect repo |
| **GitHub Pages** | `npm run build` → push `dist/` to `gh-pages` branch |
| **AWS S3 + CloudFront** | Sync `dist/` to S3 bucket |

For any platform, set the **build command** to `npm run build` and the **publish directory** to `dist`.

---

## Contact

**Zeeshan Saleem** — Backend Engineer  
📧 [codewithzezo@gmail.com](mailto:codewithzezo@gmail.com)  
🔗 [linkedin.com/in/zeeshan-saleem-2a7000379](https://linkedin.com/in/zeeshan-saleem-2a7000379)  
🐙 [github.com/codewithzezo](https://github.com/codewithzezo)  
📍 Faisalabad, Pakistan — Open to remote or on-site opportunities