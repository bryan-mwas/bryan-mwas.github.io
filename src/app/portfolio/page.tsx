import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio | Brian Mwathi",
  description:
    "Explore projects, tools, and case studies built by Brian Mwathi — full-stack engineer and cloud architect.",
};

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main id="main-content" tabIndex={-1} className="projects-section">
      <div className="page-header">
        <Link href="/" className="back-link">
          &larr; Back to Home
        </Link>
        <h1 className="page-title">Portfolio</h1>
        <p className="page-subtitle">
          Selected web applications, open-source fintech utilities, and
          interactive tools built for scale and real-world impact.
        </p>
      </div>

      <div className="projects">
        {projects.map((project) => {
          const isInternalUrl = project.url?.startsWith("/");
          return (
            <article key={project.slug} className="card">
              {project.image ? (
                <div className="card-image-wrap">
                  <Image
                    src={project.image}
                    alt=""
                    width={400}
                    height={200}
                    className="card-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : null}

              <div className="card-body">
                <div className="card-top">
                  <span className="card-category">{project.category}</span>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="card-arrow"
                    aria-label={`Read case study for ${project.title}`}
                  >
                    &rarr;
                  </Link>
                </div>

                <h3>
                  <Link href={`/portfolio/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p>{project.summary}</p>

                <ul className="tags">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="card-actions-row">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="btn btn-ghost btn-sm"
                    aria-label={`Read case study for ${project.title}`}
                  >
                    Case Study &rarr;
                  </Link>

                  {project.url ? (
                    isInternalUrl ? (
                      <Link
                        href={project.url}
                        className="btn btn-primary btn-sm"
                        aria-label={`Launch tool for ${project.title}`}
                      >
                        Launch Tool
                      </Link>
                    ) : (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        Live Demo
                      </a>
                    )
                  ) : null}

                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
