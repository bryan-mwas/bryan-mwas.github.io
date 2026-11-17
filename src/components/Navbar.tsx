"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="nav" aria-label="Main Navigation">
      <Link
        href="/"
        className="nav-brand"
        aria-current={pathname === "/" ? "page" : undefined}
      >
        <span className="brand-dot" aria-hidden="true" />
        <span className="brand-name">Brian Mwathi</span>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link
            href="/portfolio"
            aria-current={isCurrent("/portfolio") ? "page" : undefined}
            className="nav-link"
          >
            <span>Work</span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            aria-current={isCurrent("/about") ? "page" : undefined}
            className="nav-link"
          >
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link
            href="/loan-calculator"
            aria-current={isCurrent("/loan-calculator") ? "page" : undefined}
            className="nav-link"
          >
            <span>Calculator</span>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            aria-current={isCurrent("/contact") ? "page" : undefined}
            className="nav-link"
          >
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
