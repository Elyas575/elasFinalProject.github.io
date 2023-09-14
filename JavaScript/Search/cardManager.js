import { populateCards } from "../Presentation/cardsPopulator.js";
import {
  fetchCardsBySearchTerm,
  FetchAllCards,
  getCardById,
} from "../API/DataAccess.js";

import {
  extractCategories,
  populateFilterDropdown,
  sortAndFilterCardsByCategory,
} from "./filtering.js";

const sortInput = document.getElementById("sort-field");
const searchInput = document.getElementById("search");
const container = document.getElementById("card-container");
const filterDropdown = document.querySelector(".sort-by-filter");
let selectedCategory = "Default";
let cards = await FetchAllCards();
let timer;

export async function InitializeSearchEventListener() {
  const categories = extractCategories(cards);
  populateFilterDropdown(categories);
  populateCards(container, cards);

  searchInput.addEventListener("input", async (e) => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      let searchTerm = e.target.value;
      cards = await fetchCardsBySearchTerm(searchTerm);
      container.innerHTML = "";
      populateCards(container, cards);
    }, 300);
  });

  sortInput.addEventListener("change", async (e) => {
    let sortBy = e.target.value;
    let sortedCards;

    const filteredCards = sortAndFilterCardsByCategory(cards, selectedCategory);

    switch (sortBy) {
      case "Title":
        sortedCards = [...filteredCards].sort((a, b) => {
          return a.topic.localeCompare(b.topic);
        });
        break;
      case "Name":
        sortedCards = [...filteredCards].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        break;
      default:
        sortedCards = [...cards].sort((a, b) => {
          return a.topic.localeCompare(b.topic);
        });
    }
    container.innerHTML = "";
    populateCards(container, sortedCards);
  });
}

filterDropdown.addEventListener("change", async (e) => {
  selectedCategory = e.target.value;
  const filteredAndSortedCards = sortAndFilterCardsByCategory(
    cards,
    selectedCategory
  );
  container.innerHTML = "";
  populateCards(container, filteredAndSortedCards);
});
