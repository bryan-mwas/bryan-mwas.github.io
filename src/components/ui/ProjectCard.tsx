import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="card">
      {project.image ? (
        <div className="card-image-wrap">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            className="card-image"
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
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
