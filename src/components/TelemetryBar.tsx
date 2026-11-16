"use client";

import { useEffect, useState } from "react";
import {
  isSoundEnabled,
  toggleSound,
  getTheme,
  toggleTheme,
  playTactileClick,
} from "@/lib/sound";

export default function TelemetryBar() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [soundOn, setSoundOn] = useState<boolean>(false);
  const [isHifi, setIsHifi] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    setSoundOn(isSoundEnabled());
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

    const handleSoundChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ enabled: boolean }>;
      setSoundOn(customEvent.detail.enabled);
    };

    window.addEventListener("portfolio-theme-change", handleThemeChange);
    window.addEventListener("portfolio-sound-change", handleSoundChange);

    return () => {
      clearInterval(timer);
      window.removeEventListener("portfolio-theme-change", handleThemeChange);
      window.removeEventListener("portfolio-sound-change", handleSoundChange);
    };
  }, []);

  const handleToggleSound = () => {
    const next = toggleSound();
    if (next) {
      setTimeout(() => playTactileClick(), 10);
    }
  };

  const handleToggleHifi = () => {
    playTactileClick();
    toggleTheme();
  };

  return (
    <aside className="telemetry-bar" aria-label="Workstation Telemetry">
      <div className="telemetry-inner">
        <div className="telemetry-left">
          <span className="telemetry-tag">
            <span className="status-dot" aria-hidden="true" />
            <span>NAIROBI, KE [01&deg;17&apos;S 36&deg;49&apos;E]</span>
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
            STATUS: <strong>AVAILABLE</strong>
          </span>
        </div>

        <div className="telemetry-right">
          <button
            type="button"
            onClick={handleToggleSound}
            className={`telemetry-btn ${soundOn ? "is-active" : ""}`}
            title="Toggle micro-click sounds (synthesized via Web Audio)"
            aria-pressed={soundOn}
          >
            <span aria-hidden="true">{soundOn ? "🔊" : "🔇"}</span>
            <span>AUDIO: {soundOn ? "ON" : "OFF"}</span>
          </button>

          <button
            type="button"
            onClick={handleToggleHifi}
            className={`telemetry-btn hifi-toggle ${isHifi ? "is-hifi" : ""}`}
            title="Toggle between Lo-Fi (paper studio) and Hi-Fi (retro workstation) themes"
            aria-pressed={isHifi}
          >
            <span className="toggle-indicator" aria-hidden="true" />
            <span>MODE: {isHifi ? "HI-FI 🎛️" : "LO-FI 📄"}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
