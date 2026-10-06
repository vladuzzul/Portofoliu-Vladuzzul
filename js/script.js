/* Progressive enhancements: every page and link works without JavaScript. */
const root = document.documentElement;
const settingsButton = document.getElementById("settingsToggle");
const accents = ["purple", "lime", "yellow", "blue", "teal", "rose"];

// One shared panel keeps the settings identical across all six static pages.
const settingsPanel = document.createElement("section");
settingsPanel.id = "appearanceSettings";
settingsPanel.className = "settings-panel";
settingsPanel.hidden = true;
settingsPanel.setAttribute("role", "dialog");
settingsPanel.setAttribute("aria-labelledby", "settingsTitle");
settingsPanel.innerHTML = `
  <div class="settings-heading">
    <h2 id="settingsTitle">Appearance</h2>
    <button class="settings-close" type="button" aria-label="Close settings">×</button>
  </div>
  <fieldset class="settings-group">
    <legend>Theme</legend>
    <div class="theme-options">
      ${["light", "dark", "system"].map((theme) => `
        <label class="settings-option">
          <input type="radio" name="theme" value="${theme}">
          <span>${theme[0].toUpperCase() + theme.slice(1)}</span>
        </label>`).join("")}
    </div>
    <p class="settings-hint">System follows your device’s appearance.</p>
  </fieldset>
  <fieldset class="settings-group">
    <legend>Accent color</legend>
    <div class="accent-options">
      ${accents.map((accent) => `
        <label class="settings-option accent-option" data-accent="${accent}">
          <input type="radio" name="accent" value="${accent}">
          <span><i class="accent-swatch" aria-hidden="true"></i>${accent[0].toUpperCase() + accent.slice(1)}</span>
        </label>`).join("")}
    </div>
  </fieldset>
  <p class="settings-hint">Changes apply instantly</p>
`;
settingsButton?.after(settingsPanel);

function updateSettings() {
  settingsPanel.querySelectorAll("input").forEach((input) => {
    const selected =
      input.name === "theme"
        ? root.dataset.theme || "system"
        : root.dataset.accent || "purple";
    input.checked = input.value === selected;
  });
}
function closeSettings(restoreFocus = false) {
  settingsPanel.hidden = true;
  settingsButton?.setAttribute("aria-expanded", "false");
  if (restoreFocus) settingsButton?.focus();
}
settingsButton?.addEventListener("click", () => {
  if (!settingsPanel.hidden) {
    closeSettings(true);
    return;
  }
  closeMenu();
  settingsPanel.hidden = false;
  settingsButton.setAttribute("aria-expanded", "true");
  settingsPanel.querySelector('input[name="theme"]:checked').focus();
});
settingsPanel
  .querySelector(".settings-close")
  .addEventListener("click", () => closeSettings(true));
settingsPanel.addEventListener("change", (event) => {
  const { name, value } = event.target;
  if (name === "theme") {
    // No override lets the CSS media query react to OS changes immediately.
    if (value === "system") delete root.dataset.theme;
    else root.dataset.theme = value;
  } else if (name === "accent") {
    root.dataset.accent = value;
  } else return;
  try {
    localStorage.setItem(name, value);
  } catch {
    // Settings still work for this page when storage is unavailable.
  }
  updateSettings();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !settingsPanel.hidden) {
    event.preventDefault();
    closeSettings(true);
  }
});
document.addEventListener("click", (event) => {
  if (
    !settingsPanel.contains(event.target) &&
    !settingsButton?.contains(event.target)
  ) {
    closeSettings();
  }
});
// This is a non-modal panel: Tab can leave it without trapping the visitor.
document.addEventListener("focusin", (event) => {
  if (!settingsPanel.contains(event.target) && event.target !== settingsButton) {
    closeSettings();
  }
});
window.addEventListener("storage", (event) => {
  if (event.key === "theme" || event.key === null) {
    if (event.newValue === "light" || event.newValue === "dark")
      root.dataset.theme = event.newValue;
    else delete root.dataset.theme;
  }
  if (event.key === "accent" || event.key === null) {
    if (accents.includes(event.newValue))
      root.dataset.accent = event.newValue;
    else delete root.dataset.accent;
  }
  updateSettings();
});
updateSettings();

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
