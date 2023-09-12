export async function FetchAllCards() {
  const url = "https://tap-web-1.herokuapp.com/topics/list";
  let data;

  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    console.log("Eroor");
  }

  return data;
}
