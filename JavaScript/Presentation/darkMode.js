const body = document.body;
const outterContainer = document.getElementById("outerContainer");
const darkModeButton = document.querySelector(".dark-mode-button");
const textTheme = document.querySelector(".theme-text");
let theme = localStorage.getItem("Theme") || "LIGHT";
localStorage.setItem("Theme", theme);

const addDarkModeClasses = () => {
  textTheme.innerText = "Light Mode";
  body.classList.add("dark-mode");
  outterContainer.classList.add("dark-mode");
};

const removeDarkModeClasses = () => {
  body.classList.remove("dark-mode");
  outterContainer.classList.remove("dark-mode");
};

const DarkThemeHandler = (themeColor) => {
  if (themeColor === "DARK") {
    addDarkModeClasses();
  } else {
    removeDarkModeClasses();
  }
};

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
