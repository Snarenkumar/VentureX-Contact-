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



document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const arrowLeft = document.querySelector('.arrow.left');
    const arrowRight = document.querySelector('.arrow.right');
  
    let currentIndex = 0;
  
    // Function to move to the next slide
    function nextSlide() {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the first slide
      }
      updateSlider();
    }
  
    // Function to move to the previous slide
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - 1; // Loop to the last slide
      }
      updateSlider();
    }
  
    // Function to update the slider position
    function updateSlider() {
      const slideWidth = slides[currentIndex].clientWidth;
      sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    // Event listeners for the arrows
    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);
  
    // Optional: Auto-play the carousel
    // setInterval(nextSlide, 5000); // Uncomment this line to enable auto-play
  });





