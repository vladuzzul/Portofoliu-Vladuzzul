/* Progressive enhancements: every page and link works without JavaScript. */
const root = document.documentElement;
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const themeButton = document.getElementById("darkModeToggle");

function updateThemeButton() {
  const dark =
    root.dataset.theme === "dark" ||
    (!root.dataset.theme && systemTheme.matches);
  themeButton?.setAttribute(
    "aria-label",
    `Switch to ${dark ? "light" : "dark"} mode`,
  );
  if (themeButton) {
    themeButton.querySelector("[data-theme-label]").textContent = dark
      ? "Light"
      : "Dark";
    themeButton.querySelector("[data-theme-symbol]").textContent = dark
      ? "☼"
      : "◐";
  }
}
themeButton?.addEventListener("click", () => {
  const dark =
    root.dataset.theme === "dark" ||
    (!root.dataset.theme && systemTheme.matches);
  root.dataset.theme = dark ? "light" : "dark";
  try {
    localStorage.setItem("theme", root.dataset.theme);
  } catch {
    /* Storage is optional. */
  }
  updateThemeButton();
});
systemTheme.addEventListener("change", updateThemeButton);
window.addEventListener("storage", (event) => {
  if (event.key !== "theme") return;
  if (event.newValue === "light" || event.newValue === "dark")
    root.dataset.theme = event.newValue;
  else delete root.dataset.theme;
  updateThemeButton();
});
updateThemeButton();

const menuButton = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
function closeMenu() {
  navigation?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) menuButton.textContent = "Menu";
}
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  navigation?.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "Close" : "Menu";
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton?.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".header")) closeMenu();
});
window.matchMedia("(min-width: 768px)").addEventListener("change", closeMenu);

const copyButton = document.getElementById("copyEmail");
copyButton?.addEventListener("click", async () => {
  const status = document.getElementById("copyStatus");
  copyButton.disabled = true;
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    status.textContent = "Email address copied.";
  } catch {
    status.textContent =
      "Could not copy automatically. Select the email address above to copy it.";
  } finally {
    copyButton.disabled = false;
  }
});

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
}
