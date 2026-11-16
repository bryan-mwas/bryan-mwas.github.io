"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { playTactileClick } from "@/lib/sound";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  const indexStr = index !== undefined ? String(index + 1).padStart(2, "0") : "01";
  const sysCode = `SYS-${project.slug.toUpperCase().slice(0, 7)}`;

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="card card-tactile"
      onClick={() => playTactileClick()}
    >
      <div className="card-hardware-header">
        <span className="card-spec-code">
          [{indexStr}] {sysCode}
        </span>
        <span className="card-status-pill">
          <span className="pill-dot" aria-hidden="true" />
          <span>PROD</span>
        </span>
      </div>

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
          <span className="card-arrow" aria-hidden="true">
            &rarr;
          </span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tags">
          {project.stack.map((t) => (
            <li key={t}>
              <span className="tag-hash">#</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
