import { DarkThemeHandler } from "./darkMode.js";

const darkModeButton = document.querySelector(".dark-mode-button");

let theme = localStorage.getItem("Theme") || "LIGHT";
localStorage.setItem("Theme", theme);

darkModeButton.addEventListener("click", () => {
  if (theme === "DARK") {
    theme = "LIGHT";
    localStorage.setItem("Theme", theme);
    DarkThemeHandler(theme);
  } else {
    theme = "DARK";
    localStorage.setItem("Theme", theme);
    DarkThemeHandler(theme);
  }
});

DarkThemeHandler(theme);
