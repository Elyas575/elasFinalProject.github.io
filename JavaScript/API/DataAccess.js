export async function FetchAllCards() {
  const url = "https://tap-web-1.herokuapp.com/topics/list";
  let cards;

  try {
    const response = await fetch(url);
    cards = await response.json();
  } catch (error) {
    console.error(error);
  }
  return cards;
}

export async function fetchCardsBySearchTerm(searchString) {
  let cards;
  let url = `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchString}`;

  try {
    const response = await fetch(url);
    cards = await response.json();
  } catch (error) {
    console.error(error);
  }
  return cards;
}

export async function getCardById(id) {
  let url = `https://tap-web-1.herokuapp.com/topics/details/${id}`;
  let card;
  try {
    const res = await fetch(url);
    card = await res.json(); // Corrected line
  } catch (error) {
    console.log(error);
  } finally {
    return card;
  }
}
