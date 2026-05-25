# HumanizerCo Growth Assignment 🚀

Welcome to my submission for the HumanizerCo Growth/CRO assignment.
This repository contains the complete execution of the landing page strategy, including the Control LP and the 3 A/B test variants.

## 🔗 Live Interactive Demos (Railway)
I have deployed the pages so you can experience the PLG mechanics and typewriter animations directly:
* **Control LP:** [https://humanizerco-production.up.railway.app/](https://humanizerco-production.up.railway.app/)
* **Variant A (Zero-Click Full Exposure):** [https://humanizerco-production.up.railway.app/variant-a](https://humanizerco-production.up.railway.app/variant-a)
* **Variant B (Full Value Exposure):** [https://humanizerco-production.up.railway.app/variant-b](https://humanizerco-production.up.railway.app/variant-b)
* **Variant C (Social OAuth Gate):** [https://humanizerco-production.up.railway.app/variant-c](https://humanizerco-production.up.railway.app/variant-c)

## 🧪 A/B Test Overview

| | Control | A | B | C |
|---|---|---|---|---|
| Sample pills | ✅ | ❌ | ✅ | ✅ |
| Auto-start on load | ❌ | ✅ | ❌ | ❌ |
| Blur gate at 65% | ✅ | ❌ | ❌ | ✅ |
| Copy gates signup | ✅ | ✅ | ✅ | ✅ |
| OAuth buttons | ❌ | ❌ | ❌ | ✅ |

## 📄 Strategy & Write-ups
The strategic thinking, design rationale, and exact A/B testing hypotheses can be found in the markdown files below:
1. [writeup-a1.md](./writeup-a1.md) - Assignment #1: Control LP Strategy & Concept.
2. [writeup-a2.md](./writeup-a2.md) - Assignment #2: A/B Testing Ideation & KPIs.

## 🛠️ Stack
* **Frontend:** HTML5 / CSS3 / Vanilla JS — no frameworks, optimized for speed
* **Styling:** Tailwind CSS (CDN) + custom CSS variables for the "Ice vs. Fire" semantic color architecture
* **Backend:** Node.js / Express — serves static files and proxies humanization requests
* **AI:** Google Gemini 2.5 Flash via REST API — live on all pages for user-pasted text; sample pills use hardcoded pairs for instant load
* **Hosting:** Railway — automatic HTTPS, zero cold-start

Thank you for reviewing!
