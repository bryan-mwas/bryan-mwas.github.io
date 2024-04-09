import * as React from "react";
import { HeadFC } from "gatsby";

function About() {
  return (
    <article className="text-2xl  font-medium leading-relaxed text-gray-900 dark:text-white">
      <p className="mb-2 text-center">
        Hello <span className="text-3xl">👋🏾</span>
      </p>
      <p className="text-justify">
        I’m a software engineer with 5 years of experience, passionate about the
        web and databases. Throughout my career, I have designed and built web
        applications in React, TypeScript, MongoDB, and NestJS Framework that
        have scaled to 8 countries across Africa. I’m a collaborative
        problem-solver who has worked with cross-functional teams to deliver
        business solutions.
      </p>
      <p>More</p>
    </article>
  );
}
export const Head: HeadFC = () => <title>About Page</title>;
export default About;
