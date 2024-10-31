 document.getElementsByClassName("background-image");

const backgroundImages = [
  "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg",
  "https://www.wiredforadventure.com/wp-content/uploads/2019/08/hendrik-cornelissen-qrcOR33ErA-unsplash-scaled.jpg",
  "https://dotravel.com/uploads/articles/95/april-holiday-destinations_3.jpg",
];

let index = 0;
const img = document.querySelector("#bg");
function changeBg() {
  img.src = backgroundImages[index];
  index > 1 ? (index = 0) : index++;
}

setInterval(changeBg, 3000);

const travelContainer = document.getElementsByClassName("places"); //form div className


