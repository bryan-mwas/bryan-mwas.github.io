import * as React from "react";
import { HeadFC } from "gatsby";

function About() {
  return (
    <div className="text-lg md:text-justify leading-relaxed text-gray-900 dark:text-white">
      <div className="mt-16 mb-12">
        <h1 className="text-4xl font-semibold">Brian Mwathi</h1>
        <h2 className="text-2xl font-medium">Software Developer</h2>
        <h2 className="text-xl text-gray-600">Nairobi, Kenya</h2>
        {/* <p className="text-gray-400">
          <span>Github</span> <span>X</span>
        </p> */}
      </div>
      <h1 className="font-semibold text-2xl">About</h1>
      <p>
        Hey, I’m Mwathi, a full-time software engineer. My current day job
        entails building a secure web application serving colleagues across 8
        countries in Africa. I am proficient in following technologies:
      </p>
      <ul className="list-disc list-inside md:ml-16 my-2">
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
          className="text-blue-500"
          target="_blank"
        >
          {" "}
          Udacity Scholarship
        </a>{" "}
        in AI Programming for Python course. In this program, I got to develop a
        dog image classifier application. I learned the fundamentals of training
        a machine-learning model, the mathematical concepts behind deep
        learning, and deploying a trained model in the real world to make
        practical applications.
      </p>
    </div>
  );
}
export const Head: HeadFC = () => <title>About Page</title>;
export default About;
