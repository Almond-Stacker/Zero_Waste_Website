/**
 * search-index.js
 * Static search index for all pages on the County of Hawai'i DEM website.
 * To add a new page: append an entry to SEARCH_INDEX.
 * Fields:
 *   title    — page heading shown in results
 *   url      — relative path from /pages/
 *   section  — nav category label
 *   desc     — short description shown in result snippet
 *   keywords — space-separated words boosted in scoring
 */

const SEARCH_INDEX = [

  /* ── HOME ─────────────────────────────────────────────── */
  {
    title:    'Home',
    url:      'homepage.html',
    section:  'Home',
    desc:     'County of Hawai\'i Department of Environmental Management. Zero Waste programs, events, recycling news, and community updates for Hawai\'i Island.',
    keywords: 'home dem department environmental management hawai\'i county zero waste'
  },

  /* ── RECYCLE & DISPOSE ────────────────────────────────── */
  {
    title:    'Where to Recycle',
    url:      'recycle.html',
    section:  'Recycle & Dispose',
    desc:     'Find drop-off locations, redemption centers, and recycling programs for materials across Hawai\'i Island. Includes what can and cannot be recycled.',
    keywords: 'recycle recycling where drop-off materials bottles cans paper plastic glass cardboard'
  },
  {
    title:    'HI-5 Redemption',
    url:      'hi5.html',
    section:  'Recycle & Dispose',
    desc:     'Redeem your 5-cent deposit on qualified beverage containers at certified HI-5 redemption centers across Hawai\'i Island.',
    keywords: 'hi5 hi-5 bottle return redemption deposit beverage containers cans bottles refund'
  },
  {
    title:    'Electronics & Office Supplies Recycling',
    url:      'electronics.html',
    section:  'Recycle & Dispose',
    desc:     'Recycle computers, monitors, TVs, printers, and office electronics. E-waste drop-off locations and the State electronic device take-back program.',
    keywords: 'electronics ewaste e-waste computer monitor tv television laptop printer cartridge office supplies recycling'
  },
  {
    title:    'Drop-Off Recycling',
    url:      'dropoff.html',
    section:  'Recycle & Dispose',
    desc:     'Curbside and drop-off recycling for paper, plastic, glass, and metal. Find your nearest County Recycling & Transfer Station and accepted materials.',
    keywords: 'drop-off dropoff recycling curbside paper plastic glass metal cardboard bins transfer station'
  },
  {
    title:    'Greenwaste & Food Recycling',
    url:      'greenwaste.html',
    section:  'Recycle & Dispose',
    desc:     'Compost your yard trimmings and food scraps. Free greenwaste drop-off and mulch pickup at County organics facilities.',
    keywords: 'greenwaste food recycling compost composting yard trimmings mulch organic food scraps garden waste'
  },
  {
    title:    'Metal & Appliances',
    url:      'metal-appliances.html',
    section:  'Recycle & Dispose',
    desc:     'Drop off scrap metal, refrigerators, washers, dryers, and other large appliances at County transfer stations.',
    keywords: 'metal appliances scrap refrigerator washer dryer white goods large items bulky pickup'
  },
  {
    title:    'Metals, Appliances & Automobiles',
    url:      'metals.html',
    section:  'Recycle & Dispose',
    desc:     'Dispose of scrap metal, junk vehicles, and large appliances. Information on abandoned vehicles and automotive recycling.',
    keywords: 'metals automobiles cars vehicles scrap junk abandoned appliances recycling'
  },
  {
    title:    'Specialty Items',
    url:      'specialty.html',
    section:  'Recycle & Dispose',
    desc:     'Disposal options for specialty items that don\'t fit regular recycling — mattresses, tires, medical sharps, carpet, and more.',
    keywords: 'specialty items mattress tires sharps carpet medical needles unusual special disposal'
  },

  /* ── HAZARDOUS WASTE ──────────────────────────────────── */
  {
    title:    'Household Hazardous Waste (HHW)',
    url:      'hhw.html',
    section:  'Hazardous Waste',
    desc:     'Free collection events for paints, pesticides, batteries, cleaners, and other hazardous household materials. Schedule, accepted items, and safety rules.',
    keywords: 'household hazardous waste hhw paint pesticide battery batteries cleaner chemicals collection event free disposal'
  },
  {
    title:    'Automotive & Chemical Waste',
    url:      'automotive-chemicals.html',
    section:  'Hazardous Waste',
    desc:     'Recycle used motor oil, antifreeze, brake fluid, and automotive chemicals. Drop-off sites for DIY oil changes and HHW event acceptance.',
    keywords: 'automotive motor oil used oil antifreeze brake fluid chemicals cars vehicles diy recycling drop-off'
  },
  {
    title:    'Business & Farm Hazardous Waste',
    url:      'business-farm.html',
    section:  'Hazardous Waste',
    desc:     'Commercial hazardous waste disposal requirements for businesses, farms, and agencies. State DOH resources and pesticide disposal program.',
    keywords: 'business farm agency commercial hazardous waste disposal state doh pesticide compliance rules'
  },

  /* ── REDUCE & REUSE ───────────────────────────────────── */
  {
    title:    'Reduce Your Waste',
    url:      'reduce.html',
    section:  'Reduce & Reuse',
    desc:     'Practical tips for buying less, wasting less, and reducing your environmental footprint. The Zero Waste hierarchy and Hawai\'i County ordinances.',
    keywords: 'reduce waste tips buying less packaging single use zero waste hierarchy ordinance'
  },
  {
    title:    'Reuse Centers & Directory',
    url:      'reuse.html',
    section:  'Reduce & Reuse',
    desc:     'Donate and pick up free reusable goods at the Hilo and Kona Reuse Centers. Hours, accepted items, and reuse resources.',
    keywords: 'reuse centers hilo kona donate free goods thrift second hand furniture clothing reuse'
  },
  {
    title:    'Plastic Bag Reduction Ordinance',
    url:      'plastic-bag.html',
    section:  'Reduce & Reuse',
    desc:     'Hawai\'i County\'s plastic bag ban — the first in the nation. What\'s prohibited, permitted alternatives, and how to report violations.',
    keywords: 'plastic bag ordinance ban single use checkout bags reusable alternatives ordinance law violation'
  },
  {
    title:    'Polystyrene Foam Ordinance',
    url:      'polystyrene.html',
    section:  'Reduce & Reuse',
    desc:     'County ban on expanded polystyrene foam (Styrofoam) food service containers. Applies to restaurants, food trucks, and caterers.',
    keywords: 'polystyrene styrofoam foam ban ordinance food service containers restaurants takeout compostable'
  },

  /* ── FACILITIES & SERVICES ────────────────────────────── */
  {
    title:    'Solid Waste Facilities',
    url:      'facilities.html',
    section:  'Facilities & Services',
    desc:     'Locations, hours, and accepted materials for all 21 County Recycling & Transfer Stations, organics facilities, and the landfill across Hawai\'i Island.',
    keywords: 'facilities transfer stations recycling locations hours landfill organics drop-off sites map hawai\'i island'
  },
  {
    title:    'Mālama Map',
    url:      'malama-map.html',
    section:  'Facilities & Services',
    desc:     'Interactive map to find your nearest recycling drop-off, transfer station, HHW event, reuse center, or free mulch pickup location.',
    keywords: 'malama map interactive find location recycling transfer station mulch reuse hazardous waste map'
  },
  {
    title:    'Emergency & Disaster Prep',
    url:      'emergency-prep.html',
    section:  'Facilities & Services',
    desc:     'Waste management guidance for emergencies, hurricanes, and natural disasters on Hawai\'i Island. Debris disposal and emergency contacts.',
    keywords: 'emergency disaster prep hurricane debris waste disposal natural disaster lava flood preparation'
  },

  /* ── REPORT & GET INVOLVED ────────────────────────────── */
  {
    title:    'Report Illegal Dumping',
    url:      'illegal-dumping.html',
    section:  'Report & Get Involved',
    desc:     'Report unauthorized waste dumping on Hawai\'i Island. Online form, hotline number, and what to do when you see illegal dumping.',
    keywords: 'illegal dumping report unauthorized waste litter hotline form dumping complaint environment'
  },
  {
    title:    'Community Clean-Ups',
    url:      'cleanups.html',
    section:  'Report & Get Involved',
    desc:     'Volunteer for beach and roadside cleanups. Ka Ipu \'Āina grant program for nonprofits. Get involved in keeping Hawai\'i Island clean.',
    keywords: 'cleanup cleanups volunteer beach roadside ka ipu aina community nonprofit grant get involved'
  },
  {
    title:    'School Education & Outreach',
    url:      'education.html',
    section:  'Report & Get Involved',
    desc:     'Zero Waste school education programs, classroom presentations, and curriculum resources from the County DEM.',
    keywords: 'education school outreach curriculum kids students classroom presentation zero waste learning'
  },
  {
    title:    'Events Calendar',
    url:      'events.html',
    section:  'Report & Get Involved',
    desc:     'Upcoming HHW collection events, community cleanups, recycling drives, and environmental programs across Hawai\'i Island.',
    keywords: 'events calendar schedule upcoming hhw cleanup recycling drive community programs dates'
  },

  /* ── ABOUT ────────────────────────────────────────────── */
  {
    title:    'About Zero Waste',
    url:      'zero-waste.html',
    section:  'About',
    desc:     'The County of Hawai\'i\'s Zero Waste mission, the 3 R\'s hierarchy, island initiatives, and what residents and businesses can do to reduce waste.',
    keywords: 'zero waste about mission reduce reuse recycle hierarchy island initiative malama aina culture'
  },
  {
    title:    'Regulations & Publications',
    url:      'regulations.html',
    section:  'About',
    desc:     'County Code Chapter 20, the Zero Waste Implementation Plan, solid waste laws, ordinance documents, and recycling publications.',
    keywords: 'regulations publications county code chapter 20 laws rules plan documents ordinance solid waste'
  },
  {
    title:    'Press Releases',
    url:      'press.html',
    section:  'About',
    desc:     'Official news and announcements from the County of Hawai\'i Department of Environmental Management.',
    keywords: 'press releases news announcements media updates dem department environmental management'
  },
  {
    title:    'Contact Us',
    url:      'contact.html',
    section:  'About',
    desc:     'Phone numbers, addresses, and email contacts for the County DEM offices in Hilo and Kona. Reuse center hours and topic-specific contacts.',
    keywords: 'contact us phone address email hilo kona office hours dem department reach help'
  }

];
