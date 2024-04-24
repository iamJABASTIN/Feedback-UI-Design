const ratingsConatiner = document.querySelector(".ratings-container");
const panel = document.querySelector("#panel");
const sendBtn = document.querySelector("#send");
const ratings = document.querySelectorAll(".rating");
let userReview = "Satisfied";

ratingsConatiner.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActiveClasses();
    e.target.parentNode.classList.add("active");
    userReview = e.target.nextElementSibling.innerText;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${userReview}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActiveClasses() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
