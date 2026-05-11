---
name: Architectural Portfolio
colors:
  # ── Strict Two-Color System ──────────────────────────────
  # DARK MODE
  canvas-dark:       '#111111'   # background, all section fills
  ink-dark:          '#e3e3e3'   # text, borders, icons, buttons
  ink-dark-muted:    '#e3e3e3'   # muted text — use at 45% opacity in code
  # Inverted blocks (high-contrast panels in dark mode)
  canvas-dark-inv:   '#e3e3e3'
  ink-dark-inv:      '#111111'

  # LIGHT MODE
  canvas-light:      '#e3e3e3'   # background, all section fills
  ink-light:         '#111111'   # text, borders, icons, buttons
  ink-light-muted:   '#111111'   # muted text — use at 45% opacity in code
  # Inverted blocks (high-contrast panels in light mode)
  canvas-light-inv:  '#111111'
  ink-light-inv:     '#e3e3e3'

  # ── Derived / Structural ─────────────────────────────────
  # Borders use solid ink (no opacity tricks in spec)
  border:            'var(--ink)'        # all 1px structural lines
  border-subtle:     'rgba(ink, 0.18)'   # for grid separators only
  background:        'var(--canvas)'     # alias
  on-background:     'var(--ink)'        # alias
typography:
  display-xl:
    fontFamily: Bebas Neue
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Bebas Neue
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 60px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Space Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Space Mono
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
  element-gap: 32px
---

# Architectural Portfolio — Design System

## Brand & Style

This design system is built upon the principles of **Architectural Minimalism**, adapted for a high-contrast, nocturnal environment. It is designed for elite creative professionals who require a digital space that feels as structured and intentional as a physical gallery at night. The aesthetic is defined by "Quiet Luxury"—it does not scream for attention with vibrant colors or complex shadows, but rather commands it through masterful use of negative space and rigorous typographic hierarchy.

The UI should evoke a sense of permanence and precision. It draws from the **International Typographic Style (Swiss Design)**, prioritizing clarity and structural integrity. Every element must feel like it was placed with surgical intent, emphasizing the "work" over the "interface." The dark color mode enhances the focus on showcased imagery, making the content glow against a deep, muted backdrop.

---

## Colors

The palette is a **strict two-color binary system**. No gradients, no grey variants, no opacity trickery for backgrounds.

### The Two Colors

| Token | Value | Role |
|---|---|---|
| **Canvas (dark)** | `#111111` | Page background — all section fills in dark mode |
| **Ink (dark)** | `#e3e3e3` | All text, borders, icons, button fills |
| **Canvas (light)** | `#e3e3e3` | Page background — all section fills in light mode |
| **Ink (light)** | `#111111` | All text, borders, icons, button fills |

### Color Strategy

Depth and hierarchy are achieved through **two mechanisms only** — never through intermediate greys:

1. **Inversion** — "elevated" panels (e.g. the About right column, the marquee strip) flip to `ink` background + `canvas` text, creating a bold tonal contrast block.
2. **1px Borders** — all structural separation uses a thin `var(--ink)` line. The border IS the depth.

> **Rule:** Every pixel on screen is either `#111111` or `#e3e3e3`. Muted text may use the ink at ~45% opacity for secondary labels only. No other color values are permitted.

---

## Typography

Typography is the **primary visual driver** of this design system, using a two-tier system to create a technical, editorial feel.

### Type Scale

| Token | Family | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|---|
| `display-xl` | Bebas Neue | 120px | 400 | 110px | −0.02em |
| `display-xl-mobile` | Bebas Neue | 64px | 400 | 60px | −0.01em |
| `headline-lg` | Bebas Neue | 48px | 400 | 56px | +0.02em |
| `body-lg` | Space Mono | 18px | 400 | 28px | −0.01em |
| `body-md` | Space Mono | 15px | 400 | 24px | 0em |
| `label-caps` | Space Mono | 12px | 700 | 16px | +0.1em |

### Type Roles

1. **Bebas Neue** — Display & Headline tier. Massive, architectural headers and hero sections. Tall, condensed letterforms create verticality and structural strength.
2. **Space Mono** — Technical/Data tier. Body copy and labels. The monospaced character evokes technical documentation and architectural specs, reinforcing the "precision" brand pillar.

### Implementation Notes

- In dark mode, slightly increase letter-spacing on Space Mono to prevent character blurring at small sizes.
- Maintain generous leading (line-height) on body text to ensure legibility and spatial rhythm.
- Display type (`display-xl`) should break to `display-xl-mobile` at viewport widths below `768px`.
- All `label-caps` usage must be uppercase (`text-transform: uppercase`).

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');
```

---

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** with extreme margins. Content is treated as "exhibits" within a frame.

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `unit` | 4px | Base unit — all spacing is a multiple of this |
| `gutter` | 24px | Column gutters in the 12-col grid |
| `margin-desktop` | 80px | Horizontal page margins on desktop |
| `margin-mobile` | 24px | Horizontal page margins on mobile |
| `section-gap` | 160px | Vertical gap between major content sections |
| `element-gap` | 32px | Vertical gap between related elements |

### Grid System

- **Desktop:** 12-column grid, 24px gutters, 80px outer margins.
- **Mobile:** 4-column grid, 24px gutters, 24px outer margins.
- Content should frequently "break" the grid or use offset columns to create **asymmetrical, editorial interest** — avoid evenly balanced layouts.

### Section Rhythm

Use a standard **160px vertical gap** between major content sections. This allows the design to breathe in the dark environment — negative space is a design element, not empty space.

### CSS Custom Properties

```css
:root {
  /* Spacing */
  --spacing-unit: 4px;
  --spacing-gutter: 24px;
  --spacing-margin-desktop: 80px;
  --spacing-margin-mobile: 24px;
  --spacing-section-gap: 160px;
  --spacing-element-gap: 32px;

  /* Colors */
  --color-surface: #121414;
  --color-surface-dim: #121414;
  --color-surface-bright: #38393a;
  --color-surface-container-lowest: #0d0f0f;
  --color-surface-container-low: #1a1c1c;
  --color-surface-container: #1e2020;
  --color-surface-container-high: #282a2b;
  --color-surface-container-highest: #333535;
  --color-on-surface: #e2e2e2;
  --color-on-surface-variant: #c4c7c7;
  --color-inverse-surface: #e2e2e2;
  --color-inverse-on-surface: #2f3131;
  --color-outline: #8e9192;
  --color-outline-variant: #444748;
  --color-primary: #c8c6c5;
  --color-on-primary: #313030;
  --color-primary-container: #111111;
  --color-secondary: #c6c6c6;
  --color-on-secondary: #2f3131;
  --color-secondary-container: #454747;
  --color-background: #121414;
  --color-on-background: #e2e2e2;
  --color-error: #ffb4ab;

  /* Typography */
  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'Space Mono', monospace;
}
```

---

## Elevation & Depth

This design system **rejects traditional shadows and depth metaphors**. Hierarchy is achieved through Tonal Layering and Structural Outlines.

### Principles

| Principle | Rule |
|---|---|
| **Zero Shadows** | No `box-shadow` or `text-shadow` anywhere. The design is intentionally flat. |
| **Borders** | 1px solid `#E4E4E4` lines define boundaries between sections and frame images — the "blueprint" aesthetic. |
| **Tonal Layering** | Depth is conveyed by placing `surface-container-low` (`#1A1C1C`) containers on `surface` (`#111111`) backgrounds. |
| **High-Contrast Modal** | To indicate the highest elevation (modals, drawers), use a solid `#E4E4E4` fill with `#111111` text — stark, inverted contrast. |
| **Glassmorphism** | Used **only** on navigation bars: `backdrop-filter: blur(10px)` with `background: rgba(17, 17, 17, 0.9)`. |

---

## Shapes

The shape language is strictly **Sharp (0px border-radius)**.

Every element — buttons, input fields, images, cards, modals — must have **90-degree corners**. This evokes the rigidity of stone, precision of a ruler, and confidence of high-end architecture. Sharp edges become even more pronounced as they cut against the dark background.

> **Rule:** `border-radius: 0` on all components. No exceptions.

---

## Components

### Navigation Bar

```
Position: top-docked, full-width, sticky
Background: rgba(#111111, 0.9) + backdrop-filter: blur(10px)
Links: Space Mono, body-md, #E4E4E4
Active state: strikethrough text-decoration OR a 2px dot below the link (no color change)
Border-bottom: 1px solid var(--color-outline-variant)
```

- No color change on active or hover states — use structural indicators only.
- Padding: `0 var(--spacing-margin-desktop)` on desktop, `0 var(--spacing-margin-mobile)` on mobile.

---

### Buttons

| Variant | Style |
|---|---|
| **Primary** | `background: #E4E4E4` · `color: #111111` · Space Mono, `label-caps` · 0px radius |
| **Secondary** | `background: transparent` · `border: 1px solid #E4E4E4` · `color: #E4E4E4` · Space Mono, `label-caps` · 0px radius |

**Hover / Interaction:**
- Primary: Fill animates to `opacity: 0.8` (no color change).
- Secondary: Border and text animate to `opacity: 0.7`.
- Transition: `opacity 200ms ease`.
- **No color transitions. No background color changes on hover.**

```css
.btn-primary {
  background: #e4e4e4;
  color: #111111;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  border-radius: 0;
  padding: 16px 32px;
  cursor: pointer;
  transition: opacity 200ms ease;
}
.btn-primary:hover { opacity: 0.8; }

.btn-secondary {
  background: transparent;
  color: #e4e4e4;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid #e4e4e4;
  border-radius: 0;
  padding: 16px 32px;
  cursor: pointer;
  transition: opacity 200ms ease;
}
.btn-secondary:hover { opacity: 0.7; }
```

---

### Cards (Portfolio Grid)

```
Border: 1px solid #E4E4E4
Border-radius: 0
Background: var(--color-surface-container-low)
```

**Structure:**
```
┌─────────────────────────┐
│                         │
│    [Full-width Image]   │
│                         │
├─────────────────────────┤  ← 1px #E4E4E4 horizontal rule
│ PROJECT NAME      2024  │  ← Space Mono, label-caps
└─────────────────────────┘
```

- Image fills 100% card width with `overflow: hidden`.
- Metadata row: Project name + year, separated by flex `justify-content: space-between`.
- Padding on metadata: `16px`.

---

### Image Treatment

```css
.portfolio-image-container {
  overflow: hidden;
  border-radius: 0;
}
.portfolio-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.portfolio-image-container:hover img {
  transform: scale(1.05);
}
```

- Scale `1.05x` on hover within sharp-edged container creates a sophisticated "window" effect.
- Transition easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out) for natural feel.

---

### Input Fields

```
Style: underline-only (no box)
Border-bottom: 1px solid #E4E4E4
Border-radius: 0
Background: transparent
Label: always-visible above field, label-caps style
```

**States:**
- **Default:** `border-bottom: 1px solid #E4E4E4`
- **Focus:** `border-bottom: 2px solid #E4E4E4` (width increase only — no color change)
- **Error:** `border-bottom: 2px solid var(--color-error)`

```css
.input-field {
  background: transparent;
  border: none;
  border-bottom: 1px solid #e4e4e4;
  border-radius: 0;
  color: #e4e4e4;
  font-family: var(--font-body);
  font-size: 15px;
  padding: 8px 0;
  width: 100%;
  outline: none;
  transition: border-bottom-width 150ms ease;
}
.input-field:focus {
  border-bottom-width: 2px;
}
.input-label {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-on-surface-variant);
  display: block;
  margin-bottom: 8px;
}
```

---

### Chips / Tags

```
Border: 1px solid #E4E4E4
Border-radius: 0
Background: transparent
Text: Space Mono, 10px, ALL CAPS, letter-spacing: 0.12em
Padding: 4px 10px
```

```css
.chip {
  display: inline-flex;
  align-items: center;
  border: 1px solid #e4e4e4;
  border-radius: 0;
  background: transparent;
  color: #e4e4e4;
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 10px;
}
```

---

## Animation & Motion

All animation in this system is **restrained and purposeful**. Motion reinforces structure — it never decorates or distracts.

| Context | Property | Duration | Easing |
|---|---|---|---|
| Hover opacity | `opacity` | 200ms | `ease` |
| Image zoom | `transform: scale` | 600ms | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| Input focus | `border-bottom-width` | 150ms | `ease` |
| Page transitions | `opacity` | 400ms | `ease-in-out` |
| Nav underline | `width` | 300ms | `ease` |

> **Rule:** No bouncing, no spring physics, no color flashes. Motion is slow, deliberate, and architectural.

---

## Responsive Breakpoints

| Breakpoint | Width | Grid | Margins | Display Type |
|---|---|---|---|---|
| Mobile | < 768px | 4-col | 24px | `display-xl-mobile` |
| Tablet | 768px–1199px | 8-col | 48px | Scaled between |
| Desktop | ≥ 1200px | 12-col | 80px | `display-xl` |

---

## Do's and Don'ts

### ✅ Do
- Use 1px borders to define structure and hierarchy
- Let negative space breathe — do not fill every pixel
- Scale display type aggressively on mobile
- Keep all corners sharp (0px radius)
- Use tonal layering to imply depth
- Treat images as architectural elements within strict rectangular frames

### ❌ Don't
- Add `box-shadow` anywhere
- Use `border-radius` > 0
- Introduce any color beyond the monochromatic palette
- Use hover state color changes — only opacity or structural shifts
- Break the section-gap rhythm arbitrarily
- Use decorative dividers — only 1px structural lines
