import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { FaGithub } from "react-icons/fa";
import photo from "../images/BM_HOME.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container mx-auto md:w-1/2 p-6">
      <div className="text-lg md:text-justify leading-relaxed text-gray-900 dark:text-white">
        <section
          id="header"
          className="flex sm:flex-col md:flex-row gap-4 my-12"
        >
          <img
            src={photo}
            alt="Brian Mwathi"
            className="object-cover rounded-lg w-1/2"
          />
          <div>
            <h1 className="text-4xl font-semibold">Brian Mwathi</h1>
            <h2 className="text-2xl font-medium">Software Developer</h2>
            <h2 className="text-xl text-gray-600">Nairobi, Kenya</h2>
            {/* <p className="text-gray-400">
          <span>Github</span> <span>X</span>
        </p> */}
          </div>
        </section>

        <div className="flex flex-col gap-4">
          <section id="about">
            <h1 className="font-bold text-3xl">About Me</h1>
            <p>
              Hey, I'm Mwathi, a full-time software engineer. My current day job
              entails building a secure web application serving colleagues
              across 8 countries in Africa. I am proficient in following
              technologies:
            </p>

            <ul className="list-disc ml-8">
              <li>React</li>
              <li>TypeScript</li>
              <li>MongoDB</li>
              <li>NestJS Framework</li>
            </ul>
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
            <h1 className="font-bold text-3xl">Projects</h1>
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

          <section id="contact">
            <h1 className="font-bold text-3xl">Contact</h1>
            <p>
              Wan't to get in touch? Please{" "}
              <a
                href="mailto:mwathibrian7@gmail.com"
                className="text-cyan-500 hover:underline"
              >
                email me
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Brian Mwathi</title>;
