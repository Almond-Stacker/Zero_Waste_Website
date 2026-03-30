/**
 * tabs.js
 * Handles EVENTS / NEWS tab switching.
 * Calls renderNews() (from news.js) lazily on first open.
 *
 * Depends on: news.js  (renderNews)
 */

function switchTab(tab) {
  const tabEvents = document.getElementById('tab-events');
  const tabNews   = document.getElementById('tab-news');
  const panelEv   = document.getElementById('panel-events');
  const panelNews = document.getElementById('panel-news');

  if (tab === 'events') {
    tabEvents.classList.add('active');
    tabNews.classList.remove('active');
    panelEv.classList.remove('hidden');
    panelNews.classList.add('hidden');
  } else {
    tabNews.classList.add('active');
    tabEvents.classList.remove('active');
    panelNews.classList.remove('hidden');
    panelEv.classList.add('hidden');
    renderNews(); // lazy — news.js guards against double render
  }
}
