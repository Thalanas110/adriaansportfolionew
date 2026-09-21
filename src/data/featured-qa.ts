export type FeaturedQA = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  highlights: string[];
  tech: string[];
  category: "QA TESTING";
  github?: string;
  demo?: string;
};

export type Project = FeaturedQA;

export const featuredQAProjects: Project[] = [
  {
    id: "01",
    title: "I Care Center Church Website",
    subtitle: "QA Testing for Full-Stack Church Web Platform",
    desc: "Performed end-to-end testing on a production church website focusing on authentication, admin workflows, and content management reliability.",
    highlights: [
      "Validated authentication flows (session, token handling, edge cases)",
      "Identified and resolved image upload failure (edge function fix)",
      "Tested role-based access control (RLS) across user types",
      "Performed cross-device and SEO indexing validation",
    ],
    tech: ["Cypress", "PostgreSQL", "Authentication", "RBAC", "SEO Validation"],
    category: "QA TESTING",
    demo: "https://icarecenter.netlify.app/",
  },
  {
    id: "02",
    title: "War of Dots",
    subtitle: "Beta Testing - Multiplayer Strategy Game",
    desc: "Conducted live beta testing in a real player environment, focusing on gameplay stability, bug detection, and user experience consistency.",
    highlights: [
      "Tested gameplay under 200-400 concurrent players",
      "Reported reproducible bugs with structured feedback",
      "Identified UI/UX inconsistencies and edge-case failures",
      "Assisted in validating game stability across updates",
    ],
    tech: ["Beta Testing", "Gameplay QA", "Bug Reporting", "UX Validation"],
    category: "QA TESTING",
    demo: "https://warofdots.net/",
  },
  {
    id: "03",
    title: "Media Remote Tool",
    subtitle: "QA Testing for Real-Time Production Control System",
    desc: "Tested a real-time web-based remote system integrating OBS and ProPresenter, ensuring reliability in live streaming environments.",
    highlights: [
      "Validated real-time synchronization via WebSockets",
      "Performed integration testing (OBS WebSocket + ProPresenter API)",
      "Simulated live production scenarios for stress testing",
      "Detected and resolved state desynchronization issues",
    ],
    tech: ["OBS WebSocket", "ProPresenter API", "WebSockets", "Integration Testing"],
    category: "QA TESTING",
    github: "https://github.com/Thalanas110/obs-propres-remote-icc",
  },
  {
    id: "04",
    title: "ExamHub - Exam system",
    subtitle: "QA Testing for the Elective final projects",
    desc: "Involved heavy use of testing for the exam project via Playwright and PHP, alongside Postman. Tested for edge cases and security vulnerabilities, especially in the anti-cheat features.",
    highlights: [
      "Tested AES-GCM-256 encryption implementation for security",
      "Validated role-based access control (RBAC) across user roles",
      "Simulated cheating scenarios to test anti-cheat features",
      "Performed cross-browser testing for compatibility",
    ],
    tech: ["PHP Unit Testing", "Playwright", "Postman"],
    category: "QA TESTING",
    github: "https://github.com/Thalanas110/ExamSystemG8Submission1",
  },
];
