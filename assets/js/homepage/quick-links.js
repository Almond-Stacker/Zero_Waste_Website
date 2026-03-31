/**
 * quick-links.js
 * Builds the quick-links section from QUICK_LINKS_DATA.
 * All items render as large Hawaiian photo cards.
 *
 * To add, remove, or change a link, only edit QUICK_LINKS_DATA below.
 */

/* =============================================
   DATA
   ============================================= */
const QUICK_LINKS_DATA = [
  {
    label:    'Find Transfer Stations',
    sublabel: 'Locate your nearest drop-off facility across Hawai\'i Island',
    // Waipio Valley, Big Island — lush Hawaiian landscape
    image:    'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=900&auto=format&q=80',
    href:     '#'
  },
  {
    label:    'Recycling Guide',
    sublabel: 'Learn what\'s recyclable and how to sort it right',
    // Pristine Kona coast — what responsible recycling protects
    image:    'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=900&auto=format&q=80',
    href:     '#'
  },
  {
    label:    'HI-5 Bottle Return',
    sublabel: 'Find certified redemption centers for your deposit refunds',
    // Colorful Hawaiian shoreline — bottles, cans, and clean beaches
    image:    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&q=80',
    href:     '#'
  },
  {
    label:    'Report Illegal Dumping',
    sublabel: 'Help keep Hawai\'i clean — report unauthorized waste sites',
    // Hawaii rainforest — the natural environment we\'re protecting
    image:    'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=900&auto=format&q=80',
    href:     '#'
  }
];

/* =============================================
   BUILD DOM
   ============================================= */
function buildQuickLinks() {
  const section = document.getElementById('quick-links');
  if (!section) return;

  // --- Section heading -------------------------------------------
  const heading = document.createElement('div');
  heading.className = 'ql-heading';
  heading.innerHTML = `
    <h2>How Can We Help?</h2>
    <p>Find the services and resources you need for a cleaner Hawai&#699;i</p>
  `;
  section.appendChild(heading);

  // --- 2×2 photo card grid --------------------------------------
  const grid = document.createElement('div');
  grid.className = 'ql-featured';

  QUICK_LINKS_DATA.forEach(item => {
    const a = document.createElement('a');
    a.href      = item.href;
    a.className = 'ql-card';
    a.setAttribute('aria-label', item.label);

    // Background photo
    const bg = document.createElement('div');
    bg.className = 'ql-card-bg';
    bg.style.backgroundImage = `url('${item.image}')`;

    // Gradient overlay
    const overlay = document.createElement('div');
    overlay.className = 'ql-card-overlay';

    // Arrow badge
    const arrow = document.createElement('div');
    arrow.className = 'ql-card-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.innerHTML = '&#8594;';

    // Text content
    const content = document.createElement('div');
    content.className = 'ql-card-content';
    content.innerHTML = `
      <span class="ql-card-label">${item.label}</span>
      <span class="ql-card-sub">${item.sublabel}</span>
    `;

    a.appendChild(bg);
    a.appendChild(overlay);
    a.appendChild(arrow);
    a.appendChild(content);
    grid.appendChild(a);
  });

  section.appendChild(grid);
}
