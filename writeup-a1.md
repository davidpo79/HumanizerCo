# Assignment 1: Landing Page Write-up

The ad targets people who searched "free ai humanizer." That's a pretty specific search. The person doing it already knows they have AI-generated text they need to fix, they have some urgency around it, and they want it for free. They're not browsing. They're shopping with a list.

That shaped every decision on this page.

## The core idea

I spent some time looking at the existing players in this space — Undetectable.ai, BypassGPT, HIX Bypass, a few others. They're all doing the same thing: a static screenshot of a text box, some claims about detection rates, and a "Try Now" button. The page asks you to read and believe before you get to touch anything.

My bet was that we could do something fundamentally different by just letting people use the product the moment they land. The hero isn't marketing copy next to a mockup. It's the actual tool, running. The input field comes pre-loaded with an obviously AI-written text sample, and the humanized output starts typing itself out automatically. By the time a visitor finishes reading the headline, they've already watched it work.

The other shift was in positioning. Most competitors frame themselves as "AI detector bypass" tools, which is accurate but puts the user in a slightly uncomfortable headspace. The framing I went with — "Your writing. No AI flags. Free." — says the same thing but differently. It centers ownership rather than evasion. That matters when you're asking someone to hand over their email address at the end of the interaction.

## How the conversion works

The page earns the signup rather than demanding it upfront. The output types out in real time, and at around 65% of the way through, the rest blurs. There's a simple email field with the line "See the full result. No credit card needed." The gate only appears after the user has seen enough to know the product works. That's the key distinction from a typical gated demo: we're not asking people to imagine the value, we're asking them to confirm it.

Above the input panel there are four sample pills — Academic, Professional, Casual, Cover Letter — for people who don't have text ready. The text types into the input field at a quick pace so it feels live rather than just appearing. The page never puts the burden of bringing content on the visitor.

There's a live counter below the hero that ticks up in real time showing how many texts have been humanized that day. It's a small thing but it does real trust work without cluttering the layout.

## Design choices

The visual direction was deliberately not "AI startup." Every tool in this category uses cold blues, purple gradients, and the same dark-mode SaaS template. I went with warm charcoal as the base and amber gold as the single accent color. The combination reads more like an editorial brand or a craft tool than an AI product, which felt right for something whose whole value proposition is making text sound more human.

For typography I chose Fraunces as the display face — it's a serif with strong italic variants and a lot of personality. Pairing a serif with DM Sans for the body reinforces the "human writing" association at a visual level before the user reads a word. The italic emphasis spans inside the headlines borrow a trick from Framer's site and give the headlines some texture without going loud.

The rest of the design leans on restraint: hairline borders, an 8-point grid, generous whitespace, and a subtle grain overlay to keep the dark background from feeling flat.

## Copy

Three things I was deliberate about.

The eyebrow tag at the top of the hero reads "Free AI Humanizer" because that's exactly what the person searched for. It's also a Google Quality Score signal, but mostly it's just good user experience. You want the page to confirm immediately that they're in the right place.

The headline starts with "Your writing" rather than "AI text" or "your AI content." That framing makes the user the protagonist and keeps the tool in the background. The goal is for the product to feel like something that restores ownership, not something that hides something.

The gate CTA says "See the full result. No credit card needed." rather than something like "Sign up free" or "Get started." Generic CTAs get skipped. Specific ones — where you name what the person gets and what they don't have to sacrifice — tend to convert better.

## What I left out

No interstitial popups, no testimonial carousels, no three-column feature grids with emoji icons. Pricing lives below the fold because at this stage the sale is an email address, not a subscription. The Pro plan is on the page so people know an upgrade path exists, but the page never pushes it.

The whole thing ships as a single HTML file with no build step. Tailwind CDN for layout, Google Fonts for typography, vanilla JavaScript for the demo state machine.
