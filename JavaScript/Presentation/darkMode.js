const body = document.body;
const outterContainer = document.getElementById("outerContainer");
const textTheme = document.querySelector(".theme-text");
const subTopics = document.getElementById("boxDetailsUpper");

export function addDarkModeClasses() {
  textTheme.innerText = "Light Mode";
  body.classList.add("dark-mode");
  outterContainer.classList.add("dark-mode");
  subTopics.classList.add("dark-mode");
}

export function removeDarkModeClasses() {
  body.classList.remove("dark-mode");
  outterContainer.classList.remove("dark-mode");
  subTopics.classList.remove("dark-mode");
}

export function DarkThemeHandler(themeColor) {
  if (themeColor === "DARK") {
    addDarkModeClasses();
  } else {
    removeDarkModeClasses();
  }
}
