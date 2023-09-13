export async function FetchAllCards() {
  const url = "https://tap-web-1.herokuapp.com/topics/list";
  let data;

  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function fetchCardsBySearchTerm(searchString) {
  let data;
  let url = `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchString}`;

  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}
