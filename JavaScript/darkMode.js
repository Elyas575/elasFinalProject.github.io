const body = document.body;
const footer = document.querySelector("footer");
const colorfulBar = document.getElementById("welcomeSection");
const outterContainer = document.getElementById("outerContainer");
const boxDetailsUpper = document.getElementById("boxDetailsUpper");
const boxDetailsUpper2 = document.getElementById("subTopics");
const darkModeButton = document.querySelector(".dark-mode-button");

let theme = localStorage.getItem("Theme") || "LIGHT";
localStorage.setItem("Theme", theme);

const addDarkModeClasses = () => {
  body.classList.add("dark-mode");
  footer.classList.add("dark-mode");
  colorfulBar.classList.add("dark-mode");
  outterContainer.classList.add("dark-mode");
  boxDetailsUpper.classList.add("dark-mode");
  boxDetailsUpper2.classList.add("dark-mode");
};

const removeDarkModeClasses = () => {
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
    console.log("Dark mode activated");
  } else {
    removeDarkModeClasses();
    console.log("Light mode activated");
  }
};

darkModeButton.addEventListener("click", () => {
  if (theme === "DARK") {
    theme = "LIGHT";
    localStorage.setItem("Theme", theme);
    DarkThemeHandler(theme);
    console.log(theme);
  } else {
    theme = "DARK";
    localStorage.setItem("Theme", theme);
    DarkThemeHandler(theme);
    console.log(theme);
  }
});

DarkThemeHandler(theme);
