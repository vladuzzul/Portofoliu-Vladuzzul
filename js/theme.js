/* Run before CSS to avoid a flash of the wrong theme on navigation. */
document.documentElement.classList.add("js");
try {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    document.documentElement.dataset.theme = savedTheme;
  }
  const savedAccent = localStorage.getItem("accent");
  if (["purple", "lime", "yellow", "blue", "teal", "rose"].includes(savedAccent)) {
    document.documentElement.dataset.accent = savedAccent;
  }
} catch {
  /* CSS follows the system preference if storage is unavailable. */
}
