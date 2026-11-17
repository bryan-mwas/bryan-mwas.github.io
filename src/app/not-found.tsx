import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-section" style={{ padding: "64px 0", textAlign: "center" }}>
      <div className="card" style={{ maxWidth: "560px", margin: "0 auto", padding: "40px 24px" }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "4rem",
            fontWeight: 700,
            color: "var(--orange)",
            lineHeight: 1,
            marginBottom: "12px",
          }}
        >
          404
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", margin: "0 0 12px" }}>
          Page Not Found
        </h1>
        <p style={{ color: "var(--ink-muted)", fontSize: "1rem", margin: "0 0 28px", lineHeight: 1.6 }}>
          The page or resource you are looking for does not exist, has been moved,
          or is temporarily unavailable.
        </p>

        <div>
          <Link href="/" className="btn btn-primary btn-tactile">
            Return to Homepage &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
