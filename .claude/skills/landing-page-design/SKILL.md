---
name: landing-page-design
description: Design and build high-converting, production-grade landing pages and marketing sites. Use when the user asks to build a landing page, hero section, marketing site, "above the fold", pricing page, or any page whose goal is to convert visitors. Covers both classic marketing-led and Product-Led Growth (PLG) variants.
---

# Landing Page Design

This skill fills the gap between aesthetic guidance (see `frontend-design`) and conversion-focused execution. It encodes the patterns that separate a landing page that converts from one that just looks fine.

**Always use this skill alongside `frontend-design` and `reference-library`.** This one tells you *what to build*; `frontend-design` tells you *how to make it beautiful*; `reference-library` tells you *what world-class looks like in concrete terms*.

## Step 0: Classify the page (mandatory)

Before designing anything, ask — explicitly — which mode applies:

1. **PLG (Product-Led)**: the product can run in-browser (text in → text out, code in → code out, file in → preview out, etc.). The product IS the demo.
2. **Marketing-led**: the product is backend-heavy, enterprise, hardware, or otherwise impossible to demo in 5 seconds. The page must *describe* and *prove*.

The two paths diverge from the hero down. Get this wrong and the entire page is wrong.

---

## Path A: PLG Landing Page (default for HumanizerCo)

### The Hero IS the product

The hero must contain a **working, interactive interface** — not marketing prose with a CTA next to a screenshot. The visitor's first action is *using the product*, not reading about it.

Common PLG hero patterns:
- **Input/Output box pair**: empty input on the left, live output on the right. Pre-fill with a compelling example. Output may be blurred/teased until the user types or signs up — this is the conversion mechanism, not a separate CTA.
- **Sandbox playground**: a stripped-down working version of the app, embedded in the hero.
- **Live preview**: user manipulates a control, sees real product output instantly.
- **Tease-and-unlock**: full output runs but is partially obscured (blur, paywall overlay, "Sign up to see full result") — friction placed exactly at the moment of demonstrated value.

### Supporting sections (in priority order)

The classic "Problem → Solution → Features" pattern collapses because the hero already demonstrated the solution. Replace with:

1. **Hero (interactive product)** — described above.
2. **Use-case strip** — 3-5 concrete scenarios, each with a "try this example" that loads new content into the hero.
3. **How it works** — a 3-step or technical-depth section for skeptics ("under the hood").
4. **Social proof** — usage metrics, testimonials, logos. Place high; PLG visitors are skeptical fast.
5. **Pricing** — simple, transparent. Free tier prominent.
6. **FAQ** — addresses the objections the interactive hero raised ("Is my data safe?", "What about long inputs?").
7. **Final CTA** — re-engages with the product, not a generic "Sign up".

---

## Path B: Marketing-led Landing Page

### Section playbook (battle-tested order)

Hero → Logo bar → Problem → Solution/features → How it works → Social proof (testimonials + metrics) → Pricing → FAQ → Final CTA → Footer.

### Hero anatomy (marketing-led)

Eyebrow (kicker label) → Headline (one specific, concrete promise — not a vague platitude) → Subhead (one sentence elaborating the value, naming who it's for) → Primary CTA + Secondary CTA → Trust strip (logos / "Trusted by N" / star rating) → Visual (product screenshot, illustration, or video).

### Conversion frameworks to draw from
- **AIDA**: Attention → Interest → Desire → Action.
- **PAS**: Problem → Agitate → Solve.
- **F/Z scanning**: Place the headline, CTA, and primary visual along the visitor's natural eye path.
- **Above-the-fold rules**: Headline readable in <3 seconds, CTA visible without scroll, value prop unambiguous to a stranger.

---

## Typography rules (both paths)

- **Never** default to Inter, Roboto, Arial, or system fonts as the display face.
- Pair a **distinctive display font** with a **refined body/UI font**. Examples:
  - Fraunces + Inter Tight
  - GT Sectra + Söhne
  - Tiempos Headline + Suisse Int'l
  - Editorial New + Neue Haas Grotesk
  - IBM Plex Serif + IBM Plex Sans
  - PP Neue Montreal + PP Editorial New
  - Reckless + Söhne Mono (for labels)
- Use a **modular scale** (1.250 "major third" or 1.333 "perfect fourth"). Don't pick font sizes by feel.
- Tracking: tighten display headlines (-0.02em to -0.04em), normal/slightly-loose for body.
- Use `next/font` (Next.js) or `@fontsource` for self-hosting; never load 8 weights when you use 3.

## Spacing & grid

- **8pt grid**. All spacing values multiples of 4px or 8px.
- Container: `max-w-7xl` (1280px) or `max-w-[1440px]` for wider layouts.
- Section vertical rhythm: `py-24` to `py-32` on desktop, `py-16` to `py-20` on mobile.
- Generous whitespace beats dense layouts for landing pages. Whitespace IS the design.

## Color discipline

- One **dominant brand color** + one **accent** + a neutral ramp (5-9 steps). That's it.
- Prefer **OKLCH** over HSL/hex for perceptual uniformity (`oklch(70% 0.15 250)`).
- **Avoid** the purple-to-pink gradient on white background. It is the universal "AI SaaS template" tell.
- **Avoid** evenly-distributed pastel palettes. Bold dominant + sharp accent reads as designed.
- Design dark mode from day one if the product runs in dark mode. Don't bolt it on later.

## Motion

- **Page-load orchestration**: one well-staggered reveal sequence (delay siblings by 60-100ms, ease-out-quart, 400-700ms duration) is more memorable than scattered micro-interactions everywhere.
- **Scroll-triggered reveals**: Framer Motion `whileInView` or IntersectionObserver. Reveal once, don't replay on every scroll.
- **Hover states**: subtle, fast (150-200ms), purposeful. Never animate everything.
- **High-impact moments**: pick 2-3 (hero load, primary CTA hover, one section transition) and execute them perfectly. Skip the rest.

## Recommended stack (deferred until project brief confirms)

- **Framework**: Next.js (App Router) — RSC by default, client components only where needed.
- **Styling**: Tailwind v4 with CSS variables for theme tokens.
- **Components**: shadcn/ui (copy-paste, owned components).
- **Motion**: Framer Motion (React) or CSS `@starting-style` + `transition-behavior` for simpler cases.
- **Icons**: Lucide (consistent, tree-shakable).
- **Fonts**: `next/font/local` for custom faces, `next/font/google` only when the font genuinely belongs in the design.

## Self-review checklist (run before declaring done)

- [ ] Page classification (PLG vs marketing-led) was explicit and the right path was followed.
- [ ] Hero readable, value clear in <3 seconds to a cold visitor.
- [ ] Primary CTA is visually dominant (color + size + position).
- [ ] Typography hierarchy survives 50%, 100%, 200% zoom.
- [ ] Color contrast meets WCAG AA (4.5:1 body, 3:1 large text).
- [ ] Mobile portrait (375px) tested and intentional, not just "responsive by accident".
- [ ] No generic AI tells (Inter + purple gradient + three-equal-emoji-cards + "Built for modern teams").
- [ ] Motion is orchestrated, not scattered. Page load feels designed.
- [ ] Real working code — links, forms, interactive demos function, not just visual stubs.

## Anti-patterns (do not ship)

- Three-equal-feature-card grid with emoji icons.
- Bullet-point hero (every benefit as a checkmark row instead of one sharp headline).
- Gradient-text headline in purple-pink on white.
- "Built for modern teams who move fast" — generic SaaS copy.
- Hero screenshot tilted 5deg with a soft shadow because it's the template default.
- Carousel of testimonials with no metrics or names.
- "Get started" as the only CTA copy (be specific: "Humanize a sample", "Try the playground").
