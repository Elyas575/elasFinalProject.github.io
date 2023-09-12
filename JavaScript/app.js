import { FetchAllCards } from "./DataAccess.js";
import { populateCards } from "./PopulateCards.js";
import {
  showLoadingScreen,
  hideLoadingScreen,
} from "./Shared/LoadingScreen.js";
import { InitializeSearchEventListener } from "./Search/search.js";

async function main() {
  const cardContainer = document.getElementById("card-container");
  const loadingMessage = showLoadingScreen(cardContainer);
  const data = await FetchAllCards();
  try {
    populateCards(cardContainer, data);
  } catch (e) {
    console.log(e);
  } finally {
    hideLoadingScreen(cardContainer, loadingMessage);
    InitializeSearchEventListener(data, cardContainer);
  }
}

main();
