import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | My Portfolio",
  description: "Learn more about me, my background, and what I do.",
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
        About Me
      </h1>
      <p className="text-base leading-7 text-foreground/90 mb-4">
        Hi, I’m a software developer who enjoys building clean, fast, and
        accessible web applications. I focus on modern JavaScript/TypeScript,
        React, and Next.js, and I care deeply about great DX and UX.
      </p>
      <p className="text-base leading-7 text-foreground/90 mb-4">
        Over the years I’ve worked across the stack: from designing APIs and
        databases to crafting pixel-perfect, responsive interfaces. I love
        solving real problems, improving performance, and shipping features that
        users actually enjoy.
      </p>
      <p className="text-base leading-7 text-foreground/90">
        When I’m not coding, you’ll find me learning new tools, contributing to
        open source, and writing about what I discover.
      </p>
    </main>
  );
}
