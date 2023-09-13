import { generateStars } from "../Shared/StarsGenerator.js";

export function createCard(cardData) {
  const card = document.createElement("a");
  card.href = "product.html";
  card.className = "card";

  card.innerHTML = `
  <div class="card">
      <img class="banner-image" src="Images/${cardData.image}" />
      <div class="card-details">
        <div class="card-title">
        <p class="name"><b>${cardData.category}</b></p>
          <p class="description">${cardData.topic}</p>
     
        </div>
        <div class="stars-container">
          ${generateStars(cardData.rating)}
        </div>
        <p class="author">Author: ${cardData.name}</p>
      </div>
    </div> `;

  return card;
}

export function populateCards(container, data) {
  for (let i = 0; i < data.length; i++) {
    const cardData = data[i];
    const card = createCard(cardData);
    container.appendChild(card);
  }
}
