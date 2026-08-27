import {
  mobile,
  backend,
  creator,
  web,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Badminton",
    icon: web,
  },
  {
    title: "Cooking",
    icon: mobile,
  },
  {
    title: "Working Out",
    icon: backend,
  },
  {
    title: "Animal Fanatic",
    icon: creator,
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
    title: "Applied Models and Simulation Teacher Assistant",
    company_name: "Stevens Institute of Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2025 – Present",
    points: [
      "Graded assignments and exams for over 65 students, ensuring accurate and consistent evaluation.",
      "Facilitated individual sessions aiding students with debugging both simulation errors and Microsoft Excel.",
      "Demonstrated leadership by fostering students’ problem-solving skills and promoting cooperation.",
    ],
  },
  {
    title: "Social Media Marketer",
    company_name: "Fizz",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2025 – Present",
    points: [
      "Produced 30 daily posts to cultivate a community among students at Stevens Institute of Technology.",
      "Utilized Photoshop and Illustrator to design virtual graphics and fliers promoting events around campus.",
      "Engaged in marketing efforts to promote a new marketplace feature to over 10,000 students at Stevens.",
      "Maintained oversight over the app through flagging behavior that conflicted with the code of conduct of Fizz.",
      "Hosted weekly Zoom meetings collaborating with employees and students to improve content generation.",
    ],
  },
  {
    title: "Art Assistant",
    company_name: "Christine’s Art Studio",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2021 - August 2023",
    points: [
      "Collaborated with the lead Art Teacher to facilitate engaging and educational art lessons.",
      "Provided individualized guidance to 8-12 students ranging from 2nd-9th grade, with varying skill levels.",
      "Supported Teacher in organizing 8 public art events including Livingston Public Library’s yearly showcase.",
      "Improved expense documentation practices, leading to a 20% reduction in material costs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "To-do List",
    description:
      "Todo list using nextjs, react, and prisma. Checklist allows the user to cross out items put on the todo list.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Kevin-Wittlinger/Todo-List",
  },
  {
    name: "Binary Search Tree",
    description: [
      "This project was made to replicate the node based binary tree data structure. ",
      "The left subtree should contain nodes only smaller than the key and vice versa with the right side. ",
    ],
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "eclipse",
        color: "green-text-gradient",
      },
      {
        name: "data structures",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Kevin-Wittlinger/Binary-tree",
  },
  {
    name: "Number theory Lab",
    description:
      "A Lab focused on learning number theory was coded through the use of racket. ",
    tags: [
      {
        name: "Racket",
        color: "blue-text-gradient",
      },
      {
        name: "Descrete Structures",
        color: "green-text-gradient",
      },
      {
        name: "Logic",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Kevin-Wittlinger/Lab-Topsort",
  },
];

export { services, technologies, experiences, testimonials, projects };
