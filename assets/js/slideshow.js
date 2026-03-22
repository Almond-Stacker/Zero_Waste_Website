/**
 * slideshow.js
 * Controls the hero image carousel:
 * auto-advance, arrow navigation, dot indicators,
 * and caption fade transitions.
 *
 * No external data dependencies.
 */

const SLIDE_CAPTIONS = [
  {
    title: "Hilo Wastewater Treatment Plant Upgrades Begin",
    text:  "The groundbreaking ceremony for the $337 million rehabilitation and replacement project took place on July 31."
  },
  {
    title: "Coastal Cleanup Volunteer Day – March 17",
    text:  "Join DEM and community partners for a cleanup at Carlsmith Beach Park starting at 7:00 AM."
  },
  {
    title: "New Curbside Organics Collection Pilot Launches",
    text:  "A 6-month organics diversion pilot program begins in select Hilo neighborhoods this spring."
  }
];

let currentSlide = 0;
let slideTimer   = null;

function goToSlide(index) {
  const slides       = document.querySelectorAll('.slide');
  const dots         = document.querySelectorAll('.dot');
  const titleEl      = document.getElementById('caption-title');
  const textEl       = document.getElementById('caption-text');
  const captionInner = document.querySelector('.caption-inner');

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d   => d.classList.remove('active'));

  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');

  // Fade the caption text
  captionInner.style.opacity = '0';
  setTimeout(() => {
    titleEl.textContent = SLIDE_CAPTIONS[currentSlide].title;
    textEl.textContent  = SLIDE_CAPTIONS[currentSlide].text;
    captionInner.style.transition = 'opacity 0.4s ease';
    captionInner.style.opacity    = '1';
  }, 250);
}

function startSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function initSlideshow() {
  const prevBtn = document.getElementById('slide-prev');
  const nextBtn = document.getElementById('slide-next');
  const dots    = document.querySelectorAll('.dot');

  // Guard: exit gracefully if the slideshow isn't on this page
  if (!prevBtn) return;

  prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); startSlideTimer(); });
  nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); startSlideTimer(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goToSlide(i); startSlideTimer(); });
  });

  startSlideTimer();
}
