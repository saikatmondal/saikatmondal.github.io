/* =====================================================================
   RESEARCH  ·  Vision, themes, tools and collaborations.
   A theme's id links papers to it (see "themes" in publications.js).
   ===================================================================== */
window.RESEARCH = {
  vision: [
    "My research program, <b>Human-Aligned Code Intelligence (HACI)</b>, advances trustworthy and explainable AI for software engineering. I study how developers reason about code, and I build AI techniques for software maintenance and evolution that work the way people actually think and verify.",
    "The goal is AI assistance that is <b>robust, usable, and sustainable</b>. That means code generation aligned with developer intent, reasoning grounded in evidence, and AI agents that balance autonomy with meaningful human oversight."
  ],

  themes: [
    {
      id: "generation", icon: "fa-solid fa-wand-magic-sparkles",
      title: "Human-Aligned Code Generation",
      summary: "LLM techniques that generate, translate, and enhance code and explanations in ways that preserve developer intent and respond to human feedback."
    },
    {
      id: "trust", icon: "fa-solid fa-scale-balanced",
      title: "Trustworthy and Explainable AI Assistance",
      summary: "How developers use, rely on, and verify AI assistants such as ChatGPT and Copilot, and what makes AI explanations consistent and evidence-grounded."
    },
    {
      id: "agents", icon: "fa-solid fa-robot",
      title: "Reliable AI Agents with Human Oversight",
      summary: "Agentic tools for program repair and scientific workflows, why agent contributions succeed or fail, and the policies that keep humans in control."
    },
    {
      id: "knowledge", icon: "fa-solid fa-layer-group",
      title: "Quality of Developer Knowledge",
      summary: "Large-scale studies and tools that improve the reproducibility, edits, and answers on platforms like Stack Overflow, the knowledge that trains today's code models."
    },
    {
      id: "open", icon: "fa-solid fa-unlock-keyhole",
      title: "Open Science and Responsible SE",
      summary: "Artifact executability, attribution and ownership of AI-generated code, and equity, diversity, and inclusion in software engineering research."
    }
  ],

  tools: [
    { name: "OpenART",     summary: "Manuscript-driven support that promotes the executability of software engineering research artifacts.", pubs: "JAWs 2026" },
    { name: "SciFlowgent", summary: "Agentic AI support for developing scientific workflows.", pubs: "JAWs 2026" },
    { name: "SafeSnippet", summary: "A browser-integrated tool using GPT-4.1 with retrieval-augmented generation to detect and fix security vulnerabilities (CWEs) in Python code from Stack Overflow.", pubs: "In preparation" },
    { name: "AUTOCOMBAT", summary: "Human-aligned enhancement of programming answers with LLMs guided by user feedback.", pubs: "TOSEM (under revision)" },
    { name: "GENCNIPPET", summary: "An LLM-powered tool that generates relevant code examples for Stack Overflow questions during submission.", pubs: "MSR 2025" },
    { name: "AUTOGENICS", summary: "Context-aware inline comments for code snippets on programming Q&A sites using LLMs.", pubs: "SCAM 2024" },
    { name: "iEdit",       summary: "Detects inconsistent edits automatically and guides Stack Overflow editors with suggestions and rejection ratios.", pubs: "MSR 2021 · ASE Journal 2026" },
    { name: "EditEx",      summary: "Identifies edits likely to be rejected, with reasons, and assists users during real-time editing on Stack Overflow.", pubs: "ICSME 2020 · EMSE 2022" }
  ],

  collaborations: [
    { who: "Dr. Tharindu Dodanwala", where: "Lakehead University", since: "2026", outcome: "NFRF Exploration application (co-investigator)" },
    { who: "Dr. Ronnie de Souza Santos", where: "University of Calgary", since: "2026", outcome: "NFRF Exploration and SSHRC applications (collaborator)" },
    { who: "Dr. David Lo", where: "Singapore Management University", since: "2024", outcome: "LLM-based CWE detection and repair, agent-based program repair" },
    { who: "Dr. Debajyoti Mondal", where: "University of Saskatchewan", since: "2023", outcome: "APSEC, TOSEM (under revision)" },
    { who: "Dr. Banani Roy", where: "University of Saskatchewan", since: "2022", outcome: "ICSME, ISEC, SCAM, EASE, GEICSE, MSR, JAWs, JSS" },
    { who: "Dr. Foutse Khomh", where: "Polytechnique Montréal", since: "2022", outcome: "ICSME, ICSE (under revision)" },
    { who: "Dr. Gias Uddin", where: "York University", since: "2019", outcome: "MSR, ICSME, EMSE, ASE Journal" },
    { who: "Dr. Masud Rahman", where: "Dalhousie University", since: "2018", outcome: "MSR, SANER, ISEC, EMSE" },
    { who: "Dr. Arun More", where: "Rural Health Progress Trust, India", since: "2015", outcome: "ICCIT, ECCE, Data Intelligence" }
  ]
};
