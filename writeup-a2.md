# Assignment 2: A/B Test Write-up

I designed three tests, each changing exactly one thing. The point of keeping them isolated is that if you change multiple things at once, you learn that the variant won, but you don't learn why, which means you can't build on it. Each of these tests also addresses a different part of why a visitor might not convert: where the ask is placed, how it's framed emotionally, and whether the proof of value is strong enough. The lessons from all three compound rather than overlap.

For all three, the primary metric is signup rate (signups / page visits), and I'd set up bounce rate as a guardrail to catch cases where a change increases one group of signups but repels more people than it converts.

## Test 1: Where does the gate go?

Right now the control blurs the output at 65% of the text and asks for an email to see the rest. The variant removes the blur entirely. The full humanized output is visible from the moment it finishes typing. Instead, a "Copy result" button appears at the bottom of the panel, showing a small lock icon. When the user clicks it, a modal with an email field appears.

The reasoning is that a blur mid-text creates a specific kind of doubt. The user has seen some of the rewrite but not all of it, and they have to decide whether to trust the rest before they've read it. Moving the gate to the copy action changes the psychology completely. By the time they want to copy, they've read the whole thing and already decided it's good. The signup cost feels smaller relative to the value already confirmed.

On mobile, the copy button is sticky at the bottom of the output area so it stays visible as the user scrolls through longer rewrites. Otherwise there's a real risk of it disappearing below the fold on small screens.

The secondary metric I'd track alongside signup rate is the copy-button click rate, which tells you how many users actually made it to that moment of intent. If the variant drives more clicks but doesn't convert them to signups, the modal itself needs work. If the click rate and signup rate both rise, the hypothesis holds.

## Test 2: What does the gate say?

The only thing that changes here is the copy inside the gate overlay. Everything else is identical to the control.

The control reads: "See the full result. No credit card needed."

The variant reads: "Stop getting flagged. Detectors won't catch this rewrite. It's free — no credit card, just an email." The CTA button changes from "See Result" to "Stay invisible."

The people landing on this page searched for "free ai humanizer." That search doesn't come from idle curiosity. It comes from someone who has already been flagged, or is scared they will be, or just had a client push back on their work. The anxiety is active. The control copy speaks to a neutral benefit (see your result). The variant speaks directly to the fear that brought them here in the first place.

Loss aversion research is pretty consistent that fear of a bad outcome motivates action more reliably than the promise of a good one, especially in high-stakes situations. Getting flagged by Turnitin or losing a client over AI detection is high stakes. Framing the gate around relief from that specific fear should convert better than a generic "here's your result."

The risk is that it comes off as alarmist and some users bounce. That's exactly why I'd monitor bounce rate closely. If anxiety framing repels more people than it converts, it'll show up as a spike in hero exits before the gate is reached.

## Test 3: Can we show the proof in numbers?

This one adds a single element to the output panel: a live AI probability meter. When the page loads, it shows 87% (red). As the humanized text types out, it counts down in real time, finishing around 8% (green) when the output is complete. The widget shows the three major detector names — GPTZero, Turnitin, Originality.ai — and the bar shifts from red to amber to green as the percentage drops.

Nothing else changes. Same gate, same copy, same blur position as the control.

The hypothesis is about specificity of proof. The control demonstrates quality through the text itself — you read it and it sounds more natural. The variant demonstrates quality through a number you can verify. These users care about detector scores. That's what they searched for. Showing the exact metric they're anxious about, and watching it move in real time, is a much more direct match to what they came for than asking them to judge the prose quality themselves.

The downside I'm watching for is attention fragmentation. The widget adds something to look at above the output, which could pull focus away from actually reading the rewrite and slow the path to the gate. Time-on-hero will tell us whether users are engaging more deeply or just getting distracted. Bounce rate will tell us if the extra complexity costs more than it contributes.

## Which one I'd run first

Test 1 is the highest-leverage change and I'd run it first. Gate placement affects every visitor who makes it to the end of the demo, and the control's blur-at-65% decision is the most likely assumption to be wrong. If the result is positive, it changes how we think about gating on every future page we build. Test 3 has the most upside but also the most uncertainty, so I'd run it second when we have a cleaner baseline to test against. Test 2 is the safest and cheapest of the three — even a loss is informative, because it tells us how this audience responds to charged versus calm copy, which has direct implications for ad creative.
