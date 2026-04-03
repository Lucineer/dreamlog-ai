// DreamLog.ai — Dream Tracker
// Built by Superinstance & Lucineer (DiGennaro et al.)

export interface Env { KV: KVNamespace }

const CSP = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://*;";

const COLOR = "#c084fc";
const NAME = "DreamLog.ai";
const DESC = "Dream Tracker";

function landing(): string {
  return `<!DOCTYPE html><html><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width">
<title>${NAME}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui;background:#07060f;color:#e0e0e0;min-height:100vh;display:flex;align-items:center;justify-content:center}
.card{max-width:480px;width:90%;padding:2.5rem;background:#0d0c1a;border:1px solid #1e1b3a;border-radius:16px;text-align:center}
.card h1{font-size:2rem;font-weight:800;background:linear-gradient(135deg,${COLOR},${COLOR}88);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.5rem}
.card p{color:#6b7280;font-size:.9rem;margin-bottom:1.5rem}
.badge{display:inline-block;padding:.3rem .8rem;border-radius:20px;font-size:.7rem;background:${COLOR}15;color:${COLOR};border:1px solid ${COLOR}30;margin-bottom:1.5rem}
.routes{display:flex;flex-direction:column;gap:.4rem;text-align:left}
.route{display:flex;justify-content:space-between;padding:.5rem .75rem;background:#111;border:1px solid #1e1b3a;border-radius:8px;font-size:.75rem}
.route .path{color:#a78bfa;font-family:monospace}
.route .status{color:#34d399}
</style></head><body>
<div class="card">
  <h1>${NAME}</h1>
  <p>${DESC}</p>
  <div class="badge">Cocapn Fleet Vessel · BYOK</div>
  <div class="routes">
    <div class="route"><span class="path">/health</span><span class="status">● Live</span></div>
    <div class="route"><span class="path">/api/seed</span><span class="status">● Live</span></div>
    <div class="route"><span class="path">/api/efficiency</span><span class="status">● Live</span></div>
    <div class="route"><span class="path">/api/confidence</span><span class="status">● Live</span></div>
    <div class="route"><span class="path">/api/evaporation</span><span class="status">● Live</span></div>
    <div class="route"><span class="path">/api/memory</span><span class="status">● Live</span></div>
    <div class="route"><span class="path">/api/kg</span><span class="status">● Live</span></div>
  </div>
</div>
</body></html>`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const h = { 'Content-Type': 'text/html;charset=utf-8', 'Content-Security-Policy': CSP };
    const j = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

    if (request.method === 'OPTIONS') return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type,Authorization' } });
    if (url.pathname === '/') return new Response(landing(), { headers: h });
    if (url.pathname === '/health') return new Response(JSON.stringify({ status: 'ok', service: NAME, version: '1.0.0', builtBy: 'Superinstance & Lucineer (DiGennaro et al.)' }, null, 2), { headers: j });
    if (url.pathname === '/api/seed') return new Response(JSON.stringify({ name: NAME, desc: DESC, fleet: 'cocapn', version: '1.0.0' }, null, 2), { headers: j });
    if (url.pathname === '/api/efficiency') return new Response(JSON.stringify({ totalRequests: 0, cacheHits: 0, cacheHitRate: 0, tokensSaved: 0, totalTokens: 0 }, null, 2), { headers: j });
    if (url.pathname === '/api/confidence') return new Response(JSON.stringify({ scores: [] }, null, 2), { headers: j });
    if (url.pathname === '/api/evaporation') return new Response(JSON.stringify({ hot: [], warm: [], coverage: 0 }, null, 2), { headers: j });
    if (url.pathname === '/api/memory') return new Response(JSON.stringify([]), { headers: j });
    if (url.pathname === '/api/kg') return new Response(JSON.stringify({ nodes: [], edges: [], domain: NAME.replace('.ai',''), timestamp: Date.now() }), { headers: j });
    return new Response('{"error":"Not Found"}', { status: 404, headers: j });
  },
};
