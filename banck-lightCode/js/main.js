// Sticky Menu
const header = document.querySelector("header");
window.onscroll = () => {
  if (window.scrollY > 100) {
    header.classList.add("bg-color-primary-dark");
    header.classList.add("border-b");
    header.classList.add("border-color-gray");
  } else {
    header.classList.remove("bg-color-primary-dark");
    header.classList.remove("border-b");
    header.classList.remove("border-color-gray");
  }
};

//Mobile
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLink = document.querySelectorAll(".hlink");
const faSolid = document.querySelector(".fa-solid");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

hLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    faSolid.classList.toggle("fa-xmark");
  });
});

//testimonial
const userPics = document.getElementsByClassName("user-pic");
const userTexts = document.getElementsByClassName("user-text");

function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }
  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

/* rotate cards */

const toggleBtn = document.getElementById("toggleBtn");

const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");

const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");

const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");

/* Rotate Card-1 */

toggleBtn.addEventListener("change", () => {
  card_1_front.classList.toggle("-rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");
});

/* Rotate Card-1 */

toggleBtn.addEventListener("change", () => {
  card_2_front.classList.toggle("-rotate-y-180");
  card_2_back.classList.toggle("rotate-y-180");
});

/* Rotate Card-3 */

toggleBtn.addEventListener("change", () => {
  card_3_front.classList.toggle("-rotate-y-180");
  card_3_back.classList.toggle("rotate-y-180");
});
