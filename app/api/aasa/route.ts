// Apple App Site Association.
//
// This is what lets agent-creds create WebAuthn passkeys against
// agentcreds.ardabot.ai. The macOS app declares
// `webcredentials:agentcreds.ardabot.ai` in its entitlements; Apple fetches
// this file and checks the app is listed here. Both sides must agree or
// passkey registration fails with a domain association error.
//
// The identifier is <TeamID>.<BundleID>.
const ASSOCIATION = {
  webcredentials: {
    apps: ['3CQT7X643L.ai.ardabot.agentcreds'],
  },
}

export const dynamic = 'force-static'

export function GET() {
  return new Response(JSON.stringify(ASSOCIATION, null, 2), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=3600',
    },
  })
}
