const body = document.body;
const outterContainer = document.getElementById("outerContainer");
const textTheme = document.querySelector(".theme-text");
const subTopics = document.getElementById("boxDetailsUpper");


// function to add dark mode classes to elements
export function addDarkModeClasses() {
  textTheme.innerText = "Light Mode";
  body.classList.add("dark-mode"); 
  outterContainer.classList.add("dark-mode"); // the outter container
  subTopics.classList.add("dark-mode"); // the topics header in the products menu
}

// function to remove dark mode classes from elements
export function removeDarkModeClasses() {
  body.classList.remove("dark-mode");
  outterContainer.classList.remove("dark-mode"); // the outter container
  subTopics.classList.remove("dark-mode"); // the topics header in the products menu
}

// function to handle the dark theme based on the current theme color
export function DarkThemeHandler(themeColor) {
  if (themeColor === "DARK") {
    addDarkModeClasses();
  } else {
    removeDarkModeClasses();
  }
}
