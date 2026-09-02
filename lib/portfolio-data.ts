export type ProjectCategory = "Featured" | "AI" | "Full-stack" | "Data" | "Systems";

export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  impact: string;
  stack: string[];
  category: ProjectCategory;
  image?: string;
  links: { label: string; href: string }[];
  private?: boolean;
};

export const profile = {
  name: "Ever Campos",
  role: "Software Developer",
  headline: "Software developer building full-stack tools with care and clarity.",
  location: "Maryland, United States",
  email: "everrjc@gmail.com",
  githubProfiles: [{ label: "Personal GitHub", href: "https://github.com/EverC0" }],
  linkedin: "http://www.linkedin.com/in/ever-campos",
  resume: "https://drive.google.com/file/d/1GO8NRS8WVRE9YZdOgUoZ283PfSLgp_PH/view?usp=sharing",
};

export const stats = [
  { value: "Full-stack", label: "web application developer" },
  { value: "TS", label: "TypeScript and React apps" },
  { value: "AI", label: "AI-powered product features" },
  { value: "UMD", label: "computer science background" },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Responsive UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Flask", "Firebase", "MongoDB"],
  },
  {
    title: "AI & Data",
    skills: ["OpenAI API", "Python", "SQL", "RAG", "Machine learning"],
  },
  {
    title: "Agentic Tools",
    skills: ["Agentic workflows", "LangGraph", "Cursor", "Codex", "AI-assisted development"],
  },
  {
    title: "Workflow",
    skills: ["Git", "API design", "Code review", "Debugging", "Team communication"],
  },
];

export const projectCategories: ProjectCategory[] = ["Featured", "AI", "Full-stack", "Data", "Systems"];

export const projects: Project[] = [
  {
    title: "Pantry Tracker",
    eyebrow: "AI inventory assistant",
    summary:
      "A pantry management app with secure accounts, real-time inventory tracking, automated categorization, and OpenAI-powered insights to help users understand what they have and what they may need next.",
    impact:
      "Blends a clean household utility with practical AI behavior, showing product thinking across authentication, data modeling, and interface clarity.",
    stack: ["Next.js", "React", "Firebase", "Material UI", "OpenAI API"],
    category: "AI",
    image: "/images/Unknown1.jpeg",
    links: [{ label: "Live app", href: "https://pantry-tracker-pi-flame.vercel.app" }],
  },
  {
    title: "MyFlash AI",
    eyebrow: "Learning tool with subscriptions",
    summary:
      "A flashcard generator that turns free-form notes into organized study cards using the ChatGPT API, with saved collections and subscription workflows for a more complete SaaS-style experience.",
    impact:
      "Demonstrates AI integration, user persistence, and monetization-aware product architecture in one focused learning workflow.",
    stack: ["Next.js", "Firebase", "OpenAI API", "Stripe", "React"],
    category: "AI",
    image: "/images/Unkown2.jpeg",
    links: [{ label: "Live app", href: "https://flash-gen.vercel.app" }],
  },
  {
    title: "SleepTune",
    eyebrow: "ML-backed wellness app",
    summary:
      "A full-stack sleep-quality app with a responsive Next.js frontend, Firebase authentication and real-time data, a Flask-based prediction model, and a chat feature for personalized feedback.",
    impact:
      "Shows the bridge between frontend product design, backend machine-learning services, and user-centered wellness feedback.",
    stack: ["Next.js", "Firebase", "Flask", "Machine Learning", "ChatGPT API"],
    category: "Full-stack",
    image: "/images/Unkown3.jpeg",
    links: [{ label: "Live app", href: "https://chat-bot-t0qf.onrender.com" }],
  },
  {
    title: "Article Summarization Web App",
    eyebrow: "Full-stack summarization platform",
    summary:
      "A Node and Express application where users can create accounts, submit articles, generate summaries through configured APIs, and revisit their own article history from MongoDB.",
    impact:
      "Highlights core backend fundamentals: routing, persistence, user flows, API integration, and end-to-end product delivery.",
    stack: ["Node.js", "Express", "MongoDB", "APIs", "Authentication"],
    category: "Full-stack",
    image: "/images/Untitled-18.png",
    links: [{ label: "Live app", href: "https://finalproject-et17.onrender.com" }],
  },
  {
    title: "Walmart Weekly Sales Prediction",
    eyebrow: "Predictive analytics system",
    summary:
      "A data science project using historical sales data and Random Forest Regression to forecast weekly sales and identify demand drivers across retail stores.",
    impact:
      "Connects modeling decisions to business outcomes: forecasting, feature interpretation, and resource-planning insight.",
    stack: ["Python", "Random Forest", "Data analysis", "Regression", "Visualization"],
    category: "Data",
    image: "/images/Untitled-19.png",
    links: [{ label: "More details", href: "http://abbasislaw.github.io" }],
  },
  {
    title: "Media Library Database",
    eyebrow: "Database design and documentation",
    summary:
      "A collaborative media database for organizing large book collections with searchable records, structured access patterns, and a user-friendly navigation layer.",
    impact:
      "Shows database thinking, documentation discipline, and collaboration around information architecture.",
    stack: ["SQL", "Database design", "Search", "Documentation", "Team project"],
    category: "Data",
    image: "/images/Untitled-17.png",
    links: [
      {
        label: "Documentation",
        href: "https://drive.google.com/file/d/1-kVrrsWHrkB-TYJePZqP-RlcznQbUUl9/view?usp=sharing",
      },
    ],
  },
  {
    title: "Custom Codon Processor",
    eyebrow: "Simulation and command processing",
    summary:
      "A Python simulation of a modified ribosome that interprets codon commands and constructs amino acid chains through a custom processing flow.",
    impact:
      "A compact systems-thinking project that translates complex biological rules into deterministic program behavior.",
    stack: ["Python", "Simulation", "Command parsing", "Algorithms"],
    category: "Systems",
    image: "/images/Untitled-20.png",
    links: [{ label: "Request access", href: "mailto:everrjc@gmail.com?subject=Request permission to see project" }],
  },
];

export const experience = [
  {
    title: "Associate Developer, Trenchant Analytics",
    date: "Aug 2025 - May 2026",
    description:
      "Developed and maintained production software applications while collaborating as part of a full-stack engineering team.",
  },
  {
    title: "Software Engineer Intern, Trenchant Analytics",
    date: "May 2025 - Jul 2025",
    description:
      "Contributed to the development and maintenance of production software applications as part of a collaborative engineering team.",
  },
  {
    title: "Software Engineer Intern, Gabriel AI",
    date: "Feb 2025 - May 2025",
    description:
      "Built a TypeScript web application with AI-driven voice synthesis, responsive UI work, Firebase-backed authentication, and custom voice message workflows.",
  },
  {
    title: "Software Engineer Fellow, Headstarter.AI",
    date: "Aug 2024 - Sep 2024",
    description:
      "Completed AI-focused project work across Next.js, React, Flask, RAG, machine learning models, and team-based delivery.",
  },
  {
    title: "Bachelor of Science in Computer Science, University of Maryland",
    date: "Aug 2021 - May 2025",
    description:
      "Studied computer science with coursework across object-oriented programming, data structures, algorithms, discrete structures, web application development, and data science.",
  },
];
