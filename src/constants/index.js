import {
  drawing,
  hiking,
  naraDeer,
  parrot,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  stevens,
  fizz,
  christinesArtStudio,
  linkScanner,
  pathApp,
  sts2Tracker,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Drawing",
    icon: drawing,
  },
  {
    title: "Hiking",
    icon: hiking,
  },
  {
    title: "Traveling",
    icon: naraDeer,
  },
  {
    title: "Animals",
    icon: parrot,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Lead Art Assistant",
    company_name: "Christine’s Art Studio",
    icon: christinesArtStudio,
    iconBg: "#e7e0e5",
    date: "June 2021 – Present",
    points: [
      "Collaborated with the Art Teacher to facilitate engaging and educational art classes ranging from 8–12 students.",
      "Supported the Teacher in organizing 8 public art events, including Livingston Public Library’s yearly showcase.",
      "Improved expense documentation practices, leading to a 20% reduction in material costs.",
    ],
  },
  {
    title: "Applied Models & Simulation Teacher Assistant",
    company_name: "Stevens Institute of Technology",
    icon: stevens,
    iconBg: "#912d20",
    date: "September 2025 – January 2026",
    points: [
      "Evaluated and graded assignments and exams for over 65 students, ensuring accurate and consistent assessment.",
      "Led teaching sessions helping students debug Excel simulation models and refine data forecasting accuracy.",
      "Demonstrated leadership by fostering students’ problem-solving skills and promoting cooperation.",
    ],
  },
  {
    title: "Social Media Marketer",
    company_name: "Fizz Social Corp",
    icon: fizz,
    iconBg: "#a600f3",
    date: "October 2023 – February 2024",
    points: [
      "Analyzed engagement metrics of 10,000+ users to refine content strategy and improve user retention by 16%.",
      "Produced 30 daily posts to cultivate a community among students at Stevens Institute of Technology.",
      "Utilized Photoshop and Illustrator to design virtual graphics and fliers promoting events around campus.",
    ],
  },
];

const certifications = [
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google · Coursera",
    date: "November 2026",
    status: "earned",
    description:
      "Six-course program covering technical support, computer networking, operating systems, system administration, and IT security.",
    verify_link: "https://coursera.org/verify/professional-cert/45HEI1PAL3WH",
  },
  {
    name: "Google Analytics Certification",
    issuer: "Google · Skillshop",
    date: "August 2026",
    status: "earned",
    description:
      "Certified in measuring and analyzing website traffic and user behavior with Google Analytics. Valid through August 2027.",
    verify_link:
      "https://skillshop.credential.net/0c356a29-24be-44fe-9d2e-da0581002273",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Expected December 2026",
    status: "in-progress",
    description:
      "Industry-standard certification in core cybersecurity skills: threat detection, risk management, and network security.",
  },
];

const projects = [
  {
    name: "Job Post Malicious Link Identifier",
    description: [
      "Cybersecurity browser extension that identifies malicious job-posting practices on Indeed and LinkedIn.",
      "Uses AI-assisted detection logic to scan for impersonation, domain spoofing, and early-stage data harvesting.",
      "Its risk-based detection system flagged 11.7% of job postings for notable security concerns.",
    ],
    tags: [
      {
        name: "AI Agent",
        color: "blue-text-gradient",
      },
      {
        name: "Phishing Detection",
        color: "green-text-gradient",
      },
      {
        name: "URL Parsing",
        color: "pink-text-gradient",
      },
    ],
    image: linkScanner,
    source_code_link:
      "https://github.com/Kevin-Wittlinger/Job-Post-Malicious-Link-Identifier",
  },
  {
    name: "Port Authority PATH App Redesign",
    description: [
      "Redesigned PATH’s mobile app with its in-house software team to improve accessibility for users with disabilities.",
      "Integrated the Magnusmode and GoodMaps APIs to give users accessibility support tools and live navigation news.",
      "Presented at the Stevens Innovation Expo to ~20,000 visitors, with a 92% approval rating.",
    ],
    tags: [
      {
        name: "App Development",
        color: "blue-text-gradient",
      },
      {
        name: "API Integration",
        color: "green-text-gradient",
      },
      {
        name: "AJAX",
        color: "pink-text-gradient",
      },
    ],
    image: pathApp,
    source_code_link: "https://github.com/Kevin-Wittlinger/PathApp",
  },
  {
    name: "Slay the Spire 2 Tracker",
    description: [
      "Developed a full-stack analytics web app that parses Slay the Spire 2 save files into player performance statistics.",
      "Designed a SQL database on Turso with run deduplication by seed and start time, deployed through Vercel serverless functions.",
      "Secured user accounts with salted scrypt password hashing, expiring session cookies, and database-backed rate limiting.",
    ],
    tags: [
      {
        name: "Full-Stack Development",
        color: "blue-text-gradient",
      },
      {
        name: "Database Design",
        color: "green-text-gradient",
      },
      {
        name: "Authentication",
        color: "pink-text-gradient",
      },
    ],
    image: sts2Tracker,
    source_code_link:
      "https://github.com/Kevin-Wittlinger/Slay_The_Spire2-Tracker",
  },
];

export { services, technologies, experiences, certifications, projects };
