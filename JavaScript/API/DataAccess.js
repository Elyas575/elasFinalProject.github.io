// fetch all the cards from an api

export async function FetchAllCards() {
  const url = "https://tap-web-1.herokuapp.com/topics/list";
  let cards;

  try {
    const response = await fetch(url);
    cards = await response.json();
  } catch (error) {
    alert("Something went wrong. Web topics failed to load.");
  }
  return cards;
}
// fetch cards based on the dynamic search term
export async function fetchCardsBySearchTerm(searchString) {
  let cards;
  let url = `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchString}`;

  try {
    const response = await fetch(url);
    cards = await response.json();
  } catch (error) {
    alert(error);
  }
  return cards;
}
// fetch cards based on card id
export async function getCardById(id) {
  let url = `https://tap-web-1.herokuapp.com/topics/details/${id}`;
  let card;
  try {
    const res = await fetch(url);
    card = await res.json();
  } catch (error) {
    alert(error);
  } finally {
    return card;
  }
}
