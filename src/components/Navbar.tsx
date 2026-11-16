"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { playTactileClick } from "@/lib/sound";

export default function Navbar() {
  const pathname = usePathname();

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleClick = () => {
    playTactileClick();
  };

  return (
    <nav className="nav" aria-label="Main">
      <Link
        href="/"
        onClick={handleClick}
        className="nav-brand"
        aria-current={pathname === "/" ? "page" : undefined}
      >
        <span className="brand-dot" aria-hidden="true" />
        <span className="brand-idx">[00]</span>
        <span className="brand-name">Brian Mwathi</span>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link
            href="/portfolio"
            onClick={handleClick}
            aria-current={isCurrent("/portfolio") ? "page" : undefined}
            className="nav-link"
          >
            <span className="link-idx" aria-hidden="true">
              [01]
            </span>
            <span>Work</span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            onClick={handleClick}
            aria-current={isCurrent("/about") ? "page" : undefined}
            className="nav-link"
          >
            <span className="link-idx" aria-hidden="true">
              [02]
            </span>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link
            href="/loan-calculator"
            onClick={handleClick}
            aria-current={isCurrent("/loan-calculator") ? "page" : undefined}
            className="nav-link"
          >
            <span className="link-idx" aria-hidden="true">
              [03]
            </span>
            <span>Calculator</span>
          </Link>
        </li>
        <li>
          <a
            href="mailto:mwathibrian7@gmail.com"
            onClick={handleClick}
            className="nav-link"
          >
            <span className="link-idx" aria-hidden="true">
              [04]
            </span>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
