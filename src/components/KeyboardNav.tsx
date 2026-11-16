"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { playTactileClick, toggleTheme, toggleSound } from "@/lib/sound";

export default function KeyboardNav() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in form inputs
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "1") {
        playTactileClick();
        router.push("/");
      } else if (e.key === "2") {
        playTactileClick();
        router.push("/portfolio");
      } else if (e.key === "3") {
        playTactileClick();
        router.push("/about");
      } else if (e.key === "4") {
        playTactileClick();
        router.push("/loan-calculator");
      } else if (e.key === "h" || e.key === "H") {
        playTactileClick();
        toggleTheme();
      } else if (e.key === "m" || e.key === "M") {
        const next = toggleSound();
        if (next) playTactileClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return null;
}
