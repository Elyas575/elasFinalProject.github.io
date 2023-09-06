import { FetchAllCards } from "./DataAccess.js";
import { populateCards } from "./PopulateCards.js";

async function main() {
  const data = await FetchAllCards();
  const cardContainer = document.getElementById("card-container");
  populateCards(cardContainer, data);
}

main();
