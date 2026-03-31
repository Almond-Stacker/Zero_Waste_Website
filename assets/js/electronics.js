/* electronics.js — Electronics Recycling page logic */

// Hero photo subtle zoom-in on load
const heroPhoto = document.getElementById('heroPhoto');
if (heroPhoto) {
  const img = new Image();
  img.onload = () => heroPhoto.classList.add('loaded');
  img.src = heroPhoto.dataset.src;
}

// Accordion
document.querySelectorAll('.accordion-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const bodyId = btn.getAttribute('aria-controls');
    const body = document.getElementById(bodyId);

    // Close all
    document.querySelectorAll('.accordion-trigger').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.accordion-body').forEach(b => {
      b.classList.remove('open');
    });

    // Open this one if it was closed
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      body.classList.add('open');
    }
  });
});
