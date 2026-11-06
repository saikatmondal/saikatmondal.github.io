/* =====================================================================
   TEACHING  ·  Add new terms at the top of "courses".
   ===================================================================== */
window.TEACHING = {
  philosophy: [
    "My teaching bridges industry and academia. Before academia I was a software engineer in the Advanced R&D division at Samsung R&D Institute Bangladesh, and that experience still shapes how I teach: authentic problems, real tools, and teams that ship working software.",
    "I aim for classrooms where every student feels valued, capable, and positioned to succeed. I rely on hands-on labs, project-based learning, structured Q&A, peer learning, and assessments that reward critical thinking. Since 2012 I have supervised more than 100 software development projects."
  ],

  pillars: [
    { icon: "fa-solid fa-industry",          title: "Industry-relevant",  text: "Current practice, from Agile and CI to AI-assisted and agentic engineering." },
    { icon: "fa-solid fa-people-group",      title: "Inclusive",          text: "Accessible materials and a classroom where every background belongs." },
    { icon: "fa-solid fa-diagram-project",   title: "Project-based",      text: "Teams take a system from requirements to a working, evolving product." },
    { icon: "fa-solid fa-hand-holding-heart",title: "Responsible",        text: "Attribution, accountability, and the responsible use of AI are taught explicitly." }
  ],

  // Courses designed or redesigned
  curriculum: [
    {
      code: "COMP 3415", title: "Software Engineering", where: "Lakehead University", term: "Fall 2026", role: "Redesign",
      text: "A third-year course that combines foundational software engineering with contemporary AI-assisted and agentic practice. Students plan, design, build, test, and evolve software through Agile processes, TDD and continuous integration, clean code and refactoring, UML and design patterns, and modern cloud-native architectures. Dedicated modules cover AI across the lifecycle, agentic workflows with human oversight, and professional responsibility. A sprint-based team project takes students from requirements to a working system."
    },
    {
      code: "COMP 4310", title: "Web Health Informatics", where: "Lakehead University", term: "Fall 2026", role: "Redesign",
      text: "A fourth-year course on how computing supports healthcare in Canada: health information systems, usability and user-centred design, electronic health records and Canadian digital health initiatives, virtual care, health analytics and AI, and the privacy and security of health information. A milestone-based project takes students from problem definition to a working prototype."
    },
    {
      code: "CMPT 470/816", title: "Advanced Software Engineering", where: "University of Saskatchewan", term: "Winter 2025", role: "Redesign",
      text: "A combined senior undergraduate and graduate course at the intersection of software engineering and AI: source transformation, mining software repositories, AI for SE and SE for AI, prompt engineering, trustworthy and responsible AI, low-code and cloud-native development, automated testing and program repair, and design patterns."
    }
  ],

  courses: [
    { group: "Lakehead University", items: [
      { term: "Fall 2026", code: "COMP 3415", title: "Software Engineering", role: "Instructor", note: "Thunder Bay · 41 students" },
      { term: "Fall 2026", code: "COMP 3415", title: "Software Engineering", role: "Instructor", note: "Barrie STEM Hub · 34 students" },
      { term: "Fall 2026", code: "COMP 4310", title: "Web Health Informatics", role: "Instructor", note: "21 students" }
    ]},
    { group: "University of Saskatchewan", items: [
      { term: "Winter 2025", code: "CMPT 470/816", title: "Advanced Software Engineering", role: "Co-Instructor and Lead Coordinator", note: "74 students" },
      { term: "Winter 2022", code: "CMPT 370", title: "Intermediate Software Engineering", role: "Project Mentor and Evaluator", note: "16 students" }
    ]},
    { group: "Khulna University (2012–2018)", items: [
      { code: "CSE 4221", title: "Pattern Recognition", role: "Instructor" },
      { code: "CSE 4205/4206", title: "Artificial Intelligence and Laboratory", role: "Instructor" },
      { code: "CSE 4105/4106", title: "Compiler Design and Laboratory", role: "Instructor" },
      { code: "CSE 3200", title: "Web Programming Project", role: "Instructor" },
      { code: "CSE 2201", title: "Algorithms", role: "Instructor" },
      { code: "CSE 2200", title: "Software Development Project", role: "Instructor" },
      { code: "CSE 2151", title: "Data Structures and Algorithms", role: "Instructor" },
      { code: "CSE 1201", title: "Object-Oriented Programming", role: "Instructor" },
      { code: "CSE 1151", title: "Computer Programming", role: "Instructor" },
      { code: "CSE 1103", title: "Structured Programming", role: "Instructor" }
    ]},
    { group: "North Western University, Bangladesh (Adjunct)", items: [
      { code: "CSE 4301/4302", title: "Computer Graphics and Pattern Recognition and Laboratory", role: "Adjunct Instructor" },
      { code: "CSE 3207/3208", title: "Compiler Design and Laboratory", role: "Adjunct Instructor" },
      { code: "Sessional", title: "Software Development Project", role: "Adjunct Instructor" }
    ]}
  ],

  training: [
    "Teaching Pedagogy (Induction, Modules I and II), Khulna University",
    "Teaching Methodology, Research Cell, Khulna University",
    "Research Methodology, Higher Education Quality Enhancement Project",
    "Mental Health First Aid, Mental Health Commission of Canada"
  ]
};
