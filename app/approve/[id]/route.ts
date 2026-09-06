export const dynamic = 'force-dynamic'

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params
  const valid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) && !new URL(request.url).search
  const body = valid
    ? `<h1>Review in agent-creds</h1><p>Open the app on your Mac or paired iPhone to review this request. Opening the app does not approve access.</p><p><a href="agentcreds://approve/${id}">Open agent-creds</a></p><p>If the app is not installed, see the <a href="https://github.com/ardabotai/agent-creds#readme" rel="noreferrer">installation instructions</a>. The iPhone companion is awaiting distribution.</p><p>Your Mac must be online. Expired or completed requests cannot be approved.</p>`
    : '<h1>Invalid approval link</h1><p>Ask your agent for a new approval link.</p>'
  return new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Review in agent-creds</title></head><body><main>${body}</main></body></html>`, {
    status: valid ? 200 : 400,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Referrer-Policy': 'no-referrer',
      'X-Robots-Tag': 'noindex, nofollow',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'",
    },
  })
}
