/**
 * slideshow.js
 * Builds and controls the hero image carousel entirely from data.
 * Dynamically creates: slide divs, dot indicators, and the caption overlay.
 *
 * To add/remove/change a slide, only edit SLIDES_DATA below.
 * No external data dependencies.
 */

/* =============================================
   SLIDE DATA
   Add image URL, title, body text, and link
   for each slide here.
   ============================================= */
const SLIDES_DATA = [
  {
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=80",
    title: "Hilo Wastewater Treatment Plant Upgrades Begin",
    text:  "The groundbreaking ceremony for the $337 million rehabilitation and replacement project took place on July 31.",
    link:  "#"
  },
  {
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1400&q=80",
    title: "Coastal Cleanup Volunteer Day – March 17",
    text:  "Join DEM and community partners for a cleanup at Carlsmith Beach Park starting at 7:00 AM.",
    link:  "#"
  },
  {
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1400&q=80",
    title: "New Curbside Organics Collection Pilot Launches",
    text:  "A 6-month organics diversion pilot program begins in select Hilo neighborhoods this spring.",
    link:  "#"
  }
];

/* =============================================
   STATE
   ============================================= */
let currentSlide = 0;
let slideTimer   = null;

/* =============================================
   BUILD DOM
   Injects all slides, dots, and the caption
   overlay into #hero-slideshow at runtime.
   ============================================= */
function buildSlideshow() {
  const container = document.getElementById('hero-slideshow');
  if (!container) return false;

  // 1. Slide background divs
  SLIDES_DATA.forEach((slide, i) => {
    const div = document.createElement('div');
    div.classList.add('slide');
    if (i === 0) div.classList.add('active');
    div.style.backgroundImage = `url('${slide.image}')`;
    container.appendChild(div);
  });

  // 2. Prev / Next arrows
  const prevBtn = document.createElement('button');
  prevBtn.className   = 'slide-arrow slide-prev';
  prevBtn.id          = 'slide-prev';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  prevBtn.innerHTML   = '&#10094;';
  container.appendChild(prevBtn);

  const nextBtn = document.createElement('button');
  nextBtn.className   = 'slide-arrow slide-next';
  nextBtn.id          = 'slide-next';
  nextBtn.setAttribute('aria-label', 'Next slide');
  nextBtn.innerHTML   = '&#10095;';
  container.appendChild(nextBtn);

  // 3. Caption overlay
  const caption = document.createElement('div');
  caption.className = 'slide-caption';
  caption.id        = 'slide-caption';

  const captionInner = document.createElement('div');
  captionInner.className = 'caption-inner';
  captionInner.innerHTML = `
    <h2 class="caption-title" id="caption-title">${SLIDES_DATA[0].title}</h2>
    <p  class="caption-text"  id="caption-text">${SLIDES_DATA[0].text}</p>
    <a  href="${SLIDES_DATA[0].link}" class="caption-btn">LEARN MORE</a>
  `;

  // 4. Dot indicators (one per slide)
  const dotsWrapper = document.createElement('div');
  dotsWrapper.className = 'slide-dots';
  dotsWrapper.id        = 'slide-dots';

  SLIDES_DATA.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dotsWrapper.appendChild(dot);
  });

  caption.appendChild(captionInner);
  caption.appendChild(dotsWrapper);
  container.appendChild(caption);

  return true;
}

/* =============================================
   NAVIGATION
   ============================================= */
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

  // Fade caption text on slide change
  captionInner.style.opacity = '0';
  setTimeout(() => {
    titleEl.textContent              = SLIDES_DATA[currentSlide].title;
    textEl.textContent               = SLIDES_DATA[currentSlide].text;
    captionInner.style.transition    = 'opacity 0.4s ease';
    captionInner.style.opacity       = '1';
  }, 250);
}

function startSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

/* =============================================
   INIT
   Called by main.js on DOMContentLoaded.
   ============================================= */
function initSlideshow() {
  const built = buildSlideshow();
  if (!built) return; // guard: no slideshow on this page

  const prevBtn = document.getElementById('slide-prev');
  const nextBtn = document.getElementById('slide-next');
  const dots    = document.querySelectorAll('.dot');

  prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); startSlideTimer(); });
  nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); startSlideTimer(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goToSlide(i); startSlideTimer(); });
  });

  startSlideTimer();
}
