/**
 * news.js
 * Renders the news card grid.
 * Lazy-rendered — only called when the News tab is first opened.
 *
 * Depends on: data.js  (NEWS_DATA)
 */

function renderNews() {
  const grid = document.getElementById('news-grid');

  // Guard: skip if already populated
  if (grid.children.length > 0) return;

  grid.innerHTML = '';

  NEWS_DATA.forEach(article => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
      <div class="news-card-top"></div>
      <div class="news-card-body">
        <span class="news-tag">${article.tag}</span>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <span class="news-date">${article.date}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}
