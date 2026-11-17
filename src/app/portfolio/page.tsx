import type { Metadata } from "next";
import { getProjects } from "@/lib/projects";
import PortfolioCatalog from "@/components/PortfolioCatalog";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Portfolio | Brian Mwathi",
  description:
    "Explore projects, tools, and technical case studies engineered by Brian Mwathi — full-stack engineer and cloud architect.",
};

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main id="main-content" tabIndex={-1} className="page-layout">
      <PageHeader
        tag="Portfolio"
        title="Featured Projects"
        subtitle="Engineering case studies, open-source fintech utilities, and distributed web applications built for reliability and African scale."
      />

      <PortfolioCatalog projects={projects} />
    </main>
  );
}
