/**
 * facilities.js
 * Handles interactive behaviour on the Solid Waste Facilities page:
 *   1. Contact Us accordion toggle
 *   2. Smooth-scroll to anchor sections when card links are clicked
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------------
     1. CONTACT US ACCORDION
     Toggle the contact details panel open/closed.
  ---------------------------------------------------------------- */
  const toggle = document.getElementById('fac-contact-toggle');
  const body   = document.getElementById('fac-contact-body');

  if (toggle && body) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      const icon   = toggle.querySelector('.fac-toggle-icon');

      toggle.setAttribute('aria-expanded', String(!isOpen));
      body.style.display = isOpen ? 'none' : 'block';
      if (icon) icon.textContent = isOpen ? '+' : '−';
    });
  }

  /* ----------------------------------------------------------------
     2. SMOOTH SCROLL for in-page anchor links
     Any <a href="#..."> will animate to that section offset by the
     sticky header height.
  ---------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href').slice(1);
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();

      const header     = document.querySelector('.site-header');
      const headerH    = header ? header.offsetHeight : 0;
      const targetTop  = target.getBoundingClientRect().top + window.scrollY - headerH - 16;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

});
