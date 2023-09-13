import { populateCards } from "../Presentation/PopulateCards.js";
import { fetchCardsBySearchTerm, FetchAllCards } from "../API/DataAccess.js";

const sortInput = document.getElementById("sort-field");
const searchInput = document.getElementById("search");
const container = document.getElementById("card-container");
const filterDropdown = document.querySelector(".sort-by-filter");
let selectedCategory = "allCardCategories";
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
      console.log(searchTerm);
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
        sortedCards = [...filteredCards];
    }
    console.log(filteredCards);
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

function extractCategories(cards) {
  const categories = [];

  cards.forEach((card) => {
    if (!categories.includes(card.category)) {
      categories.push(card.category);
    }
  });

  return categories;
}

function populateFilterDropdown(categories) {
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    filterDropdown.appendChild(option);
  });
}

function sortAndFilterCardsByCategory(cards, selectedCategory) {
  if (selectedCategory === "allCardCategories") {
    return cards;
  } else {
    const filteredCards = cards.filter(
      (card) => card.category === selectedCategory
    );

    const sortedCards = filteredCards.sort((a, b) => {
      return a.topic.localeCompare(b.topic);
    });

    return sortedCards;
  }
}
