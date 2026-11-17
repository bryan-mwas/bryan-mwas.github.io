"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function PortfolioCatalog({
  projects,
}: {
  projects: Project[];
}) {
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  return (
    <div className="portfolio-catalog-container">
      <div className="portfolio-view-bar">
        <div className="hero-spec-tag">
          <span className="spec-dot" aria-hidden="true" />
          <span>{projects.length} Featured Projects</span>
        </div>

        <div
          className="portfolio-view-toggle"
          role="group"
          aria-label="Catalog layout presentation"
        >
          <button
            type="button"
            className={`view-mode-btn ${viewMode === "cards" ? "is-active" : ""}`}
            onClick={() => setViewMode("cards")}
            aria-pressed={viewMode === "cards"}
          >
            Cards
          </button>
          <button
            type="button"
            className={`view-mode-btn ${viewMode === "table" ? "is-active" : ""}`}
            onClick={() => setViewMode("table")}
            aria-pressed={viewMode === "table"}
          >
            Table
          </button>
        </div>
      </div>

      {viewMode === "cards" ? (
        <div className="projects">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      ) : (
        <div
          tabIndex={0}
          role="region"
          aria-labelledby="spec-table-caption"
          className="spec-table-wrapper"
        >
          <table
            className="spec-catalog-table"
            aria-label="Technical Projects Directory"
          >
            <caption id="spec-table-caption" className="visually-hidden">
              Technical Projects Directory
            </caption>
            <thead>
              <tr>
                <th scope="col" className="col-system">
                  PROJECT &amp; SCOPE
                </th>
                <th scope="col" className="col-domain">
                  DOMAIN
                </th>
                <th scope="col" className="col-stack">
                  STACK
                </th>
                <th scope="col" className="col-actions">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => {
                const isInternalUrl = project.url?.startsWith("/");

                return (
                  <tr key={project.slug} className="spec-row">
                    <th scope="row" className="spec-cell-system">
                      <div className="spec-title-row">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="spec-title-link"
                        >
                          {project.title}
                        </Link>
                        <span className="spec-mobile-domain card-status-pill">
                          {project.category}
                        </span>
                      </div>
                      <p className="spec-desc">{project.summary}</p>
                    </th>

                    <td className="spec-cell-domain">
                      <span className="card-status-pill">
                        {project.category}
                      </span>
                    </td>

                    <td className="spec-cell-stack">
                      <ul
                        className="spec-tag-list"
                        aria-label={`Tech stack for ${project.title}`}
                      >
                        {project.stack.map((tech) => (
                          <li key={tech} className="spec-tag-item">
                            <span className="tag-hash" aria-hidden="true">
                              #
                            </span>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </td>

                    <td className="spec-cell-actions">
                      <div className="spec-actions-cluster">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="btn btn-ghost btn-sm btn-tactile"
                          aria-label={`Read case study for ${project.title}`}
                        >
                          Case Study &rarr;
                        </Link>
                        {project.url ? (
                          isInternalUrl ? (
                            <Link
                              href={project.url}
                              className="btn btn-primary btn-sm btn-tactile"
                              aria-label={`Launch ${project.title}`}
                            >
                              Launch ↗
                            </Link>
                          ) : (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary btn-sm btn-tactile"
                              aria-label={`Open live demonstration for ${project.title}`}
                            >
                              Demo ↗
                            </a>
                          )
                        ) : null}
                        {project.repo ? (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-sm btn-tactile"
                            aria-label={`Open source code repository for ${project.title}`}
                          >
                            Code ↗
                          </a>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
