# Personal Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page personal portfolio at `index.html` and preserve the current design system as `design-system.html`.

**Architecture:** Keep the project static and dependency-free beyond the existing Tailwind CDN and Google Fonts. The portfolio will live entirely in `index.html`, reuse local assets from `assets/project-showcase`, and link to `design-system.html` for the reference page.

**Tech Stack:** Static HTML, Tailwind CDN, CSS in `<style type="text/tailwindcss">`, Google Fonts, local PNG assets.

---

## File Map

- Modify: `/Users/dikalaksana/Engineering/design-system/index.html`
  - Replace the current design-system reference page with a production portfolio page.
  - Keep reusable component CSS needed for project and experience cards.
- Create: `/Users/dikalaksana/Engineering/design-system/design-system.html`
  - Exact copy of the current design system page before replacing `index.html`.
- Use existing assets:
  - `/Users/dikalaksana/Engineering/design-system/assets/project-showcase/manris-dashboard.png`
  - `/Users/dikalaksana/Engineering/design-system/assets/project-showcase/mceasy-platform.png`
  - `/Users/dikalaksana/Engineering/design-system/assets/project-showcase/mileapp-operations.png`
  - `/Users/dikalaksana/Engineering/design-system/assets/project-showcase/guardian-indonesia.png`
  - `/Users/dikalaksana/Engineering/design-system/assets/project-showcase/ascii-magic-2.png`
  - `/Users/dikalaksana/Engineering/design-system/assets/project-showcase/ascii-magic-3.png`
  - `/Users/dikalaksana/Engineering/design-system/assets/project-showcase/ascii-magic-4.png`

---

### Task 1: Preserve Current Design System Page

**Files:**
- Create: `/Users/dikalaksana/Engineering/design-system/design-system.html`
- Read: `/Users/dikalaksana/Engineering/design-system/index.html`

- [ ] **Step 1: Copy the current design system page**

Run:

```bash
cp index.html design-system.html
```

Expected: `design-system.html` exists and contains the current design system page.

- [ ] **Step 2: Verify the copy has the design system title and project showcase**

Run:

```bash
rg -n "Design System|Project Showcase|Experiences" design-system.html
```

Expected: output includes matches for `Design System`, `Project Showcase`, and `Experiences`.

- [ ] **Step 3: Check git status**

Run:

```bash
git status --short
```

Expected: `design-system.html` is shown as untracked or added, and `index.html` is still modified from earlier work.

---

### Task 2: Replace `index.html` With Portfolio Page

**Files:**
- Modify: `/Users/dikalaksana/Engineering/design-system/index.html`

- [ ] **Step 1: Replace `index.html` content**

Use `apply_patch` to replace the full file with this HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dika Laksana Gusta — Software Engineer</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            boring: {
              bg: '#000000',
              surface: '#09090B',
              'surface-elevated': '#18181B',
              border: '#27272A',
              'border-subtle': '#3F3F46',
              text: '#FAFAFA',
              'text-secondary': '#A1A1AA',
              'text-muted': '#71717A',
              accent: '#22C55E',
              'accent-dim': '#166534',
            }
          }
        }
      }
    }
  </script>
  <style type="text/tailwindcss">
    @layer base {
      html {
        scroll-behavior: smooth;
      }
      body {
        @apply bg-boring-bg text-boring-text font-sans antialiased;
      }
      code, pre {
        @apply font-mono;
      }
    }
    @layer components {
      .page-shell {
        @apply mx-auto max-w-6xl px-5 sm:px-6 lg:px-8;
      }
      .topbar {
        @apply sticky top-0 z-50 border-b border-boring-border bg-boring-bg/90 backdrop-blur;
      }
      .nav-link {
        @apply text-sm text-boring-text-secondary transition-colors hover:text-boring-text;
      }
      .section-label {
        @apply mb-4 font-mono text-xs uppercase tracking-widest text-boring-text-muted;
      }
      .section-heading {
        @apply text-2xl font-semibold tracking-tight text-boring-text md:text-3xl;
      }
      .project-showcase-layout {
        @apply grid gap-4 md:grid-cols-2;
      }
      .project-showcase-tile {
        @apply block overflow-hidden rounded-lg border border-boring-border bg-boring-surface-elevated transition-colors hover:border-boring-border-subtle;
      }
      .project-showcase-media {
        @apply border-b border-boring-border bg-boring-bg p-5;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.62)), url('assets/project-showcase/ascii-magic-2.png');
        background-position: center;
        background-size: cover;
      }
      .project-showcase-media.ascii-3 {
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.62)), url('assets/project-showcase/ascii-magic-3.png');
      }
      .project-showcase-media.ascii-4 {
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.62)), url('assets/project-showcase/ascii-magic-4.png');
      }
      .project-showcase-image-wrap {
        @apply aspect-[16/10] overflow-hidden rounded-md border border-boring-border bg-boring-bg shadow-[0_24px_70px_-34px_rgba(34,197,94,0.45),0_16px_44px_-28px_rgba(245,90,54,0.38),0_12px_30px_-18px_rgba(0,0,0,0.9)];
      }
      .project-showcase-image {
        @apply h-full w-full rounded-md object-cover object-top;
      }
      .project-showcase-body {
        @apply p-6;
      }
      .project-showcase-meta {
        @apply mb-3 flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-boring-text-muted;
      }
      .project-showcase-title {
        @apply text-base font-medium text-boring-text;
      }
      .project-showcase-copy {
        @apply mt-2 max-w-[58ch] text-sm leading-relaxed text-boring-text-secondary;
      }
      .project-showcase-tag {
        @apply rounded-md border border-boring-border px-2 py-1 text-[10px] text-boring-text-secondary;
      }
      .experience-list {
        @apply space-y-12;
      }
      .experience-row {
        @apply grid gap-6 md:grid-cols-[1fr_180px] md:items-start;
      }
      .experience-role {
        @apply text-lg font-medium tracking-tight text-boring-text;
      }
      .experience-company {
        @apply mt-1 text-base text-boring-text;
      }
      .experience-meta {
        @apply mt-1 text-base leading-relaxed text-boring-text-muted;
      }
      .experience-brand {
        @apply font-mono text-sm font-semibold uppercase tracking-widest text-boring-text-secondary md:text-right;
      }
      .experience-brand-mark {
        @apply inline-flex min-h-12 items-center justify-start rounded-md border border-boring-border px-4 py-3 md:justify-center;
      }
      .experience-brand-mark.active {
        @apply border-boring-accent/60 bg-boring-accent/10 text-boring-accent shadow-[0_0_20px_rgba(34,197,94,0.12)];
      }
    }
  </style>
  <style>
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #000; }
    ::-webkit-scrollbar-thumb { background: #27272A; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #3F3F46; }
  </style>
</head>
<body>
  <header class="topbar">
    <nav class="page-shell flex h-16 items-center justify-between">
      <a href="#" class="font-mono text-sm font-semibold tracking-tight text-boring-text">Dika Laksana Gusta</a>
      <div class="hidden items-center gap-6 md:flex">
        <a class="nav-link" href="#projects">Projects</a>
        <a class="nav-link" href="#experience">Experience</a>
        <a class="nav-link" href="#contact">Contact</a>
        <a class="nav-link" href="design-system.html">Design System</a>
      </div>
      <a class="nav-link md:hidden" href="design-system.html">System</a>
    </nav>
  </header>

  <main>
    <section class="page-shell flex min-h-[calc(100vh-4rem)] items-center py-20">
      <div class="max-w-4xl">
        <p class="section-label">Software Engineer / Indonesia</p>
        <h1 class="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-boring-text md:text-7xl">
          Dika Laksana Gusta builds operational systems, AI prototypes, and commerce platforms.
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-boring-text-secondary">
          Software engineer focused on backend-heavy product work: risk governance tools, fleet and field operations, ecommerce storefronts, and practical AI-assisted workflows.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" class="rounded-md bg-boring-text px-4 py-2 font-mono text-sm font-medium text-boring-bg transition-colors hover:bg-boring-text-secondary">View projects</a>
          <a href="#contact" class="rounded-md border border-boring-border px-4 py-2 font-mono text-sm font-medium text-boring-text-secondary transition-colors hover:border-boring-border-subtle hover:text-boring-text">Contact</a>
        </div>
      </div>
    </section>

    <section id="projects" class="page-shell border-t border-boring-border py-20">
      <div class="mb-8 max-w-2xl">
        <p class="section-label">Selected Projects</p>
        <h2 class="section-heading">Interfaces and systems shipped across operations, logistics, and commerce.</h2>
      </div>
      <div class="project-showcase-layout">
        <article class="project-showcase-tile">
          <div class="project-showcase-media ascii-3">
            <div class="project-showcase-image-wrap">
              <img class="project-showcase-image" src="assets/project-showcase/manris-dashboard.png" alt="Manris risk dashboard interface">
            </div>
          </div>
          <div class="project-showcase-body">
            <div class="project-showcase-meta">
              <span>01 / Dashboard</span>
              <span class="project-showcase-tag">Risk System</span>
            </div>
            <h3 class="project-showcase-title">Manris risk governance dashboard</h3>
            <p class="project-showcase-copy">Operational dashboard for monitoring risk scores, heatmaps, category distribution, and top risk items in one workspace.</p>
          </div>
        </article>

        <a class="project-showcase-tile" href="https://www.mceasy.com/" target="_blank" rel="noopener noreferrer" aria-label="Open McEasy website">
          <div class="project-showcase-media">
            <div class="project-showcase-image-wrap">
              <img class="project-showcase-image" src="assets/project-showcase/mceasy-platform.png" alt="McEasy SmartOBD platform page">
            </div>
          </div>
          <div class="project-showcase-body">
            <div class="project-showcase-meta">
              <span>02 / Fleet</span>
              <span class="project-showcase-tag">McEasy</span>
            </div>
            <h3 class="project-showcase-title">McEasy fleet management platform</h3>
            <p class="project-showcase-copy">A fleet operations platform for tracking vehicles in real time, combining GPS, telematics sensors, and dashboards to improve visibility across daily transport workflows.</p>
          </div>
        </a>

        <a class="project-showcase-tile" href="https://mile.app/" target="_blank" rel="noopener noreferrer" aria-label="Open MileApp website">
          <div class="project-showcase-media ascii-4">
            <div class="project-showcase-image-wrap">
              <img class="project-showcase-image" src="assets/project-showcase/mileapp-operations.png" alt="MileApp operations management landing page">
            </div>
          </div>
          <div class="project-showcase-body">
            <div class="project-showcase-meta">
              <span>03 / Field Ops</span>
              <span class="project-showcase-tag">MileApp</span>
            </div>
            <h3 class="project-showcase-title">MileApp no-code field workforce platform</h3>
            <p class="project-showcase-copy">A no-code platform for field teams to plan, monitor, and execute daily operations, from logistics workflows to field service and route optimization.</p>
          </div>
        </a>

        <a class="project-showcase-tile" href="https://guardianindonesia.co.id/" target="_blank" rel="noopener noreferrer" aria-label="Open Guardian Indonesia website">
          <div class="project-showcase-media">
            <div class="project-showcase-image-wrap">
              <img class="project-showcase-image" src="assets/project-showcase/guardian-indonesia.png" alt="Guardian Indonesia ecommerce homepage">
            </div>
          </div>
          <div class="project-showcase-body">
            <div class="project-showcase-meta">
              <span>04 / Commerce</span>
              <span class="project-showcase-tag">Sirclo</span>
            </div>
            <h3 class="project-showcase-title">Guardian Indonesia ecommerce storefront</h3>
            <p class="project-showcase-copy">A health and beauty commerce experience for browsing promotions, product categories, account flows, wishlists, and shopping cart actions.</p>
          </div>
        </a>
      </div>
    </section>

    <section id="experience" class="page-shell border-t border-boring-border py-20">
      <div class="mb-10 max-w-2xl">
        <p class="section-label">Experience</p>
        <h2 class="section-heading">Engineering work across transport, commerce, and operational products.</h2>
      </div>
      <section class="experience-list" aria-label="Professional experiences">
        <article class="experience-row">
          <div>
            <h3 class="experience-role">Senior Software Engineer II</h3>
            <p class="experience-company">McEasy · Full-time</p>
            <p class="experience-meta">Sep 2023 - May 2025</p>
            <p class="experience-meta">Kota Surabaya, East Java, Indonesia · Hybrid</p>
          </div>
          <div class="experience-brand">
            <span class="experience-brand-mark active">McEasy</span>
          </div>
        </article>

        <article class="experience-row">
          <div>
            <h3 class="experience-role">Associate Software Engineer</h3>
            <p class="experience-company">Sirclo · Full-time</p>
            <p class="experience-meta">Mar 2022 - May 2023</p>
            <p class="experience-meta">Kota Tangerang, Banten, Indonesia · Remote</p>
          </div>
          <div class="experience-brand">
            <span class="experience-brand-mark">SIRCLO</span>
          </div>
        </article>

        <article class="experience-row">
          <div>
            <h3 class="experience-role">Backend Engineer</h3>
            <p class="experience-company">MileApp · Full-time</p>
            <p class="experience-meta">Feb 2021 - Feb 2022</p>
            <p class="experience-meta">Jakarta, Indonesia · Remote</p>
          </div>
          <div class="experience-brand">
            <span class="experience-brand-mark">MileApp</span>
          </div>
        </article>

        <article class="experience-row">
          <div>
            <h3 class="experience-role">Software Engineer</h3>
            <p class="experience-company">Bosowa Transportation · Full-time</p>
            <p class="experience-meta">May 2019 - Sep 2020</p>
            <p class="experience-meta">Makassar, Indonesia · On-site</p>
          </div>
          <div class="experience-brand">
            <span class="experience-brand-mark">Bosowa</span>
          </div>
        </article>
      </section>
    </section>

    <section id="contact" class="page-shell border-t border-boring-border py-20">
      <div class="grid gap-8 md:grid-cols-[1fr_320px] md:items-end">
        <div>
          <p class="section-label">Contact</p>
          <h2 class="section-heading">Interested in building practical systems for real operations?</h2>
          <p class="mt-4 max-w-2xl text-base leading-relaxed text-boring-text-secondary">
            I am open to focused engineering conversations around backend systems, internal tools, AI-assisted workflows, fleet/logistics platforms, and commerce infrastructure.
          </p>
        </div>
        <div class="rounded-lg border border-boring-border bg-boring-surface-elevated p-6">
          <p class="font-mono text-xs uppercase tracking-widest text-boring-text-muted">Portfolio</p>
          <p class="mt-3 text-lg font-medium text-boring-text">Dika Laksana Gusta</p>
          <a class="mt-4 inline-flex rounded-md bg-boring-text px-4 py-2 font-mono text-sm font-medium text-boring-bg transition-colors hover:bg-boring-text-secondary" href="mailto:dikalaksanagusta@gmail.com">Email me</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="border-t border-boring-border py-8">
    <div class="page-shell flex flex-col gap-3 text-sm text-boring-text-muted md:flex-row md:items-center md:justify-between">
      <p>© 2026 Dika Laksana Gusta.</p>
      <div class="flex gap-4">
        <a class="nav-link" href="#projects">Projects</a>
        <a class="nav-link" href="#experience">Experience</a>
        <a class="nav-link" href="design-system.html">Design System</a>
      </div>
    </div>
  </footer>
</body>
</html>
```

Expected: `index.html` contains only portfolio sections, not the design token/component reference content.

- [ ] **Step 2: Verify the portfolio sections exist**

Run:

```bash
rg -n "id=\"projects\"|id=\"experience\"|id=\"contact\"|design-system.html|guardianindonesia.co.id" index.html
```

Expected: matches for all section IDs, the design system link, and the Guardian external link.

---

### Task 3: Verify Assets, Links, and Layout Assumptions

**Files:**
- Read: `/Users/dikalaksana/Engineering/design-system/index.html`
- Read: `/Users/dikalaksana/Engineering/design-system/design-system.html`
- Read: `/Users/dikalaksana/Engineering/design-system/assets/project-showcase/*`

- [ ] **Step 1: Verify every referenced local project image exists**

Run:

```bash
for file in assets/project-showcase/manris-dashboard.png assets/project-showcase/mceasy-platform.png assets/project-showcase/mileapp-operations.png assets/project-showcase/guardian-indonesia.png assets/project-showcase/ascii-magic-2.png assets/project-showcase/ascii-magic-3.png assets/project-showcase/ascii-magic-4.png; do test -f "$file" && echo "ok $file" || echo "missing $file"; done
```

Expected: seven `ok ...` lines and zero `missing ...` lines.

- [ ] **Step 2: Verify external project links use safe new-tab attributes**

Run:

```bash
rg -n "target=\"_blank\" rel=\"noopener noreferrer\"" index.html
```

Expected: three matches for McEasy, MileApp, and Guardian.

- [ ] **Step 3: Verify design system was moved, not lost**

Run:

```bash
rg -n "Design Tokens|Components|Project Showcase|Terminal" design-system.html
```

Expected: matches for the old design-system reference sections.

- [ ] **Step 4: Inspect git status before final response**

Run:

```bash
git status --short --branch
```

Expected: modified `index.html`, new `design-system.html`, existing project assets, and the plan file if not committed.

