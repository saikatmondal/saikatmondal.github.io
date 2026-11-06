/* =====================================================================
   SITE CONFIG  ·  Edit this file to change your identity, links and
   global settings. Every page reads from here.
   ===================================================================== */
window.SITE = {
  name: "Saikat Mondal",
  honorific: "Ph.D.",
  title: "Assistant Professor",
  department: "Department of Computer Science",
  university: "Lakehead University",
  universityUrl: "https://www.lakeheadu.ca",
  departmentUrl: "https://www.lakeheadu.ca/programs/departments/computer-science",
  location: "Thunder Bay, Ontario, Canada",
  photo: "img/saikatmondal.jpg",          // keep your existing photo here
  cv: "https://github.com/saikatmondal/Saikat-Mondal-Public-Files/raw/main/Saikat-Mondal-CV.pdf",
  lastUpdated: "2026-11-04",              // shown in the footer

  // Short tagline under the name on the home page
  tagline: "Human-Aligned Code Intelligence for trustworthy, explainable, and sustainable software engineering.",

  // Research group (change the name in one place if it evolves)
  lab: {
    name: "SoftGEM Lab",
    focus: "Human-Aligned Software Intelligence",
    blurb: "A new research group at Lakehead University building AI for software engineering that developers can understand, verify, and trust."
  },

  contact: {
    email: "saikat.mondal@lakeheadu.ca",
    altEmail: "saikatcsebd@gmail.com",
    office: "Room AT 4006",
    address: ["955 Oliver Road", "Thunder Bay, ON P7B 5E1", "Canada"],
    phone: "+1 (306) 229-5658",
    showPhone: false,                     // set to true to display the phone number
    mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-89.2725%2C48.4150%2C-89.2465%2C48.4275&layer=mapnik&marker=48.4212%2C-89.2595"
  },

  // Profile links. Remove a line to hide it. Icons are Font Awesome names.
  profiles: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=xSPJoDAAAAAJ&hl=en", icon: "fa-brands fa-google-scholar" },
    { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Saikat-Mondal-9",          icon: "fa-brands fa-researchgate" },
    { label: "LinkedIn",       url: "https://www.linkedin.com/in/saikatmondalbd",                    icon: "fa-brands fa-linkedin-in" },
    { label: "GitHub",         url: "https://github.com/saikatmondal",                               icon: "fa-brands fa-github" },
    { label: "Stack Overflow", url: "https://stackoverflow.com/users/9916335/saikat-mondal",         icon: "fa-brands fa-stack-overflow" },
    { label: "X",              url: "https://x.com/saikatcsebd",                                     icon: "fa-brands fa-x-twitter" },
    { label: "YouTube",        url: "https://www.youtube.com/channel/UCIFQ8OojvHuVtrMFZJwipMQ/featured", icon: "fa-brands fa-youtube" }
  ],

  // Prospective students
  recruiting: {
    open: true,                           // set to false to hide the "recruiting" call-outs
    headline: "Recruiting MSc students and undergraduate researchers",
    programUrl: "https://www.lakeheadu.ca/programs/graduate/programs/masters/computer-science"
  },

  // Land acknowledgement shown in the footer (set to "" to hide)
  landAcknowledgement: "Lakehead Thunder Bay is located on the traditional lands of Fort William First Nation, signatory to the Robinson-Superior Treaty of 1850. I am grateful to live, learn, and work here.",

  // Sidebar and display options
  newsInSidebar: 6,                       // how many news items the sidebar shows
  newBadgeDays: 60,                       // news newer than this gets a "New" badge
  showPendingGrants: false,               // show grants that are still under review
  showTribute: true,                      // the "In Loving Memory" card on the home page

  // Pages in the top navigation (order matters)
  nav: [
    { id: "home",         label: "Home",         href: "index.html" },
    { id: "research",     label: "Research",     href: "research.html" },
    { id: "publications", label: "Publications", href: "publications.html" },
    { id: "group",        label: "Group",        href: "group.html" },
    { id: "teaching",     label: "Teaching",     href: "teaching.html" },
    { id: "honours",      label: "Honours",      href: "honours.html" },
    { id: "service",      label: "Service",      href: "service.html" },
    { id: "news",         label: "News",         href: "news.html" },
    { id: "contact",      label: "Contact",      href: "contact.html" }
  ]
};
