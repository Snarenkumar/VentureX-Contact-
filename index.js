// document.addEventListener("DOMContentLoaded", function() {
//     const nav = document.querySelector(".nav");
//     const navTrigger = document.querySelector(".navTrigger");
//     const navList = document.querySelector(".navlinks");

//     // Shrink navbar on scroll
//     window.addEventListener("scroll", function() {
//         if (window.scrollY > 50) {
//             nav.classList.add("affix");
//         } else {
//             nav.classList.remove("affix");
//         }
//     });

//     // Toggle mobile menu
//     navTrigger.addEventListener("click", function() {
//         navTrigger.classList.toggle("active");
//         nav.classList.toggle("active");
//     });
// });



const counterval = 0; 

document.getElementById("counter").innerText =counterval;

const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let index = 0;

function updateCarousel() {
  const offset = -index * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = items.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  if (index < items.length - 1) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
});