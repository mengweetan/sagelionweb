# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page static marketing site for **Sagelion**, a Singapore studio doing AI-inspired art and education. Pure HTML + CSS — no build step, no JS framework, no `package.json`. Open `index.html` in a browser to preview; deploy as static files.

## File layout

- `index.html` — the live site (one page, anchor-based nav).
- `index v1 (polished).html`, `index_o.html` — prior snapshots kept as backups. Do **not** edit these unless asked; they are not linked from anywhere.
- `styles.css` — all component styles. `@import`s `colors_and_type.css` at the top.
- `colors_and_type.css` — design tokens (CSS custom properties), `@font-face` declarations, and base element styles. Edit here for any color, type, spacing, radius, shadow, or motion change — never hard-code these values in `styles.css`.
- `fonts/` — self-hosted PP Neue Montreal `.otf` files. Cormorant Garamond loads from Google Fonts.
- `assets/` — images, video, and SVG icons referenced by `index.html`.

## Design system (read before styling)

The brand is deliberately constrained. Tokens live in `:root` in `colors_and_type.css`:

- **Palette is monochromatic-with-an-accent.** Warm cream backgrounds (`--bg`, `--bg-warm`, `--bg-warmer`), dark ink text (`--ink`, `--ink-subtle`, `--muted`), single gold accent (`--gold`, `--gold-deep`, `--gold-light`, `--gold-soft`). **Do not introduce blues, greens, or new hues** without explicit instruction.
- **Two type families.** `--font-serif` (Cormorant Garamond) for display + headings + brand. `--font-sans` (PP Neue Montreal) for UI. `--font-sans-text` (PP Neue Montreal Text — Book variant) is the small-text companion and should be preferred for body copy at ≤16px.
- **Radii are generous** (`--r-xs` through `--r-3xl`, plus `--r-pill`). Never use sharp corners.
- **Motion is slow and considered** (`--ease-out`, `--ease-in-out`; `--t-fast/base/slow`). Never bouncy.
- **Shadows are soft and far-throw.** Cards rest on `--shadow-card`, lift to `--shadow-hover`; the premium hero uses `--shadow-float` (includes an inner gold-tinted ring).

The site styling register is **"studio" — warm paper, rounded cards, gold accent — not museum mode** (per the comment at the top of `styles.css`). The catalogue section is the exception and uses a museum register.

## HTML conventions

- Top-level sections live directly under `<main id="top">` and each has `data-screen-label="..."` for design/screenshot tooling. Keep these labels in sync with the visible heading when you add or rename sections.
- Sections alternate visual bands via class: bare (default), `.alt` (paper veil), `.warm-band` (cream gradient). Maintain the alternating rhythm when inserting new sections.
- Nav anchors in `.nav-links` point to section `id`s; keep these in sync when renaming or restructuring sections.
- External CTAs that leave the site use `target="_blank" rel="noopener"`.
- Placeholder elements (e.g. donation tiers) are marked with `data-placeholder` and a visible `<span class="note-tag">Placeholder</span>` warning — preserve both when iterating; they exist so the team doesn't ship un-wired UI.

## CSS conventions

- `styles.css` is organised as labelled sections (`/* ---------- HEADER ---------- */`, `/* ---------- HERO ---------- */`, etc.). When adding component styles, append to the matching section rather than scattering rules.
- Reach for the semantic aliases (`--fg-1/2/3`, `--bg-1/2`, `--surface`, `--accent`) in components; reach for the raw tokens (`--ink`, `--gold`, etc.) only when defining new patterns.
- The mobile breakpoint logic is consolidated at the bottom under `/* ---------- MOBILE ---------- */` — add responsive overrides there, not inline next to the desktop rule.

## External dependencies worth knowing

- Workflows CTA links to `https://flowdaptorai.vercel.app/store` (sister project, free n8n workflow library).
- Contact email is `contact@sagelioncapital.org`.
- The hero/journal videos are hosted locally (`assets/hero-video-xs.mp4`) and remotely (`art.sagelioncapital.org/wp-content/uploads/...`).
