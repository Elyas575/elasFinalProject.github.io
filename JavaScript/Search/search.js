import { populateCards } from "../PopulateCards.js";

export function InitializeSearchEventListener(data, container) {
  const searchInput = document.getElementById("search");
  let timer;

  searchInput.addEventListener("input", (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      const value = e.target.value.toLowerCase();
      const filteredData = data.filter((cardData) => {
        return cardData.topic.toLowerCase().includes(value);
      });
      container.innerHTML = "";
      populateCards(container, filteredData);
    }, 300);
  });
}
