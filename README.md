# kavan.it — Developer Portfolio & Services Hub

Modern, minimalist developer portfolio and operational services dashboard for **Kavan T.** (DevOps Engineer & Python Specialist).

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**, designed according to the `DESIGN.md` specification and rebuilt from the Google Stitch prototype (`code.html`).

---

## 🚀 Features & Architecture

- **Ultra-Fast Single Page Application (SPA)**: Powered by Vite for instant Hot Module Replacement (HMR) and optimized static production builds.
- **Strict Monospace & Minimalist Terminal Aesthetic**:
  - Headings in **Inter**
  - Content, metrics, and code tags in **JetBrains Mono**
  - Crisp 1px hairline borders and calibrated dark surface hierarchy (`#101418` / `#14171A` / `#1C2024`)
- **Bidirectional Light / Dark Mode**:
  - Smooth theme toggle button with animated icons
  - Supports modern Chrome/Safari circular ripple expansion effect (`document.startViewTransition`)
  - Prevents theme flash (FOUC) on page load and persists user preference in `localStorage`
- **Dynamic Age Calculation**: Automatically computes current age from birthdate (`1999-08-10`) so the profile never goes out of date.
- **Accessible CV Modal**:
  - English and French CV options opening in new tabs (`target="_blank"`)
  - Animated backdrop and scale transitions
  - Accessible via `Escape` key and outside-click dismiss
- **Self-Hosted Services Grid**: Live status indicators (`[ ONLINE ]` ping) and links to self-hosted subdomains under `kezzer.dev` (`browser`, `cloud`, `passwords`, `tools`, `watch`).
- **Production-Ready Docker & Nginx Setup**: Multi-stage Docker build producing an ultra-lightweight Nginx alpine image with gzip compression, caching, and security headers.

---

## 📁 Project Structure

```text
├── public/                     # Static assets served as-is
│   └── favicon.svg             # Terminal SVG favicon
├── src/
│   ├── components/             # Modular React UI components
│   │   ├── Header.tsx          # Top navigation bar with handle & theme toggle
│   │   ├── Hero.tsx            # Introduction, bio with dynamic age, & CV button
│   │   ├── Services.tsx        # Self-hosted operational services grid
│   │   ├── Experience.tsx      # Systems & engineering timeline
│   │   ├── Footer.tsx          # Footer with social links (GitHub, LinkedIn)
│   │   ├── CvModal.tsx         # CV language selection modal (opens in new tab)
│   │   └── ThemeToggle.tsx     # Theme switcher with animated icons
│   ├── data/
│   │   └── portfolioData.ts    # ALL profile, services, and experience data (edit here!)
│   ├── hooks/
│   │   └── useTheme.ts         # Theme hook with view-transition ripple
│   ├── utils/
│   │   └── age.ts              # Birthdate age calculator
│   ├── types.ts                # TypeScript interfaces
│   ├── App.tsx                 # Root layout component
│   ├── index.css               # Design tokens, fonts, and theme animations
│   └── main.tsx                # React application entry point
├── Dockerfile                  # Multi-stage production container build
├── docker-compose.yml          # Container orchestration (port 8080)
├── nginx.conf                  # Hardened Nginx server configuration
├── index.html                  # HTML entry point with font preloads
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite + Tailwind CSS plugin setup
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v18 or newer; v22 recommended)
- **npm** (or pnpm / yarn)
- *(Optional)* **Docker** & **Docker Compose** for containerized hosting

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

### Production Build

To compile and bundle optimized static HTML/CSS/JS files:

```bash
npm run build
```

The output will be placed in the `dist/` directory. You can preview this build locally with:

```bash
npm run preview
```

---

## 🐳 Docker Deployment (Self-Hosting)

A multi-stage `Dockerfile` and `docker-compose.yml` are included, tailored for self-hosting behind reverse proxies such as Traefik, Nginx Proxy Manager, or Caddy.

### Run with Docker Compose

```bash
docker compose up -d --build
```

Your website will be live at `http://localhost:8080`.

### Stop the container

```bash
docker compose down
```

### Traefik Reverse-Proxy Example

In `docker-compose.yml`, uncomment the labels section to integrate with Traefik and automatic Let's Encrypt TLS:

```yaml
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.portfolio.rule=Host(`kavan.it`)"
      - "traefik.http.routers.portfolio.entrypoints=websecure"
      - "traefik.http.routers.portfolio.tls.certresolver=letsencrypt"
```

---

## ✏️ How to Customize Content

You do not need to hunt through HTML or CSS to update your personal information:

Open [src/data/portfolioData.ts](file:///home/ares/projects/kezzer-dev_v2/src/data/portfolioData.ts) to edit:
- Your name, bio, birthdate, email, and social links.
- Self-hosted service tiles (names, URLs, descriptions, status).
- CV links (French and English URLs).
- Experience entries, dates, company names, and skill chips.
