"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toggleTheme } from "@/lib/theme";

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
        router.push("/");
      } else if (e.key === "2") {
        router.push("/portfolio");
      } else if (e.key === "3") {
        router.push("/about");
      } else if (e.key === "4") {
        router.push("/loan-calculator");
      } else if (e.key === "5") {
        router.push("/contact");
      } else if (e.key === "h" || e.key === "H") {
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return null;
}
