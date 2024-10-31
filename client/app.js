 document.getElementsByClassName("background-image");

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

const travelContainer = document.getElementsByClassName("places"); //form div className
async function SubmitReview(event) {
    event.preventDefault();
    const formData = new FormData(formInfo);
    const body = Object.fromEntries(formData);
    console.log(body)


    async function getTravel() {

        const response = await fetch('http://localhost:8080/travel', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const travel = await response.json();
        console.log(travel)
        // for (let i = 0; i < travel.length; i++) {
        //   const name = travel[i].name;
        //   const review = travel[i].review;
        //   const city = travel[i].city;

        //   const p = document.createElement('p');

        //   p.textContent = `${city} ${review} by ${name}  `;

        //   places.appendChild(p);
        // }
    }
    // getTravel();
}

