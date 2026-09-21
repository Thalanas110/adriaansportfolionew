import type { SimpleIcon } from "simple-icons";
import {
  siHtml5,
  siReact,
  siTanstack,
  siVite,
  siAngular,
  siTailwindcss,
  siPhp,
  siLaravel,
  siNodedotjs,
  siSupabase,
  siAppwrite,
  siPostgresql,
  siMysql,
  siMongodb,
  siDocker,
  siGit,
  siGithub,
  siNetlify,
  siVercel,
  siCypress,
  siPostman,
  siTestinglibrary,
  siExpress,
  siJest,
  siFigma,
  siTrello,
  siJira,
  siObsstudio,
  siNdi,
} from "simple-icons/icons";

import type { Project } from "./featured-qa.ts";
import { featuredQAProjects } from "./featured-qa.ts";
import { featuredSEProjects } from "./featured-se.ts";
import { projectDumpQAProjects } from "./project-dump-qa.ts";
import { projectDumpSEProjects } from "./project-dump-se.ts";
export type { Project } from "./featured-qa.ts";

export const STACK_LOGOS: Record<string, SimpleIcon> = {
  "HTML5/CSS3/JS": siHtml5,
  React: siReact,
  "TanStack Query": siTanstack,
  Vite: siVite,
  Angular: siAngular,
  TailwindCSS: siTailwindcss,
  PHP: siPhp,
  Laravel: siLaravel,
  "Node.js": siNodedotjs,
  Supabase: siSupabase,
  Appwrite: siAppwrite,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
  Netlify: siNetlify,
  Vercel: siVercel,
  Cypress: siCypress,
  Postman: siPostman,
  ExpressJS: siExpress,
  Jest: siJest,
  "Manual testing (Game beta)": siTestinglibrary,
  Figma: siFigma,
  Trello: siTrello,
  Jira: siJira,
  OBS: siObsstudio,
  NDI: siNdi,
};

export const STACK_LOGO_IMAGES: Record<string, string> = {
  "TanStack Query": "https://tanstack.com/images/logos/logo-color-100.png",
  Angular: "/logos/angular-color.svg",
  Photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  Playwright:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
  ProPresenter:
    "https://cdn.prod.website-files.com/662f9c93a3bc73a71bd8dc81/662ff398fa7d280a13da12d3_ProPresenter_white_svg.svg",
  NDI: "https://2136244485-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoUOsQw9oPpQ8LFlxOpLI%2Fuploads%2F1U4sO7iJ8fZEcxyRfpHb%2FPicture%202.png?alt=media&token=d4f3e033-ae57-478a-8320-2b5b459d2a49",
};

export const profile = {
  name: "ADRIAAN M. DIMATE",
  callsign: "SOFTWARE // QA // AVIATION",
  location: "Olongapo City, Philippines",
  email: "aadimate55@gmail.com",
  phone: "+63 945 394 5299",
  linkedin: "https://www.linkedin.com/in/adriaan-dimate-390039260",
  github: "https://github.com/Thalanas110",
  portrait: "/profile.jpg",
  facebook: "https://facebook.com/philippine8129heavy",
  bio: [
    "I'm an autistic developer with a dual passion: creating beautiful digital experiences and conquering the skies. I merge the precision of aviation with the creativity of software engineering — whether I'm writing a feature, filing a bug, or reading a flight chart, the same discipline applies.",
    "Currently pursuing Computer Science while laying the groundwork for my commercial pilot license. When I'm not coding, I'm studying flight charts, running pre-flight checklists on my projects, or exploring new tech stacks.",
    "Code meets cockpit. Every system gets written to fly, then tested until it can handle turbulence. Let's reach new heights together.",
  ],
  traits: [
    { title: "Mission-Driven", desc: "Excellence from spec sheet to shipped build" },
    { title: "Detail-Oriented", desc: "Precision in every pixel, test case and flight chart" },
    { title: "Quick Learner", desc: "Adapting at mach speed" },
    { title: "Pattern Recognition", desc: "Spots regressions and edge cases fast" },
  ],
  education: [
    { degree: "BS Computer Science", school: "Gordon College", years: "2023 — PRESENT" },
    { degree: "Commercial Pilot License — Groundwork", school: "(In Progress)", years: "? — ?" },
    { degree: "ISTQB Foundation Track", school: "(In Progress)", years: "? — ?" },
  ],
  loves: [
    "Coding",
    "Testing",
    "Aviation",
    "Flight Charts",
    "Photo",
    "Music",
    "Reading",
    "Poetry",
    "Cooking",
  ],
  resume: {
    href: "/final%20adriaan%20resume.pdf",
    download: "Adriaan-M-Dimate-Resume.pdf",
    note: "Direct PDF download for recruiters, collaborators, and hiring teams.",
  },
};

export const stack: { group: string; items: string[] }[] = [
  {
    group: "FRONTEND",
    items: ["HTML5/CSS3/JS", "React", "TanStack Query", "Vite", "Angular", "TailwindCSS"],
  },
  { group: "BACKEND", items: ["PHP", "Laravel", "Node.js", "Supabase", "Appwrite", "ExpressJS"] },
  { group: "DATABASE", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { group: "CI/CD", items: ["Docker", "Git", "GitHub", "Netlify", "Vercel"] },
  {
    group: "TESTING / QA",
    items: ["Cypress", "Playwright", "Postman", "Jest", "Manual testing (Game beta)", "Jira"],
  },
  { group: "OTHER", items: ["Photoshop", "Figma", "Trello", "ProPresenter", "OBS", "NDI"] },
];

export const operations = [
  {
    role: "Volunteer Software Developer",
    type: "Volunteer",
    active: true,
    org: "I Care Center",
    period: "Jun 2025 — Present",
    place: "Olongapo City, Philippines",
    summary: "Supported internal software and media workflows with ministry teams.",
    bullets: [
      "Supported internal web and livestream workflows",
      "Managed agile collaboration with ministry teams",
    ],
    tags: ["React", "TypeScript", "OBS", "Web Development"],
  },
  {
    role: "Production Staff & QA Assistant",
    type: "Volunteer",
    active: true,
    org: "I Care Center",
    period: "Jan 2024 — Present",
    place: "Olongapo City, Philippines",
    summary:
      "Operated and QA'd ProPresenter for live and online services, syncing media in real time and resolving tech issues with worship and media teams.",
    bullets: [
      "ProPresenter and OBS setup and QA for 100+ live and online services",
      "Maintained media workflows for livestream operations",
      "Collaborated with teams to resolve tech issues and ensure smooth service flow",
    ],
    tags: ["ProPresenter", "OBS", "Live QA", "Tech Support"],
  },
  {
    role: "Data Encoder & Macro Programmer",
    type: "Internship",
    active: false,
    org: "ACE Medical Centre — Baypointe Hospital",
    period: "Jul 2025 — Aug 2025",
    place: "Subic Bay Freeport Zone, Philippines",
    summary:
      "Interned on patient data encoding and built macros to improve encoding efficiency and reduce human error.",
    bullets: ["Fast, validated encoding of patient data with integrity and confidentiality"],
    tags: ["Data Encoding", "Macro Programming"],
  },
  {
    role: "Data Encoder & Bookkeeper",
    type: "Part-time",
    active: true,
    org: "TDA Car Rental",
    period: "Apr 2023 — Present",
    place: "Olongapo City, Philippines",
    summary:
      "Data encoding and bookkeeping, ensuring accurate record-keeping and financial management for the rental business.",
    bullets: [
      "Encoded rental transactions and customer data into organized, auditable records",
      "Tracked expenses, generated financial reports, and assisted with budgeting",
    ],
    tags: ["Data Encoding", "Bookkeeping"],
  },
];

export const projects: Project[] = [...featuredQAProjects, ...featuredSEProjects];

/** Complete declassified build list — rendered on /projects. */
export const archivedProjects: Project[] = [...projectDumpQAProjects, ...projectDumpSEProjects];

export const channels = [
  {
    glyph: "📡",
    label: "COMMS: PHONE",
    value: "+63 945 394 5299",
    note: "Direct line — no encryption needed",
    href: "tel:+639453945299",
  },
  {
    glyph: "🔗",
    label: "NETWORK: LINKEDIN",
    value: "LinkedIn Profile",
    note: "Professional bunker network",
    href: profile.linkedin,
  },
  {
    glyph: "◈",
    label: "UPLINK: EMAIL",
    value: "aadimate55@gmail.com",
    note: "Encrypted transmission channel",
    href: `mailto:${profile.email}`,
  },
  {
    glyph: "⬢",
    label: "SIGNAL: FACEBOOK",
    value: "Add before messaging",
    note: "Social frequency channel",
    href: profile.facebook,
  },
];
