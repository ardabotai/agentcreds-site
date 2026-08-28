# agentcreds.ardabot.ai

Landing page for [agent-creds](https://github.com/ardabotai/agent-creds), and —
more importantly — the **relying party domain** for its passkey support.

## Why this site has to exist

agent-creds can derive its vault key from a WebAuthn passkey (Phase 3). Apple
requires the relying party to prove it authorizes the app, by serving:

    https://agentcreds.ardabot.ai/.well-known/apple-app-site-association

```json
{ "webcredentials": { "apps": ["3CQT7X643L.ai.ardabot.agentcreds"] } }
```

`<TeamID>.<BundleID>`. The macOS app declares the matching
`webcredentials:agentcreds.ardabot.ai` entitlement. Both sides must agree or
passkey registration fails with a domain association error.

Served from `app/api/aasa/route.ts` via a rewrite rather than `public/`, because
Apple requires `application/json` and follows **no redirects** — a static
extensionless file gets the wrong content type, and any redirect fails silently.

## DNS

`agentcreds.ardabot.ai` must resolve to Vercel. In Cloudflare (which hosts the
ardabot.ai zone):

| Type | Name | Content | Proxy |
|---|---|---|---|
| A | `agentcreds` | `76.76.21.21` | **DNS only** (grey cloud) |

Proxying must stay off: Cloudflare's edge can rewrite or redirect the
`.well-known` path, and Apple's fetch tolerates neither.

## Develop

```sh
npm install
npm run dev
```
