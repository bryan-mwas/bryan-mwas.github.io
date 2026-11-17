"use client";

import { useEffect, useState } from "react";

export default function WorkstationFooter() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="workstation-footer">
      <div className="footer-keys" aria-label="Keyboard shortcuts">
        <span className="key-hint-label">SHORTCUTS:</span>
        <span className="key-badge">
          <kbd>1</kbd> Home
        </span>
        <span className="key-badge">
          <kbd>2</kbd> Work
        </span>
        <span className="key-badge">
          <kbd>3</kbd> About
        </span>
        <span className="key-badge">
          <kbd>4</kbd> Calculator
        </span>
        <span className="key-badge">
          <kbd>5</kbd> Contact
        </span>
        <span className="key-badge">
          <kbd>H</kbd> Theme
        </span>
      </div>
      <div className="footer-copy">
        <span>&copy; {year} Brian Mwathi · All Rights Reserved</span>
        <span>Built with Next.js &amp; TypeScript</span>
      </div>
    </footer>
  );
}
