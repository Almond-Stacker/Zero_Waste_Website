/**
 * Hawaii County DEM – Calendar & Events JS
 * Fully auto-loading: renders the calendar for today's month,
 * highlights event days with dots, and shows event details in the sidebar.
 */

/* =============================================
   DATA — swap these arrays for a real API call
   ============================================= */

const EVENTS_DATA = [
  {
    date: "2026-03-07",
    title: "Household Hazardous Waste Drop-Off",
    time: "08:00 AM – 12:00 PM",
    location: "Hilo Transfer Station"
  },
  {
    date: "2026-03-08",
    title: "Environmental Commission Meeting",
    time: "09:00 AM – 12:00 PM",
    location: "Aupuni Center, Conference Room A"
  },
  {
    date: "2026-03-17",
    title: "Coastal Cleanup Volunteer Day",
    time: "07:00 AM – 11:00 AM",
    location: "Carlsmith Beach Park"
  },
  {
    date: "2026-03-21",
    title: "Solid Waste Advisory Committee",
    time: "02:00 PM – 04:00 PM",
    location: "Laniakea Conference Room"
  },
  {
    date: "2026-03-25",
    title: "Environmental Management Commission Meeting",
    time: "09:00 AM – 12:00 PM",
    location: "Aupuni Center"
  },
  {
    date: "2026-04-03",
    title: "Earth Month Community Forum",
    time: "05:30 PM – 07:30 PM",
    location: "UH Hilo Campus"
  },
  {
    date: "2026-04-10",
    title: "Green Business Recognition Ceremony",
    time: "10:00 AM – 12:00 PM",
    location: "Hilo Yacht Club"
  },
  {
    date: "2026-04-18",
    title: "E-Waste Recycling Drive",
    time: "08:00 AM – 01:00 PM",
    location: "Kealakehe High School"
  },
  {
    date: "2026-04-22",
    title: "Earth Day Tree Planting",
    time: "07:00 AM – 10:00 AM",
    location: "Wailoa River State Park"
  },
  {
    date: "2026-05-06",
    title: "Environmental Commission Meeting",
    time: "09:00 AM – 12:00 PM",
    location: "Aupuni Center"
  }
];

const NEWS_DATA = [
  {
    tag: "Recycling",
    title: "New Curbside Organics Collection Pilot Launches in Hilo",
    excerpt: "The Department of Environmental Management begins a 6-month pilot program for organics diversion in select Hilo neighborhoods.",
    date: "March 18, 2026"
  },
  {
    tag: "Waste Reduction",
    title: "County Achieves 56% Diversion Rate in 2025",
    excerpt: "Hawai'i County surpassed its waste diversion target for the third consecutive year, driven by increased composting participation.",
    date: "March 10, 2026"
  },
  {
    tag: "Water Quality",
    title: "Annual Stormwater Quality Report Now Available",
    excerpt: "The 2025 Annual Report on stormwater quality across county watersheds is now posted on the DEM website.",
    date: "February 28, 2026"
  },
  {
    tag: "Permits",
    title: "Updated Environmental Review Guidelines Released",
    excerpt: "DEM has published revised guidelines for Chapter 343 environmental reviews to streamline the permit application process.",
    date: "February 14, 2026"
  },
  {
    tag: "Community",
    title: "Call for Volunteers: Earth Month Coastal Cleanup",
    excerpt: "Join DEM and community partners for a series of coastal cleanups throughout April in celebration of Earth Month.",
    date: "February 5, 2026"
  },
  {
    tag: "Landfill",
    title: "Pu'uanahulu Landfill Hours Extended on Saturdays",
    excerpt: "Beginning April 1, 2026, the Pu'uanahulu Sanitary Landfill will extend Saturday hours to better serve West Hawai'i residents.",
    date: "January 30, 2026"
  }
];

/* =============================================
   STATE
   ============================================= */
let currentYear  = new Date().getFullYear();
let currentMonth = new Date().getMonth();   // 0-indexed
let selectedDate = null;                    // "YYYY-MM-DD" string

const MONTHS = [
  "JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE",
  "JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"
];

const SHORT_MONTHS = [
  "JAN","FEB","MAR","APR","MAY","JUN",
  "JUL","AUG","SEP","OCT","NOV","DEC"
];

/* =============================================
   HELPERS
   ============================================= */
function toDateStr(year, month, day) {
  // Returns "YYYY-MM-DD"
  return `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}

function eventsOnDate(dateStr) {
  return EVENTS_DATA.filter(e => e.date === dateStr);
}

function eventsInMonth(year, month) {
  return EVENTS_DATA.filter(e => {
    const d = new Date(e.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });
}

/* =============================================
   CALENDAR RENDER
   ============================================= */
function renderCalendar() {
  const titleEl  = document.getElementById('cal-title');
  const daysEl   = document.getElementById('cal-days');

  titleEl.textContent = `${MONTHS[currentMonth]} ${currentYear}`;
  daysEl.innerHTML    = '';

  const today     = new Date();
  const todayStr  = toDateStr(today.getFullYear(), today.getMonth(), today.getDate());

  // First day of this month (0=Sun … 6=Sat)
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  // Days in this month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  // Days in previous month
  const daysInPrev  = new Date(currentYear, currentMonth, 0).getDate();

  // Build a flat array of cell objects
  const cells = [];

  // Leading cells (previous month)
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, type: 'prev' });
  }

  // Current month cells
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, type: 'current' });
  }

  // Trailing cells (next month) — fill to complete the last row
  const remainder = cells.length % 7;
  if (remainder !== 0) {
    for (let d = 1; d <= 7 - remainder; d++) {
      cells.push({ day: d, type: 'next' });
    }
  }

  // Render cells
  cells.forEach(cell => {
    const el = document.createElement('div');
    el.classList.add('cal-day');

    let cellDateStr = null;

    if (cell.type === 'current') {
      cellDateStr = toDateStr(currentYear, currentMonth, cell.day);
      const isToday    = cellDateStr === todayStr;
      const isSelected = cellDateStr === selectedDate;
      const hasEvents  = eventsOnDate(cellDateStr).length > 0;

      if (isToday)    el.classList.add('today');
      if (isSelected && !isToday) el.classList.add('selected');
      if (hasEvents)  el.classList.add('has-event');

      el.addEventListener('click', () => handleDayClick(cellDateStr));
    } else {
      el.classList.add('other-month');
    }

    el.textContent = cell.day;

    // For today, wrap in a circle (handled via CSS flex trick)
    daysEl.appendChild(el);
  });

  // Update sidebar to reflect the selected date (or default to upcoming)
  renderEventSidebar();
}

/* =============================================
   DAY CLICK
   ============================================= */
function handleDayClick(dateStr) {
  selectedDate = (selectedDate === dateStr) ? null : dateStr;
  renderCalendar();
}

/* =============================================
   EVENT SIDEBAR
   ============================================= */
function renderEventSidebar() {
  const listEl = document.getElementById('event-list');
  listEl.innerHTML = '';

  let eventsToShow = [];

  if (selectedDate) {
    // Show events for the selected day
    eventsToShow = eventsOnDate(selectedDate);
  } else {
    // Default: show upcoming events from today onward (max 3)
    const todayStr = toDateStr(
      new Date().getFullYear(), new Date().getMonth(), new Date().getDate()
    );
    eventsToShow = EVENTS_DATA
      .filter(e => e.date >= todayStr)
      .slice(0, 3);
  }

  if (eventsToShow.length === 0) {
    const msg = document.createElement('p');
    msg.className = 'no-events';
    msg.textContent = selectedDate
      ? 'No events on this date.'
      : 'No upcoming events.';
    listEl.appendChild(msg);
    return;
  }

  eventsToShow.forEach(event => {
    const d = new Date(event.date + 'T12:00:00'); // avoid timezone offset issues
    const monthStr = SHORT_MONTHS[d.getMonth()];
    const dayNum   = d.getDate();

    const item = document.createElement('div');
    item.className = 'event-item';
    item.innerHTML = `
      <div class="event-badge">
        <span class="month">${monthStr}</span>
        <span class="day">${dayNum}</span>
      </div>
      <div class="event-info">
        <h3>${event.title}</h3>
        <span class="event-time">${event.time}</span>
      </div>
    `;
    listEl.appendChild(item);
  });
}

/* =============================================
   NEWS RENDER
   ============================================= */
function renderNews() {
  const grid = document.getElementById('news-grid');
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

/* =============================================
   TAB SWITCHING
   ============================================= */
function switchTab(tab) {
  const tabEvents  = document.getElementById('tab-events');
  const tabNews    = document.getElementById('tab-news');
  const panelEv    = document.getElementById('panel-events');
  const panelNews  = document.getElementById('panel-news');

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
    // Lazy-render news only when the tab is first opened
    if (document.getElementById('news-grid').children.length === 0) {
      renderNews();
    }
  }
}

/* =============================================
   NAVIGATION BUTTONS
   ============================================= */
document.getElementById('prev-month').addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  selectedDate = null;
  renderCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  selectedDate = null;
  renderCalendar();
});

/* =============================================
   HERO SLIDESHOW
   ============================================= */
const SLIDE_CAPTIONS = [
  {
    title: "Hilo Wastewater Treatment Plant Upgrades Begin",
    text:  "The groundbreaking ceremony for the $337 million rehabilitation and replacement project took place on July 31."
  },
  {
    title: "Coastal Cleanup Volunteer Day – March 17",
    text:  "Join DEM and community partners for a cleanup at Carlsmith Beach Park starting at 7:00 AM."
  },
  {
    title: "New Curbside Organics Collection Pilot Launches",
    text:  "A 6-month organics diversion pilot program begins in select Hilo neighborhoods this spring."
  }
];

let currentSlide = 0;
let slideTimer   = null;

function goToSlide(index) {
  const slides   = document.querySelectorAll('.slide');
  const dots     = document.querySelectorAll('.dot');
  const titleEl  = document.getElementById('caption-title');
  const textEl   = document.getElementById('caption-text');

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');

  // Update caption with a quick fade
  const captionInner = document.querySelector('.caption-inner');
  captionInner.style.opacity = '0';
  setTimeout(() => {
    titleEl.textContent = SLIDE_CAPTIONS[currentSlide].title;
    textEl.textContent  = SLIDE_CAPTIONS[currentSlide].text;
    captionInner.style.transition = 'opacity 0.4s ease';
    captionInner.style.opacity = '1';
  }, 250);
}

function startSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function initSlideshow() {
  const prevBtn = document.getElementById('slide-prev');
  const nextBtn = document.getElementById('slide-next');
  const dots    = document.querySelectorAll('.dot');

  if (!prevBtn) return; // Guard if elements not present

  prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); startSlideTimer(); });
  nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); startSlideTimer(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goToSlide(i); startSlideTimer(); });
  });

  startSlideTimer();
}

/* =============================================
   INIT — run everything on page load
   ============================================= */
(function init() {
  // Start the calendar on today's actual month
  const now    = new Date();
  currentYear  = now.getFullYear();
  currentMonth = now.getMonth();

  // Select today by default so the sidebar shows upcoming events
  selectedDate = null;

  renderCalendar();
  initSlideshow();
})();
