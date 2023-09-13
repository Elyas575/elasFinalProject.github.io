export function generateStars(rating) {
  const fullStarsNumber = Math.floor(rating);
  const halfStarNumber = rating % 1 >= 0.5;
  const starIcons = [];

  for (let i = 0; i < fullStarsNumber; i++) {
    starIcons.push('<ion-icon name="star"></ion-icon>');
  }

  if (halfStarNumber) {
    starIcons.push('<ion-icon name="star-half"></ion-icon>');
  }

  return starIcons.join("");
}