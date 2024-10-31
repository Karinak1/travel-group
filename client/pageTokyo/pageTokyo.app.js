document
  .getElementById("review-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.name.value.trim();
    const city = this.city.value.trim();
    const review = this.review.value.trim();

    async function getReview(name, city, review){
      const response = await fetch('http://localhost:8080/travel',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, city, review }),
      });
      const messages = await response.json();
      for (let i = 0; i < messages.length; i++) {
        
        const name = messages[i].name;
        const city = messages[i].city;
        const review = messages[i].review;
        console.log(messages)
        console.log(name, city, review)
        const p = document.createElement('p');
        p.textContent = `${review} by ${name}`;
        msgContainer.appendChild(p)
        
}}
    getReview(name, city, review)
    

    const reviewItem = document.createElement("li");
    reviewItem.textContent = `${name} from ${city}: ${review}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";

    deleteButton.addEventListener("click", function () {
      reviewItem.remove();
    });

    reviewItem.appendChild(deleteButton);
    document.getElementById("review-list").appendChild(reviewItem);
        this.reset();
    
  });


