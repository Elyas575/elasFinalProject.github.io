export const getCardsData = async () => {
  const url = "https://tap-web-1.herokuapp.com/topics/list";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export async function FetchAllCards() {
  let data = await getCardsData();
  console.log(data);
  return data;
}
