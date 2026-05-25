# Assignment 1: Landing Page Write-up

The ad targets people who searched "free ai humanizer." That's a pretty specific search. The person doing it already knows they have AI-generated text they need to fix, they have some urgency around it, and they want it for free. They're not browsing. They're shopping with a list.

That shaped every decision on this page.

## The core idea

I spent some time looking at the existing players in this space: Undetectable.ai, BypassGPT, HIX Bypass, a few others. They're all doing the same thing: a static screenshot of a text box, some claims about detection rates, and a "Try Now" button. The page asks you to read and believe before you get to touch anything.

My bet was that we could do something fundamentally different by just letting people use the product the moment they land. The hero isn't marketing copy next to a mockup. It's the actual tool, running. On arrival the user is immediately presented with two paths: pick one of four sample pills (Academic, Professional, Casual, Cover Letter) to see the tool work on a pre-written example, or paste their own AI text and run it directly. Either way, the output starts typing itself out within seconds of landing. By the time a visitor finishes reading the headline, they've already watched it work. (The zero-friction auto-start variant, where a sample fires automatically without any user action, is being tested as part of the A/B programme.)

The other shift was in positioning. Most competitors frame themselves as "AI detector bypass" tools, which is accurate but puts the user in a slightly uncomfortable headspace. The headline we went with, *"When everyone sounds like a bot, sound human."*, says the same thing but differently. It centers craft and identity rather than evasion. That matters when you're asking someone to hand over their email address at the end of the interaction.

## How the conversion works

The page earns the signup rather than demanding it upfront. The output types out in real time, and at around 65% of the way through, the rest blurs. There's a simple email field with the line "See the full result. No credit card needed." The gate only appears after the user has seen enough to know the product works. That's the key distinction from a typical gated demo: we're not asking people to imagine the value, we're asking them to confirm it.

Above the input panel there are four sample pills (Academic, Professional, Casual, Cover Letter) for people who don't have text ready. The text types into the input field at a quick pace so it feels live rather than just appearing. The page never puts the burden of bringing content on the visitor.

There's a live counter below the hero that ticks up in real time showing how many texts have been humanized that day. It's a small thing but it does real trust work without cluttering the layout.

**Copy protection:** The output panel is protected from manual copying. `user-select: none` prevents text selection; a `contextmenu` listener blocks right-click; a `copy` event listener intercepts Ctrl+C and routes it through the Copy button. The Copy button itself always checks signup status: if the user hasn't registered, it shows the gate modal regardless of whether they're running a sample or their own text. Once signed up (email stored in localStorage), Copy works freely for the rest of the session.

**Output reset:** Whenever the user types or pastes new text into the input area, the output panel resets immediately. The previous result clears, the gate hides, the Human Score badge resets to blank, and the Copy button hides. This prevents stale gate overlays from persisting across runs.

## The "Ice vs. Fire" Semantic Color Discipline

I deliberately rejected the category cliché of generic, neon-blue SaaS templates. Instead, the entire page operates on a strict, high-contrast psychological dichotomy: **Cold Digital Evasion vs. Warm Analog Craft.**

**The Backdrop:** A deep, premium warm charcoal (`oklch(14% 0.01 60)`) that simulates a dimly lit writer's studio or a legacy publishing house, instantly separating us from cold, clinical tech platforms.

**The "Cold AI" Semantics (Ice Blue):** To visually anchor the user's active anxiety, all elements related to the machine, scanning, and AI detection are strictly isolated in a frosty, glowing Ice Blue (`oklch(75% 0.15 250)`).
- When a user runs a scan, the system flags the text with a `❄️ Cold AI Bot` badge showing the AI percentage score.
- The prominent threat indicators, including the AI Probability headline and the detector progress bars (GPTZero, Turnitin), are rendered entirely in this freezing cyan. This visually solidifies the problem: *your text is currently frozen in robotic neutrality.*

**The "Warm Human" Semantics (Amber Gold):** The primary brand accent is a rich Amber Gold (`oklch(78% 0.14 75)`), representing human warmth, organic texture, and the mechanical authority of a vintage typewriter.
- The final output is stamped with a `🔥 Warm Human Tone` badge showing the Human percentage score.
- Core interactive elements like the sample pills, the Humanize Text button, and the CTA cards glow in this welcoming amber.

**The Conversion Loop:** This visual tension creates an immediate, subconscious UX narrative. The user is trapped in an "Ice" state of technical rejection (blue detector results) and is presented with exactly *one* visible escape route: the glowing, warm Amber button. The design itself forces the transition from cold code to human warmth, driving a visceral urge to click and unlock the full result.

## Copy

Three things I was deliberate about.

The eyebrow tag at the top of the hero reads "Free AI Humanizer" because that's exactly what the person searched for. It's also a Google Quality Score signal, but mostly it's just good user experience. You want the page to confirm immediately that they're in the right place.

The headline starts with "When everyone sounds like a bot" rather than leading with the product or a feature. That framing puts the cultural context first and makes the user feel seen before the tool is even mentioned.

The gate CTA says "See the full result. No credit card needed." rather than something like "Sign up free" or "Get started." Generic CTAs get skipped. Specific ones, where you name what the person gets and what they don't have to sacrifice, tend to convert better.

## What I left out

No interstitial popups, no testimonial carousels, no three-column feature grids with emoji icons. Pricing lives below the fold because at this stage the sale is an email address, not a subscription. The Pro plan is on the page so people know an upgrade path exists, but the page never pushes it.

## Technical setup

The whole landing page is a single self-contained HTML file. No build step, no bundler, no framework. That was a deliberate choice for an assignment context where someone needs to open it, look at the code, and immediately understand what's happening.

What it's built with:

- **HTML5** for the markup, semantic where it matters (sections, articles, figures for testimonials).
- **CSS** written directly in the head, using modern features: CSS custom properties for the theme tokens, OKLCH for all colors (better perceptual uniformity than HSL), `backdrop-filter` for the blur gate, and CSS animations for the typing cursor and the gate reveal. No preprocessor.
- **Tailwind CSS** pulled in via CDN for layout and spacing utilities. Used alongside the custom CSS, not instead of it. This keeps the file small and avoids a build pipeline.
- **Vanilla JavaScript** for everything interactive: the typing state machine, the sample pills, the live counter, the gate logic, copy protection, and form handling. No React, no jQuery, nothing.
- **Google Fonts** for typography (Fraunces and DM Sans), loaded with `preconnect` for faster paint.

The humanization itself is simulated for the demo. Each sample pill has a hardcoded "before" and "after" pair, and the output panel types out the after text character by character.

**Production API (Gemini 2.5 Flash):** In a live product, the simulated output would be replaced by a call to **Google Gemini 2.5 Flash** (`gemini-2.5-flash-preview-05-20`). The request flow:

```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent
Authorization: Bearer {GEMINI_API_KEY}
Content-Type: application/json

{
  "contents": [{
    "parts": [{
      "text": "Rewrite the following text so it reads as naturally human-written, avoiding AI detection patterns. Preserve the original meaning and approximate length. Return only the rewritten text.\n\n{user_input}"
    }]
  }],
  "generationConfig": {
    "temperature": 1.0,
    "topP": 0.95,
    "maxOutputTokens": 2048
  }
}
```

Gemini 2.5 Flash was chosen for this role because of its sub-second median latency (critical for the live-typing illusion), its 1M-token context window (handles any realistic paste), and its cost profile relative to GPT-4o for high-volume consumer traffic. The response streams via SSE, and the client-side typing state machine consumes the stream token by token to maintain the same character-by-character animation the demo already uses.

**Hosting:** The page is deployed on **Railway**. Static-site deploy, automatic HTTPS, and the build process is essentially "serve this HTML file." Total cold-start time is effectively zero because there's nothing to start.
