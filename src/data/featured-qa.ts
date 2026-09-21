export type FeaturedQA = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  highlights: string[];
  tech: string[];
  category: "SOFTWARE ENG." | "QA TESTING";
  github?: string;
  demo?: string;
};

export type Project = FeaturedQA;

export const featuredQAProjects: Project[] = [
  {
    id: "01",
    title: "MeatLens - Freshness Inspector",
    subtitle: "Meat scanner thesis under construction",
    desc: "Meat scanner that one can use in order to scan meat. Currently a thesis under construction--be warned.",
    highlights: [],
    tech: ["TypeScript"],
    category: "QA TESTING",
    github: "https://github.com/MeatLens-Freshness-Inspector/botchabuster",
  },
  {
    id: "02",
    title: "MyLightDrugstore",
    subtitle: "Legacy PHP application from 2009-2012",
    desc: "Old code from 2009-2012.",
    highlights: [],
    tech: ["PHP"],
    category: "QA TESTING",
    github: "https://github.com/Thalanas110/MyLightDrugstore",
  },
  {
    id: "03",
    title: "ExamHub",
    subtitle: "Automated exam management system",
    desc: "An automated Exam Management System designed for modern classrooms. Includes real-time monitoring, anti-cheat countermeasures, and a centralized dashboard for student performance analytics. Created as the final requirement for Frontend and Backend Electives.",
    highlights: [],
    tech: ["TypeScript"],
    category: "QA TESTING",
    github: "https://github.com/Thalanas110/ExamHub",
  },
  {
    id: "04",
    title: "new-pdc-2",
    subtitle: "Parallel & Distributed Computing final project",
    desc: "Parallel & Distributed Computing - final project",
    highlights: [],
    tech: ["C++"],
    category: "QA TESTING",
    github: "https://github.com/Thalanas110/new-pdc-2",
  },
  {
    id: "05",
    title: "SnapBooth",
    subtitle: "WebSocket-based couple capture app",
    desc: "A website designed for couples to capture photos, create lasting memories, and build a shared collection of special moments. Collaboration between me and my wife.",
    highlights: [],
    tech: ["TypeScript"],
    category: "QA TESTING",
    github: "https://github.com/Thalanas110/snapbooth",
    demo: "https://snapbooth-main.netlify.app/",
  },
];
