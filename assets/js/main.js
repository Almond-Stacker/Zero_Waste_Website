/**
 * main.js
 * Entry point. Waits for the DOM, then initialises every module.
 *
 * Load order in HTML:
 *   1. data.js       – raw data arrays
 *   2. calendar.js   – calendar + event sidebar logic
 *   3. news.js       – news card renderer
 *   4. slideshow.js  – hero carousel
 *   5. tabs.js       – tab switching (calls renderNews)
 *   6. main.js       – this file, boots everything
 */

document.addEventListener('DOMContentLoaded', () => {
  initCalendar();    // calendar.js
  initSlideshow();   // slideshow.js
  buildQuickLinks(); // quick-links.js
  // tabs.js exposes switchTab() globally — called via onclick in HTML
  // news.js exposes renderNews() globally — called lazily by tabs.js
});
