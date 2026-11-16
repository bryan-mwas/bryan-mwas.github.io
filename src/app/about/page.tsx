import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Brian Mwathi",
  description:
    "Learn more about Brian Mwathi, full-stack software engineer specializing in cloud-native architectures and African fintech.",
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="page-header">
        <Link href="/" className="back-link">
          &larr; Back to Home
        </Link>
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          Software engineer based in Nairobi, Kenya, architecting cloud-native
          applications and tools that power business across Africa.
        </p>
      </div>

      <section className="stats-grid" aria-label="Key statistics">
        <div className="stat-card">
          <span className="stat-num">6+</span>
          <span className="stat-label">Years of Experience</span>
          <p className="stat-desc">
            Designing and shipping enterprise systems on AWS and Azure.
          </p>
        </div>

        <div className="stat-card">
          <span className="stat-num">8</span>
          <span className="stat-label">African Countries</span>
          <p className="stat-desc">
            Building applications that serve users in diverse emerging economies.
          </p>
        </div>

        <div className="stat-card">
          <span className="stat-num">MSc</span>
          <span className="stat-label">IT &amp; Machine Learning</span>
          <p className="stat-desc">
            Master&apos;s degree combining intelligent algorithms and distributed systems.
          </p>
        </div>

        <div className="stat-card">
          <span className="stat-num">Fintech</span>
          <span className="stat-label">Payments &amp; Tools</span>
          <p className="stat-desc">
            Deep experience with M-Pesa statements, billing engines, and loans.
          </p>
        </div>
      </section>

      <div className="about-columns">
        <article className="bio-card">
          <h2>Background &amp; Philosophy</h2>
          <p>
            Hello! I&apos;m Brian, a software engineer based in Nairobi, Kenya. My
            journey in technology has been driven by an obsession with solving
            real-world problems and creating software that runs reliably at scale.
          </p>
          <p>
            With a Master&apos;s degree in Information Technology focusing on
            Machine Learning and an academic foundation in Informatics, I bring a
            methodical, forward-thinking approach to every project. Over the past
            six years, I have immersed myself in cloud-native development,
            architecting distributed systems and microservices that deliver high
            availability and seamless user experiences across eight African
            nations.
          </p>

          <h2>African Tech &amp; Fintech</h2>
          <p>
            Building software for Africa requires solving unique infrastructure
            and payment challenges. Whether it is parsing encrypted M-Pesa PDF
            statements in the browser, automating itemized invoicing, or
            visualizing loan amortization models, I prioritize building tools that
            respect user privacy, work with low latency, and fit the realities of
            how businesses and consumers transact.
          </p>

          <h2>Mentorship &amp; Collaboration</h2>
          <p>
            Beyond shipping code, I believe strong engineering organizations are
            built on continuous learning and mentorship. Guiding junior
            engineers, establishing clean code patterns, and writing clear
            technical documentation are some of the most rewarding aspects of my
            career.
          </p>

          <div className="actions" style={{ marginTop: "32px" }}>
            <Link className="btn btn-primary" href="/portfolio">
              Explore my portfolio
            </Link>
            <a className="btn btn-ghost" href="mailto:mwathibrian7@gmail.com">
              Get in touch
            </a>
          </div>
        </article>

        <aside>
          <div className="sidebar-box">
            <h3>Technical Stack</h3>

            <div className="toolkit-item">
              <div className="toolkit-title">Cloud &amp; Infrastructure</div>
              <ul className="tags">
                <li>AWS (Lambda, ECS, RDS)</li>
                <li>Azure</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>Microservices</li>
              </ul>
            </div>

            <div className="toolkit-item">
              <div className="toolkit-title">Frontend &amp; Mobile Web</div>
              <ul className="tags">
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>React</li>
                <li>Modern CSS</li>
                <li>Web Standards</li>
              </ul>
            </div>

            <div className="toolkit-item">
              <div className="toolkit-title">Backend &amp; Data</div>
              <ul className="tags">
                <li>Node.js</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>

          <div className="sidebar-box">
            <h3>Let&apos;s Connect</h3>
            <p style={{ margin: "0 0 16px", fontSize: "0.95rem" }}>
              Have an interesting project, engineering challenge, or
              architecture discussion? Reach out anytime.
            </p>
            <a
              className="btn btn-primary btn-sm"
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
