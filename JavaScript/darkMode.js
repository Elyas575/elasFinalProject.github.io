const body = document.body;
const footer = document.querySelector("footer");
const colorfulBar = document.querySelector(".welcome-section");
const outterContainer = document.getElementById("outerContainer");
const boxDetailsUpper = document.getElementById("boxDetailsUpper");
const boxDetailsUpper2 = document.getElementById("subTopics");
const darkModeButton = document.querySelector(".dark-mode-button");
const textTheme = document.querySelector(".theme-text");
let theme = localStorage.getItem("Theme") || "LIGHT";
localStorage.setItem("Theme", theme);

const addDarkModeClasses = () => {
  console.log("LOL");
  textTheme.innerText = "Light Mode";

  body.classList.add("dark-mode");
  footer.classList.add("dark-mode");
  colorfulBar.classList.add("dark-mode");
  outterContainer.classList.add("dark-mode");
  boxDetailsUpper.classList.add("dark-mode");
  boxDetailsUpper2.classList.add("dark-mode");
};

const removeDarkModeClasses = () => {
  console.log("LOL");
  textTheme.innerText = "Dark Mode";
  body.classList.remove("dark-mode");
  footer.classList.remove("dark-mode");
  colorfulBar.classList.remove("dark-mode");
  outterContainer.classList.remove("dark-mode");
  boxDetailsUpper.classList.remove("dark-mode");
  boxDetailsUpper2.classList.remove("dark-mode");
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
