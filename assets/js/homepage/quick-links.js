/**
 * quick-links.js
 * Builds the quick-link icon row entirely from QUICK_LINKS_DATA.
 * Icons are loaded from assets/images/ as <img> tags.
 *
 * To add, remove, or change a link, only edit QUICK_LINKS_DATA below.
 * No external data dependencies.
 */

/* =============================================
   DATA
   ============================================= */
const QUICK_LINKS_DATA = [
  {
    label: "FIND TRANSFER<br>STATIONS",
    icon:  "../assets/images/icon-transfer-stations.svg",
    href:  "#"
  },
  {
    label: "RECYCLING<br>GUIDE",
    icon:  "../assets/images/icon-recycling.svg",
    href:  "#"
  },
  {
    label: "ABANDONED<br>VEHICLES",
    icon:  "../assets/images/icon-abandoned-vehicles.svg",
    href:  "#"
  },
  {
    label: "CESSPOOLS IN<br>HAWAI'I",
    icon:  "../assets/images/icon-cesspools.svg",
    href:  "#"
  }
];

/* =============================================
   BUILD DOM
   ============================================= */
function buildQuickLinks() {
  const section = document.getElementById('quick-links');
  if (!section) return;

  QUICK_LINKS_DATA.forEach(item => {
    const a = document.createElement('a');
    a.href      = item.href;
    a.className = 'quick-link';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'ql-icon';

    const img = document.createElement('img');
    img.src   = item.icon;
    img.alt   = item.label.replace('<br>', ' ');
    img.className = 'ql-img';

    iconDiv.appendChild(img);

    const label = document.createElement('span');
    label.innerHTML = item.label;

    a.appendChild(iconDiv);
    a.appendChild(label);
    section.appendChild(a);
  });
}
