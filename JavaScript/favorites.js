const favoritesButton = document.querySelector(".Favourites-button");
const favoritesContainer = document.querySelector(".favorites-container");
const favoriteItemsRow = document.querySelector(".favorite-items-row");
import { getCardsData, FetchAllCards } from "./DataAccess.js";

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
      nameElement.style.paddingRight = "1em";
      nameElement.style.paddingLeft = "1em";
      nameElement.classList.add("name");
      nameElement.innerHTML = `<b>${item.name}</b>`;

      const starsContainer = document.createElement("div");
      starsContainer.classList.add("stars-container");
      starsContainer.style.paddingRight = "1em";
      starsContainer.style.paddingLeft = "1em";

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
