"use client";

import { useEffect, useState } from "react";
import { getTheme, toggleTheme } from "@/lib/theme";

export default function TelemetryBar() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [isHifi, setIsHifi] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    setIsHifi(getTheme() === "hifi");

    const updateClock = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Nairobi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setTimeStr(`${formatted} EAT`);
      } catch {
        setTimeStr("15:00 EAT");
      }
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: "lofi" | "hifi" }>;
      setIsHifi(customEvent.detail.theme === "hifi");
    };

    window.addEventListener("portfolio-theme-change", handleThemeChange);

    return () => {
      clearInterval(timer);
      window.removeEventListener("portfolio-theme-change", handleThemeChange);
    };
  }, []);

  const handleToggleHifi = () => {
    toggleTheme();
  };

  return (
    <aside className="telemetry-bar" aria-label="Status & Location Telemetry">
      <div className="telemetry-inner">
        <div className="telemetry-left">
          <span className="telemetry-tag">
            <span className="status-dot" aria-hidden="true" />
            <span>Nairobi, Kenya · 01&deg;17&apos;S 36&deg;49&apos;E</span>
          </span>
          <span className="telemetry-sep" aria-hidden="true">
            /
          </span>
          <span className="telemetry-time" aria-label="Current time in Nairobi">
            {mounted ? timeStr : "Nairobi EAT"}
          </span>
          <span className="telemetry-sep" aria-hidden="true">
            /
          </span>
          <span className="telemetry-status">
            Status: <strong>Available</strong>
          </span>
        </div>

        <div className="telemetry-right">
          <button
            type="button"
            onClick={handleToggleHifi}
            className={`telemetry-btn hifi-toggle ${isHifi ? "is-hifi" : ""}`}
            title="Toggle between Lo-Fi (studio paper) and Hi-Fi (dark workstation) themes"
            aria-pressed={isHifi}
          >
            <span className="toggle-indicator" aria-hidden="true" />
            <span>Mode: {isHifi ? "Hi-Fi" : "Lo-Fi"}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
