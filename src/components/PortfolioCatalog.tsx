"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { playTactileClick } from "@/lib/sound";

export default function PortfolioCatalog({
  projects,
}: {
  projects: Project[];
}) {
  const [viewMode, setViewMode] = useState<"cards" | "index">("cards");

  const handleModeChange = (mode: "cards" | "index") => {
    playTactileClick();
    setViewMode(mode);
  };

  return (
    <div className="portfolio-catalog-container">
      <div className="portfolio-view-bar">
        <div className="hero-spec-tag">
          <span className="spec-dot" aria-hidden="true" />
          <span>INDEX // {projects.length} VERIFIED RELEASES</span>
        </div>

        <div
          className="portfolio-view-toggle"
          role="group"
          aria-label="Catalog layout presentation"
        >
          <button
            type="button"
            className={`view-mode-btn ${viewMode === "cards" ? "is-active" : ""}`}
            onClick={() => handleModeChange("cards")}
            aria-pressed={viewMode === "cards"}
          >
            🎛️ CARDS
          </button>
          <button
            type="button"
            className={`view-mode-btn ${viewMode === "index" ? "is-active" : ""}`}
            onClick={() => handleModeChange("index")}
            aria-pressed={viewMode === "index"}
          >
            📑 SPEC SHEET
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
            aria-label="Technical Projects Specifications"
          >
            <caption id="spec-table-caption" className="visually-hidden">
              Technical Projects Specifications and Verification Index
            </caption>
            <thead>
              <tr>
                <th scope="col" className="col-idx">
                  INDEX / SPEC ID
                </th>
                <th scope="col" className="col-system">
                  SYSTEM &amp; SCOPE
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
              {projects.map((project, idx) => {
                const indexStr = String(idx + 1).padStart(2, "0");
                const sysCode = `SYS-${project.slug.toUpperCase().slice(0, 7)}`;
                const isInternalUrl = project.url?.startsWith("/");

                return (
                  <tr key={project.slug} className="spec-row">
                    <th scope="row" className="spec-row-header">
                      <span className="spec-code-badge">
                        [{indexStr}] {sysCode}
                      </span>
                      <span className="spec-mobile-domain card-status-pill">
                        {project.category}
                      </span>
                    </th>

                    <td className="spec-cell-system">
                      <div className="spec-title">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          onClick={() => playTactileClick()}
                        >
                          {project.title}
                        </Link>
                      </div>
                      <p className="spec-desc">{project.summary}</p>
                    </td>

                    <td className="spec-cell-domain">
                      <span className="card-status-pill">
                        {project.category}
                      </span>
                    </td>

                    <td className="spec-cell-stack">
                      <ul className="spec-tag-list" aria-label={`Tech stack for ${project.title}`}>
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
                          onClick={() => playTactileClick()}
                          className="btn btn-ghost btn-sm btn-tactile"
                          aria-label={`View full specification dossier for ${project.title}`}
                        >
                          Spec &rarr;
                        </Link>
                        {project.url ? (
                          isInternalUrl ? (
                            <Link
                              href={project.url}
                              onClick={() => playTactileClick()}
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
                              onClick={() => playTactileClick()}
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
                            onClick={() => playTactileClick()}
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
