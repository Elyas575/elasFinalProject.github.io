export function showLoadingScreen(cardContainer) {
  const loadingMessage = document.createElement("div");
  loadingMessage.innerHTML = "<h2>Loading...</h2>";
  cardContainer.appendChild(loadingMessage);
  return loadingMessage;
}

export function hideLoadingScreen(cardContainer, loadingMessage) {
  cardContainer.removeChild(loadingMessage);
}
