/* =============================================
   education.js
   Data + rendering for the Education & Outreach page.
   No frameworks — plain ES6.
   ============================================= */

/* -----------------------------------------------------------------------
   LOCAL CLASSROOM PROGRAMS
   Renders as photo cards with contact call-to-action
----------------------------------------------------------------------- */
const LOCAL_PROGRAMS = [
  {
    title: 'Art & Science of Recycling',
    badge: 'K–12',
    description:
      'Students discover the science behind recycling and create hands-on ' +
      'recycled-art projects. Aligns with Hawai\u02BBi state science standards and ' +
      'is available free to island schools.',
    contact: { label: 'Contact Recycle Hawai\u02BBi', email: 'info@recyclehawaii.org' },
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75',
    alt: 'Students working on a recycled-art project in a classroom',
  },
  {
    title: 'Recycle & Landfill Site Tours',
    badge: 'All Grades',
    description:
      'Behind-the-scenes tours of County recycling facilities and the ' +
      'Pu\u02BBu Anahulu Landfill for East and West Hawai\u02BBi. Students see where ' +
      'materials go after curbside pickup.',
    contact: { label: 'Contact Tanya Buckley', email: 'tanya.buckley@hawaiicounty.gov' },
    img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&q=75',
    alt: 'Aerial view of a materials recovery facility',
  },
  {
    title: 'School Presentations',
    badge: 'All Grades',
    description:
      'Classroom presentations covering Zero Waste, Reduce/Reuse/Recycle, ' +
      'Environmental Sustainability, Compost, Vermicomposting, and more — ' +
      'tailored to any grade level.',
    contact: { label: 'Contact Recycle Hawai\u02BBi', email: 'info@recyclehawaii.org' },
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=75',
    alt: 'Teacher presenting to an engaged classroom',
  },
  {
    title: 'Compost Workshops',
    badge: 'All Ages',
    description:
      'Students and teachers learn about backyard composting and ' +
      'vermicomposting — turning food scraps and yard trimmings into ' +
      'nutrient-rich soil. Sponsored by Recycle Hawai\u02BBi.',
    contact: { label: 'Contact Recycle Hawai\u02BBi', email: 'info@recyclehawaii.org' },
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=75',
    alt: 'Hands sifting through rich compost in a garden',
  },
  {
    title: 'Recycle-Bowl Competition',
    badge: 'Schools',
    description:
      'Keep America Beautiful\u2019s state and national competition for schools ' +
      'and communities to see who can recycle the most. Prizes available for ' +
      'winning classrooms and communities.',
    contact: null,
    href: 'https://www.kab.org/programs/recycle-bowl/',
    linkLabel: 'Learn More at KAB.org',
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=75',
    alt: 'Blue recycling bins lined up outside a school building',
  },
];

/* -----------------------------------------------------------------------
   ONLINE RESOURCES
   External links — renders as a compact linked list
----------------------------------------------------------------------- */
const ONLINE_RESOURCES = [
  { title: 'US EPA: Recycle City',                               href: 'https://archive.epa.gov/epawaste/education/web/html/index.html' },
  { title: 'EEK! Environmental Education for Kids',              href: 'https://dnr.wi.gov/org/caer/ce/eek/' },
  { title: 'Make-stuff.com: Recycle It!',                        href: 'https://www.make-stuff.com/recycling/' },
  { title: 'State of California: Kids\u2019 Stuff About Waste Reduction & Recycling', href: 'https://www.calrecycle.ca.gov/Education/Kids' },
  { title: 'US EPA: Students \u2013 Resources for Waste Education', href: 'https://www.epa.gov/students' },
  { title: 'National Crayon Recycle Program',                    href: 'https://www.crazycrayons.com/recycle_program.html' },
  { title: 'Terracycle Tools & Resources',                       href: 'https://www.terracycle.com/en-US/pages/school-resources' },
  { title: 'Green Ambassadors Program',                          href: 'https://www.greenambassadors.org/' },
  { title: 'Recycling Makes Sense (The Recycling Partnership)',  href: 'https://recyclingpartnership.org/' },
  { title: 'Skip the Bin, Turn Your Batteries In (National Waste & Recycling Foundation & Woodsy Owl)', href: 'https://www.nwra.org/' },
];

/* -----------------------------------------------------------------------
   WASTE REDUCTION RESOURCES
----------------------------------------------------------------------- */
const WASTE_REDUCTION = [
  { title: 'State of Hawai\u02BBi: Educator\u2019s Guide',                                href: 'https://health.hawaii.gov/shwmanagement/files/2013/05/EducatorsGuide.pdf' },
  { title: 'US EPA: Educating Youth About Wasted Food',                          href: 'https://www.epa.gov/sustainable-management-food/educating-youth-about-wasted-food' },
  { title: 'CalRecycle: Waste Reduction \u2013 School Diversion Guide',           href: 'https://www.calrecycle.ca.gov/schools' },
  { title: 'CalRecycle: A District-Wide Approach to Recycling',                  href: 'https://www.calrecycle.ca.gov/schools' },
  { title: 'CalRecycle: California Education & Environment Initiative',           href: 'https://www.calrecycle.ca.gov/schools' },
  { title: 'CalRecycle Publications',                                            href: 'https://www.calrecycle.ca.gov/Publications' },
  { title: 'CalRecycle Waste Stream Calculator',                                 href: 'https://www.calrecycle.ca.gov/swfacilities/directory/calc/' },
  { title: 'Food Waste Estimator (Recycling Works MA)',                          href: 'https://recyclingsmartma.org/' },
];

/* -----------------------------------------------------------------------
   FUNDING RESOURCES
----------------------------------------------------------------------- */
const FUNDING = [
  { title: 'Captain Planet Foundation',                     href: 'https://captainplanetfoundation.org/grants/' },
  { title: 'National Fish & Wildlife Foundation Grants',    href: 'https://www.nfwf.org/grants' },
  { title: 'US EPA: Environmental Education Grants',        href: 'https://www.epa.gov/education/environmental-education-ee-grants' },
  { title: 'US EPA: Region 9 Grants',                       href: 'https://www.epa.gov/grants/epa-region-9-grants' },
  { title: 'Grants.gov',                                    href: 'https://www.grants.gov/' },
  { title: 'KidsGardening: Grants',                         href: 'https://kidsgardening.org/grants/' },
  { title: 'Alexander & Baldwin Foundation \u2013 A&B Kokua Giving', href: 'https://www.alexanderbaldwin.com/community/kokua-giving' },
  { title: 'Matson Foundation \u2013 Ka Ipu \u02BBaina Program',      href: 'https://www.matson.com/corporate/matson-foundation.html' },
  { title: 'Atherton Family Foundation',                    href: 'https://www.athertonff.org/' },
  { title: 'Consuelo Foundation',                           href: 'https://www.consuelofoundation.org/' },
  { title: 'Hawai\u02BBi Community Foundation',              href: 'https://www.hawaiicommunityfoundation.org/' },
  { title: 'James and Abigail Campbell Foundation',         href: 'https://www.campbellfoundation.net/' },
  { title: 'Cooke Foundation, Ltd.',                        href: 'https://cookefdn.org/' },
  { title: 'Harold K.L. Castle Foundation',                 href: 'https://www.castlefoundation.org/' },
  { title: 'Hawai\u02BBi People\u2019s Fund',                href: 'https://www.hawaiipeoplesfund.org/' },
  { title: 'Hawaiian Electric Industries (HEI) Charitable Foundation', href: 'https://www.hei.com/our-company/community/charitable-foundation' },
  { title: 'Bishop Museum',                                 href: 'https://www.bishopmuseum.org/' },
  { title: 'Melinda Gray Ardia Foundation',                 href: '#' },
  { title: 'Kokua Foundation Hawai\u02BBi',                  href: 'https://www.kokuahawaii.org/' },
  { title: 'Change Happens Foundation',                     href: '#' },
];

/* -----------------------------------------------------------------------
   RENDER — Local Program Cards
----------------------------------------------------------------------- */
function buildProgramGrid() {
  const container = document.getElementById('programs-grid');
  if (!container) return;

  container.innerHTML = LOCAL_PROGRAMS.map((p) => {
    const ctaHTML = p.contact
      ? `<a class="program-contact" href="mailto:${p.contact.email}">
           <span class="program-contact-icon" aria-hidden="true">✉</span>
           ${p.contact.label}
         </a>`
      : `<a class="program-contact external" href="${p.href}" target="_blank" rel="noopener">
           <span class="program-contact-icon" aria-hidden="true">↗</span>
           ${p.linkLabel}
         </a>`;
    return `
      <div class="program-card">
        <div class="program-card-img">
          <img src="${p.img}" alt="${p.alt}" loading="lazy" />
          <span class="program-badge">${p.badge}</span>
        </div>
        <div class="program-body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          ${ctaHTML}
        </div>
      </div>`;
  }).join('');
}

/* -----------------------------------------------------------------------
   RENDER — Generic Link List (Online, Waste Reduction)
----------------------------------------------------------------------- */
function buildLinkList(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = data.map((r) => `
    <a class="edu-link-item" href="${r.href}" target="_blank" rel="noopener">
      <span class="edu-link-arrow" aria-hidden="true">↗</span>
      <span>${r.title}</span>
    </a>`).join('');
}

/* -----------------------------------------------------------------------
   RENDER — Funding Grid (pill style, 3-col)
----------------------------------------------------------------------- */
function buildFundingGrid() {
  const container = document.getElementById('funding-grid');
  if (!container) return;

  container.innerHTML = FUNDING.map((f) => `
    <a class="funding-pill" href="${f.href}" target="_blank" rel="noopener">
      <span class="funding-pill-dot" aria-hidden="true"></span>
      ${f.title}
    </a>`).join('');
}

/* -----------------------------------------------------------------------
   INIT
----------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  buildProgramGrid();
  buildLinkList('online-list',    ONLINE_RESOURCES);
  buildLinkList('reduction-list', WASTE_REDUCTION);
  buildFundingGrid();
});
