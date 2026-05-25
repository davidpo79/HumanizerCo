# Assignment #1 — Landing Page Concept & Decisions

**Target traffic**: Google Search ad on the keyword "free ai humanizer." High-intent, price-sensitive users who already know what they want and are usually driven by anxiety — fear of being flagged academically, professionally, or by clients.

**Goal**: Maximize CVR = signups / page visits.

---

## 1. The strategic concept

Every competitor in this SERP (Undetectable.ai, BypassGPT, HIX Bypass, WriteHuman) lands users on a static screenshot of a tool, surrounded by abstract claims about "bypassing AI detection." They all feel like the same cold tech-blue SaaS template, and the user has to read marketing prose before they get to try anything.

We do the opposite on two fronts:

**Product-Led Hero.** The hero is not a screenshot — it IS the product. A side-by-side input/output panel sits above the fold, pre-populated with an obviously AI-written academic sample. The output begins humanizing the moment the page loads. By the time the user has read the headline, they have already watched their tool work. This eliminates the "read first, try second" funnel that every competitor uses, and collapses the time-to-aha from ~30 seconds to under 5.

**Reframed positioning.** Competitors lean into shame — "beat the detector," "bypass GPTZero." We flip the frame: *"Your writing. No AI flags. Free."* The product becomes about ownership and confidence, not evasion. Same outcome, but a story the user is happier to associate with themselves — which matters at signup, because they have to put their identity (an email) on the line.

---

## 2. The conversion mechanism

The hero gate is the conversion engine. Users see ~65% of the humanized output type out smoothly in real time, then the remainder blurs behind a gradient with a single sentence and an email field: *"See the full result. No credit card needed."* The gate appears at peak desire — after the user has seen enough to know the tool works, but before they have what they came for. Email-only signup keeps friction low (no password, no card, no commitment).

The "Blank Canvas Killer" extension makes this even more aggressive: four sample-pill buttons above the input (Academic / Professional / Casual / Cover Letter) let users instantly try a use case relevant to *them*, with the input typing in at 6ms/char so it feels alive. The page never asks the user to bring their own text.

A live "47,319 texts humanized today" counter ticks up under the hero, addressing trust without taking up real estate.

---

## 3. Visual design rationale

I deliberately did not build another tech-blue AI tool. The base is a warm charcoal (`oklch(14% 0.012 60)`) and the single accent is amber gold (`oklch(80% 0.135 75)`) — colors associated with editorial print and craft, not algorithms. This stands out instantly in a SERP otherwise dominated by cold gradients.

Typography reinforces the same thesis: **Fraunces** (a distinctive serif with italic display weights) carries every headline, with **DM Sans** for UI and body. Using a serif on a humanizer product is intentional — it associates the brand with human writing, not machine output. The italic emphasis spans inside the sans headlines (*"No AI flags"*, *"work to sound like them"*) borrow Framer's typographic move and give the page personality without screaming.

A subtle SVG noise overlay and a low-opacity radial warmth gradient sit behind everything to avoid the flat-dark-mode-template look. Hairline borders (`1px` at low opacity), 8pt-grid spacing, and a strict modular type scale do the rest of the work — restraint is the design.

---

## 4. Copy decisions

Three deliberate choices:

- **Eyebrow mirrors the search query verbatim** ("Free AI Humanizer") — this is both a quality-score signal and an instant "you found the right place" cue for the visitor.
- **"Your writing"**, not "AI text" — ownership framing. The user is the protagonist; the tool is invisible.
- **Gate CTA is concrete, not aspirational**: "See the full result. No credit card." We name exactly what they get and what they don't have to give. CTAs like "Get Started" or "Sign Up Free" get skipped; specificity gets clicked.

---

## 5. What I deliberately did not include

No carousel of testimonials (low trust), no purple gradient hero (category cliché), no three-equal-emoji-cards-feature-grid (AI template tell), no aggressive interstitial popups. Pricing is below the fold by design — at this stage of the funnel we are selling the email, not the $9/month tier. The Pro plan is shown but the page never asks for it.

---

**Stack**: Single self-contained HTML file. Tailwind CDN + Google Fonts (Fraunces + DM Sans). Vanilla JavaScript for the demo state machine, no frameworks. Works in any browser, no build step.
