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
    image: '../assets/images/map.png',
    href:  'malama-map.html'
  },
  {
    label: 'Batteries',
    image: '../assets/images/recycle-batteries.jpg',
    href:  'hhw.html'
  },
  {
    label: 'Beverage Containers',
    image: '../assets/images/recycle-beverage.jpg',
    href:  'hi5.html'
  },
  {
    label: 'Organic Materials',
    image: '../assets/images/recycle-organic.jpg',
    href:  'greenwaste.html'
  },
  {
    label: 'Used Oil &amp; Filters',
    image: '../assets/images/recycle-automotive.jpg',
    href:  'automotive-chemicals.html'
  },
  {
    label: 'Waste Tires',
    image: '../assets/images/recycle-tires.jpg',
    href:  'automotive-chemicals.html'
  },
  {
    label: 'E-Waste',
    image: '../assets/images/recycle-electronic.jpg',
    href:  'electronics.html'
  },
  {
    label: 'Paint',
    image: '../assets/images/recycle-paint.jpg',
    href:  'hhw.html'
  },
  {
    label: 'Greenwaste',
    image: '../assets/images/recycle-organic.jpg',
    href:  'greenwaste.html'
  },
  {
    label: 'Metal &amp; Appliances',
    image: '../assets/images/recycle-appliance.jpg',
    href:  'metal-appliances.html'
  },
  {
    label: 'Household Hazardous Waste',
    image: '../assets/images/recycle-household.jpg',
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
    image: '../assets/images/no-recycle-styrofoam.jpg'
  },
  {
    label: 'Contaminated/Oily Materials',
    image: '../assets/images/no-recycle-pizza.jpg'
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
