---
name: Boring
description: A dark, minimalist computer terminal aesthetic for a platform that provides instant Firecracker microVMs.
version: alpha
colors:
  bg: "#000000"
  surface: "#09090B"
  surface-elevated: "#18181B"
  border: "#27272A"
  border-subtle: "#3F3F46"
  text: "#FAFAFA"
  text-secondary: "#A1A1AA"
  text-muted: "#71717A"
  accent: "#22C55E"
  accent-dim: "#166534"
typography:
  hero:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  heading:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  label-section:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.08em
  label-stat:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: normal
  stat-number:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.01em
  code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
  label-small:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: normal
  nav:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: normal
rounded:
  sm: 6px
  md: 12px
  lg: 16px
  xl: 24px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
  section: 80px
  container-max: 1024px
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "#000000"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.code}"
    fontWeight: "500"
  button-primary-hover:
    backgroundColor: "{colors.text-secondary}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.border}"
    typography: "{typography.code}"
  button-ghost-hover:
    borderColor: "{colors.text-secondary}"
    textColor: "{colors.text}"
  button-link:
    backgroundColor: transparent
    textColor: "{colors.text-secondary}"
    typography: "{typography.code}"
  button-link-hover:
    textColor: "{colors.text}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.text-secondary}"
    typography: "{typography.body}"
  nav-link-hover:
    textColor: "{colors.text}"
  card-feature:
    backgroundColor: "{colors.surface-elevated}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-cta:
    backgroundColor: "{colors.surface-elevated}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl} {spacing.xxl}"
  data-grid:
    backgroundColor: transparent
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
  data-grid-cell:
    backgroundColor: transparent
    padding: "{spacing.lg}"
    borderRight: "1px solid {colors.border}"
    borderBottom: "1px solid {colors.border}"
  computer-frame:
    backgroundColor: "#E8E4DC"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  computer-screen:
    backgroundColor: "#0D0D0D"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  stat-group:
    textColor: "{colors.text}"
    labelColor: "{colors.text-secondary}"
  footer:
    borderTop: "1px solid {colors.border}"
    padding: "{spacing.xl} 0"
---

## Overview

Utilitarian terminal-meets-cloud aesthetic. Pure black background, warm cream computer frame, and green terminal accent. The design language evokes a developer tool that is refreshingly boring — reliable, transparent, and fast. Every element serves a purpose; nothing is decorative. The UI feels like sitting at a physical terminal in a dim room, with precise typographic hierarchy and surgical spacing.

## Colors

The palette is rooted in extreme contrast: pure black foundation with crisp white text, anchored by a single green accent for terminal output and interactive indicators.

- **bg (#000000):** Absolute black — the void. Provides infinite depth and makes all content feel like it's floating on a dark monitor.
- **surface (#09090B):** Near-black for subtle surface differentiation without breaking the dark field.
- **surface-elevated (#18181B):** Dark zinc for cards, CTA containers, and bordered regions that sit above the void.
- **border (#27272A):** The primary boundary color — just bright enough to define edges without competing with content.
- **border-subtle (#3F3F46):** Slightly brighter border for hover states and dividers that need gentle emphasis.
- **text (#FAFAFA):** Near-white for primary headings and critical copy. Maximum contrast against the dark background.
- **text-secondary (#A1A1AA):** Muted zinc for body copy, metadata, and secondary information. Creates clear hierarchy.
- **text-muted (#71717A):** The quietest text tone for labels, timestamps, and placeholder content.
- **accent (#22C55E):** Terminal green — used exclusively for terminal output text, the computer status indicator, and cursor blink. Never used for buttons or links.
- **accent-dim (#166534):** Darker green for subtle accent backgrounds and glow effects.

Do not add decorative color. Do not use the accent green for interactive elements (buttons, links) — it is reserved for terminal output only.

## Typography

The typography pairs **Inter** (sans-serif UI) with **JetBrains Mono** (monospace code). The choice is driven by legibility at small sizes and the visual distinction between interface language and machine language.

- **Hero (Inter 48px/700):** The single main headline per page. Generous letter-spacing compression (-0.02em) for a confident, editorial presence.
- **Heading (Inter 18px/500):** Section and card titles within the page. Clean, approachable, and compact.
- **Body (Inter 14px/400):** All descriptive text and feature copy. The 1.6 line height ensures comfortable reading of technical content.
- **Section Label (Inter 14px/500, 0.08em tracking, uppercase):** Used above grids and feature groups. The wide tracking and uppercase transform it into an architectural label rather than a heading.
- **Stat Number (Inter 36px/700):** Large data points and metrics. Bold enough to anchor a stats row from across the room.
- **Stat Label (JetBrains Mono 14px/400):** Descriptive labels beneath stat numbers. Mono face signals data and measurement.
- **Code (JetBrains Mono 13px/400):** Terminal output, code blocks, and monochrome data display. The mono face creates a clear visual distinction between interface and machine.
- **Label Small (JetBrains Mono 12px/500):** Computer brand labels ('boring. classic') and fine-print metadata.
- **Nav (JetBrains Mono 14px/600):** Site navigation logo text. Mono semibold gives the brand a technical, grounded presence.

Avoid mixing more than two font weights on a single card or section. Headings should never use letter-spacing below -0.02em.

## Layout

The layout follows a centered fixed-max-width container (1024px) with generous vertical section spacing (80px between major sections, 64px between related sections).

- Sections are separated by clean visual boundaries — either padding alone or a bottom border (`1px solid #27272A`).
- Content inside sections uses either a 3-column grid (for the feature lineup), a 2-column grid (for "how it works"), or a single column with inline computer frame.
- Grid cells collapse on mobile to single-column with preserved border boundaries.
- The computer frame sits within the content flow, centered at max 672px width, acting as both a demo and a design artifact.
- All padding scales down proportionally on mobile (container margin: 24px).

Spacing uses a strict 4px base scale: 4, 8, 16, 24, 32, 48, 64, 80px. Never use spacing values outside this scale.

## Elevation & Depth

Depth is achieved through **tonal layering** rather than shadows. The pure black background creates infinite depth, with content cards surfaced one step above using `#18181B` (surface-elevated) and a `1px solid #27272A` border. There are no drop shadows or blurred backdrops.

The computer frame is the only element with a distinct lighting treatment — a soft cream (`#E8E4DC`) with an inner inset highlight via an overlaid border to suggest physical screen bezel. A subtle outer shadow (`0 20px 40px -10px rgb(0 0 0 / 0.5)`) gives the frame a sense of physical presence floating on the dark background.

Status indicators use a green glow (`0 0 8px rgba(34, 197, 94, 0.4)`) to evoke a hardware power LED.

## Shapes

The shape language is **architecturally sharp with subtle softening**.

- **Buttons:** 6px rounded — just enough softening to feel deliberate, not surgical.
- **Cards and data grids:** 12px rounded — groups content into distinct, elevated panels.
- **Computer frame:** 24px rounded — the most organic shape, mimicking a vintage monitor with softened corners.
- **All other interactive elements:** 6px radius.
- Do not use fully pill-shaped elements (9999px radius) for buttons or cards. The aesthetic is utilitarian, not playful.
- The computer screen inside its frame uses 12px rounding to echo the outer corner rhythm.

## Components

### Buttons

- **Primary:** White fill (`#FAFAFA`) with black text. Monospace 14px/500. 6px radius, 8px/16px padding. Reserved for the single most important action per view ("Fork on GitHub"). Hover: shifts to `#A1A1AA` fill.
- **Ghost:** Transparent with `1px solid #27272A` border, `#A1A1AA` text. Same sizing as primary. Hover: border and text brighten.
- **Link:** Text-only with trailing arrow icon. No background or border. `#A1A1AA` color, `14px` mono. Hover: text to white, arrow slides right 2px. Used for secondary CTAs like "setup & API docs".

### Cards

- **Feature Card:** `#18181B` surface, `1px solid #27272A` border, 12px radius, 24px padding. Contains a heading (18px/500) and body text (14px/400).
- **CTA Card:** Same visuals as feature card but with 32px/48px padding and an optional code inline (`<code class="font-mono">`).

### Data Grid

A 3-column bordered table with `1px solid #27272A` borders acting as both grid lines and outer boundary. 12px outer radius. Each cell: 24px padding, right border (except last column), bottom border (except last row). The grid is a CSS grid with collapsed borders. Section label sits above the grid ("THE LINEUP").

### Computer Frame

A physical-monitor illusion: cream outer shell (`#E8E4DC`, 24px radius), inner screen (`#0D0D0D`, 12px radius), brand label below ("boring. classic" in `#8B8680` mono 11px), and a green indicator dot (6px, `#22C55E`, with glow). The screen shows monospace terminal output with a blinking green cursor.

### Stats Row

Three metrics displayed horizontally. Each metric: large bold number (36px/700) above a mono label (14px, `#A1A1AA`). No dividers between stats — just generous gap (32px).

### Navigation

Fixed-height bar (64px) with logo left (mono 14px/600) and links right — "Docs" (sans 14px, `#A1A1AA`) and GitHub icon. All links hover to white.

### Footer

Border top (`1px solid #27272A`), flex between layout. Left: logo + tagline. Right: "Docs" and "GitHub" links. 32px vertical padding.

## Do's and Don'ts

- Do use black (`#000000`) as the primary background — the design falls apart on colored or light backgrounds
- Do use accent green (`#22C55E`) exclusively for terminal output and status indicators, never for buttons or links
- Don't use shadows or blur effects — depth comes from tonal layering and borders only
- Don't use rounded corners larger than 24px — the aesthetic is utilitarian, not playful
- Do use monospace (`JetBrains Mono`) for all code, terminal output, stat labels, and the brand logo
- Don't use more than two font weights on a single screen section
- Do maintain WCAG AA contrast ratios — `#FAFAFA` on `#000000` is 19.5:1, `#A1A1AA` on `#000000` is 9.5:1, both exceed AA
- Don't add decorative imagery, illustrations, or gradients — the design is pure typography and layout
- Do keep the computer frame in cream (`#E8E4DC`) — it is the only non-dark element and provides essential visual relief
- Don't use the computer frame's cream color anywhere else in the UI
- Do collapse grids to single-column on mobile (under 768px) with border continuity preserved
