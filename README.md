DreamLog.ai is a private, self-hosted dream journal. Capture an entry when you wake up. Review a simple timeline later. It's an agent for the Cocapn Fleet.

✅ **Live:** https://dreamlog-ai.casey-digennaro.workers.dev

---

## Why This Exists
Most journals add accounts, features, or complexity. This is a single text box that saves to your own Cloudflare Worker. You control the data and the code.

## What It Is
*   **Private.** No accounts. No tracking. Data lives only in your worker's KV storage.
*   **Fork-first.** This is a template. Copy it, modify it, and own your version.
*   **Zero dependencies.** One file (`worker.ts`). Deploys in under a minute.
*   **Fleet-native.** Uses the Cocapn agent protocol. Can connect to other tools in your personal fleet.

## What It Does
*   **One-box input.** A distraction-free page for quick morning notes.
*   **Timeline view.** A reverse-chronological list of all entries.
*   **Pattern highlighting.** Basic keyword matching surfaces repeated themes, people, or places.
*   **Standard agent endpoints.** Includes `/health` and `/graph` for fleet interoperability.
*   **Modifiable analysis.** The pattern logic is simple and meant to be replaced or extended.

## Quick Start
1.  Fork this repository.
2.  Deploy to Cloudflare Workers.
3.  Your journal is ready. Edit `worker.ts` to change any behavior.

## Limitations
This is a foundation. The default analysis is basic keyword matching, not AI. For advanced features like sentiment tracking or LLM summaries, you will need to add that logic yourself.

## License
MIT

Superinstance & Lucineer (DiGennaro et al.).

---

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> • <a href="https://cocapn.ai">Cocapn</a>
</div>