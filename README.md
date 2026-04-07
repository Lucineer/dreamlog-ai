# DreamLog
You wake up with a fading dream. This helps you keep it.

A private, self-hosted dream journal that logs and reviews your dreams. Built for the Cocapn Fleet.

✅ Live: https://dreamlog-ai.casey-digennaro.workers.dev

---

## Why this exists
Most dream journals are passive notebooks. This helps you notice patterns—like dreaming of being unprepared before important events—by reviewing your history.

---

## How it works
*   **Private by default:** No accounts, tracking, or email. Your entries stay within the Cloudflare Worker you deploy.
*   **No distractions:** A simple text interface for quick morning entries, with no notifications or gamification.
*   **Self-contained:** One file (`worker.ts`) with zero runtime dependencies. No external API calls are required.
*   **Own your tool:** Fork this repository and modify it for your own use. You are not renting software.

---

## What it does
*   Provides a clean, fast interface for logging dreams.
*   Lists past entries on a single timeline for personal review.
*   Highlights repeated words and themes across your entries using basic text analysis.
*   Fleet-native: Can be connected to other personal agents on the Cocapn Fleet.
*   Configurable: You can modify the analysis logic or theme by editing a few lines in the worker.
*   Deploys as a Cloudflare Worker in under a minute.

**One Limitation:** The pattern detection is based on simple text matching. For advanced semantic analysis, you will need to customize the worker with your own logic or LLM integration.

---

## Quick Start
1.  **Fork** this repository.
2.  ​**Deploy** it to Cloudflare Workers.
3.  Start logging dreams. Modify `worker.ts` to change how it works.

---

## Contributing
This is a Stage 2 Expander in the Cocapn Fleet. Suggestions for improved usability or code clarity are welcome. Please open an issue to discuss significant changes.

---

## License
MIT License.

Superinstance & Lucineer (DiGennaro et al.).

---

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> • <a href="https://cocapn.ai">Cocapn</a>
</div>