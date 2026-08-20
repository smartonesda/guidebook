---
name: CSS Guidebook
description: Panduan pembelajaran CSS modern 16 bab berbahasa Indonesia untuk siswa SMK RPL dan pemula — dark-first, merah akselerasi, Inter + JetBrains Mono.
colors:
  # Primary / Accent
  accent:          "#e8392b"
  accent-2:        "#ff6b5b"
  accent-deep:     "#c62828"
  accent-light:    "#c62020"
  accent-muted:    "rgba(232,57,43,0.10)"
  accent-border:   "rgba(232,57,43,0.28)"
  accent-muted-light: "rgba(198,32,32,0.07)"
  accent-border-light: "rgba(198,32,32,0.20)"

  # Background (dark)
  bg:              "#0c0c0e"
  surface:         "#131317"
  card:            "#19191e"
  card-high:       "#222228"

  # Background (light)
  bg-light:        "#f8f8fa"
  surface-light:   "#f2f2f6"
  card-light:      "#ecedf2"
  card-high-light: "#e6e6ec"

  # Text (dark)
  text:            "#f0f0f3"
  text-2:          "#9898a6"
  text-muted:      "#636370"

  # Text (light)
  text-light:      "#18181c"
  text-2-light:    "#54545e"
  text-muted-light: "#87878e"

  # Borders (dark)
  border:          "rgba(255,255,255,0.07)"
  border-mid:      "rgba(255,255,255,0.10)"
  border-strong:   "rgba(255,255,255,0.14)"

  # Borders (light)
  border-light:     "rgba(0,0,0,0.07)"
  border-mid-light: "rgba(0,0,0,0.10)"
  border-strong-light: "rgba(0,0,0,0.14)"

  # Starlight semantic slots (dark)
  sl-accent-low:   "#3b0a0a"
  sl-accent:       "#e8392b"
  sl-accent-high:  "#ffb4ab"

  # Inline code background
  inline-code-bg:  "#1c1c20"
  inline-code-bg-light: "#eeeef2"

  # Search (dark)
  search-bg:       "#101014"
  search-hover:    "#1c1c22"
  search-border:   "#28282e"

  # Search (light)
  search-bg-light:    "#ffffff"
  search-hover-light: "#f2f2f6"

typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 5vw + 1rem, 4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-strong:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
  mono:
    fontFamily: "JetBrains Mono, Cascadia Code, Fira Code, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  xs:  "0.25rem"
  sm:  "0.375rem"
  base: "0.625rem"
  md:  "0.875rem"
  lg:  "1.125rem"
  xl:  "1.5rem"
  2xl: "2rem"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.25rem"
  2xl: "3.5rem"
  3xl: "5rem"
  section: "clamp(3.5rem, 6vw, 6rem)"
components:
  btn-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.base}"
    padding: "0.65rem 1.35rem"
  btn-primary-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.base}"
    padding: "0.65rem 1.35rem"
  btn-secondary:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text}"
    rounded: "{rounded.base}"
    padding: "0.65rem 1.35rem"
  btn-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.base}"
    padding: "0.65rem 1.35rem"
  chip:
    backgroundColor: "{colors.accent-muted}"
    textColor: "{colors.accent-2}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.85rem"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  card-hover:
    backgroundColor: "{colors.card-high}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  concept-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  roadmap-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "1.25rem"
  modern-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  faq-item:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1.25rem 1.5rem"
  badge-start:
    backgroundColor: "rgba(34,197,94,0.12)"
    textColor: "#4ade80"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  badge-important:
    backgroundColor: "{colors.accent-muted}"
    textColor: "{colors.accent-2}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  badge-core:
    backgroundColor: "rgba(96,165,250,0.12)"
    textColor: "#60a5fa"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  badge-visual:
    backgroundColor: "rgba(168,85,247,0.12)"
    textColor: "#c084fc"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  badge-arch:
    backgroundColor: "rgba(251,191,36,0.12)"
    textColor: "#fbbf24"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  badge-project:
    backgroundColor: "rgba(34,197,94,0.12)"
    textColor: "#4ade80"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  badge-lab:
    backgroundColor: "rgba(239,68,68,0.12)"
    textColor: "#f87171"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  badge-handbook:
    backgroundColor: "rgba(148,163,184,0.12)"
    textColor: "#94a3b8"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
---

# CSS Guidebook — Design System

## Overview

CSS Guidebook is a **Read-mode** documentation site — the visitor's success is deep comprehension. Its visual world is dark-first, editorial, and purposefully technical: a black canvas (`#0c0c0e`) broken only by warm red energy (`#e8392b`) and carefully graded surfaces. The design deliberately mirrors the aesthetic of elite developer documentation (dark IDE, syntax-colored code), signalling credibility to the target learner (SMK RPL students, Indonesian beginners) without intimidating them.

**Design thesis: Technical Authority Without Alienation.** The world is dark, sharp, and code-native, but tempered by generous spacing, fluid type scales, and a warm (not cold) red accent that reads as energy and momentum rather than danger.

**Visual character.** Dense information is the job, but density is managed through a three-surface stack (bg → surface → card → card-high), hairline borders instead of heavy dividers, and a strict type hierarchy built on Inter's optical sizing axis. Code is always JetBrains Mono with semantic syntax coloring (`ct-sel`, `ct-prop`, `ct-val`, `ct-at`, `ct-num`, `ct-unit`, `ct-cmt`).

**Motion grammar.** Transitions are 200 ms, cubic-bezier `(0.2, 0, 0, 1)` — perceptibly snappy, never elastic. Interactive elements translate up 2–3 px on hover. Opacity fades (0.3 → 1 over 100 ms) serve as async state bridges. All animation is disabled under `prefers-reduced-motion`.

**Two isolated systems.** The home page (`.home-page`) and the docs reader (Starlight) are kept fully separate. Home rules are scoped under `.home-page`; Starlight overrides use `--sl-*` custom properties at `:root`. No home selector leaks into docs; no generic body/main/section selector is used on the home page.

**Light mode.** A full parallel token set exists under `[data-theme="light"]`. Values invert logically: surfaces go from near-black to off-white (`#f8f8fa`), accent shifts from `#e8392b` to `#c62020`, and all shadows lighten. The system is symmetric — every dark token has a light counterpart.

## Colors

**The Three-Surface Stack Rule.** Every new surface must land on one of four background levels: `bg` (page base, `#0c0c0e`), `surface` (`#131317`), `card` (`#19191e`), or `card-high` (`#222228`). Skipping levels or inventing midpoints breaks the perceived depth order.

**The Warm Red Rule.** The accent (`#e8392b` dark / `#c62020` light) is used exclusively for interactive focus, primary CTAs, active states, and brand chips. It is never used for decorative dividers, large filled backgrounds, or body text color. Its muted form (`rgba(232,57,43,0.10)`) fills chip and badge backgrounds; its full form is reserved for the glow gradient and primary buttons.

**Primary / Accent**
- `accent` (`#e8392b`) — primary CTA buttons, active tab indicators, hover glows, brand gradient stop. Dark mode only.
- `accent-2` (`#ff6b5b`) — gradient highlight end, chip text, softer accent surfaces.
- `accent-deep` (`#c62828`) — button hover state, darker gradient stop.
- `accent-light` (`#c62020`) — light mode primary accent (replaces `accent` 1:1 under `[data-theme="light"]`).
- `accent-muted` — chip and badge fill; never used for text or borders alone.
- `accent-border` — accent-colored border on focused interactive elements.

**Background scale (dark → light)**
- `bg` / `bg-light` — page canvas; never used for cards or panels.
- `surface` / `surface-light` — nav, sidebar, secondary panels.
- `card` / `card-light` — content cards, FAQ items, studio panels.
- `card-high` / `card-high-light` — hover state for cards; elevated panels.

**Text**
- `text` / `text-light` — primary prose and headings.
- `text-2` / `text-2-light` — secondary descriptors, card body copy.
- `text-muted` / `text-muted-light` — labels, meta, disabled states.

**Borders** — always `rgba()` with low opacity. Never solid hex borders except on syntax-colored code panes. Three strengths: `border` (7%), `border-mid` (10%), `border-strong` (14%).

**The No-Solid-Divider Rule.** Section dividers and card borders are always `rgba` opacity values. Solid colored borders exist only on the CSS Studio's accent-colored tab indicator.

**Syntax coloring** (code display only, not in YAML frontmatter):
- Selectors (`ct-sel`): `#e8a2ff` (purple)
- Properties (`ct-prop`): `#79c0ff` (blue)
- Values (`ct-val`): `#a8ff7a` (green)
- At-rules (`ct-at`): `#ffa657` (orange)
- Numbers (`ct-num`): `#f0e68c` (cream yellow)
- Units (`ct-unit`): `#9898a6` (muted)
- Comments (`ct-cmt`): `#636370` (dimmed)
- Braces (`ct-br`): `#9898a6` (muted)

## Typography

**The Two-Font Rule.** Inter handles all UI text (headings, body, labels, buttons). JetBrains Mono handles all code (snippets, inline code, studio panels). No third font is introduced for any reason.

**Display / Hero** — `clamp(2.5rem, 5vw + 1rem, 4rem)`, weight 800, tracking `−0.04em`, line-height 1.05. Used only for the single hero headline per page. Italicized `<em>` within display type carries the brand accent gradient for emphasis.

**Section headings (h2)** — `clamp(1.5rem, 3vw, 2.25rem)`, weight 700, tracking `−0.025em`, line-height 1.2. Used for every major section heading on the home page.

**Card headings (h3)** — `1.0625–1.125rem`, weight 600, tracking `−0.02em`. Used inside cards and roadmap items.

**Body** — `1rem`, weight 400, line-height 1.65. Max-width `60–72ch` on single-column prose; `48ch` on CTA subtext.

**Labels** — `0.6875rem`, weight 600, tracking `+0.04em`, uppercase. Used for chip text, pane titles ("Source", "DevTools"), stat labels, and badge text.

**Mono** — `0.8125rem`, JetBrains Mono, weight 400, line-height 1.6. Applied to all `<pre><code>` blocks, studio panels, and inline code spans.

**The Fluid Scale Rule.** All display and heading sizes use `clamp()`. Never set a heading with a fixed `px` or `rem` value alone — the three-argument clamp ensures readable sizing from 320 px mobile to 1400 px desktop.

**The Weight Ceiling Rule.** Weight 800 is reserved for display type only. Section headings cap at 700; card headings at 600; body emphasis at 600. No element may exceed weight 800.

## Layout

**Page structure.** A full-width home page breaks out of Starlight's `67.5rem` container (reset in `custom.css`). Inside the home page, two wrapper widths are used: `.hp-wrap-wide` (max-width `~80rem`, used for grids and roadmap) and `.hp-wrap-content` (max-width `~52rem`, used for CTA and FAQ).

**Section rhythm.** All home page sections use a uniform `padding-block: clamp(3.5rem, 6vw, 6rem)`. Sections alternate `bg` and `surface` fills (`.hp-sec` vs `.hp-sec-alt`) creating a subtle "accordion" depth rhythm without borders.

**Hero grid.** Two-column grid at `> 960 px` — left: content (flex column, left-aligned), right: interactive studio widget. Collapses to single column, center-aligned, at ≤ 960 px.

**Grids.** Concept grid and Modern CSS board: `repeat(auto-fit, minmax(280px, 1fr))`. Roadmap: `repeat(auto-fill, minmax(240px, 1fr))`. Audience grid: 2 × 2 at wide, 1-column at mobile.

**Mobile-first breakpoints.**
- `≤ 960 px`: tablet landscape — hero collapses, all multi-column grids go 1-column.
- `≤ 640 px`: mobile — stat strip becomes 2-column, CTA actions stack vertically, font floor kicks in.
- `≤ 480 px`: small mobile — hero actions stack full-width, studio collapses to 1-pane, track filters scroll horizontally.

**The Home Isolation Rule.** Every home page selector is scoped under `.home-page`. No bare `body`, `section`, `main`, or `article` selectors may carry home styles. Docs styles are expressed only through `--sl-*` overrides at `:root` and `[data-theme="light"]`.

## Elevation & Depth

**Shadow scale** (dark / light):
- `e1` — micro: `0 1px 2px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.04)`. Used on small interactive controls and inline badges.
- `e2` — mid: `0 2px 8px rgba(0,0,0,.40), 0 0 0 1px rgba(255,255,255,.04)`. Used on cards at rest.
- `e3` — float: `0 8px 24px rgba(0,0,0,.50), 0 0 0 1px rgba(255,255,255,.04)`. Used on cards on hover, studio widget, search modal.

Light mode shadows use `rgba(0,0,0,...)` at lower opacity (0.08 / 0.10 / 0.12) and replace the `rgba(255,255,255,.04)` ring with `rgba(0,0,0,.04)`.

**The Ring Rule.** Every shadow includes a 1 px `box-shadow` inset ring (`rgba(255,255,255,.04)` dark / `rgba(0,0,0,.04)` light) that reads as a subtle border. Never use a separate `border` property on elevated cards — the ring carries the edge definition.

**Glow.** The hero background glow and CTA band glow are radial gradients of `rgba(232,57,43,...)` at very low opacity (3–8%). The CTA band uses `box-shadow: 0 0 120px rgba(232,57,43,.15)` on the inner `.hp-cta-glow` element. Studio canvas uses `box-shadow: 0 0 20px rgba(232,57,43,.5)` on the glow-pill demo.

**Glassmorphism** — only inside the CSS Studio's "Glass" demo preset. Not applied to any real UI component. `backdrop-filter: blur(12px)` + `rgba(255,255,255,.08)` background. Illustrative only.

## Shapes

**The Graduated Radius Rule.** Border radius increases with perceived size and importance. Small controls (chips, labels, badges) use `pill` (999 px). Standard cards use `lg` (1.125 rem). Large showcase panels use `xl` (1.5 rem) or `2xl` (2 rem). Never apply `pill` to a card; never apply `xs` to a card.

Radius scale:
- `xs` (0.25 rem) — micro-corners, not used for interactive elements.
- `sm` (0.375 rem) — very small chips when space is tight.
- `base` (0.625 rem) — buttons, small controls.
- `md` (0.875 rem) — FAQ items, track filter buttons.
- `lg` (1.125 rem) — concept cards, roadmap cards, modern CSS cards, audience cards.
- `xl` (1.5 rem) — studio widget, CTA band, box model widget.
- `2xl` (2 rem) — large hero decorative containers.
- `pill` (999 px) — all chip and badge elements; the CTA glow pill in studio.

**Form language.** The world is softly rounded — no sharp square corners, no fully circular elements (except the macOS-style dot indicators in the studio bar). Cards have consistent inset padding with `1.25–1.5 rem` on all sides.

## Components

**The Scope Lock Rule.** Every home page component class is prefixed `.hp-`. Every Starlight override uses the `--sl-` namespace. Cross-namespace contamination is a hard failure.

---

**Chip** (`.hp-chip`) — Small label indicating section category or feature tag. Red-muted background (`accent-muted`), accent-2 text, pill radius, uppercase label typography, `0.3rem 0.85rem` padding. Appears at the top of every major section above the h2. Never interactive (no hover state).

---

**Button — Primary** (`.hp-btn.hp-btn--primary`) — Solid red CTA. Background: `accent` gradient (`sod-gradient`). Text: white. Radius: `base` (0.625 rem). Padding: `0.65rem 1.35rem`. Font: Inter 600, `0.9rem`. Inline arrow SVG (stroke-width 2.5). Hover: lifts 2 px, deepens gradient, `box-shadow: 0 4px 16px rgba(232,57,43,.4)`. Transition 200 ms `sod-ease`.

**Button — Secondary** (`.hp-btn.hp-btn--secondary`) — Card-surface background, `border-mid` border. Same radius and size as primary. Hover: `card-high` background, `border-strong` border, lifts 1 px.

**Button — Ghost** (`.hp-btn.hp-btn--ghost`) — Transparent, `text-2` color, `border` border. Used for tertiary actions. Hover: `card` background fill, `text` color.

---

**Card** (`.hp-concept-card`, `.hp-roadmap-card`, `.hp-aud-card`, `.hp-modern-card`) — All share: `card` background, `border` border, `lg` radius, `e2` shadow, 200 ms hover transition (lift 3 px, `card-high` background, `border-mid` border, `e3` shadow). Internal structure: icon/badge row at top, h3 heading, body paragraph, optional code snippet, optional action link.

**Code snippet within card** (`.hp-concept-snippet`, `.hp-mc-snippet`) — Mono font, `surface` background, `border` border, `sm` radius, `0.75rem 1rem` padding. Syntax tokens colored via `.ct-*` classes. Never exceeds 6 lines displayed.

---

**Roadmap Card** (`.hp-roadmap-card`) — Extends base card. Top row: chapter number box (red gradient bg, white text, 2-digit zero-padded) + phase badge. h3 title + desc. Footer: "Buka Materi" link with arrow. All wrapped in `<a>` for full-card click.

**Roadmap Badge variants** — 8 types: `is-start` (green), `is-core` (blue), `is-important` (red), `is-visual` (purple), `is-arch` (yellow), `is-project` (green), `is-lab` (red-muted), `is-handbook` (slate). Each uses `rgba()` background at 12% opacity.

---

**CSS Studio Widget** (`.hp-studio`) — Hero-side interactive code preview. macOS window chrome (traffic light dots: red `#ff5f56`, yellow `#ffbe2e`, green `#27c93f`) + tab bar. Two-pane split: left code display (`surface` bg), right computed values (`card` bg). Bottom canvas shows animated output. Tab switching: 100 ms opacity bridge (0.3 → 1). Radius: `xl` (1.5 rem).

---

**Box Model Inspector** (`.hp-boxmodel-widget`) — Nested ring visualization. Margin (amber/gold tint), Border (red-accent tint), Padding (blue tint), Content (surface). Each ring labeled. Computed legend below (2-column grid). DevTools-aesthetic header with accent dot.

---

**FAQ Accordion** (`.hp-faq-item`) — Native `<details>/<summary>`. Background: `card`. Radius: `md` (0.875 rem). Summary row: tag chip (left) + question text + rotating chevron SVG (right). Answer panel with `text-2` body copy. Transition: height via `grid-template-rows` or display toggle.

---

**Track Filter Buttons** (`.hp-track-btn`) — Pill-radius tabs for roadmap filter. Inactive: `card` bg, `border-mid` border, `text-2` text. Active (`.is-active`): `accent-muted` bg, `accent-border` border, `accent-2` text. Keyboard-accessible tablist role.

---

**Hero Stats** (`.hp-stat`) — Horizontal row of numeric stats. Number: display-style weight-800. Label: `label` typography, `text-muted`. Separator: 1 px `border-mid` vertical rule, hidden at ≤ 480 px.

---

**Stat Strip** (`.hp-strip-inner`) — Full-width bar of 4 key metrics. Dark `surface` background, hairline top/bottom borders. Items separated by `rgba` vertical rules.

## Do's and Don'ts

**Do:** Use `.home-page` as the root scope for every new home section. Add `aria-label`, `role="list"`, and `aria-hidden="true"` on decorative elements following the existing pattern.

**Do:** Pair every new section heading with a `.hp-chip` label above it and an `id` on the `<h2>` for anchor linking.

**Do:** New section backgrounds must alternate between `hp-sec` (`bg` fill) and `hp-sec-alt` (`surface` fill) to maintain the accordion depth rhythm.

**Do:** All new card hover states must include the lift (translateY −2 px or −3 px), `card-high` background upgrade, and `e3` shadow — matching the existing card hover contract.

**Do:** Keep code snippets inside their own `.hp-*-snippet` panel with `surface` background and `.ct-*` syntax tokens. Never paste raw unstyled code into prose.

**Don't:** Introduce a third font. Inter + JetBrains Mono is the complete type system.

**Don't:** Use `!important` in new CSS. It is only acceptable in the handful of existing Starlight reset overrides that explicitly fight framework defaults.

**Don't:** Add `backdrop-filter: blur()` to any production UI component. Glassmorphism exists only in the CSS Studio's illustrative demo.

**Don't:** Set heading sizes with fixed `px` or `rem` values. Always use `clamp()`.

**Don't:** Place a home page class selector (`.hp-*`) without nesting it under `.home-page`. The isolation contract must hold.

**Don't:** Use the `accent` color for decorative fills, large section backgrounds, or body text. Red is reserved for action signals and interactive state.

**Don't:** Add shadows without the `rgba` ring (`0 0 0 1px rgba(255,255,255,.04)` dark / `rgba(0,0,0,.04)` light). The ring is part of the shadow token, not optional.
