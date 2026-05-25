# Assignment #2 — A/B Test Ideation

Three tests on the control LP from Assignment #1. Each test isolates exactly **one** variable so the result is interpretable. They were chosen because each addresses a different layer of the conversion funnel — friction (gate placement), emotion (CTA copy), and proof (live evidence) — meaning the lessons compound rather than overlap.

For all three tests:
- **Primary KPI**: Signup rate (signups / page visits).
- **Sample size**: Targeted at a minimum detectable effect of 10% relative lift at 95% confidence, ~1,500 visitors per arm (assumes a control CVR around 12–15%).
- **Guardrail metric**: Bounce rate (< 5% relative degradation acceptable).

---

## Test 1 — `variant-a.html`: Gate position

**The change.** Remove the mid-text blur. Reveal the FULL humanized output. Replace the inline gate with a sticky **"Copy result"** button at the bottom of the output panel; the button shows a lock icon and triggers the signup modal on click. On mobile the Copy button is `position: sticky` so it never falls below the fold no matter how long the output runs.

**Hypothesis.** Mid-text blur creates *uncertainty* — the user is asked to sign up before they have confirmed the rewrite is actually good. Letting them read the full result first removes that doubt: by the time they decide to copy, they have already vetted the quality themselves and the signup is felt as a small cost for a value already received. The control's gate sits at "I think this might work"; the variant's gate sits at "I want to use this right now." Industry paywall research (Adapty, 2025) finds soft paywalls placed after full value delivery convert ~30–45% better than mid-value cuts; I expect a meaningful positive lift here, but it is not certain — the counter-argument is that some users may simply screenshot or retype the output rather than copy, leaving without signing up.

**KPIs.** Primary: signup rate. Secondary: Copy-button click rate (a leading indicator — measures "users who reached full value"); ratio of copy-clicks to signups (measures the gate's effectiveness at converting intent). Guardrail: bounce rate and time-on-hero (we should not see disengagement).

---

## Test 2 — `variant-b.html`: CTA copy — anxiety framing

**The change.** Same blur position as control, same layout, single change in the gate copy. The control reads "Your rewrite is ready. See the full result and copy it. No credit card needed." with the CTA "See Result →." The variant reads "Stop getting flagged. Detectors won't catch this rewrite. It's free — no credit card, just an email." with the CTA "Stay invisible →." The badge icon also changes from a star to a warning glyph to match the tonal shift.

**Hypothesis.** "Free ai humanizer" searchers are not casually curious. They have a specific pain point — academic flagging, client AI policies, professional embarrassment — and they searched the way they did because that anxiety is active. The control speaks to convenience ("see the full result"); the variant speaks to relief ("stop getting flagged"). Loss-aversion framing (Kahneman) consistently outperforms gain framing in high-stakes contexts, and "free ai humanizer" is a high-stakes search. I expect a positive lift on signup, with the risk being that some users find the anxiety framing too negative and bounce — which is exactly what the bounce-rate guardrail will catch.

**KPIs.** Primary: signup rate. Secondary: time-to-gate-click (anxiety framing should compress this — emotional copy tends to drive faster decisions); scroll-depth before signup (does the variant make users skip downstream sections like FAQ?). Guardrail: bounce rate from the hero — if the negative framing repels rather than converts, bounces will spike before signups.

---

## Test 3 — `variant-c.html`: Live AI detection score widget

**The change.** Same blur position, same gate, same copy as control. The output panel gains a real-time "AI Probability" meter above the typing area: a numeric percentage and a horizontal bar that start at **87%** (red) when the panel is idle and animate down to **~8%** (green) as the humanized text types out. The widget references the major detectors (GPTZero, Turnitin, Originality.ai) by name. The score color shifts red → amber → green at thresholds of 50% and 20%.

**Hypothesis.** The control proves quality qualitatively — "this reads more human." The variant proves it quantitatively — "this is 87% AI dropping to 8% AI in front of your eyes." For a category where the user's specific anxiety is *detector scores*, naming the exact metric they care about (and showing it move in real time) is a much sharper proof signal than implicit textual quality. Real-time social proof and visible-progress UI elements have shown 25–98% lifts in prior studies (Provesrc, 2025). The downside risk: the extra widget adds visual complexity to the hero, which could fragment attention and slow the time-to-gate. The test will tell us whether the proof gain outweighs the cognitive-load cost.

**KPIs.** Primary: signup rate. Secondary: time-on-hero (does the widget hold attention longer, suggesting deeper engagement?); gate-shown to signup conversion (does seeing "8% AI" right before the gate increase the gate's conversion rate specifically?). Guardrail: hero exit rate without scrolling — if the widget overwhelms, users will leave without ever scrolling.

---

## Why these three, and in this order

If I could only run one, it would be **Test 1 (gate position)** — gate placement is the single largest lever on this page, and the control's blur is the most "default" choice in this design, making it the most likely to be wrong. Test 3 (the score widget) is the one with the most upside but also the most unpredictable downside, so I would run it second. Test 2 (anxiety framing) is the cheapest to ship and the safest — even if it loses, the loss tells us something useful about whether this audience prefers calm or charged copy, which informs every future ad creative.
