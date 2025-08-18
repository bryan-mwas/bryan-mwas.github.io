"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Project = {
  title: string;
  description: string;
  href?: string;
  imageSrc?: string;
};

type PortfolioGridProps = {
  projects: Project[];
};

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [openImageSrc, setOpenImageSrc] = useState<string | null>(null);
  const [openImageAlt, setOpenImageAlt] = useState<string>("");

  useEffect(() => {
    if (openImageSrc) {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpenImageSrc(null);
      };
      document.addEventListener("keydown", onKey);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [openImageSrc]);

  return (
    <>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-black/[.08] dark:border-white/[.145] bg-background/60 hover:bg-background/80 transition-colors flex flex-col overflow-hidden"
          >
            {project.imageSrc ? (
              <button
                type="button"
                className="relative w-full h-48 sm:h-56 md:h-64 border-b border-black/[.06] dark:border-white/[.08] focus:outline-none"
                onClick={() => {
                  setOpenImageSrc(project.imageSrc || null);
                  setOpenImageAlt(project.title);
                }}
                aria-label={`Open image of ${project.title}`}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={false}
                />
              </button>
            ) : null}
            <div className="p-4 sm:p-5 flex flex-col flex-1">
              <h2 className="text-lg font-medium tracking-tight mb-2">
                {project.title}
              </h2>
              <p className="text-sm leading-6 text-foreground/80 mb-4">
                {project.description}
              </p>
              {project.href ? (
                <a
                  href={project.href}
                  className="mt-auto inline-flex items-center justify-center rounded-md border border-black/[.08] dark:border-white/[.145] bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm h-10 px-4 w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {openImageSrc ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenImageSrc(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={openImageSrc}
              alt={openImageAlt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <button
              type="button"
              aria-label="Close image"
              className="absolute top-3 right-3 inline-flex items-center justify-center rounded-md bg-black/70 text-white/90 hover:text-white hover:bg-black/80 h-9 w-9"
              onClick={() => setOpenImageSrc(null)}
            >
              <X size={18} strokeWidth={2.25} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
