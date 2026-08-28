/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Apple fetches this exact path over HTTPS with no redirects. Serving it
      // from a route handler rather than /public guarantees the JSON
      // content-type, which the association silently fails without.
      { source: '/.well-known/apple-app-site-association', destination: '/api/aasa' },
      { source: '/apple-app-site-association', destination: '/api/aasa' },
    ]
  },
}
export default nextConfig
