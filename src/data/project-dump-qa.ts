import { featuredQAProjects, type Project } from "./featured-qa.ts";

export const projectDumpQAProjects: Project[] = [
  ...featuredQAProjects,
  {
    id: "07",
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
    id: "09",
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
