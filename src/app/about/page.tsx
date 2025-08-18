import type { Metadata } from "next";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function generateMetadata(): Promise<Metadata> {
  const aboutPath = path.join(process.cwd(), "src", "content", "about.md");
  const file = await fs.readFile(aboutPath, "utf8");
  const { data } = matter(file);
  const title = typeof data.title === "string" ? data.title : "About Me";
  const description =
    typeof data.description === "string"
      ? data.description
      : "Learn more about me, my background, and what I do.";
  return {
    title: `${title} | My Portfolio`,
    description,
  };
}

async function getAboutHtml(): Promise<string> {
  const aboutPath = path.join(process.cwd(), "src", "content", "about.md");
  const file = await fs.readFile(aboutPath, "utf8");
  const { content } = matter(file);
  const processed = await remark().use(html).process(content);
  return processed.toString();
}

export default async function AboutPage() {
  const contentHtml = await getAboutHtml();
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8 py-10 sm:py-14">
      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
