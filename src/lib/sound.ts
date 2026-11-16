// Web Audio API micro-sound synthesizer (0KB audio files)
// Simulates a subtle vintage mechanical switch click

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (AudioCtx) {
      audioCtx = new AudioCtx();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function isSoundEnabled(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("portfolio_sound") === "on";
}

export function setSoundEnabled(enabled: boolean): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("portfolio_sound", enabled ? "on" : "off");
  window.dispatchEvent(
    new CustomEvent("portfolio-sound-change", { detail: { enabled } })
  );
}

export function toggleSound(): boolean {
  const next = !isSoundEnabled();
  setSoundEnabled(next);
  return next;
}

export function getTheme(): "lofi" | "hifi" {
  if (typeof window === "undefined") return "lofi";
  return document.documentElement.getAttribute("data-theme") === "hifi"
    ? "hifi"
    : "lofi";
}

export function setTheme(theme: "lofi" | "hifi"): void {
  if (typeof window === "undefined") return;
  if (theme === "hifi") {
    document.documentElement.setAttribute("data-theme", "hifi");
    localStorage.setItem("portfolio_theme", "hifi");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("portfolio_theme", "lofi");
  }
  window.dispatchEvent(
    new CustomEvent("portfolio-theme-change", { detail: { theme } })
  );
}

export function toggleTheme(): "lofi" | "hifi" {
  const current = getTheme();
  const next = current === "hifi" ? "lofi" : "hifi";
  setTheme(next);
  return next;
}

export function playTactileClick(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    // Oscillator 1: Subtle low mechanical thump (140Hz down to 30Hz)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.04);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);

    // Oscillator 2: High tactile snap (800Hz down to 100Hz)
    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();

    snapOsc.type = "triangle";
    snapOsc.frequency.setValueAtTime(800, now);
    snapOsc.frequency.exponentialRampToValueAtTime(100, now + 0.02);

    snapGain.gain.setValueAtTime(0.04, now);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

    snapOsc.connect(snapGain);
    snapGain.connect(ctx.destination);

    snapOsc.start(now);
    snapOsc.stop(now + 0.03);
  } catch {
    // Ignore audio errors gracefully
  }
}
