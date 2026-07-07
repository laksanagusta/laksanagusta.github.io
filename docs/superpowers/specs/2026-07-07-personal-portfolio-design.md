# Personal Portfolio Single Page Design

## Goal

Build a single-page personal portfolio website at `index.html` for Dika Laksana Gusta. Move the current design system reference page to `design-system.html` so the portfolio becomes the default entry point while the design system remains accessible.

## Direction

Use the existing dark, minimal, utilitarian design language from the current design system:

- Black background, restrained elevated surfaces, thin borders, muted secondary text.
- Inter for interface text and JetBrains Mono for labels, metadata, and technical details.
- Compact sections with strong typography, not a marketing landing page.
- Project screenshots remain the main visual assets.

## Page Structure

The portfolio will use five sections:

1. Topbar
   - Left: `Dika Laksana Gusta`.
   - Right navigation: `Projects`, `Experience`, `Contact`, and `Design System`.
   - `Design System` links to `design-system.html`.

2. Hero
   - Primary copy: `Dika Laksana Gusta - Software Engineer building operational systems, AI prototypes, and commerce platforms.`
   - Supporting copy positions the work around backend/product engineering, operational tools, AI prototypes, fleet/logistics systems, and commerce.
   - Include two direct actions: jump to projects and contact.

3. Projects
   - Reuse the current project showcase grid.
   - Four projects in a 2x2 layout:
     - Manris risk governance dashboard.
     - McEasy fleet management platform.
     - MileApp no-code field workforce platform.
     - Guardian Indonesia ecommerce storefront.
   - Clickable projects link out where public URLs exist: McEasy, MileApp, and Guardian.
   - Project screenshots use the current asset folder and ASCII background images.

4. Experiences
   - Reuse the current clean experience list.
   - Keep only role, company, employment type, date range, location, and brand mark.
   - Current list:
     - Senior Software Engineer II, McEasy.
     - Associate Software Engineer, Sirclo.
     - Backend Engineer, MileApp.
     - Software Engineer, Bosowa Transportation.

5. Footer
   - Minimal contact/footer section.
   - Include name, availability/contact prompt, and available contact/social links. If no external contact URL is provided yet, use an internal `#contact` target only.

## Implementation Notes

- Preserve `design-system.html` as the current design system page.
- Create a new `index.html` with only the portfolio content, not all design token/component reference sections.
- Keep the project dependency-free and static: Tailwind CDN, Google Fonts, local image assets.
- Use semantic anchors and section IDs for nav.
- Maintain responsive behavior: single-column project cards on mobile, two-column grid on desktop.

## Verification

- Confirm `design-system.html` still opens the existing design system.
- Confirm `index.html` opens the new portfolio.
- Confirm all local project images resolve.
- Confirm external links open in a new tab with `rel="noopener noreferrer"`.
- Check mobile and desktop layout for text overflow and card alignment.
