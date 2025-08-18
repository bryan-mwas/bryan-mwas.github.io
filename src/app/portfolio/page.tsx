import type { Metadata } from "next";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  href?: string;
  imageSrc?: string;
};

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of what this project does and why it’s cool.",
    href: "#",
    imageSrc: "/next.svg",
  },
  {
    title: "Project Two",
    description:
      "Another project showcasing performance, DX, or accessibility.",
    href: "#",
    imageSrc: "/vercel.svg",
  },
  {
    title: "Project Three",
    description: "An example with interesting UI and compelling functionality.",
    href: "#",
    imageSrc: "/globe.svg",
  },
];

export const metadata: Metadata = {
  title: "Portfolio | My Portfolio",
  description: "Selected projects and work I’m proud of.",
};

export default function PortfolioPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
        Portfolio
      </h1>
      <p className="text-base leading-7 text-foreground/80 mb-8">
        A few recent projects. Replace these with your real work and links.
      </p>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-black/[.08] dark:border-white/[.145] p-4 sm:p-5 bg-background/60 hover:bg-background/80 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              {project.imageSrc ? (
                <Image
                  src={project.imageSrc}
                  alt=""
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              ) : null}
              <h2 className="text-lg font-medium tracking-tight">
                {project.title}
              </h2>
            </div>
            <p className="text-sm leading-6 text-foreground/80 mb-4">
              {project.description}
            </p>
            {project.href ? (
              <a
                href={project.href}
                className="text-sm font-medium hover:underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </main>
  );
}
