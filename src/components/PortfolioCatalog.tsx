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
    <div>
      <div className="portfolio-view-bar">
        <div className="hero-spec-tag" style={{ margin: 0 }}>
          <span className="spec-dot" aria-hidden="true" />
          <span>INDEX // {projects.length} VERIFIED RELEASES</span>
        </div>

        <div
          className="portfolio-view-toggle"
          role="group"
          aria-label="View format"
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
        <div className="table-scroll" style={{ borderRadius: "16px" }}>
          <table className="spec-catalog-table" aria-label="Technical Projects Index">
            <thead>
              <tr>
                <th scope="col" style={{ width: "80px" }}>
                  INDEX
                </th>
                <th scope="col" style={{ width: "120px" }}>
                  SPEC CODE
                </th>
                <th scope="col">SYSTEM &amp; SCOPE</th>
                <th scope="col">DOMAIN</th>
                <th scope="col">STACK</th>
                <th scope="col" style={{ textAlign: "right" }}>
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
                  <tr key={project.slug}>
                    <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                      [{indexStr}]
                    </td>
                    <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--green)" }}>
                      {sysCode}
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                        <Link
                          href={`/portfolio/${project.slug}`}
                          onClick={() => playTactileClick()}
                          style={{ textDecoration: "none" }}
                        >
                          {project.title}
                        </Link>
                      </div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--ink-muted)",
                          marginTop: "2px",
                          maxWidth: "360px",
                        }}
                      >
                        {project.summary}
                      </div>
                    </td>
                    <td>
                      <span className="card-status-pill">{project.category}</span>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", maxWidth: "240px" }}>
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.72rem",
                              background: "var(--bg)",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              border: "1px solid var(--border-subtle)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                      <div style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                        <Link
                          href={`/portfolio/${project.slug}`}
                          onClick={() => playTactileClick()}
                          className="btn btn-ghost btn-sm btn-tactile"
                          style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                        >
                          Spec &rarr;
                        </Link>
                        {project.url ? (
                          isInternalUrl ? (
                            <Link
                              href={project.url}
                              onClick={() => playTactileClick()}
                              className="btn btn-primary btn-sm btn-tactile"
                              style={{ padding: "4px 10px", fontSize: "0.75rem" }}
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
                              style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                            >
                              Demo ↗
                            </a>
                          )
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
