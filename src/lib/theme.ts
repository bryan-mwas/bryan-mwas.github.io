export type Theme = "lofi" | "hifi";

export function getTheme(): Theme {
  if (typeof window === "undefined") return "lofi";
  return document.documentElement.getAttribute("data-theme") === "hifi"
    ? "hifi"
    : "lofi";
}

export function setTheme(theme: Theme): void {
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

export function toggleTheme(): Theme {
  const current = getTheme();
  const next: Theme = current === "hifi" ? "lofi" : "hifi";
  setTheme(next);
  return next;
}
