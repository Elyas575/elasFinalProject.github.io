const darkModeButton = document.querySelector(".dark-mode-button");
const body = document.body;
const footer = document.querySelector("footer");
const colorfulBar = document.getElementById("welcomeSection");
const outterContainer = document.getElementById("outerContainer");
const boxDetailsUpper = document.getElementById("boxDetailsUpper");
const boxDetailsUpper2 = document.getElementById("subTopics");

darkModeButton.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    removeDarkModeClasses();
  } else {
    addDarkModeClasses();
  }
});

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

const favoritesButton = document.querySelector(".Favourites-button");
const favoritesContainer = document.querySelector(".favorites-container");
const favoriteItemsRow = document.querySelector(".favorite-items-row");

const onClick = () => {
  favoritesContainer.classList.toggle("hidden");

  if (!favoritesContainer.classList.contains("hidden")) {
    favoriteItemsRow.innerHTML = "";

    const favoriteItems = [
      { name: "Angular", image: "Images/angular.png", stars: 4 },
      { name: "Rest API", image: "Images/responsive.gif", stars: 3 },
      { name: "Rest API", image: "Images/responsive.gif", stars: 3 },
      { name: "Rest API", image: "Images/responsive.gif", stars: 3 },
      { name: "Rest API", image: "Images/responsive.gif", stars: 3 },
      { name: "Rest API", image: "Images/responsive.gif", stars: 3 },
      { name: "Rest API", image: "Images/responsive.gif", stars: 3 },
    ];

    favoriteItems.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("favorite-card");
      card.style.marginBottom = "2em";

      const imageElement = document.createElement("img");
      imageElement.src = item.image;

      const nameElement = document.createElement("p");
      nameElement.classList.add("name");
      nameElement.innerHTML = `<b>${item.name}</b>`;

      const starsContainer = document.createElement("div");
      starsContainer.classList.add("stars-container");

      for (let i = 0; i < item.stars; i++) {
        const starIcon = document.createElement("ion-icon");
        starIcon.setAttribute("name", "star");
        starsContainer.appendChild(starIcon);
      }

      card.appendChild(imageElement);
      card.appendChild(nameElement);
      card.appendChild(starsContainer);

      favoriteItemsRow.appendChild(card);
    });
  }
};

favoritesButton.addEventListener("click", () => {
  onClick();
});

onClick(); // added to fix a bug
