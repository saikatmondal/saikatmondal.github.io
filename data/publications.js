/* =====================================================================
   PUBLICATIONS  ·  Newest first. Numbers [37], [36]... are computed
   automatically, so just add a new entry at the TOP of PUBLISHED.

   type   : journal | conference | workshop | short   (short = NIER, RR,
            Mining Challenge and other short-paper tracks)
   short  : the badge text, e.g. "ICSE 2026"
   themes : ids from data/research.js, used to group papers by theme
   links  : any of pdf, doi, preprint, artifact, slides, video, code
   awards : gold ribbons      notes : grey tags
   selected: true  → appears in "Selected Publications" on the home page
   ===================================================================== */
window.PUBLICATIONS = {

  underReview: [
    {
      id: "R5", key: "icse27-attribution", type: "conference", year: 2027,
      title: "Perception and Reality: Attribution, Originality, Plagiarism, and Ownership in AI-Generated Code",
      authors: ["Saikat Mondal", "Banani Roy", "Foutse Khomh", "Chanchal K. Roy"],
      venue: "49th IEEE/ACM International Conference on Software Engineering (ICSE 2027)",
      short: "ICSE 2027", status: "Major Revision", themes: ["open", "trust"]
    },
    {
      id: "R4", key: "tosem-autocombat", type: "journal", year: 2026,
      title: "Human-Aligned Enhancement of Programming Answers with LLMs Guided by User Feedback",
      authors: ["Suborno Deb Bappon", "Saikat Mondal", "Chanchal K. Roy", "Kevin Schneider"],
      venue: "ACM Transactions on Software Engineering and Methodology (TOSEM)",
      short: "TOSEM", status: "Major Revision", themes: ["generation"]
    },
    {
      id: "R3", key: "tosem-policy", type: "journal", year: 2026,
      title: "Policy Development for LLM-Assisted Bug Fixing: Practitioners' Concerns, Disclosure, Oversight, and Organizational Equilibria",
      authors: ["Priata Nowshin", "Saikat Mondal", "Debajyoti Mondal", "Chanchal K. Roy"],
      venue: "ACM Transactions on Software Engineering and Methodology (TOSEM)",
      short: "TOSEM", status: "Major Revision", awards: ["Best Poster Award, ICSAC 2025"], themes: ["agents", "open"]
    },
    {
      id: "R2", key: "emse-chatgpt-issues", type: "journal", year: 2026,
      title: "Developers' Engagement and Perceptions of ChatGPT in GitHub Issue Resolution: A Mixed-Methods Study",
      authors: ["Joy Krishan Das", "Saikat Mondal", "Chanchal K. Roy"],
      venue: "Empirical Software Engineering (EMSE)",
      short: "EMSE", status: "Major Revision", themes: ["trust"]
    },
    {
      id: "R1", key: "emse-revisions", type: "journal", year: 2026,
      title: "Characterizing the Effects of Revisions on Stack Overflow Answers: A Multi-Dimensional Quality Analysis",
      authors: ["Saikat Mondal", "Chanchal K. Roy"],
      venue: "Empirical Software Engineering (EMSE)",
      short: "EMSE", status: "Under Review", themes: ["knowledge"]
    }
  ],

  published: [
    /* ---------------- 2026 ---------------- */
    {
      key: "icse26-openscience", type: "conference", year: 2026, selected: true,
      title: "The State of Open Science in Software Engineering Research: A Case Study of ICSE Artifacts",
      authors: ["Al Muttakin", "Saikat Mondal", "Chanchal K. Roy"],
      venue: "48th IEEE/ACM International Conference on Software Engineering (ICSE 2026)",
      short: "ICSE 2026", details: "pp. 2299–2310, Rio de Janeiro, Brazil · Acceptance rate 21.85%",
      awards: ["ACM Artifact Badges: Functional, Available, Reusable"],
      links: { preprint: "https://arxiv.org/pdf/2601.02066" }, themes: ["open"]
    },
    {
      key: "icpc26-translation", type: "conference", year: 2026, selected: true,
      title: "Algorithm-Based Pipeline for Reliable and Intent-Preserving Code Translation with LLMs",
      authors: ["Shahriar Rumi Dipto", "Saikat Mondal", "Chanchal K. Roy"],
      venue: "34th IEEE/ACM International Conference on Program Comprehension (ICPC 2026)",
      short: "ICPC 2026", details: "pp. 390–401, Rio de Janeiro, Brazil · Acceptance rate 28.50%",
      awards: ["SOAR Distinguished Research Award 2025"], themes: ["generation"]
    },
    {
      key: "msr26-agent-prs", type: "short", year: 2026,
      title: "Why Are AI Agent–Involved Pull Requests (Fix-Related) Remain Unmerged? An Empirical Study",
      authors: ["Khairul Alam", "Saikat Mondal", "Banani Roy"],
      venue: "23rd IEEE/ACM International Conference on Mining Software Repositories (MSR 2026), Mining Challenge",
      short: "MSR 2026", details: "pp. 964–968, Rio de Janeiro, Brazil", themes: ["agents"]
    },
    {
      key: "jaws26-openart", type: "workshop", year: 2026,
      title: "OpenART: Manuscript-Driven Support for Promoting Executability of Software Engineering Artifacts",
      authors: ["Al Muttakin", "Saikat Mondal", "Chanchal K. Roy"],
      venue: "1st IEEE/ACM Journal Ahead Workshop (JAWs 2026)",
      short: "JAWs 2026", details: "Rio de Janeiro, Brazil",
      notes: ["Invited for TOSEM submission"], themes: ["open"]
    },
    {
      key: "jaws26-sciflowgent", type: "workshop", year: 2026,
      title: "SciFlowgent: Agentic AI Support for Developing Scientific Workflows",
      authors: ["Khairul Alam", "Saikat Mondal", "Banani Roy"],
      venue: "1st IEEE/ACM Journal Ahead Workshop (JAWs 2026)",
      short: "JAWs 2026", details: "Rio de Janeiro, Brazil",
      notes: ["Invited for TOSEM submission"], themes: ["agents"]
    },
    {
      key: "ase26-rollback", type: "journal", year: 2026, selected: true,
      title: "Automatic Assistance to Mitigate Rollback Inconsistencies in Collaborative Edits",
      authors: ["Saikat Mondal", "Gias Uddin", "Chanchal K. Roy"],
      venue: "Automated Software Engineering Journal",
      short: "ASE Journal", details: "vol. 33, no. 1, 54 pages",
      links: { doi: "https://dl.acm.org/doi/abs/10.1007/s10515-025-00583-9" }, themes: ["knowledge"]
    },

    /* ---------------- 2025 ---------------- */
    {
      key: "cascon25-copilot", type: "conference", year: 2025,
      title: "Can We Trust the AI Pair Programmer? Copilot for API Misuse Detection and Correction",
      authors: ["Saikat Mondal", "Chanchal K. Roy", "Hong Wang", "Juan Arguello", "Samantha Mathan"],
      venue: "35th IEEE International Conference on Collaborative Advances in Software and Computing (CASCON 2025)",
      short: "CASCON 2025", details: "pp. 56–61, Toronto, Canada", themes: ["trust"]
    },
    {
      key: "icsme25-editing", type: "conference", year: 2025, selected: true,
      title: "Does Editing Improve Answer Quality on Stack Overflow? A Data-Driven Investigation",
      authors: ["Saikat Mondal", "Chanchal K. Roy"],
      venue: "41st IEEE International Conference on Software Maintenance and Evolution (ICSME 2025)",
      short: "ICSME 2025", details: "pp. 492–504, Auckland, New Zealand",
      awards: ["Distinguished Research Award, ICSAC 2025"], notes: ["Invited for EMSE special issue"], themes: ["knowledge"]
    },
    {
      key: "ease25-xai", type: "conference", year: 2025,
      title: "From Questions to Insights: Exploring XAI Challenges Reported on Stack Overflow Questions",
      authors: ["Saumendu Roy", "Saikat Mondal", "Banani Roy", "Chanchal K. Roy"],
      venue: "29th International Conference on Evaluation and Assessment in Software Engineering (EASE 2025)",
      short: "EASE 2025", details: "pp. 261–271, Istanbul, Turkey · Acceptance rate 27.00%",
      notes: ["Honorable Mention, USask EDI Initiative Workshop 2025"], themes: ["trust"]
    },
    {
      key: "msr25-gencnippet", type: "short", year: 2025,
      title: "GENCNIPPET: Automated Generation of Code Snippets for Supporting Programming Questions",
      authors: ["Saikat Mondal", "Chanchal K. Roy"],
      venue: "22nd IEEE/ACM International Conference on Mining Software Repositories (MSR 2025), Registered Reports Track",
      short: "MSR 2025", details: "Ottawa, Canada", themes: ["generation"]
    },
    {
      key: "geicse25-gender", type: "workshop", year: 2025,
      title: "Gender Disparities in Contributions, Leadership, and Collaboration: An Exploratory Study on Software Systems Research",
      authors: ["Shamse Tasnim Cynthia", "Saikat Mondal", "Joy Krishan Das", "Banani Roy"],
      venue: "6th IEEE/ACM Workshop on Gender Equality, Diversity, and Inclusion in Software Engineering (GEICSE 2025)",
      short: "GEICSE 2025", details: "pp. 25–32, Ottawa, Canada", themes: ["open"]
    },
    {
      key: "saner25-chatgpt", type: "conference", year: 2025, selected: true,
      title: "Why Do Developers Engage with ChatGPT in Issue-Tracker? Investigating Usage and Reliance on ChatGPT-Generated Code",
      authors: ["Joy Krishan Das", "Saikat Mondal", "Chanchal K. Roy"],
      venue: "32nd IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER 2025)",
      short: "SANER 2025", details: "pp. 68–79, Montreal, Canada · Acceptance rate 23.11%",
      awards: ["IEEE TCSE Distinguished Paper Award", "Distinguished Research Award, ICSAC 2025"],
      notes: ["Invited for EMSE special issue"], themes: ["trust"]
    },

    /* ---------------- 2024 ---------------- */
    {
      key: "scam24-autogenics", type: "conference", year: 2024,
      title: "AUTOGENICS: Automated Generation of Context-Aware Inline Comments for Code Snippets on Programming Q&A Sites Using LLM",
      authors: ["Suborno Deb Bappon", "Saikat Mondal", "Banani Roy"],
      venue: "24th IEEE International Conference on Source Code Analysis & Manipulation (SCAM 2024)",
      short: "SCAM 2024", details: "pp. 24–35, Flagstaff, AZ, USA", themes: ["generation"]
    },
    {
      key: "jss24-repro", type: "journal", year: 2024,
      title: "Reproducibility of Issues Reported in Stack Overflow Questions: Challenges, Impact & Estimation",
      authors: ["Saikat Mondal", "Banani Roy"],
      venue: "Journal of Systems and Software (JSS)",
      short: "JSS", details: "vol. 217, pp. 1–17", themes: ["knowledge"]
    },
    {
      key: "di24-heart", type: "journal", year: 2024,
      title: "Risk Factors Categorizations of Ischemic Heart Disease in South-Western Bangladesh",
      authors: ["M. Raihan", "Sami Azam", "Laboni Akter", "Md. Mehedi Hassan", "Ryana Quadir", "Asif Karim", "Saikat Mondal", "Arun More"],
      venue: "Data Intelligence",
      short: "Data Intell.", details: "vol. 6, no. 3, pp. 834–868"
    },
    {
      key: "saner24-snippets", type: "conference", year: 2024,
      title: "Can We Identify Stack Overflow Questions Requiring Code Snippets? Investigating the Cause & Effect of Missing Code Snippets",
      authors: ["Saikat Mondal", "Mohammad Masudur Rahman", "Chanchal K. Roy"],
      venue: "31st IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER 2024)",
      short: "SANER 2024", details: "pp. 764–775, Rovaniemi, Finland · Acceptance rate 25.60%",
      awards: ["SOAR Distinguished Research Award 2024"], themes: ["knowledge"]
    },
    {
      key: "msr24-prompts", type: "short", year: 2024,
      title: "Enhancing User Interaction in ChatGPT: Characterizing and Consolidating Multiple Prompts for Issue Resolution",
      authors: ["Saikat Mondal", "Suborno Deb Bappon", "Chanchal K. Roy"],
      venue: "21st IEEE/ACM International Conference on Mining Software Repositories (MSR 2024), Mining Challenge",
      short: "MSR 2024", details: "pp. 222–226, Lisbon, Portugal", themes: ["trust"]
    },
    {
      key: "msr24-issuetracker", type: "short", year: 2024,
      title: "Investigating the Utility of ChatGPT in the Issue Tracking System: An Exploratory Study",
      authors: ["Joy Krishan Das", "Saikat Mondal", "Chanchal K. Roy"],
      venue: "21st IEEE/ACM International Conference on Mining Software Repositories (MSR 2024), Mining Challenge",
      short: "MSR 2024", details: "pp. 217–221, Lisbon, Portugal", themes: ["trust"]
    },

    /* ---------------- 2023 ---------------- */
    {
      key: "apsec23-span", type: "conference", year: 2023,
      title: "Investigating Technology Usage Span by Analyzing Users' Q&A Traces in Stack Overflow",
      authors: ["Saikat Mondal", "Debajyoti Mondal", "Chanchal K. Roy"],
      venue: "30th IEEE Asia-Pacific Software Engineering Conference (APSEC 2023)",
      short: "APSEC 2023", details: "pp. 589–593, Seoul, Korea", themes: ["knowledge"]
    },
    {
      key: "msr23-subjectivity", type: "conference", year: 2023,
      title: "Do Subjectivity and Objectivity Always Agree? A Case Study with Stack Overflow Questions",
      authors: ["Saikat Mondal", "Mohammad Masudur Rahman", "Chanchal K. Roy"],
      venue: "20th IEEE/ACM International Conference on Mining Software Repositories (MSR 2023)",
      short: "MSR 2023", details: "pp. 389–401, Melbourne, Australia · Acceptance rate 37.00%", themes: ["knowledge"]
    },

    /* ---------------- 2022 ---------------- */
    {
      key: "icsme22-xai", type: "short", year: 2022,
      title: "Why Don't XAI Techniques Agree? Characterizing the Disagreements Between Post-hoc Explanations of Defect Predictions",
      authors: ["Saumendu Roy", "Gabriel Laberge", "Banani Roy", "Foutse Khomh", "Amin Nikanjam", "Saikat Mondal"],
      venue: "38th IEEE International Conference on Software Maintenance and Evolution (ICSME 2022), NIER Track",
      short: "ICSME 2022", details: "pp. 444–448, Limassol, Cyprus", themes: ["trust"]
    },
    {
      key: "emse22-editex", type: "journal", year: 2022, selected: true,
      title: "Automatic Prediction of Rejected Edits in Stack Overflow",
      authors: ["Saikat Mondal", "Gias Uddin", "Chanchal K. Roy"],
      venue: "Empirical Software Engineering (EMSE)",
      short: "EMSE", details: "vol. 28, no. 1, pp. 1–43",
      awards: ["Carl McCrosky Innovation Scholarship 2023", "SOAR Distinguished Research Award 2025"],
      notes: ["ICSE 2023 Journal First"], themes: ["knowledge"]
    },
    {
      key: "emse22-repro", type: "journal", year: 2022,
      title: "The Reproducibility of Programming-Related Issues in Stack Overflow Questions",
      authors: ["Saikat Mondal", "Mohammad Masudur Rahman", "Chanchal K. Roy", "Kevin Schneider"],
      venue: "Empirical Software Engineering (EMSE)",
      short: "EMSE", details: "vol. 27, no. 3, pp. 1–52", themes: ["knowledge"]
    },
    {
      key: "isec22-repro", type: "conference", year: 2022,
      title: "Reproducibility Challenges and Their Impacts on Technical Q&A Websites: The Practitioners' Perspectives",
      authors: ["Saikat Mondal", "Banani Roy"],
      venue: "15th ACM Innovations in Software Engineering Conference (ISEC 2022)",
      short: "ISEC 2022", details: "pp. 1–11, Gandhinagar, India · Acceptance rate 25.71%",
      awards: ["Best Paper Award"], themes: ["knowledge"]
    },

    /* ---------------- 2021 ---------------- */
    {
      key: "msr21-rollback", type: "conference", year: 2021,
      title: "Rollback Edit Inconsistencies in Developer Forum",
      authors: ["Saikat Mondal", "Gias Uddin", "Chanchal K. Roy"],
      venue: "18th IEEE/ACM International Conference on Mining Software Repositories (MSR 2021)",
      short: "MSR 2021", details: "pp. 380–391, Madrid, Spain", themes: ["knowledge"]
    },
    {
      key: "isec21-unanswered", type: "conference", year: 2021,
      title: "Early Detection and Guidelines to Improve Unanswered Questions on Stack Overflow",
      authors: ["Saikat Mondal", "CM Khaled Saifullah", "Avijit Bhattacharjee", "Mohammad Masudur Rahman", "Chanchal K. Roy"],
      venue: "14th ACM Innovations in Software Engineering Conference (ISEC 2021)",
      short: "ISEC 2021", details: "pp. 1–11, Bhubaneswar, India · Acceptance rate 33.33%", themes: ["knowledge"]
    },

    /* ---------------- 2020 ---------------- */
    {
      key: "icsme20-rollback-rr", type: "short", year: 2020,
      title: "Automatic Identification of Rollback Edit with Reasons in Stack Overflow Q&A Site",
      authors: ["Saikat Mondal", "Gias Uddin", "Chanchal K. Roy"],
      venue: "36th IEEE International Conference on Software Maintenance and Evolution (ICSME 2020), Registered Reports Track",
      short: "ICSME 2020", details: "p. 856, Adelaide, Australia", themes: ["knowledge"]
    },

    /* ---------------- 2019 ---------------- */
    {
      key: "msr19-repro", type: "conference", year: 2019,
      title: "Can Issues Reported at Stack Overflow Questions be Reproduced? An Exploratory Study",
      authors: ["Saikat Mondal", "Mohammad Masudur Rahman", "Chanchal K. Roy"],
      venue: "16th IEEE/ACM International Conference on Mining Software Repositories (MSR 2019)",
      short: "MSR 2019", details: "pp. 479–489, Montreal, Canada · Acceptance rate 25.40%",
      awards: ["CSBS People's Choice Award 2021"], themes: ["knowledge"]
    },
    {
      key: "ecce19-heart", type: "conference", year: 2019,
      title: "Risk Prediction of Ischemic Heart Disease Using Artificial Neural Network",
      authors: ["M. Raihan", "Parichay Kumar Mandal", "Muhammad Muinul Islam", "Tanvir Hossain", "Promila Ghosh", "Shakil Ahmed Shaj", "Abdullah Anik", "Mubtasim Rafid Chowdhury", "Saikat Mondal", "Arun More"],
      venue: "2019 International Conference on Electrical, Computer and Communication Engineering (ECCE 2019)",
      short: "ECCE 2019", details: "pp. 1–5, Cox's Bazar, Bangladesh"
    },

    /* ---------------- 2010–2018 ---------------- */
    {
      key: "iccit18-acs", type: "conference", year: 2018,
      title: "A Comprehensive Analysis on Risk Prediction of Acute Coronary Syndrome Using Machine Learning Approaches",
      authors: ["M. Raihan", "Muhammad Muinul Islam", "Promila Ghosh", "Shakil Ahmed Shaj", "Mubtasim Rafid Chowdhury", "Saikat Mondal", "Arun More"],
      venue: "21st International Conference of Computer and Information Technology (ICCIT 2018)",
      short: "ICCIT 2018", details: "pp. 1–6, Dhaka, Bangladesh"
    },
    {
      key: "iccit17-ami", type: "conference", year: 2017,
      title: "A Simple Acute Myocardial Infarction (Heart Attack) Prediction System Using Clinical Data and Data Mining Techniques",
      authors: ["Procheta Nag", "Saikat Mondal", "Foysal Ahmed", "Arun More", "M. Raihan"],
      venue: "20th International Conference of Computer and Information Technology (ICCIT 2017)",
      short: "ICCIT 2017", details: "pp. 1–6, Dhaka, Bangladesh"
    },
    {
      key: "kus17-stego", type: "journal", year: 2017,
      title: "Securing Bangla Text Communication Using Image Steganography with Dynamic Substitution in IoT Environment",
      authors: ["Anupam Kumar Bairagi", "Saikat Mondal", "Debashish Chakroborti"],
      venue: "Khulna University Studies (KUS) Journal",
      short: "KUS", details: "vol. 14, no. 1&2, pp. 95–106"
    },
    {
      key: "iccit16-heart", type: "conference", year: 2016,
      title: "Smartphone Based Ischemic Heart Disease (Heart Attack) Risk Prediction using Clinical Data and Data Mining Approaches, a Prototype Design",
      authors: ["M. Raihan", "Saikat Mondal", "Arun More", "Md Omar Faruqe Sagor", "Gopal Sikder", "Mahbub Arab Majumder", "Mohammad Abdullah Al Manjur", "Kushal Ghosh"],
      venue: "19th International Conference on Computer and Information Technology (ICCIT 2016)",
      short: "ICCIT 2016", details: "pp. 299–303, Dhaka, Bangladesh"
    },
    {
      key: "icece16-stego", type: "conference", year: 2016,
      title: "An Improved Color Image Steganography Technique in Spatial Domain",
      authors: ["Saikat Mondal", "Rameswar Debnath", "Borun Kumar Mondal"],
      venue: "9th International Conference on Electrical and Computer Engineering (ICECE 2016)",
      short: "ICECE 2016", details: "pp. 582–585, Dhaka, Bangladesh"
    },
    {
      key: "iccit13-rgb", type: "conference", year: 2014,
      title: "A Robust RGB Channel Based Image Steganography Technique using a Secret Key",
      authors: ["Anupam Kumar Bairagi", "Saikat Mondal", "Rameswar Debnath"],
      venue: "16th International Conference on Computer and Information Technology (ICCIT 2013)",
      short: "ICCIT 2013", details: "pp. 81–87, Khulna, Bangladesh"
    },
    {
      key: "iciev12-audio", type: "conference", year: 2012,
      title: "A Dynamic Approach in Substitution Based Audio Steganography",
      authors: ["Anupam Kumar Bairagi", "Saikat Mondal", "Amit Kumar Mondal"],
      venue: "International Conference on Informatics, Electronics & Vision (ICIEV 2012)",
      short: "ICIEV 2012", details: "pp. 501–504, Dhaka, Bangladesh"
    },
    {
      key: "iccit10-manet", type: "conference", year: 2010,
      title: "A New Approach of Extendable Multicast Routing Protocol in MANET",
      authors: ["Md Saidur Rahman", "Saikat Mondal", "Shushanto Kumar Ghosh", "Md Mahbubur Rahman"],
      venue: "13th International Conference on Computer and Information Technology (ICCIT 2010)",
      short: "ICCIT 2010", details: "pp. 120–124, Dhaka, Bangladesh"
    }
  ]
};
