# DreamLog.ai — AI Dream Journal

You often forget dreams soon after waking. This helps you hold onto them.

A private AI dream journal that captures and reviews your dreams. Built on the Cocapn Fleet as a lightweight, single-file agent you deploy yourself.

**Live instance:** https://dreamlog-ai.casey-digennaro.workers.dev

---

## Why
Most dream journals are either static note-taking apps or cloud services that own your data. This one runs on your own infrastructure. It does one thing well and will keep working as long as you want it to.

## What it does
*   Lets you log a dream quickly after waking.
*   Provides AI analysis of themes, tone, and symbols—using your own API key.
*   Surfaces recurring patterns over time using simple browser storage.
*   Runs privately. No data leaves your machine unless you send it to an AI model.
*   Entirely modifiable. Change prompts, swap models, or adjust the interface.
*   Zero dependencies. One file. Deploys in seconds.

## How it's different
*   **You fork it.** You don't sign up. Once deployed, it's yours.
*   No bloat. No `npm install`. No database to manage.
*   Fleet-native. You can plug in other Fleet agents for additional features.
*   BYOK (Bring Your Own Keys) by design. We provide the structure; you bring your AI key and rules.

## Quick start
Use the public instance linked above to try it.

To deploy your own private copy:
1.  Fork this repository.
2.  Deploy to Cloudflare Workers (it's a one-click process).
3.  Add your OpenAI API key in the dashboard environment variables (`AI_API_KEY`).
4.  It's live. Edit `worker.ts` to customize.

## One limitation
This is a browser-based app. Your dream entries are stored locally in your browser's localStorage. If you clear your browser data, they will be lost unless you've implemented a personal backup.

## Modify everything
The code is straightforward. You can edit the analysis prompts, change how dreams are stored, or connect a different LLM by modifying the `/api/analyze` route in `worker.ts`.

## Contributing
Improvements are welcome. Please open an issue first to discuss any changes.

## License
MIT

Superinstance & Lucineer (DiGennaro et al.).

---

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> • <a href="https://cocapn.ai">Cocapn</a>
</div>