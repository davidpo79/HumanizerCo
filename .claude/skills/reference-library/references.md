# Reference Library — Curated Notes

> **Template** (use when adding new references):
> ```
> ### N. Name — https://url
> - **Aesthetic in one line**: ...
> - **Typography**: ...
> - **Color**: ...
> - **Layout signatures**: ...
> - **Motion signatures**: ...
> - **What to steal** (for our context): ...
> - **What to avoid** (their context-specific choice): ...
> - **DOM tells**: ...
> ```

---

### 1. Linear — https://linear.app
- **Aesthetic in one line**: Monochrome editorial precision with razor-thin 1px borders on near-black backgrounds; "engineered" feel.
- **Typography**: Inter Display for headlines (tight tracking, -0.03em), Inter for body. Modular scale ~1.25. Mono accents (Berkeley Mono / JetBrains Mono) for labels.
- **Color**: Near-black `oklch(15% 0 0)` base, off-white `oklch(98% 0 0)` text, single saturated accent (electric purple `~oklch(60% 0.25 290)`). Hairlines in `oklch(30% 0 0 / 0.5)`.
- **Layout signatures**: Centered max-w-7xl container, generous py-32+ section breaks. Product screenshots framed in subtle bezel with inner glow. Side-by-side feature blocks alternate text/visual but never feel templated.
- **Motion signatures**: Subtle parallax on hero screenshot, fade-up staggered reveals (delay 80ms between siblings, 600ms ease-out-quart). Hover on nav items: 150ms color shift, no underline animation.
- **What to steal**: Hairline borders + dark base + ONE saturated accent. Tight headline tracking. The discipline of restraint.
- **What to avoid**: Their specific purple — too associated with Linear now. Pick a different accent hue.
- **DOM tells**: `--color-bg`, `--color-fg`, custom CSS vars on `:root`. Inline SVG for the squircle product icon.

### 2. Vercel — https://vercel.com
- **Aesthetic in one line**: High-contrast black/white with surgical use of color gradients (the famous triangle); "infrastructure for the web" gravitas.
- **Typography**: Geist (their own sans) headlines + Geist Mono for code/labels. Very tight headline tracking (-0.04em). Massive headline sizes (text-7xl+).
- **Color**: Pure black `#000` and pure white `#fff` dominant. Conic gradients (blue → cyan → magenta) on dark hero elements. Charts use semantic color (blue=info, green=success).
- **Layout signatures**: Huge headlines that span full container width. Code blocks with copy buttons integrated naturally. Bento-grid feature sections.
- **Motion signatures**: Subtle hue rotation on gradient orbs (8-12s loops). Number counters on metrics. `view-transition-name` for SPA route changes.
- **What to steal**: Conic gradients as decorative accent (not as background fill). Bento layouts for feature density. Confidence of massive headlines.
- **What to avoid**: Pure black `#000` — use `oklch(12-15% 0 0)` for better rendering on OLED screens.
- **DOM tells**: `data-geist-*` attributes. `var(--ds-gray-*)` design tokens.

### 3. Stripe — https://stripe.com
- **Aesthetic in one line**: Pastel gradient meshes meet razor-sharp typography; financial trust + creative product.
- **Typography**: Sohne (custom). Multi-weight (300, 400, 500, 600). Headlines tight, body comfortable line-height (1.5+).
- **Color**: Animated gradient hero (purple → cyan → green, slow motion). White card surfaces with soft shadows. Indigo accents on CTAs.
- **Layout signatures**: Hero with animated gradient backdrop + product UI mockup overlapping. Code snippets in light theme with syntax highlighting in muted hues.
- **Motion signatures**: The famous animated gradient (canvas-rendered, ~30s loops). Hover on cards: subtle lift + shadow expansion.
- **What to steal**: Layered transparencies. Code snippets as visual elements. Card lift on hover.
- **What to avoid**: The gradient itself is iconic to Stripe — derivative for anyone else.
- **DOM tells**: `<canvas>` element for the gradient. Custom font-face declarations for Sohne.

### 4. Framer — https://framer.com
- **Aesthetic in one line**: Maximalist, colorful, motion-first; "design tool that designs itself".
- **Typography**: Inter at various weights, but distinctive use of italic-serif (Tiempos?) for emphasis spans within headlines.
- **Color**: Vibrant gradients, color wheels, every product surface uses color expressively. Dark and light modes both feel intentional.
- **Layout signatures**: Constantly-moving hero (templates carousel). Sections break the grid intentionally. Floating UI fragments as decoration.
- **Motion signatures**: Heavy — auto-playing template previews, scroll-jacked sequences, scroll-driven canvas animations. WebGL-ish reveals.
- **What to steal**: Italic-serif emphasis inside sans headlines. Boldness of color. Treating the page itself as a product demo.
- **What to avoid**: Their level of motion is exhausting for non-creative tools. Tone down 50% for productivity products.
- **DOM tells**: Custom Framer Motion class names. Inline animation styles.

### 5. Resend — https://resend.com
- **Aesthetic in one line**: Quiet luxury for developers; dark editorial with precision spacing.
- **Typography**: Inter (display + body), Geist Mono for code. Refined, never loud.
- **Color**: Pure dark base (`oklch(13% 0 0)`), white text, subtle gradients (radial, low opacity). Single accent rarely used.
- **Layout signatures**: Code blocks given prime real estate in hero. Logo bar with brand-color logos (not desaturated). Pricing as a single bold table.
- **Motion signatures**: Minimal. Fade-ins on scroll, that's it. Restraint as a feature.
- **What to steal**: Code-first hero. Logos in full color (more trust than desaturated row). Restraint.
- **What to avoid**: Their hero is mostly text — fine for an API product, sparse for richer UX products.
- **DOM tells**: `data-theme="dark"`, semantic HTML, low DOM weight.

### 6. Cal.com — https://cal.com
- **Aesthetic in one line**: Open-source friendly; bold colors, playful but trustworthy.
- **Typography**: Cal Sans (custom display) + Inter body. Cal Sans is friendly, slightly rounded — humanizes the brand.
- **Color**: White base, vibrant blue primary, accent pinks/oranges in illustrations.
- **Layout signatures**: Calendar UI front and center. Feature sections with rounded UI mockups. Lots of whitespace.
- **Motion signatures**: Subtle hover micro-interactions on calendar slots. Page-load fade-ups.
- **What to steal**: Custom display font is THE move for personality. Show the product UI prominently.
- **What to avoid**: Open-source-product-ness can feel cluttered (too many CTAs: docs, github, signup). Pick one primary path.
- **DOM tells**: `font-cal-sans` Tailwind class.

### 7. Arc Browser — https://arc.net
- **Aesthetic in one line**: Maximalist, colorful, scroll-as-cinema; an experience masquerading as a marketing site.
- **Typography**: Pangea (custom), large display sizes, expressive weights.
- **Color**: Rainbow gradient running through the entire site. Each section has a color identity but they flow.
- **Layout signatures**: Scroll-pinned sections that transform. Browser UI animated in 3D. Section transitions feel like chapters of a film.
- **Motion signatures**: Heavy GSAP ScrollTrigger work. Pinned sections, scroll-driven transforms, scrubbed video.
- **What to steal**: Treat the page as a narrative with chapters, not a stack of independent sections. Color flow across sections.
- **What to avoid**: This level of scroll-jacking annoys productivity users. Reserve for consumer products that need wow factor.
- **DOM tells**: GSAP class names, ScrollTrigger markers in dev mode.

### 8. Raycast — https://raycast.com
- **Aesthetic in one line**: Dark, dense, app-screenshot-first; "look how powerful this is".
- **Typography**: Inter throughout, tight tracking on headlines. Mono for hotkeys/commands.
- **Color**: Pure dark base, red primary accent (`~oklch(58% 0.20 25)`), hairlines everywhere.
- **Layout signatures**: Massive app screenshot in hero. Feature sections each show the app in a different mode. Keyboard shortcut chips as decorative elements.
- **Motion signatures**: Hover on extension cards: lift + glow. Animated GIFs/videos for feature demos.
- **What to steal**: Show the actual product UI in hero (PLG pattern). Use product chrome as decoration (hotkey chips, command bars).
- **What to avoid**: Dense screenshots without context overwhelm — pair with a labelled callout.
- **DOM tells**: `<picture>` with multiple sources for app screenshots.

### 9. Apple — https://apple.com (any product page)
- **Aesthetic in one line**: Editorial whitespace; product photography as art; typography that breathes.
- **Typography**: SF Pro Display headlines (massive, tight), SF Pro Text body. Semibold weight does heavy lifting.
- **Color**: White base, product-color accents (a single hue per product). Deep blacks for premium products.
- **Layout signatures**: Full-bleed product imagery between text sections. Generous py-32+. Centered text columns at narrow widths despite huge canvas.
- **Motion signatures**: Scroll-pinned hero with parallax product reveal. Apple-style spring easing on hover (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **What to steal**: Whitespace discipline. Spring easing curve. Treating product imagery as the headline.
- **What to avoid**: Centered-narrow-column layout on wide screens — looks empty without Apple-grade imagery.
- **DOM tells**: `ac-globalfooter`, `applepay-button` web components.

### 10. Rauno (Vercel design eng) — https://rauno.me
- **Aesthetic in one line**: Personal site as design portfolio; experimental motion, restrained palette.
- **Typography**: Inter Display, tight, dark.
- **Color**: Near-black base, single accent (varies). Hairlines as the dominant decorative element.
- **Layout signatures**: Centered narrow column. Project cards with embedded video previews. Custom cursor behaviors.
- **Motion signatures**: Magnetic cursor, hover state choreography, page-load orchestration with view transitions.
- **What to steal**: Custom cursors when context allows. View Transitions API for SPA-feel polish.
- **What to avoid**: Custom cursors fail on touch — degrade gracefully.
- **DOM tells**: `view-transition-name` attributes.

### 11. Pitch — https://pitch.com
- **Aesthetic in one line**: Playful editorial; colorful but mature; presentation tool that presents itself.
- **Typography**: Inter + custom display. Mixed serif/sans within headlines for personality.
- **Color**: Cream/off-white base, bold primary colors (red, blue, yellow) used sparingly but punchy.
- **Layout signatures**: Slide-like layouts (appropriate for presentation product). Big quotes, big numbers.
- **Motion signatures**: Slide-transition feel. Auto-playing presentation previews.
- **What to steal**: Cream backgrounds instead of pure white — warmer, more designed.
- **What to avoid**: Slide-feel only fits presentation products. Don't force it elsewhere.
- **DOM tells**: Standard React/Next class names.

### 12. PostHog — https://posthog.com
- **Aesthetic in one line**: Maximalist developer-fun; hand-drawn hedgehogs alongside serious analytics charts.
- **Typography**: MatterSQ (custom), Inter body. Friendly + capable.
- **Color**: Cream base, bright red primary, blue/yellow secondary. Illustrations are the brand.
- **Layout signatures**: Long-form pages with tons of content. Hand-drawn hedgehog illustrations as section breaks. Charts and dashboards embedded everywhere.
- **Motion signatures**: Subtle illustration bobs, hover animations on hedgehogs.
- **What to steal**: Custom illustration as brand differentiator (no stock vectors). Cream over white. Long-form is OK if the content is genuinely valuable.
- **What to avoid**: Hedgehogs are theirs. Brand mascots are high-cost, high-risk.
- **DOM tells**: Lots of inline SVG for illustrations.

### 13. Liveblocks — https://liveblocks.io
- **Aesthetic in one line**: Dark, technical, motion-rich; "realtime collaboration" demonstrated through the site itself.
- **Typography**: PP Neue Montreal (geometric sans) for display, Inter body.
- **Color**: Near-black base, blue primary, green/pink accents on interactive demos.
- **Layout signatures**: Interactive cursor demos embedded throughout (multiplayer cursors on the page itself). Code + visual side-by-side.
- **Motion signatures**: Multiplayer cursors with fake collaborators moving in real time. Hover orchestration on cards.
- **What to steal**: Demonstrate the product through page interactions (PLG move). PP Neue Montreal as a Geist alternative.
- **What to avoid**: Fake activity can feel gimmicky if too obvious — make it subtle or genuinely real.
- **DOM tells**: WebSocket connections, cursor SVGs with user labels.

### 14. Anthropic — https://anthropic.com
- **Aesthetic in one line**: Editorial humanism; serif headlines, warm palette, "we are a research company that cares".
- **Typography**: Styrene B for body (geometric sans, slightly quirky), Tiempos / similar serif for editorial headlines on research pages. Distinctive font choice IS the brand.
- **Color**: Cream `~oklch(95% 0.02 80)`, warm coral accents, deep navy text. Avoids tech-blue entirely.
- **Layout signatures**: Long-form content treated like a magazine. Generous margins. Mixed text columns.
- **Motion signatures**: Subtle — fade-ins, no scroll-jacking. Restraint as positioning.
- **What to steal**: Cream + coral + serif = instant differentiation from tech-blue defaults. Treat content like a magazine layout, not a SaaS landing.
- **What to avoid**: Too quiet for products that need to demonstrate dynamism.
- **DOM tells**: `Styrene B`, `Tiempos` font-family declarations.

### 15. Brex — https://brex.com
- **Aesthetic in one line**: Premium fintech editorial; orange-on-dark sophistication.
- **Typography**: Custom serif display + sans body. The serif is the brand.
- **Color**: Dark navy base, signature orange accent (`~oklch(75% 0.18 50)`), cream text.
- **Layout signatures**: Editorial article-like sections. Big serif quotes. Product UI shown in dark theme matching site.
- **Motion signatures**: Subtle reveals, no excess.
- **What to steal**: Serif display in fintech = premium positioning. Dark navy as an alternative to pure black.
- **What to avoid**: Their specific orange — too Brex-coded now.
- **DOM tells**: Custom font-family for the serif display.

---

## Quick selector

| Need this feeling | Look at |
|---|---|
| Quiet, dark, developer-trust | Linear, Resend, Raycast |
| Bold, colorful, expressive | Arc, Framer, PostHog |
| Editorial, premium, considered | Anthropic, Brex, Apple |
| Product-IS-the-hero | Raycast, Liveblocks, Cal.com |
| Motion as the brand | Arc, Framer, Stripe |
| Whitespace as the design | Apple, Resend, Linear |
| Warm + human (not tech-bro) | Anthropic, PostHog, Pitch |
