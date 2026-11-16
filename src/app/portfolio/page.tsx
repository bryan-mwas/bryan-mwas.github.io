import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "@/lib/projects";
import PortfolioCatalog from "@/components/PortfolioCatalog";

export const metadata: Metadata = {
  title: "Portfolio & Systems | Brian Mwathi",
  description:
    "Explore projects, tools, and technical case studies engineered by Brian Mwathi — full-stack engineer and cloud architect.",
};

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main id="main-content" tabIndex={-1} className="projects-section">
      <div className="page-header">
        <Link href="/" className="back-link">
          &larr; [00] Back to Base
        </Link>
        <div className="hero-spec-tag">
          <span className="spec-dot" aria-hidden="true" />
          <span>PORTFOLIO // SPECIFICATION REPOSITORY</span>
        </div>
        <h1 className="page-title">Featured Systems</h1>
        <p className="page-subtitle">
          Engineering case studies, open-source fintech utilities, and
          distributed web applications built for reliability and African scale.
        </p>
      </div>

      <PortfolioCatalog projects={projects} />
    </main>
  );
}
