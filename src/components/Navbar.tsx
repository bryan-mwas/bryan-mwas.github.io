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
    <nav className="nav" aria-label="Main">
      <Link
        href="/"
        className="nav-brand"
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Brian Mwathi
      </Link>
      <ul>
        <li>
          <Link
            href="/about"
            aria-current={isCurrent("/about") ? "page" : undefined}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            aria-current={isCurrent("/portfolio") ? "page" : undefined}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <a href="mailto:mwathibrian7@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
