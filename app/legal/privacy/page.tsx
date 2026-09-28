export default function PrivacyPage() {
  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Privacy Policy</h1>
      <p className="lead">Last updated: September 28, 2026</p>

      <h2>1. Information We Collect</h2>
      <p>
        Risk Graph collects information necessary to provide security context
        graph services:
      </p>
      <ul>
        <li>
          <strong>Account Information:</strong> Email address, name, and
          authentication credentials
        </li>
        <li>
          <strong>Usage Data:</strong> Graph query history, asset data, and
          security findings
        </li>
        <li>
          <strong>Security Data:</strong> Asset topology, identity relationships,
          and vulnerability data you ingest
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Provide and maintain the Agent Safe service</li>
        <li>Monitor and analyze agent behavior for security purposes</li>
        <li>Generate audit logs and compliance reports</li>
        <li>Improve service performance and security</li>
        <li>Communicate with you about service updates</li>
      </ul>

      <h2>3. Data Storage and Security</h2>
      <p>
        We implement industry-standard security measures to protect your data:
      </p>
      <ul>
        <li>Encrypted data transmission (TLS/SSL)</li>
        <li>Encrypted data at rest</li>
        <li>Regular security audits</li>
        <li>Access controls and authentication</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share data only in the
        following circumstances:
      </p>
      <ul>
        <li>With your explicit consent</li>
        <li>To comply with legal obligations</li>
        <li>To protect our rights and safety</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        We retain your data for as long as your account is active or as needed
        to provide services. Audit logs may be retained for compliance purposes
        as required by law.
      </p>

      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Export your data</li>
        <li>Opt out of marketing communications</li>
      </ul>

      <h2>7. Cookies and Tracking</h2>
      <p>
        We use cookies and similar technologies to maintain sessions and analyze
        usage. See our Cookie Policy for details.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of significant changes via email or service notification.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        Questions about this Privacy Policy? Contact us at{" "}
        <a href="mailto:hrudushibu.tech@gmail.com">
          hrudushibu.tech@gmail.com
        </a>
      </p>
    </article>
  );
}
