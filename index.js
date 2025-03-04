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
  document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.closest('.accordion-item-wrapper');
        const accordionBody = accordionItem.querySelector('.acordion-body');
        const iconWrapper = accordionItem.querySelector('.accordion-icon-wrapper');

        // Toggle body visibility
        if (accordionBody.style.height === '0px' || accordionBody.style.height === '') {
            accordionBody.style.height = 'auto';
            accordionBody.style.opacity = '1';
        } else {
            accordionBody.style.height = '0px';
            accordionBody.style.opacity = '0';
        }

        // Toggle icon rotation
        iconWrapper.classList.toggle('active');
    });
});



