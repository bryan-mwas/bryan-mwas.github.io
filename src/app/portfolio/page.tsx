import type { Metadata } from "next";
import PortfolioGrid from "./PortfolioGrid";

type Project = {
  title: string;
  description: string;
  href?: string;
  imageSrc?: string;
};

const projects: Project[] = [
  {
    title: "Invoice Generator",
    description:
      "A user-friendly and efficient tool built to help businesses and freelancers quickly create professional invoices and quotes, streamlining the billing process and ensuring accuracy.",
    href: "https://quote-gen-green.vercel.app/",
    imageSrc: "/images/quote-gen.png",
  },
  {
    title: "Mpesa Analyzer",
    description:
      "An intelligent tool that transforms MPesa PDF statements into actionable financial insights. This project showcases my understanding of African payment ecosystems and demonstrates advanced PDF processing techniques.",
    href: "https://github.com/bryan-mwas/transactions-analyzer",
    imageSrc: "/images/mpesa.png",
  },
];

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected projects and work I’m proud of.",
};

export default function PortfolioPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
        Portfolio
      </h1>
      <p className="text-base leading-7 text-foreground/80 mb-8">
        Here are some of the projects I have worked on
      </p>

      <PortfolioGrid projects={projects} />
    </main>
  );
}
