import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { FaGithub } from "react-icons/fa";
import { List } from "flowbite-react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container mx-auto md:w-1/2 p-6">
      <div className="text-lg md:text-justify leading-relaxed text-gray-900 dark:text-white">
        <div className="mt-16 mb-12">
          <h1 className="text-4xl font-semibold">Brian Mwathi</h1>
          <h2 className="text-2xl font-medium">Software Developer</h2>
          <h2 className="text-xl text-gray-600">Nairobi, Kenya</h2>
          {/* <p className="text-gray-400">
          <span>Github</span> <span>X</span>
        </p> */}
        </div>

        <div className="flex flex-col gap-4">
          <section id="about">
            <h1 className="font-semibold text-2xl">About Me</h1>
            <p>
              Hey, I'm Mwathi, a full-time software engineer. My current day job
              entails building a secure web application serving colleagues
              across 8 countries in Africa. I am proficient in following
              technologies:
            </p>

            <List className="ml-4">
              <List.Item>React</List.Item>
              <List.Item>TypeScript</List.Item>
              <List.Item>MongoDB</List.Item>
              <List.Item>NestJS Framework</List.Item>
            </List>
            <p>
              I also have experience in developing machine learning applications
              through earning a
              <a
                href="https://www.udacity.com/certificate/CFLJGSM9"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                {" "}
                Udacity Scholarship
              </a>{" "}
              in AI Programming for Python course. In this program, I got to
              develop a dog image classifier application. I learned the
              fundamentals of training a machine-learning model, the
              mathematical concepts behind deep learning, and deploying a
              trained model in the real world to make practical applications.
            </p>
          </section>

          <section id="projects">
            <h1 className="font-semibold text-2xl">Projects</h1>
            <h3 className="text-lg font-bold flex justify-between items-center">
              <a
                href="https://quote-gen-green.vercel.app/"
                target="_blank"
                className="text-cyan-500 hover:underline"
              >
                Quote Generator App
              </a>

              <a href="https://github.com/bryan-mwas/quote-gen" target="_blank">
                <FaGithub />
              </a>
            </h3>
            <p className="ml-4">
              This is an online PDF Quote Generation for businesses. It allows
              users to generate PDF with company details included.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Brian Mwathi</title>;
