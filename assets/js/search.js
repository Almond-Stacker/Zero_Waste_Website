/**
 * search.js
 * Client-side full-text search for the County of Hawai'i DEM website.
 * Reads ?q= from the URL, scores SEARCH_INDEX entries, and renders results.
 * Depends on: search-index.js loaded before this file.
 */

/* ── SCORING ──────────────────────────────────────────── */
function scoreEntry(entry, terms) {
  let score = 0;
  const titleLower    = entry.title.toLowerCase();
  const descLower     = entry.desc.toLowerCase();
  const keywordsLower = (entry.keywords || '').toLowerCase();
  const sectionLower  = entry.section.toLowerCase();

  terms.forEach(term => {
    if (!term) return;
    // Title exact word match — highest weight
    if (titleLower.includes(term))    score += 10;
    // Keywords match — high weight
    if (keywordsLower.includes(term)) score += 6;
    // Description match — medium weight
    if (descLower.includes(term))     score += 3;
    // Section match — low weight
    if (sectionLower.includes(term))  score += 1;
  });

  return score;
}

/* ── SNIPPET ──────────────────────────────────────────── */
function highlight(text, terms) {
  let result = text;
  terms.forEach(term => {
    if (!term) return;
    const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    result = result.replace(re, '<mark>$1</mark>');
  });
  return result;
}

/* ── RENDER RESULTS ───────────────────────────────────── */
function renderResults(query, results) {
  const container = document.getElementById('search-results');
  const countEl   = document.getElementById('search-count');
  const queryEl   = document.getElementById('search-query-display');

  if (queryEl) queryEl.textContent = `"${query}"`;

  if (!results.length) {
    countEl.textContent = '0 results';
    container.innerHTML = `
      <div class="sr-empty">
        <div class="sr-empty-icon"><img src="../assets/images/search-icon.png" alt="Search" class="search-icon-img"></div>
        <h3>No results found for <em>"${query}"</em></h3>
        <p>Try different keywords, or browse a section from the navigation menu above.</p>
        <div class="sr-suggestions">
          <a href="recycle.html">Where to Recycle</a>
          <a href="hhw.html">Hazardous Waste Events</a>
          <a href="facilities.html">Find a Facility</a>
          <a href="contact.html">Contact DEM</a>
        </div>
      </div>`;
    return;
  }

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  countEl.textContent = `${results.length} result${results.length !== 1 ? 's' : ''}`;

  container.innerHTML = results.map(entry => `
    <a class="sr-card" href="${entry.url}">
      <div class="sr-card-inner">
        <div class="sr-section">${entry.section}</div>
        <h3 class="sr-title">${highlight(entry.title, terms)}</h3>
        <p class="sr-desc">${highlight(entry.desc, terms)}</p>
      </div>
      <span class="sr-arrow">→</span>
    </a>
  `).join('');
}

/* ── MAIN ─────────────────────────────────────────────── */
function runSearch() {
  const params = new URLSearchParams(window.location.search);
  const query  = (params.get('q') || '').trim();

  // Pre-fill the search input on the results page
  const input = document.getElementById('search-input');
  if (input) input.value = query;

  if (!query) {
    document.getElementById('search-count').textContent = 'Enter a search term above';
    document.getElementById('search-query-display').textContent = '';
    return;
  }

  const terms   = query.toLowerCase().split(/\s+/).filter(Boolean);
  const results = SEARCH_INDEX
    .map(entry  => ({ entry, score: scoreEntry(entry, terms) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ entry }) => entry);

  renderResults(query, results);
}

document.addEventListener('DOMContentLoaded', runSearch);
