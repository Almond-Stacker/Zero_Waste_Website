/**
 * recycle.js
 * Builds the "Where to Recycle" page from RECYCLE_DATA.
 * Each category renders as:
 *   1. Full-width dark-green banner (title + subtitle + find-local button)
 *   2. 4-column grid of cards (icon/photo on top, title + description below)
 *
 * To add/change anything, only edit RECYCLE_DATA below.
 * No external data dependencies.
 */

/* =============================================
   DATA
   icon paths are relative to pages/ -> assets/images/
   subtitle / btn are optional per category
   ============================================= */
const RECYCLE_DATA = [
  {
    category: "Electronic & Office Supplies",
    subtitle: "Drop off at a certified e-waste facility near you.",
    btn: { text: "Find a Drop-Off Location", href: "#" },
    items: [
      {
        label: "Computers & Electronics",
        icon:  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&auto=format&fit=crop",
        desc:  "Includes hardware like monitors, towers, and laptops."
      },
      {
        label: "Inkjet / Toner Cartridges",
        icon:  "https://images.unsplash.com/photo-1612815292401-0b0c6de3a9f0?w=400&q=80&auto=format&fit=crop",
        desc:  "Specifically for printer supplies and ink cartridges."
      }
    ]
  },
  {
    category: "Household & Automotive Waste",
    subtitle: "These items require special handling — do not place in your curbside bin.",
    btn: { text: "Find Your Local Drop-Off", href: "#" },
    items: [
      {
        label: "Motor Oil",
        icon:  "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80&auto=format&fit=crop",
        desc:  "Used oil from vehicles or machinery."
      },
      {
        label: "Paint",
        icon:  "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&q=80&auto=format&fit=crop",
        desc:  "Standard household paints and stains."
      },
      {
        label: "Household Hazardous Waste",
        icon:  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80&auto=format&fit=crop",
        desc:  "Chemicals, cleaners, or other toxic materials from a home."
      },
      {
        label: "Automobiles",
        icon:  "https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=400&q=80&auto=format&fit=crop",
        desc:  "Old vehicles for scrap or parts."
      },
      {
        label: "Tires",
        icon:  "https://images.unsplash.com/photo-1548445929-4f60a497c9cf?w=400&q=80&auto=format&fit=crop",
        desc:  "Automotive tires of all sizes."
      }
    ]
  },
  {
    category: "Large Items & Metals",
    subtitle: "Schedule a bulk pickup or drop off at a county transfer station.",
    btn: { text: "Find Transfer Stations", href: "#" },
    items: [
      {
        label: "Appliances & White Goods",
        icon:  "https://images.unsplash.com/photo-1626806787461-102c1a7f1b62?w=400&q=80&auto=format&fit=crop",
        desc:  "Large household items like refrigerators, washers, or dryers."
      },
      {
        label: "Scrap Metal",
        icon:  "https://images.unsplash.com/photo-1565621335513-5b8a5d7eb8a9?w=400&q=80&auto=format&fit=crop",
        desc:  "General metal pieces and components."
      }
    ]
  },
  {
    category: "Organic & General Recycling",
    subtitle: "Reduce landfill waste — compost, redeem, and recycle.",
    btn: { text: "Find a Recycling Center", href: "#" },
    items: [
      {
        label: "Greenwaste & Food Discards",
        icon:  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80&auto=format&fit=crop",
        desc:  "Composting materials and food scraps."
      },
      {
        label: "Drop-Off Recycling Program",
        icon:  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80&auto=format&fit=crop",
        desc:  "Standard recyclables like paper, plastic, and glass."
      },
      {
        label: "HI-5 Beverage Containers",
        icon:  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80&auto=format&fit=crop",
        desc:  "Hawaii's HI-5 deposit redemption program for cans and bottles."
      }
    ]
  },
  {
    category: "Commercial Waste",
    subtitle: "Specialized disposal services for businesses, farms, and agencies.",
    btn: { text: "Contact DEM for Info", href: "#" },
    items: [
      {
        label: "Business, Farm & Agency Hazardous Waste",
        icon:  "https://images.unsplash.com/photo-1588776814546-1ffbb3f76ab8?w=400&q=80&auto=format&fit=crop",
        desc:  "Specialized disposal for non-residential entities."
      }
    ]
  },
  {
    category: "Other Commodities",
    subtitle: "Items that don't fit into the main categories above.",
    btn: { text: "Contact Us", href: "#" },
    items: [
      {
        label: "Other Commodities",
        icon:  "https://images.unsplash.com/photo-1530462943125-677cc511c87e?w=400&q=80&auto=format&fit=crop",
        desc:  "Contact DEM for guidance on materials not listed above."
      }
    ]
  }
];

/* =============================================
   HELPERS
   ============================================= */
function markLastRow(cards, cols) {
  // Add .last-row to cards in the final row so bottom border is removed
  const total     = cards.length;
  const lastRowStart = total - ((total % cols) || cols);
  cards.forEach((card, i) => {
    if (i >= lastRowStart) card.classList.add('last-row');
  });
}

/* =============================================
   BUILD DOM
   ============================================= */
function buildRecycleGrid() {
  const container = document.getElementById('recycle-content');
  if (!container) return;

  RECYCLE_DATA.forEach(section => {

    /* ---- Category wrapper ----------------------------------------- */
    const categoryEl = document.createElement('div');
    categoryEl.className = 'recycle-category';

    /* ---- Full-width banner ---------------------------------------- */
    const banner = document.createElement('div');
    banner.className = 'category-banner';

    const h2 = document.createElement('h2');
    h2.textContent = section.category;
    banner.appendChild(h2);

    if (section.subtitle) {
      const sub = document.createElement('p');
      sub.textContent = section.subtitle;
      banner.appendChild(sub);
    }

    if (section.btn) {
      const btn = document.createElement('a');
      btn.href      = section.btn.href;
      btn.className = 'banner-btn';
      btn.textContent = section.btn.text;
      banner.appendChild(btn);
    }

    categoryEl.appendChild(banner);

    /* ---- 4-column card grid --------------------------------------- */
    const grid = document.createElement('div');
    grid.className = 'recycle-grid';

    const cardEls = [];

    section.items.forEach(item => {
      const card = document.createElement('a');
      card.href      = item.href || '#';
      card.className = 'recycle-card';

      /* Icon / photo area */
      const iconWrap = document.createElement('div');
      iconWrap.className = 'card-icon-wrap';

      const img = document.createElement('img');
      img.src = item.icon;
      img.alt = item.label;
      iconWrap.appendChild(img);

      /* Text body */
      const body = document.createElement('div');
      body.className = 'card-body';

      const title = document.createElement('div');
      title.className   = 'card-title';
      title.textContent = item.label;

      const desc = document.createElement('div');
      desc.className   = 'card-desc';
      desc.textContent = item.desc;

      body.appendChild(title);
      body.appendChild(desc);

      card.appendChild(iconWrap);
      card.appendChild(body);
      grid.appendChild(card);
      cardEls.push(card);
    });

    // Mark last-row cards to strip their bottom border
    markLastRow(cardEls, 4);

    categoryEl.appendChild(grid);
    container.appendChild(categoryEl);
  });
}