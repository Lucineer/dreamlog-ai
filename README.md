# DreamLog.ai

You remember a fragment, jot it down, and move on. Weeks later, you realize the same strange symbol has appeared seven times. This catches that.

It runs on your Cloudflare account. There is no central service. No one else ever sees your notes.

**Live Demo:** https://dreamlog-ai.casey-digennaro.workers.dev

---

## Why It Exists
Most journals are inert archives. You are unlikely to manually review dozens of entries to find subtle patterns. This highlights recurring words and themes automatically, without sending a single character of your private writing to an external API. It was built for keeping your inner world to yourself.

---

## Quick Start
1.  **Fork this repository.** The code is yours after forking.
2.  Deploy it to Cloudflare Workers (typically under 2 minutes).
3.  Start adding entries when you wake up. Recurring keywords will begin to surface after you have a few entries.

---

## Features
- A single, distraction-free input box for groggy morning typing.
- Automatic highlighting of repeated words and themes in your timeline.
- A private, reverse-chronological log visible only to you.
- Standard Fleet endpoints for potential future integration with other personal tools.
- Zero runtime dependencies. All logic is in one `worker.ts` file.
- No forced updates. It will continue to function as long as your Worker runs.

---

## What Makes It Different
1.  **Fork-first ownership:** You deploy your own independent copy. There is no sign-up.
2.  **Complete privacy:** Zero telemetry. No network calls leave your Cloudflare Worker.
3.  **Transparent logic:** Pattern matching uses simple, readable keyword counting. You can inspect and modify it directly.

---

## Limitations
Pattern detection matches exact keywords only (e.g., "run" and "running" are separate). It typically requires 5 or more entries before recurring themes become clearly apparent. For advanced analysis like sentiment tracking or semantic grouping, you must add that logic yourself.

---

## License
MIT

<div style="text-align:center;padding:16px;color:#64748b;font-size:.8rem"><a href="https://the-fleet.casey-digennaro.workers.dev" style="color:#64748b">The Fleet</a> &middot; <a href="https://cocapn.ai" style="color:#64748b">Cocapn</a></div>