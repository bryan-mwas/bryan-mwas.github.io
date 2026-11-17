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
          <div className="hero-spec-tag">
            <span className="spec-dot" aria-hidden="true" />
            <span>SYS-SPEC: FULL-STACK ENGINEER // CLOUD ARCHITECT</span>
          </div>
          <h1>
            Hello, I&rsquo;m <span>Mwathi.</span>
          </h1>
          <p>
            A full-stack engineer with six years of experience building
            enterprise-scale distributed applications on AWS and Azure, and
            high-trust software that fits how Africa pays and works.
          </p>
          <div className="actions">
            <Link className="btn btn-primary btn-tactile" href="/portfolio">
              Explore work &rarr;
            </Link>
            <a
              className="btn btn-ghost btn-tactile"
              href="mailto:mwathibrian7@gmail.com"
            >
              Say hello
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo">
            <Image
              src="/images/profile.png"
              alt="Brian Mwathi portrait"
              width={280}
              height={320}
              priority
              sizes="(max-width: 640px) 200px, 280px"
            />
          </div>
          <div className="photo-spec-caption">
            <span>FIGURE 01: MWATHI, B.</span>
            <span>NBO // 2026</span>
          </div>
        </div>
      </section>

      <section
        aria-label="Selected engineering projects"
        className="projects-section"
      >
        <div className="section-head">
          <div>
            <span className="section-subhead">
              INDEX // SELECTED DEPLOYMENTS
            </span>
            <h2>Featured Projects</h2>
          </div>
          <Link href="/portfolio" className="section-link">
            Full Index [01-03] &rarr;
          </Link>
        </div>

        <div className="projects">
          {featured.map((p, idx) => (
            <ProjectCard key={p.slug} project={p} index={idx} />
          ))}
        </div>
      </section>
    </main>
  );
}
