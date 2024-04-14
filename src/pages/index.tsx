import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import About from "./about";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container mx-auto md:w-1/2 p-8">
      <About />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
