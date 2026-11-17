"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [copied, setCopied] = useState<boolean>(false);
  const email = "mwathibrian7@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="page-layout">
      <PageHeader
        title="Get in Touch"
        subtitle="Have an engineering project, cloud architecture consultation, or want to discuss distributed systems? Send me a message or connect directly."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "24px",
          marginTop: "8px",
        }}
      >
        <div className="card" style={{ padding: "28px" }}>
          <div className="card-category" style={{ marginBottom: "8px" }}>
            Direct Email
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", margin: "0 0 10px" }}>
            Drop a Line
          </h2>
          <p style={{ color: "var(--ink-muted)", fontSize: "0.95rem", margin: "0 0 20px" }}>
            The most reliable way to reach me for architectural reviews, contract work, or technical discussions.
          </p>

          <div
            style={{
              padding: "12px 16px",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "var(--green)",
              marginBottom: "18px",
              wordBreak: "break-all",
            }}
          >
            {email}
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a
              href={`mailto:${email}`}
              className="btn btn-primary btn-tactile"
              style={{ flex: 1, minInlineSize: "140px", justifyContent: "center" }}
            >
              Compose Email &rarr;
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-ghost btn-tactile"
              style={{ minInlineSize: "110px", justifyContent: "center" }}
              aria-label="Copy email address to clipboard"
            >
              {copied ? "Copied! ✓" : "Copy Email"}
            </button>
          </div>
        </div>

        <div className="card" style={{ padding: "28px" }}>
          <div className="card-category" style={{ marginBottom: "8px" }}>
            Online &amp; Presence
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", margin: "0 0 10px" }}>
            Profiles &amp; Location
          </h2>
          <p style={{ color: "var(--ink-muted)", fontSize: "0.95rem", margin: "0 0 20px" }}>
            Based in Nairobi, Kenya (East Africa Time · UTC+3). Open to remote engineering collaborations worldwide.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="https://github.com/bryan-mwas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-tactile"
              style={{ justifyContent: "space-between" }}
            >
              <span>GitHub Repository</span>
              <span>↗</span>
            </a>
            <a
              href="mailto:mwathibrian7@gmail.com"
              className="btn btn-ghost btn-tactile"
              style={{ justifyContent: "space-between" }}
            >
              <span>Direct Inquiries</span>
              <span>↗</span>
            </a>
          </div>

          <div
            style={{
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.85rem",
              color: "var(--ink-muted)",
            }}
          >
            <span className="status-dot" aria-hidden="true" />
            <span>Currently accepting new engineering opportunities</span>
          </div>
        </div>
      </div>
    </main>
  );
}
