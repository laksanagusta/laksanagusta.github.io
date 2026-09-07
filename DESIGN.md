# Portfolio design system

Source: [Personal Web — Wireframe - 1](https://www.figma.com/design/Manamb9xBMMkLMpvawxw1Z/Personal-Web?node-id=7-2).

## Direction

A quiet, light, single-column personal website. Use generous whitespace, restrained typography, and one dark contact action. Content order: identity, biography, writing preview, contact, updated date. The live component reference is `design-system.html`; both pages share `styles.css`.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| Background | #FCFCFC | Page canvas |
| Ink | #202020 | Identity and primary headings |
| Body | rgba(32,32,32,.8) | Biography and supporting copy |
| Muted | rgba(32,32,32,.4) | Labels, social sentence, date prefix |
| Action | #363636 | Contact pill |
| Company underline | rgba(32,32,32,.4) | Dashed company-name marker |
| Social pill background | rgba(32,32,32,.06) | Background for social links |
| Social pill text | rgba(32,32,32,.8) | Text for social links |
| Social pill size | 12px / 18px, 1px 7px padding | Compact social link pill |
| Content width | 552px | Main reading column |
| Sans | Inter, system-ui, sans-serif | Body and interface |
| Serif | Libre Baskerville, Georgia, Times New Roman, serif | Writing title and italic emphasis |
| Body size / leading | 14px / 23px | Reading text |
| Identity | 16px / 20px, 500 | Name |
| Labels | 12px / 15px | Uppercase section labels |
| Writing title | 14px / auto (17px layer height) | Libre Baskerville article title |
| Button | 14px / 20px, 12px 18px padding | Pill action |

## Layout

Desktop reference is 1440 × 1100. Center the 552px column and begin at 118px from the top. Identity has an 8px internal gap, followed by 36px before the bio. Separate the social sentence from the bio by 23px. Writing begins 64px after the biography block; the writing label sits 16px before its title; contact begins 56px after the writing excerpt. The contact action sits 20px after the final paragraph. Footer follows the contact action by 116px.

Below 640px, use 24px side padding and 64px top padding, allow all text to reflow, and reduce the footer gap to 88px. No fixed-height text containers. The desktop biography is justified as in the source; mobile copy is left-aligned.

## Components and behavior

- Identity: semantic h1 and uppercase profession label.
- Inline links: inherit text color; use a subtle muted underline at rest, keep it visible on hover, and keep a visible keyboard focus outline.
- Social links: use a 999px pill at 12px / 18px with 1px 7px padding, rgba(32,32,32,.06) background, rgba(32,32,32,.8) text, and a subtle rgba(32,32,32,.1) hover background.
- External links and contact channels: open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`; skip navigation and the contact dialog trigger stay in the current page.
- Link hover: use a subtle Hover effect with Scale 1.015 over 150ms ease-out; disable transform under reduced-motion preferences.
- Company names: use a muted gray dashed underline, 2px thick with a 3px offset.
- Writing preview: serif title and excerpt. The “Prince of Rome” title links to its full Medium article.
- Contact copy: paragraphs use justified alignment to match the editorial reference.
- Contact action: dark pill with light text that opens a channel chooser. The chooser offers Email and WhatsApp. Keep the keyboard focus ring pill-shaped. Hover/focus transitions last 150ms; respect reduced-motion preference.
- Contact popover: use a centered dialog with a frosted white backdrop (72% white with 4px blur), layered surface shadows (`0 0 6px` at 6% and `0 10px 24px` at 8%), no card border, and 28px internal padding. Keep the modal to a single 14px title, followed by 24px before the options and 12px between options. Keep the dialog within the viewport, with block-axis overflow scrolling contained inside the card and horizontal overflow suppressed, and allow long channel values to wrap anywhere. Use a 40px close hit area with a 32px hover circle and an optically centered 16px SVG X. Entrance uses 280ms ease-out opacity + scale/translate; exit uses a shorter 180ms transition. Close with the close control, Escape, or a backdrop click; return focus to the trigger. Position directional controls with logical inset and padding properties so the surface mirrors cleanly in RTL.
- Updated date: explicit content revision date, not the visitor's current date.
- Keep the muted colors faithful to Figma. These low-contrast labels are a known accessibility limitation of the source design.

## Source limitations

The Figma connector denied access, so the design was inspected through the signed-in browser, including layer text, frame/group measurements and typography controls. Body size, line height, colors and key positions were verified there. Inter Regular was verified by inspecting an individual text selection in the biography and the contact paragraph. “Prince of Rome” was verified as Libre Baskerville Regular at 14px with automatic line height (17px layer height). Browser text wrapping can differ from the Figma rendering.

Update this document and the live design-system page whenever visual rules change.
