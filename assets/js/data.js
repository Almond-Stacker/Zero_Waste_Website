/**
 * data.js
 * Central data store for events and news.
 * Swap these arrays out for fetch() API calls as needed.
 * Must be loaded BEFORE calendar.js and news.js.
 */

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
