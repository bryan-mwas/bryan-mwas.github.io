import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "gatsby";

export function AppNavbar() {
  return (
    <Navbar
      fluid
      className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50"
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Brian Mwathi
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/posts">
          Posts
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
