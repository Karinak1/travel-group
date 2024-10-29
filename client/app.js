
const imageBg = document.getElementsByClassName("background-image");

const backgroundImages = [
  "https://static.independent.co.uk/2023/08/02/10/iStock-1248448159%20%281%29.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidQZFrMzrV94fwOxlf_MjepdxAwrEV9GNRg&s",
  "https://dotravel.com/uploads/articles/95/april-holiday-destinations_3.jpg",
];

let index = 0;
const img = document.querySelector("#bg");
function changeBg() {
  img.src = backgroundImages[index];
  index > 1 ? (index = 0) : index++;
}

setInterval(changeBg, 3000);
const imageBg = document.getElementsByClassName("background-image")

const backgroundImages = [
    "https://static.independent.co.uk/2023/08/02/10/iStock-1248448159%20%281%29.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidQZFrMzrV94fwOxlf_MjepdxAwrEV9GNRg&s",
    "https://dotravel.com/uploads/articles/95/april-holiday-destinations_3.jpg",
]

let index = 0
const img  = document.querySelector("#bg")
function changeBg(){
    img.src = backgroundImages[index]
    index > 1 ? index = 0 : index++
}

setInterval(changeBg, 3000)
main
