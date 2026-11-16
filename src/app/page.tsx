import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const featured = (await getProjects()).filter((p) => p.featured).slice(0, 3);

  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero">
        <div>
          <h1>
            Hello, I&rsquo;m <span>Brian.</span>
          </h1>
          <p>
            A full-stack engineer with six years of experience building
            enterprise-scale web apps on AWS and Azure, and tools that fit how
            Africa pays and works.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" href="/portfolio">
              See my work
            </Link>
            <a className="btn btn-ghost" href="mailto:mwathibrian7@gmail.com">
              Say hello
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <Image
            src="/images/profile.png"
            alt="Brian Mwathi"
            width={280}
            height={320}
            priority
            sizes="(max-width: 640px) 200px, 280px"
          />
        </div>
      </section>

      <section aria-label="Selected projects" className="projects-section">
        <div className="section-head">
          <h2>Selected Work</h2>
          <Link href="/portfolio" className="section-link">
            View all projects &rarr;
          </Link>
        </div>
        <div className="projects">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
