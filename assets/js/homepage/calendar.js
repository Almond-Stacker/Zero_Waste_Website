/**
 * calendar.js
 * Renders the monthly calendar, highlights event days,
 * handles day selection, and populates the event sidebar.
 *
 * Depends on: data.js  (EVENTS_DATA)
 * Must be loaded AFTER data.js, BEFORE main.js calls initCalendar().
 */

/* --- Constants ------------------------------------------------------ */
const MONTHS = [
  "JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE",
  "JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"
];

const SHORT_MONTHS = [
  "JAN","FEB","MAR","APR","MAY","JUN",
  "JUL","AUG","SEP","OCT","NOV","DEC"
];

/* --- State ---------------------------------------------------------- */
let currentYear  = new Date().getFullYear();
let currentMonth = new Date().getMonth();  // 0-indexed
let selectedDate = null;                   // "YYYY-MM-DD" string

/* --- Helpers -------------------------------------------------------- */
function toDateStr(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function eventsOnDate(dateStr) {
  return EVENTS_DATA.filter(e => e.date === dateStr);
}

/* --- Calendar render ----------------------------------------------- */
function renderCalendar() {
  const titleEl = document.getElementById('cal-title');
  const daysEl  = document.getElementById('cal-days');

  titleEl.textContent = `${MONTHS[currentMonth]} ${currentYear}`;
  daysEl.innerHTML    = '';

  const today    = new Date();
  const todayStr = toDateStr(today.getFullYear(), today.getMonth(), today.getDate());

  const firstDay    = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrev  = new Date(currentYear, currentMonth, 0).getDate();

  const cells = [];

  // Leading cells (previous month)
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, type: 'prev' });
  }

  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, type: 'current' });
  }

  // Trailing cells (next month)
  const remainder = cells.length % 7;
  if (remainder !== 0) {
    for (let d = 1; d <= 7 - remainder; d++) {
      cells.push({ day: d, type: 'next' });
    }
  }

  cells.forEach(cell => {
    const el = document.createElement('div');
    el.classList.add('cal-day');

    if (cell.type === 'current') {
      const cellDateStr = toDateStr(currentYear, currentMonth, cell.day);
      const isToday     = cellDateStr === todayStr;
      const isSelected  = cellDateStr === selectedDate;
      const hasEvents   = eventsOnDate(cellDateStr).length > 0;

      if (isToday)               el.classList.add('today');
      if (isSelected && !isToday) el.classList.add('selected');
      if (hasEvents)             el.classList.add('has-event');

      el.addEventListener('click', () => handleDayClick(cellDateStr));
    } else {
      el.classList.add('other-month');
    }

    el.textContent = cell.day;
    daysEl.appendChild(el);
  });

  renderEventSidebar();
}

/* --- Day click ------------------------------------------------------ */
function handleDayClick(dateStr) {
  selectedDate = (selectedDate === dateStr) ? null : dateStr;
  renderCalendar();
}

/* --- Event sidebar -------------------------------------------------- */
function renderEventSidebar() {
  const listEl = document.getElementById('event-list');
  listEl.innerHTML = '';

  let eventsToShow = [];

  if (selectedDate) {
    eventsToShow = eventsOnDate(selectedDate);
  } else {
    const todayStr = toDateStr(
      new Date().getFullYear(), new Date().getMonth(), new Date().getDate()
    );
    eventsToShow = EVENTS_DATA.filter(e => e.date >= todayStr).slice(0, 3);
  }

  if (eventsToShow.length === 0) {
    const msg = document.createElement('p');
    msg.className   = 'no-events';
    msg.textContent = selectedDate ? 'No events on this date.' : 'No upcoming events.';
    listEl.appendChild(msg);
    return;
  }

  eventsToShow.forEach(event => {
    const d        = new Date(event.date + 'T12:00:00');
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

/* --- Month navigation ---------------------------------------------- */
function initCalendar() {
  const now    = new Date();
  currentYear  = now.getFullYear();
  currentMonth = now.getMonth();
  selectedDate = null;

  renderCalendar();

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
}
