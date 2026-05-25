# Assignment 2: A/B Test Write-up

I designed three tests, each changing exactly one thing. The point of keeping them isolated is that if you change multiple things at once, you learn that the variant won, but you don't learn why, which means you can't build on it. Each of these tests also addresses a different part of why a visitor might not convert: where the ask is placed, how it's framed emotionally, and whether social proof lowers the friction of registration. The lessons from all three compound rather than overlap.

For all three, the primary metric is signup rate (signups / page visits), and I'd set up bounce rate as a guardrail to catch cases where a change increases one group of signups but repels more people than it converts.

## Control (index.html): Mid-output blur gate

The control blurs the output at 65% of the text and asks for an email to see the rest. The gate appears only after the user has already watched enough of the rewrite to know the product works. That's the baseline conversion mechanic all three variants are measured against.

**Copy protection (all variants):** On every page, the output panel blocks manual text selection (`user-select: none`), right-click (contextmenu blocked), and Ctrl+C (intercepted and rerouted through the Copy button). The Copy button always checks signup status, and shows the gate if the user isn't signed up yet, regardless of whether the run was a sample or the user's own text.

---

## Test 1: Zero-Click Full Exposure (variant-a.html)

**Hypothesis:** Any user action before the aha moment is friction. The control asks the visitor to pick a sample pill and then see a partial result. If we auto-start the humanization on load and show the complete output upfront, the visitor gets full proof of value before making a single decision. The only thing that stays gated is the ability to copy.

**What changes:** The sample pills are removed. On page load, after a short 1.1-second delay, the page silently loads an Academic sample into the input and begins humanizing it. The full output types itself out automatically with no blur gate. Once typing finishes, the Copy button appears. Clicking Copy opens the email signup modal. There is no other way to get the text out of the page.

**Why it might win:** The visitor sees the complete rewrite before being asked for anything. By the time the Copy button is in front of them, they have already read the full output and decided it is good. The signup ask comes after value is confirmed, not before or during it.

**Guardrail:** Auto-running without consent can feel intrusive. If bounce rate rises in the first 10 seconds, the auto-start is the cause. Time-on-page and scroll depth will tell us whether visitors are engaging with the output or just leaving.

---

## Test 2: Full Value Exposure (variant-b.html)

**Hypothesis:** The mid-output blur creates a specific kind of doubt. The user has seen some of the rewrite but not all of it, and they have to decide whether to trust the rest before they've read it. Moving the gate to the copy action changes the psychology: by the time the user wants to copy, they've read the whole thing and already decided it's good. The signup cost feels smaller relative to value already confirmed.

**What changes:** The blur gate is removed entirely. The sample pills and the overall page structure stay identical to the control. The full humanized output is always visible, with no truncation or blur strip. A Copy button appears at the bottom of the output panel once the text finishes typing. When the user clicks Copy, a modal appears asking for their email ("Enter your email to copy, free, no credit card"). The CTA is "Unlock & Copy →".

**Why it might win:** Full visibility before the ask reduces the "what if the rest is bad?" objection. Users who reach the Copy button have self-selected as interested. They've read the output, evaluated it, and decided they want it. Conversion at that moment should be higher than conversion at a blur gate they hit mid-read.

**Secondary metric:** Copy-button click rate. If the variant drives more clicks but doesn't convert them to signups, the modal copy needs work. If both rates rise, the hypothesis holds.

---

## Test 3: Social OAuth Gate (variant-c.html)

**Hypothesis:** Email-only registration creates a typing and trust barrier. Users who have Gmail or Apple ID already open on their device will convert faster with one-click OAuth than with a form they have to fill out. Reducing the mechanical friction of registration should lift signup rate among mobile users especially, where typing an email address is noticeably worse.

**What changes:** The gate overlay gains two OAuth buttons above the email field: "Continue with Google" and "Continue with Apple." The email form remains as a fallback below an "OR" divider. The blur gate triggers at the same 65% point as the control. Note: the OAuth buttons are UI placeholders in this build and are not connected to real Google or Apple authentication.

**Why it might win:** One tap versus typing an email address. On mobile, where the majority of cold traffic lands, the difference in friction is significant. OAuth also tends to produce higher-quality email addresses (real inboxes rather than disposable accounts), which matters for any downstream email sequence.

**Guardrail:** If the OAuth path feels unfamiliar or "heavy" to this audience (students and freelancers, not enterprise users), it could signal commitment and cause hesitation. Funnel drop-off at the OAuth step versus the email step will tell us whether the option helps or hurts.

---

## Which one I'd run first

Test 2 (Full Value Exposure) is the highest-leverage change and I'd run it first. Gate placement affects every visitor who makes it to the end of the demo, and the blur-at-65% decision is the most likely assumption to be wrong. If the result is positive, it changes how we think about gating on every future page we build.

Test 3 (Social OAuth) has the most upside on mobile but also the most uncertainty about audience fit, so I'd run it second when we have a cleaner baseline. Test 1 (Zero-Click Aha) is the most experimental since it removes user agency entirely, so I'd run it last, with a short bounce-rate kill switch ready if the first-10-second exit rate spikes.
