import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Code2,
  Globe2,
  Mail,
  Github,
  Linkedin,
  Code,
  Briefcase,
  Laptop,
  Book,
  ChevronDown,
  ChartPie,
  Banknote,
} from "lucide-react";
import photo from "../images/BM_HOME.png";

const ScrollIndicator = () => (
  <div className="mt-32 animate-bounce flex flex-col items-center text-slate-400">
    <p className="mb-2 text-sm">Scroll to explore</p>
    <ChevronDown className="w-6 h-6" />
    <ChevronDown className="w-6 h-6 -mt-3" />
  </div>
);

const IndexPage: React.FC<PageProps> = () => {
  // Function to handle scroll to content
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <img
          src={photo}
          alt="profile image"
          className="my-3 w-[350px] rounded-lg"
        />
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Hey, I'm Brian Mwathi
            <span className="text-blue-400">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300">
            Software Engineer | Problem Solver | Data Analyst
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/bryan-mwas"
              target="_blank"
              className="p-2 hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/brian-mwathi-wangome-27645b141/"
              target="_blank"
              className="p-2 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mwathibrian7@gmail.com"
              className="p-2 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="cursor-pointer"
          aria-label="Scroll to content"
        >
          <ScrollIndicator />
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-20">
        {/* About Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            🚀 Hey there! I'm a passionate Software Engineer who transforms
            complex problems into elegant solutions that scale. When I'm not
            crafting code, you'll find me exploring new technologies or playing
            video games. With over 5 years in the tech trenches, I've had the
            privilege of:
          </p>

          {/* Achievement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <Globe2 className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold">Global Impact</h3>
              </div>
              <p className="mt-2 text-slate-300">
                Scaled applications across 8 African countries
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <Briefcase className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <p className="mt-2 text-slate-300">
                Over 5 years of professional development
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Code2 className="w-6 h-6 text-blue-400 mr-2" />
                Frontend Mastery
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• React & TypeScript</li>
                <li>• Zustand for state management</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Laptop className="w-6 h-6 text-blue-400 mr-2" />
                Backend Expertise
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• NestJS Framework</li>
                <li>• MongoDB</li>
                <li>• PostgreSQL</li>
                <li>• RESTful & GraphQL APIs</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Code className="w-6 h-6 text-blue-400 mr-2" />
                Programming Languages
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• JavaScript and TypeScript</li>
                <li>• Python</li>
                <li>• SQL</li>
                <li>• C</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 hover:bg-slate-700/50 p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Banknote className="w-6 h-6 text-blue-400 mr-2" />
                <a
                  href="https://github.com/bryan-mwas/transactions-analyzer"
                  className="hover:underline"
                  target="_blank"
                >
                  M-Pesa PDF Statement Analyzer
                </a>
              </h3>
              <p className="text-slate-300">
                The M-Pesa Statement Transaction Analyzer is an intuitive tool
                designed to help users gain deep insights into their MPesa
                transactions by automatically processing and analyzing their
                MPesa statement data. This tool allows users to upload their
                MPesa statements in PDF format and instantly breaks down the
                data into clear, visual summaries.
              </p>
            </div>
            <div className="bg-slate-800/50 hover:bg-slate-700/50 p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold flex items-center">
                <ChartPie className="w-6 h-6 text-blue-400 mr-2" />
                <a
                  href="https://quote-gen-green.vercel.app/"
                  className="hover:underline"
                  target="_blank"
                >
                  Quote Generator
                </a>
              </h3>
              <p className="text-slate-300">
                The Online Invoice Quote Generator is a user-friendly and
                efficient tool designed to help businesses and freelancers
                quickly create professional invoices and quotes. Whether you
                need to send an estimate for a project or bill clients for
                completed work, this generator streamlines the entire process,
                ensuring accuracy and customization.
              </p>
            </div>
          </div>
        </section>

        {/* Currently Exploring */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 hover:bg-slate-700/50 p-6 rounded-lg">
              <Book className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold">
                <a
                  href="https://www.udacity.com/certificate/CFLJGSM9"
                  target="_blank"
                >
                  Artificial Intelligence (AI) Programming with Python
                </a>
              </h3>
            </div>
            <div className="bg-slate-800/50 hover:bg-slate-700/50 p-6 rounded-lg">
              <Globe2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold">
                <a
                  href="https://www.credly.com/users/brian-wangome"
                  target="_blank"
                >
                  AWS Cloud Practitioner
                </a>
              </h3>
            </div>
            <div className="bg-slate-800/50 hover:bg-slate-700/50 p-6 rounded-lg">
              <Globe2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold">
                <a
                  href="https://www.credly.com/users/brian-wangome"
                  target="_blank"
                >
                  Microsoft Certified: Azure Fundamentals
                </a>
              </h3>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Let's Build Something Amazing</h2>
          <p className="text-lg text-slate-300">
            Ready to start a project or just want to connect?
          </p>
          <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg font-semibold text-lg">
            <a href="mailto:mwathibrian7@gmail.com">Get In Touch</a>
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-slate-400">
          © 2024 Brian Mwathi
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Brian Mwathi</title>;
