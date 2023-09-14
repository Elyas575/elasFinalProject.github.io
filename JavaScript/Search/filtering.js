const filterDropdown = document.querySelector(".sort-by-filter");
// extract categories from card data
export function extractCategories(cards) {
  const categories = [];

  cards.forEach((card) => {
    if (!categories.includes(card.category)) {
      categories.push(card.category);
    }
  });

  return categories;
}
// populate the filter dropdown with categories
export function populateFilterDropdown(categories) {
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    filterDropdown.appendChild(option);
  });
}

// function to sort and filter cards by a selected category
export function sortAndFilterCardsByCategory(cards, selectedCategory) {
  if (selectedCategory === "Default") {
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
