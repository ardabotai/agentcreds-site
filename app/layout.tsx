import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'agent-creds',
  description:
    'A credential vault for AI agents. Your agents use your secrets without ever seeing them.',
  openGraph: {
    title: 'agent-creds',
    description:
      'A credential vault for AI agents. Your agents use your secrets without ever seeing them.',
    url: 'https://agentcreds.ardabot.ai',
    siteName: 'agent-creds',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
