import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/projects";
import { remark } from "remark";
import html from "remark-html";
import BackLink from "@/components/BackLink";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | Brian Mwathi",
    };
  }

  return {
    title: `${project.title} | Brian Mwathi`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const processed = await remark().use(html).process(project.body);
  const contentHtml = processed.toString();
  const isInternalUrl = project.url?.startsWith("/");

  return (
    <main id="main-content" tabIndex={-1} className="page-layout project-detail-layout">
      <header className="page-header" style={{ paddingBottom: "12px" }}>
        <BackLink href="/portfolio" label="Back to Portfolio" />
      </header>

      <div className="project-hero">
        <div className="project-detail-head">
          <div>
            <span className="project-category-badge">{project.category}</span>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-summary">{project.summary}</p>
            <ul className="tags">
              {project.stack.map((t) => (
                <li key={t}>
                  <span className="tag-hash">#</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-actions" style={{ marginTop: "24px" }}>
          {project.url ? (
            isInternalUrl ? (
              <Link href={project.url} className="btn btn-primary btn-tactile">
                Launch Live Tool &rarr;
              </Link>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-tactile"
              >
                Launch Live Demo &rarr;
              </a>
            )
          ) : null}

          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-tactile"
            >
              View on GitHub
            </a>
          ) : null}

          {project.slug === "loan-calculator" && !isInternalUrl ? (
            <Link href="/loan-calculator" className="btn btn-primary btn-tactile">
              Open Interactive Simulator &rarr;
            </Link>
          ) : null}
        </div>

        {project.image ? (
          <div className="hardware-bezel">
            <div className="bezel-topbar">
              <div className="bezel-controls">
                <span className="bezel-dot dot-red" aria-hidden="true" />
                <span className="bezel-dot dot-amber" aria-hidden="true" />
                <span className="bezel-dot dot-green" aria-hidden="true" />
              </div>
              <span>Preview</span>
              <span>Live Application</span>
            </div>
            <Image
              src={project.image}
              alt={`Interface capture of ${project.title}`}
              width={1000}
              height={500}
              priority
              sizes="(max-width: 800px) 100vw, 900px"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        ) : null}
      </div>

      <article className="case-study-body">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <Link href="/portfolio" className="btn btn-ghost btn-tactile">
            &larr; Back to all projects
          </Link>
          <Link href="/contact" className="btn btn-primary btn-tactile">
            Discuss this project &rarr;
          </Link>
        </div>
      </article>
    </main>
  );
}
