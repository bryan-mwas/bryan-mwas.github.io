import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Brian Mwathi",
  description:
    "System profile and background of Brian Mwathi, full-stack engineer and cloud architect based in Nairobi, Kenya.",
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="page-header">
        <Link href="/" className="back-link">
          &larr; [00] Back to Base
        </Link>
        <div className="hero-spec-tag">
          <span className="spec-dot" aria-hidden="true" />
          <span>DOSSIER // SPECIFICATION ID: BM-2026</span>
        </div>
        <h1 className="page-title">About &amp; Background</h1>
        <p className="page-subtitle">
          Full-stack software engineer based in Nairobi, Kenya, architecting
          distributed cloud systems and high-reliability financial tooling.
        </p>
      </div>

      <section className="stats-grid" aria-label="System statistics">
        <div className="stat-card">
          <span className="stat-index">[SPEC-01]</span>
          <span className="stat-num">6+</span>
          <span className="stat-label">Years Field Experience</span>
          <p className="stat-desc">
            Designing resilient microservices and distributed workloads on AWS
            &amp; Azure.
          </p>
        </div>

        <div className="stat-card">
          <span className="stat-index">[SPEC-02]</span>
          <span className="stat-num">8</span>
          <span className="stat-label">African Territories</span>
          <p className="stat-desc">
            Deploying applications serving millions across diverse African
            digital economies.
          </p>
        </div>

        <div className="stat-card">
          <span className="stat-index">[SPEC-03]</span>
          <span className="stat-num">MSc</span>
          <span className="stat-label">IT &amp; Machine Learning</span>
          <p className="stat-desc">
            Advanced degree fusing distributed architectures with data science
            and ML models.
          </p>
        </div>

        <div className="stat-card">
          <span className="stat-index">[SPEC-04]</span>
          <span className="stat-num">FinTech</span>
          <span className="stat-label">Core Payments</span>
          <p className="stat-desc">
            Client-side statement decryption, automated billing pipelines, and
            debt simulators.
          </p>
        </div>
      </section>

      <div className="about-columns">
        <article className="bio-card">
          <div className="card-hardware-header">
            <span className="card-spec-code">LOG // 01: ENGINEERING NARRATIVE</span>
            <span className="card-status-pill">VERIFIED</span>
          </div>

          <h2>Background &amp; Philosophy</h2>
          <p>
            Hello! I&apos;m Brian, a software engineer based in Nairobi, Kenya. My
            approach to software engineering is rooted in first-principles
            problem solving and building systems that perform flawlessly under
            real-world constraints.
          </p>
          <p>
            With an MSc in Information Technology focused on applied Machine
            Learning and an undergraduate foundation in Informatics, I combine
            rigorous technical execution with pragmatic architecture. Over the
            past six years, I have engineered cloud-native distributed platforms
            running on AWS and Azure that power transactions across eight
            African countries.
          </p>

          <div className="card-hardware-header" style={{ marginTop: "32px" }}>
            <span className="card-spec-code">LOG // 02: INFRASTRUCTURE &amp; FINTECH</span>
            <span className="card-status-pill">ACTIVE</span>
          </div>

          <h2>Building for African Scale</h2>
          <p>
            Building for Africa demands deep empathy for infrastructure
            discrepancies, mobile-first environments, and distinct payment
            rails. Whether it is parsing encrypted M-Pesa statements directly in
            the client runtime for total privacy, generating instantaneous
            invoice PDFs, or building amortization simulators, I build software
            that respects user data, loads instantaneously, and stays reliable.
          </p>

          <div className="card-hardware-header" style={{ marginTop: "32px" }}>
            <span className="card-spec-code">LOG // 03: MENTORSHIP &amp; STANDARDS</span>
            <span className="card-status-pill">CONTINUOUS</span>
          </div>

          <h2>Mentorship &amp; Craft</h2>
          <p>
            Writing code is only half the job. I take immense pride in
            establishing maintainable architectural standards, authoring clean
            specifications, and mentoring developers. Building collaborative,
            high-trust engineering teams is how durable technology gets built.
          </p>

          <div className="actions" style={{ marginTop: "32px" }}>
            <Link className="btn btn-primary btn-tactile" href="/portfolio">
              Inspect Portfolio &rarr;
            </Link>
            <a
              className="btn btn-ghost btn-tactile"
              href="mailto:mwathibrian7@gmail.com"
            >
              Contact Brian
            </a>
          </div>
        </article>

        <aside>
          <div className="sidebar-box">
            <div className="card-hardware-header">
              <span className="card-spec-code">SPEC // TOOLKIT</span>
              <span className="card-status-pill">V.2026</span>
            </div>

            <div className="toolkit-item">
              <div className="toolkit-title">[01] CLOUD &amp; DEVOPS</div>
              <ul className="tags">
                <li>AWS Lambda</li>
                <li>AWS ECS / RDS</li>
                <li>Microsoft Azure</li>
                <li>Docker</li>
                <li>CI/CD Workflows</li>
              </ul>
            </div>

            <div className="toolkit-item">
              <div className="toolkit-title">[02] LANGUAGES &amp; WEB</div>
              <ul className="tags">
                <li>TypeScript</li>
                <li>Next.js / React</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Web Standards</li>
              </ul>
            </div>

            <div className="toolkit-item">
              <div className="toolkit-title">[03] DATA &amp; ARCHITECTURE</div>
              <ul className="tags">
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>Microservices</li>
                <li>REST / GraphQL</li>
                <li>Event Pipelines</li>
              </ul>
            </div>
          </div>

          <div className="sidebar-box">
            <div className="card-hardware-header">
              <span className="card-spec-code">STATUS // TELEMETRY</span>
              <span className="card-status-pill">OPEN</span>
            </div>
            <p style={{ margin: "14px 0 16px", fontSize: "0.95rem" }}>
              Currently open for selected architectural consultations, contract
              engineering, and technical discussions.
            </p>
            <a
              className="btn btn-primary btn-tactile btn-sm"
              style={{ width: "100%" }}
              href="mailto:mwathibrian7@gmail.com"
            >
              mwathibrian7@gmail.com
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
