import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { AppNavbar } from "../components/AppNavbar";
import About from "./about";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <AppNavbar />
      <main className="p-10 pt-20 h-auto">
        <About />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
