/* =============================================
   emergency-prep.js
   Interactivity for the Emergency Preparations page:
     - Hazard type tab switching
     - Accordion expand / collapse
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ── HAZARD TABS ──────────────────────────────────────
  const tabs   = document.querySelectorAll('.hazard-tab');
  const panels = document.querySelectorAll('.hazard-panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const target = tab.dataset.panel;

      // Update tab active states
      tabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Show the matching panel
      panels.forEach(function (panel) {
        if (panel.id === target) {
          panel.classList.add('active');
          panel.setAttribute('aria-hidden', 'false');
        } else {
          panel.classList.remove('active');
          panel.setAttribute('aria-hidden', 'true');
        }
      });
    });
  });

  // ── ACCORDION ─────────────────────────────────────────
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const bodyId   = trigger.getAttribute('aria-controls');
      const body     = document.getElementById(bodyId);

      if (!body) return;

      if (expanded) {
        trigger.setAttribute('aria-expanded', 'false');
        body.classList.remove('open');
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }
    });
  });

  // ── HERO PHOTO PARALLAX LOAD ──────────────────────────
  const heroPhoto = document.getElementById('heroPhoto');
  if (heroPhoto) {
    const src = heroPhoto.dataset.src;
    if (src) {
      const img = new Image();
      img.onload = function () { heroPhoto.classList.add('loaded'); };
      img.onerror = function () { heroPhoto.classList.add('no-image'); };
      img.src = src;
    } else {
      heroPhoto.classList.add('no-image');
    }
  }

});
