export default function Home() {
  return (
    <main>
      <span className="pill">macOS · open source</span>
      <h1>agent-creds</h1>
      <p className="tagline">
        A credential vault for AI agents. Your agents use your secrets — and never see them.
      </p>

      <pre>{`brew install ardabotai/tap/agent-creds
brew services start agent-creds
agentcreds setup`}</pre>

      <h2>The idea</h2>
      <p>
        An agent can be prompt-injected by anything it reads, so it is treated as an untrusted
        client. Connecting grants the ability to <em>ask</em> and nothing more. Every release is
        approved by you with Touch ID, on the daemon&rsquo;s own prompt — never through the
        agent&rsquo;s conversation, so a hijacked agent cannot capture, replay, or fake it.
      </p>
      <p>
        What the agent gets back is a short-lived handle, not a credential.
      </p>

      <h2>How agents actually use them</h2>
      <div className="grid">
        <div className="card">
          <h3>HTTP APIs</h3>
          <p>A local proxy attaches the real credential at send time and scrubs it from responses.</p>
        </div>
        <div className="card">
          <h3>CLI tools</h3>
          <p>
            <code>agentcreds run --with github/token -- gh pr create</code>
          </p>
        </div>
        <div className="card">
          <h3>Browsers</h3>
          <p>The daemon types the secret into the page itself over CDP.</p>
        </div>
        <div className="card">
          <h3>Signup</h3>
          <p>Generates a password, saves it to your vault, and never shows it to the agent.</p>
        </div>
      </div>

      <h2>Passkey-protected vaults</h2>
      <p>
        With a passkey enrolled, the WebAuthn assertion <em>is</em> the key release: the
        authenticator&rsquo;s PRF output derives the key that unwraps your secrets. Without your
        approval the key does not exist in the process at all — an unapproved release is
        impossible rather than merely refused.
      </p>

      <h2>Works with</h2>
      <p>
        Claude Code, Codex, opencode, and Cursor are detected and configured automatically. Any
        MCP-capable agent works.
      </p>

      <hr className="rule" />
      <footer>
        <p>
          <a href="https://github.com/ardabotai/agent-creds">Source on GitHub</a> ·{' '}
          <a href="https://github.com/ardabotai/agent-creds/blob/main/SECURITY.md">
            Security policy
          </a>{' '}
          · MIT
        </p>
        <p>Built by ArdaBot, Inc.</p>
      </footer>
    </main>
  )
}
