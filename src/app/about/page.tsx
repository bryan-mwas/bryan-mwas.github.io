import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About | Brian Mwathi",
  description:
    "System profile and background of Brian Mwathi, full-stack engineer and cloud architect based in Nairobi, Kenya.",
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-layout">
      <PageHeader
        tag="Engineering Profile"
        title="Background &amp; Expertise"
        subtitle="Six years of designing and operating cloud infrastructure on AWS and Azure, and building high-trust applications tailored for African digital economies."
      />

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-num">6+</div>
          <div className="stat-label">Years of Experience</div>
          <p className="stat-desc">
            Production full-stack engineering and cloud-native architecture.
          </p>
        </div>

        <div className="stat-card">
          <div className="stat-num">8</div>
          <div className="stat-label">Countries Deployed</div>
          <p className="stat-desc">
            Fintech tools and distributed systems serving users across Africa.
          </p>
        </div>

        <div className="stat-card">
          <div className="stat-num">2</div>
          <div className="stat-label">Cloud Ecosystems</div>
          <p className="stat-desc">
            Hands-on production proficiency across both AWS and Microsoft Azure.
          </p>
        </div>

        <div className="stat-card">
          <div className="stat-num">99.9%</div>
          <div className="stat-label">Reliability Focus</div>
          <p className="stat-desc">
            Architecting fault-tolerant APIs, serverless backends, and databases.
          </p>
        </div>
      </div>

      <div className="about-columns">
        <article className="bio-card">
          <h2>Engineering Philosophy</h2>
          <p>
            I am a full-stack software engineer and cloud architect based in
            Nairobi, Kenya. Over the past six years, I have architected, scaled,
            and maintained distributed cloud infrastructure on Amazon Web
            Services and Microsoft Azure, spanning serverless compute, event-driven
            microservices, and automated CI/CD deployment pipelines.
          </p>

          <h2>Fintech &amp; Local Context</h2>
          <p>
            Building for Africa demands deep empathy for infrastructure
            discrepancies, mobile-first environments, and distinct payment
            rails. Whether it is parsing encrypted M-Pesa statements directly in
            the client runtime for total privacy, generating instantaneous
            invoice PDFs, or building amortization simulators, I build software
            that respects user data, loads instantaneously, and stays reliable.
          </p>

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
            <Link className="btn btn-ghost btn-tactile" href="/contact">
              Get in Touch &rarr;
            </Link>
          </div>
        </article>

        <aside>
          <div className="sidebar-box">
            <h3 style={{ fontSize: "1.1rem", marginBottom: "16px" }}>Technical Toolkit</h3>

            <div className="toolkit-item">
              <div className="toolkit-title">Cloud &amp; DevOps</div>
              <ul className="tags">
                <li>AWS Lambda</li>
                <li>AWS ECS / RDS</li>
                <li>Microsoft Azure</li>
                <li>Docker</li>
                <li>CI/CD Workflows</li>
              </ul>
            </div>

            <div className="toolkit-item">
              <div className="toolkit-title">Languages &amp; Web</div>
              <ul className="tags">
                <li>TypeScript</li>
                <li>Next.js / React</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Web Standards</li>
              </ul>
            </div>

            <div className="toolkit-item">
              <div className="toolkit-title">Data &amp; Architecture</div>
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
            <h3 style={{ fontSize: "1.1rem", marginBottom: "12px" }}>Availability</h3>
            <p style={{ margin: "0 0 16px", fontSize: "0.95rem", color: "var(--ink-muted)" }}>
              Currently open for selected architectural consultations, contract
              engineering, and technical discussions.
            </p>
            <Link
              className="btn btn-primary btn-tactile btn-sm"
              style={{ width: "100%", justifyContent: "center" }}
              href="/contact"
            >
              Contact Brian &rarr;
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
