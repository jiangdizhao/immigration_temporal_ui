# Design System Document: The Sovereign Intelligence

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Jurist"**

This design system rejects the "template-heavy" look of traditional legal websites in favor of a high-end editorial experience. It balances the gravitas of Sydney’s elite legal circles with the precision of cutting-edge AI. We move away from rigid, boxy grids and embrace **Intentional Asymmetry** and **Tonal Depth**.

The visual language is rooted in "The Digital Jurist" philosophy: 
*   **Authoritative yet Accessible:** Using expansive whitespace (breathing room) to signal confidence.
*   **Layered Intelligence:** Using glassmorphism and stacked surfaces to represent the multi-faceted nature of law and technology.
*   **Bilingual Fluidity:** A seamless typographic marriage between English (Inter/Manrope) and Simplified Chinese (Noto Sans SC) that maintains equal visual weight.

---

## 2. Colors
Our palette moves beyond simple blue; it utilizes a spectrum of deep oceanic tones contrasted against sharp, technological highlights.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background creates a sophisticated, "invisible" edge.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine stationery.
*   **Base:** `surface` (#f8f9fa) for the primary background.
*   **Sectioning:** `surface-container-low` (#f3f4f5) for large content blocks.
*   **Floating Elements:** `surface-container-lowest` (#ffffff) for high-priority cards.
*   **The "Glass & Gradient" Rule:** For the AI Chatbot interface and hover states, use Glassmorphism. Apply `surface` at 70% opacity with a `backdrop-filter: blur(20px)`. 

### Signature Textures
Use subtle linear gradients for primary CTAs: `primary` (#001736) to `primary_container` (#002b5b) at a 135-degree angle. This adds "soul" and a sense of movement to an otherwise static professional environment.

---

## 3. Typography
We use a dual-font strategy to separate high-level brand messaging from technical details.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision. It feels modern and high-tech. Large scales (3.5rem+) should be used with tight letter-spacing (-0.02em) to create an editorial, "newspaper masthead" feel.
*   **Body & Titles (Inter / Noto Sans SC):** Inter provides exceptional legibility for legal fine print, while Noto Sans SC ensures the Chinese characters maintain the same optical weight and clean aesthetic.
*   **Hierarchy as Authority:** Use extreme contrast. Pair a `display-lg` headline with a `label-md` uppercase subtitle to create a "custom-built" look rather than a generic template.

---

## 4. Elevation & Depth
Depth in this system is organic, not artificial.

*   **The Layering Principle:** Avoid shadows where possible. Achieve lift by placing a `surface-container-lowest` card on a `surface-container-high` background.
*   **Ambient Shadows:** When a floating AI agent or modal is required, use a "Cloud Shadow": `box-shadow: 0 24px 48px -12px rgba(0, 23, 54, 0.08)`. The tint is derived from our `primary` color, not pure black.
*   **The "Ghost Border" Fallback:** If a container needs more definition (e.g., on mobile), use the `outline_variant` token at **15% opacity**. Never use a 100% opaque border.
*   **Glassmorphism:** Use `tertiary_container` (#350086) at 5% opacity with a heavy blur for AI-assisted sections to signal "intelligence" without breaking the professional blue aesthetic.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), white text, `md` (0.375rem) corner radius.
*   **Tertiary (AI Action):** `tertiary_fixed` background with `on_tertiary_fixed` text. Use for "Ask AI" triggers.
*   **Interaction:** On hover, buttons should shift +2px vertically with a soft ambient shadow.

### Sophisticated Cards
*   **Rule:** No dividers. Use 48px of vertical padding to separate header from body.
*   **Style:** Use `surface-container-lowest` with a "Ghost Border." The card should feel like a heavy piece of paper floating just above the desk.

### AI Agent Chat Interface
*   **Input:** A wide, pill-shaped (`full` roundedness) container using `surface-container-highest`.
*   **Messages:** User messages in `primary`; AI responses in a glassmorphic `surface-variant`.
*   **Typography:** Use `body-sm` for timestamps in `outline` color.

### Navigation
*   **Sydney-Specific:** Include a language toggle (EN | 中文) in the top-right using `label-md`. 
*   **Visual Style:** A sticky header that transitions from transparent to a glassmorphic `surface` upon scroll.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. For example, a 60/40 split where the 40% column is offset vertically.
*   **Do** use `tertiary` (Electric Purple/Cyan) sparingly—only for AI-related icons, progress bars, or "New" badges.
*   **Do** ensure line heights for Chinese text are 1.6x - 1.8x to prevent the characters from looking "cluttered" compared to English.

### Don't
*   **Don't** use standard 1px grey dividers (`#ccc`). Use whitespace or a 10% opacity `outline-variant`.
*   **Don't** use sharp 90-degree corners. Even in a professional law setting, the `sm` or `md` radius (0.125rem - 0.375rem) feels more modern and intentional.
*   **Don't** use generic law icons (scales, gavels). Use bespoke, thin-stroke SVG icons or abstract geometric shapes that hint at "Logic" and "Structure."