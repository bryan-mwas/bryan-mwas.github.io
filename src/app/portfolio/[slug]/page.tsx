import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/projects";
import { remark } from "remark";
import html from "remark-html";

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
    <main id="main-content" tabIndex={-1} className="project-detail-layout">
      <div className="page-header" style={{ paddingBottom: "24px" }}>
        <Link href="/portfolio" className="back-link">
          &larr; Back to Portfolio
        </Link>
      </div>

      <div className="project-hero">
        <div className="project-detail-head">
          <div>
            <span className="project-category-badge">{project.category}</span>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-summary">{project.summary}</p>
            <ul className="tags">
              {project.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-actions">
          {project.url ? (
            isInternalUrl ? (
              <Link href={project.url} className="btn btn-primary">
                Launch Live Tool &rarr;
              </Link>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
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
              className="btn btn-ghost"
            >
              View on GitHub
            </a>
          ) : null}

          {project.slug === "loan-calculator" && !isInternalUrl ? (
            <Link href="/loan-calculator" className="btn btn-primary">
              Open Interactive Calculator &rarr;
            </Link>
          ) : null}
        </div>

        {project.image ? (
          <div className="project-featured-image">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              width={1000}
              height={500}
              priority
              sizes="(max-width: 800px) 100vw, 900px"
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
          <Link href="/portfolio" className="btn btn-ghost">
            &larr; Back to all projects
          </Link>
          <a
            href="mailto:mwathibrian7@gmail.com"
            className="btn btn-primary"
          >
            Discuss this project
          </a>
        </div>
      </article>
    </main>
  );
}
