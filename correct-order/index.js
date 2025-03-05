// Counter initialization
let counterval = 0;
document.getElementById("counter").innerText = counterval;

// Carousel functionality
document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slide');
  const arrowLeft = document.querySelector('.arrow.left');
  const arrowRight = document.querySelector('.arrow.right');

  let currentIndex = 0;

  // Move to the next slide
  function nextSlide() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
  }

  // Move to the previous slide
  function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
  }

  // Update slider position
  function updateSlider() {
    const slideWidth = slides[currentIndex].clientWidth;
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Event listeners for arrows
  arrowLeft.addEventListener('click', prevSlide);
  arrowRight.addEventListener('click', nextSlide);

  // Optional: Auto-play the carousel
  // setInterval(nextSlide, 5000); // Uncomment to enable auto-play
});

// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    const answer = item.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// Accordion toggle functionality
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.closest('.accordion-item-wrapper');
    const accordionBody = accordionItem.querySelector('.acordion-body');
    const iconWrapper = accordionItem.querySelector('.accordion-icon-wrapper'); // Target the icon wrapper

    // Toggle body visibility
    if (accordionBody.style.height === '0px' || accordionBody.style.height === '') {
      accordionBody.style.height = accordionBody.scrollHeight + 'px';
      accordionBody.style.opacity = '1';
    } else {
      accordionBody.style.height = '0px';
      accordionBody.style.opacity = '0';
    }

    // Toggle active state on the icon wrapper
    iconWrapper.classList.toggle('active');
  });
});