/**
 * recycle.js
 * Builds the "Where to Recycle" page.
 * Layout: one flat photo-tile grid + a "Can't Recycle" section at the bottom.
 * To add/change items, only edit RECYCLE_ITEMS and CANNOT_RECYCLE_ITEMS below.
 */

/* =============================================
   CAN RECYCLE — flat tile grid
   href: page to link to (or '#' if no dedicated page yet)
   ============================================= */
const RECYCLE_ITEMS = [
  {
    label: 'Recycling Center Map',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80&auto=format&fit=crop',
    href:  'malama-map.html'
  },
  {
    label: 'Batteries',
    image: 'https://images.unsplash.com/photo-1642801069630-bbb4d78061be?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href:  'hhw.html'
  },
  {
    label: 'Beverage Containers',
    image: 'https://images.unsplash.com/photo-1689555256964-aeabc20d1d3c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href:  'hi5.html'
  },
  {
    label: 'Organic Materials',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop',
    href:  'greenwaste.html'
  },
  {
    label: 'Used Oil &amp; Filters',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&q=80&auto=format&fit=crop',
    href:  'automotive-chemicals.html'
  },
  {
    label: 'Waste Tires',
    image: 'https://images.unsplash.com/photo-1548445929-4f60a497c9cf?w=600&q=80&auto=format&fit=crop',
    href:  'automotive-chemicals.html'
  },
  {
    label: 'E-Waste',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop',
    href:  'electronics.html'
  },
  {
    label: 'Paint',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80&auto=format&fit=crop',
    href:  'hhw.html'
  },
  {
    label: 'Greenwaste',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80&auto=format&fit=crop',
    href:  'greenwaste.html'
  },
  {
    label: 'Metal &amp; Appliances',
    image: 'https://images.unsplash.com/photo-1565621335513-5b8a5d7eb8a9?w=600&q=80&auto=format&fit=crop',
    href:  'metal-appliances.html'
  },
  {
    label: 'Hazardous Waste',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80&auto=format&fit=crop',
    href:  'hhw.html'
  },
  {
    label: 'Drop-Off Recycling',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80&auto=format&fit=crop',
    href:  'dropoff.html'
  }
];

/* =============================================
   CANNOT RECYCLE — bottom section
   ============================================= */
const CANNOT_RECYCLE_ITEMS = [
  {
    label: 'Styrofoam / EPS Foam',
    image: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=600&q=80&auto=format&fit=crop'
  },
  {
    label: 'Greasy Pizza Boxes',
    image: 'https://plus.unsplash.com/premium_photo-1668771084581-00496b46a17e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    label: 'Plastic Bags',
    image: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600&q=80&auto=format&fit=crop'
  },
  {
    label: 'Diapers',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80&auto=format&fit=crop'
  },
  {
    label: 'Broken Glass',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop'
  },
  {
    label: 'Ceramics &amp; Pottery',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80&auto=format&fit=crop'
  },
  {
    label: 'Soiled Food Containers',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&q=80&auto=format&fit=crop'
  },
  {
    label: 'Garden Hoses &amp; Wires',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop'
  }
];

/* =============================================
   BUILD — "Can Recycle" flat tile grid
   ============================================= */
function buildRecycleGrid() {
  const container = document.getElementById('recycle-content');
  if (!container) return;

  /* ---- Section heading ------------------------------------------- */
  const intro = document.createElement('div');
  intro.className = 'recycle-section-head';
  intro.innerHTML = `
    <h2>What Can I Recycle?</h2>
    <p>Select a material below to find the nearest drop-off location, event, or program near you.</p>
  `;
  container.appendChild(intro);

  /* ---- Tile grid ------------------------------------------------- */
  const grid = document.createElement('div');
  grid.className = 'recycle-tile-grid';
  grid.id = 'recyclable-items';

  RECYCLE_ITEMS.forEach(item => {
    const a = document.createElement('a');
    a.href      = item.href;
    a.className = 'recycle-tile';

    a.innerHTML = `
      <img src="${item.image}" alt="${item.label}" loading="lazy" />
      <div class="recycle-tile-label">${item.label}</div>
    `;

    grid.appendChild(a);
  });

  container.appendChild(grid);

  /* ---- Can't Recycle section ------------------------------------- */
  const cantSection = document.createElement('div');
  cantSection.className = 'cannot-recycle-section';

  cantSection.innerHTML = `
    <div class="cannot-recycle-head">
      <span class="cannot-icon">🚫</span>
      <div>
        <h2>What Can't I Recycle?</h2>
        <p>These items are <strong>not accepted</strong> in curbside or drop-off recycling bins. Placing them in recycling can contaminate entire loads and send them to the landfill.</p>
      </div>
    </div>
  `;

  const cantGrid = document.createElement('div');
  cantGrid.className = 'recycle-tile-grid cannot-grid';

  CANNOT_RECYCLE_ITEMS.forEach(item => {
    const div = document.createElement('div');
    div.className = 'recycle-tile cannot-tile';

    div.innerHTML = `
      <img src="${item.image}" alt="${item.label}" loading="lazy" />
      <div class="recycle-tile-label">${item.label}</div>
      <div class="cannot-badge">✕ Can't Recycle</div>
    `;

    cantGrid.appendChild(div);
  });

  cantSection.appendChild(cantGrid);

  const cantNote = document.createElement('p');
  cantNote.className = 'cannot-note';
  cantNote.innerHTML = `Not sure about a specific item? Call the DEM Recycling Information Line at <a href="tel:8089618942"><strong>(808) 961-8942</strong></a> for guidance.`;
  cantSection.appendChild(cantNote);

  container.appendChild(cantSection);
}
