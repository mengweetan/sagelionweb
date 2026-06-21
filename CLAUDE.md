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

- Workflows CTA links to `https://flowdaptor.ai/store/` (sister project, free n8n workflow library).
- Contact email is `contact@sagelioncapital.org`.
- The hero/journal videos are hosted locally (`assets/hero-video-xs.mp4`) and remotely (`art.sagelioncapital.org/wp-content/uploads/...`).

## Stylesheet cache-busting

`styles.css` is versioned with a query string: `styles.css?v=20260621`. Bump the date suffix (or add a letter, e.g. `?v=20260621b`) every time `styles.css` is deployed with changes.

## Journal section

The journal (`#journal`) uses a feature card + three-up grid layout. Conventions:

- **Feature card** (`article.card.article-card.article-card--feature`): the most recent entry. Carries `.article-card--fresh` when newly published, which renders the `fresh-badge` pill.
- **Three-up grid** (`.cards.three-up.journal-grid`): older entries. Cards hold an image or video, a tag, date, heading, body, and optional `article-link`.
- **Tags** use colour-coded classes: `.tag--event` (green), `.tag--project` (blue), `.tag--venture` (terracotta), `.tag--bts` (amber). Add new categories here if needed; keep to four max or the palette feels busy.
- **TikTok embeds** inside entries use `.tiktok-embed-wrap` (left-bordered aside box) with a `<blockquote class="tiktok-embed">` and the async embed script. Only include the script once per page if embedding multiple videos.
- The feature entry image is `assets/GGG.jpg` (real workshop photo, 20 June 2026, shot on Redmi Note 15). Rename to something descriptive before the next deploy (e.g. `workshop-jun2026.jpg`).

## Workshop section

The workshop section (`#workshop`) is structured around the **next upcoming session** only. Conventions:

- The active/next workshop is the full hero: heading, meta table (`dl.workshop-meta`), image, chapter blocks, and two CTAs.
- Past sessions are demoted to a single footnote line (`.workshop-past`) at the bottom — greyed out, links to the journal entry for anyone who wants the recap. Do not give completed sessions prominent placement.
- When a new workshop is confirmed, replace the feature content and move the previous session to a footnote. Do not accumulate a growing list of past events in this section — that belongs in the journal.
- The August 5 2026 session (Stories of Singapore · Seniors 55+) is the current live workshop. Venue is TBC as of 21 June 2026.

## Assets added this session

- `assets/GGG.jpg` — workshop photo, 20 June 2026, Emmaus Church, 10:27am. Real participant photo (backs to camera, no faces identifiable). Used as journal feature image.
- `assets/seniors.jpg` — referenced by the workshop section for the Aug 5 Stories of Singapore event. Confirm this file exists before deploying; it was on the live site but not confirmed in the local repo.

## Key content decisions made (21 June 2026)

- Journal heading changed from "Things we've been writing" → "Notes from the work."
- Workshop section heading changed from "Our first proper AI workshop" → "Stories of Singapore: Seniors Capture National Day" (Aug 5 session is now the hero).
- June 20 workshop demoted to footnote; its full write-up lives in the journal feature entry.
- Journal feature entry documents the June 20 workshop in detail: Emmaus Church, agenda structure, three stations, Julie/Telegram live demo, Sean's 24-hour OpenClaw testimony, participant quote ("their eyes were open"), and honest friction notes (wifi/setup gap).
- MTV/TikTok capability highlighted via embedded video (https://www.tiktok.com/@8ktogo/video/7652809677348130069) inside the journal feature entry, positioned after the Sean paragraph.
