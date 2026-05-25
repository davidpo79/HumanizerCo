import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: '256kb' }));
app.use(express.static(__dirname, { extensions: ['html'] }));

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const RATE_LIMIT = parseInt(process.env.RATE_LIMIT || '20', 10);
const WINDOW_MS = 60 * 60 * 1000;

const buckets = new Map();
function checkRate(ip) {
  const now = Date.now();
  const recent = (buckets.get(ip) || []).filter(t => now - t < WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return false;
  recent.push(now);
  buckets.set(ip, recent);
  return true;
}

const SYSTEM_PROMPT = `You rewrite AI-generated English text so it reads as if written by a thoughtful human.

Rules:
- Keep the original meaning and key facts exactly. Do not add new claims.
- Match the register of the original (formal stays formal, casual stays casual).
- Vary sentence length and rhythm — mix short sentences with longer ones.
- Use natural contractions where a human would.
- Remove AI clichés: "delve into", "leverage", "robust", "imperative", "in conclusion", "in today's fast-paced landscape", "multifaceted", "intricate tapestry", "synergize", "paradigm shift", "cutting-edge", "thrilled to", "highly motivated", "drive impactful results", "ideal candidate", "proven track record".
- Do not use em-dashes (—). Replace them with commas, periods, or colons depending on context.
- Cut filler words. Prefer concrete verbs over abstract nouns.
- Do not add headers, bullet points, or formatting that wasn't in the original.
- Output ONLY the rewritten text. No preamble, no "Here is...", no explanation, no quotes.`;

app.post('/api/humanize', async (req, res) => {
  try {
    const ip = (req.headers['x-forwarded-for'] || '').toString().split(',')[0].trim() ||
               req.socket.remoteAddress || 'unknown';
    if (!checkRate(ip)) {
      return res.status(429).json({ error: 'Rate limit exceeded. Try again later.' });
    }

    const { text } = req.body || {};
    if (typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({ error: 'Missing text' });
    }
    if (text.length > 8000) {
      return res.status(413).json({ error: 'Text too long (max 8000 characters)' });
    }
    if (!GEMINI_API_KEY) {
      return res.status(503).json({ error: 'Humanizer API not configured' });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 22000);

    const upstream = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: 'user', parts: [{ text: `Rewrite this text:\n\n${text}` }] }],
        generationConfig: {
          temperature: 0.9,
          topP: 0.95,
          maxOutputTokens: 2048,
        },
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!upstream.ok) {
      const errBody = await upstream.text().catch(() => '');
      console.error('Gemini error', upstream.status, errBody.slice(0, 400));
      return res.status(502).json({ error: 'Upstream provider error' });
    }

    const data = await upstream.json();
    const humanized = data?.candidates?.[0]?.content?.parts?.map(p => p.text).filter(Boolean).join('').trim();

    if (!humanized) {
      const blockReason = data?.promptFeedback?.blockReason;
      if (blockReason) {
        return res.status(422).json({ error: `Blocked: ${blockReason}` });
      }
      return res.status(502).json({ error: 'Empty response from provider' });
    }

    res.json({ humanized, model: GEMINI_MODEL });
  } catch (err) {
    if (err.name === 'AbortError') {
      return res.status(504).json({ error: 'Provider timeout' });
    }
    console.error('Server error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    gemini: Boolean(GEMINI_API_KEY),
    model: GEMINI_MODEL,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`HumanizerCo listening on :${PORT}` +
    (GEMINI_API_KEY ? ` (Gemini ${GEMINI_MODEL} configured)` : ' (no GEMINI_API_KEY — /api/humanize will return 503)'));
});
