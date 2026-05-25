---
name: reference-library
description: Curated verbal reference notes for 15 best-in-class landing pages and product sites. Use when designing any landing page, hero, or marketing surface — to ground design choices in real-world world-class work instead of generic AI defaults. Always read references.md before designing.
---

# Reference Library

## Reality check (read first)

`WebFetch` returns **DOM, HTML, and inline CSS** — Claude does **not** see rendered pixels, shadows, font rendering, color in context, easing curves, or motion timing. Fetching a URL alone is near-useless for design transfer.

The value of this library is the **verbal notes in `references.md`**, written by humans who have seen the rendered pages. Treat those notes as the primary source of truth.

## How to use this skill

When asked to design a landing page or marketing surface:

1. **Read `references.md` first.** Pick 2-3 references that match the aesthetic direction (not the product category — direction).
2. **Synthesize across them**, do not copy one. The goal is "what does the union of Linear's typography discipline + Resend's section pacing + Apple's whitespace feel like for *our* product?"
3. **Optionally `WebFetch`** the chosen references to confirm DOM-level details only:
   - Exact `font-family` declarations
   - CSS variable names and values
   - Inline SVG patterns / decorative shapes
   - Class naming conventions worth borrowing
4. **Never rely on `WebFetch` to "see" the design.** If a detail isn't in the notes, ask the user or pick deliberately — don't hallucinate what Linear's hero "looks like".

## Adding new references

When the user points out a site they admire, extend `references.md` using the template at the top of that file. Insist on verbal specificity — "looks clean" is useless; "1px hairline borders in `oklch(20% 0 0 / 0.6)` on near-black bg" is useful.
