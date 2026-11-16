import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  featured: boolean;
  url?: string;
  repo?: string;
  image?: string;
  order: number;
  body: string;
};

const DIR = path.join(process.cwd(), "src", "content", "projects");

const defaultImages: Record<string, string> = {
  "mpesa-analyzer": "/images/mpesa.png",
  "invoice-generator": "/images/quote-gen.png",
  "loan-calculator": "/images/budget.png",
};

export async function getProjects(): Promise<Project[]> {
  const files = (await fs.readdir(DIR)).filter((f) => f.endsWith(".md"));
  const projects = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const { data, content } = matter(
        await fs.readFile(path.join(DIR, file), "utf8"),
      );
      return {
        slug,
        title: data.title ?? slug,
        category: data.category ?? "",
        summary: data.summary ?? "",
        stack: data.stack ?? [],
        featured: data.featured ?? false,
        url: data.url,
        repo: data.repo,
        image: data.image ?? defaultImages[slug],
        order: data.order ?? 99,
        body: content,
      } as Project;
    }),
  );
  return projects.sort((a, b) => a.order - b.order);
}

export async function getProject(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}
