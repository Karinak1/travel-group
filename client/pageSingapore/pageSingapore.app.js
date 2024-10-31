document
  .getElementById("review-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.name.value.trim();
    const city = this.city.value.trim();
    const review = this.review.value.trim();

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
