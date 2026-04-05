/**
 * search-suggest.js
 * Live autocomplete suggestions for the header search bar.
 * Depends on: search-index.js (SEARCH_INDEX must be defined first).
 * Initialised automatically — call initSearchSuggest() after header is in DOM.
 */

function initSearchSuggest() {
  const form  = document.querySelector('.search-bar form');
  const input = document.querySelector('.search-bar input[type="text"]');
  if (!input || !form || typeof SEARCH_INDEX === 'undefined') return;

  /* ── Build dropdown container ─────────────────────────── */
  const dropdown = document.createElement('div');
  dropdown.className = 'ss-dropdown';
  dropdown.setAttribute('role', 'listbox');
  dropdown.setAttribute('aria-label', 'Search suggestions');

  // Position relative to the search-bar wrapper
  const bar = input.closest('.search-bar');
  bar.style.position = 'relative';
  bar.appendChild(dropdown);

  let activeIndex = -1;
  let currentItems = [];

  /* ── Helpers ──────────────────────────────────────────── */
  function close() {
    dropdown.innerHTML   = '';
    dropdown.style.display = 'none';
    activeIndex = -1;
    currentItems = [];
  }

  function setActive(idx) {
    const items = dropdown.querySelectorAll('.ss-item');
    items.forEach((el, i) => el.classList.toggle('ss-active', i === idx));
    activeIndex = idx;
  }

  function getSuggestions(query) {
    const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    if (!terms.length) return [];

    return SEARCH_INDEX
      .map(entry => {
        const haystack = `${entry.title} ${entry.keywords} ${entry.section} ${entry.desc}`.toLowerCase();
        let score = 0;
        terms.forEach(term => {
          if (entry.title.toLowerCase().includes(term))    score += 10;
          if ((entry.keywords || '').toLowerCase().includes(term)) score += 5;
          if (entry.section.toLowerCase().includes(term))  score += 2;
          if (entry.desc.toLowerCase().includes(term))     score += 1;
        });
        return { entry, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(({ entry }) => entry);
  }

  function highlightMatch(text, query) {
    const terms = query.trim().split(/\s+/).filter(Boolean);
    let result = text;
    terms.forEach(term => {
      const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      result = result.replace(re, '<mark>$1</mark>');
    });
    return result;
  }

  function render(query) {
    const suggestions = getSuggestions(query);
    currentItems = suggestions;
    activeIndex  = -1;

    if (!suggestions.length) { close(); return; }

    dropdown.innerHTML = '';

    suggestions.forEach((entry, i) => {
      const item = document.createElement('a');
      item.className  = 'ss-item';
      item.href       = entry.url;
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', 'false');

      item.innerHTML = `
        <span class="ss-section">${entry.section}</span>
        <span class="ss-title">${highlightMatch(entry.title, query)}</span>
      `;

      item.addEventListener('mousedown', e => {
        // mousedown fires before blur — prevent input blur closing dropdown first
        e.preventDefault();
        window.location.href = entry.url;
      });

      item.addEventListener('mouseover', () => setActive(i));

      dropdown.appendChild(item);
    });

    // "See all results" footer
    const footer = document.createElement('div');
    footer.className = 'ss-footer';
    footer.innerHTML = `<a href="search.html?q=${encodeURIComponent(query)}" class="ss-all">
      🔍 See all results for <em>"${query}"</em>
    </a>`;
    footer.querySelector('a').addEventListener('mousedown', e => {
      e.preventDefault();
      window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    });
    dropdown.appendChild(footer);

    dropdown.style.display = 'block';
  }

  /* ── Input events ─────────────────────────────────────── */
  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (q.length < 1) { close(); return; }
    render(q);
  });

  input.addEventListener('keydown', e => {
    const items = dropdown.querySelectorAll('.ss-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(Math.min(activeIndex + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(Math.max(activeIndex - 1, 0));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      window.location.href = currentItems[activeIndex].url;
    } else if (e.key === 'Escape') {
      close();
      input.blur();
    }
  });

  input.addEventListener('focus', () => {
    if (input.value.trim().length > 0) render(input.value.trim());
  });

  input.addEventListener('blur', () => {
    // Small delay so mousedown on suggestion fires first
    setTimeout(close, 150);
  });

  // Close if user clicks outside
  document.addEventListener('click', e => {
    if (!bar.contains(e.target)) close();
  });
}
