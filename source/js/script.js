let cards = document.querySelectorAll(".card");
let bookButtons = document.querySelectorAll(".card__button");

cards.forEach(function (card) {
  card.addEventListener("mouseleave", () => {
    if (card.classList.contains("card--selected")) {
      card.classList.add("card--active");
      card.classList.remove("card--selected");
      card.querySelector(".card__rate").classList.add("card__rate--active");
    }
  });

  card.addEventListener("click", () => {
    if (!card.classList.contains("card--selected")) {
      card.classList.remove("card--active");
      card.querySelector(".card__rate").classList.remove("card__rate--active");
    }
  });
});

bookButtons.forEach(function (bookButton) {
  bookButton.addEventListener("click", (evt) => {
    const card = evt.target.closest(".card");
    evt.stopPropagation();
    if (!card.classList.contains("card--selected")) {
      card.classList.add("card--selected");
    }
  });
});
