"use client";

import { useEffect, useState } from "react";

export default function WorkstationFooter() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="workstation-footer">
      <div className="footer-keys" aria-label="Keyboard navigation commands">
        <span className="key-hint-label">TERMINAL SHORTCUTS:</span>
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
          <kbd>4</kbd> Simulator
        </span>
        <span className="key-badge">
          <kbd>H</kbd> Toggle Hi-Fi
        </span>
        <span className="key-badge">
          <kbd>M</kbd> Audio
        </span>
      </div>
      <div className="footer-copy">
        <span>&copy; {year} BRIAN MWATHI // ALL RIGHTS RESERVED</span>
        <span>ENGINEERED WITH NEXT.JS &amp; WEB AUDIO</span>
      </div>
    </footer>
  );
}
