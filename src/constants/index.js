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
    title: "Assistant Art Teacher",
    company_name: "Christine's Art Class",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2021 - August 2023",
    points: [
      "Assisted Teacher in educating a group of kids aged 8-10 on sketching, painting and other art mediums.",
      "Disscussed about lesson plans as well as materials needed to enable those lessons.",
      "Needed to show up on time and work schedule around other assistants and what was needed.",
      "Made me more imaginative and creative in my work, interested in design.",
    ],
  },
  {
    title: "Volunteer",
    company_name: "Livingston High School",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2022 - August 2023",
    points: [
      "Volunteer at livinston library helping sort books and guide visitors during events at the Library.",
      "Worked with about 6-12 other voluteers depending on the amount of people expected.",
      "Developed interpersonal social skills, communication skills.",
    ],
  },
  {
    title: "Student",
    company_name: "Introduction To Computer Science",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2022 -  December 2022",
    points: [
      "Introduction course taught at Stevens providing a baseline to the world of computer science.",
      "Labs and assignments centered around learning python syntax.",
      "Gave a light introduction to systems like algorithms, memory, sorting.",
      "Developed problem solving skills, ability to debug, visualize code.",
    ],
  },
  {
    title: "Student",
    company_name: "Data Structures",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "January 2023 - May 2023",
    points: [
      "Course that was mainly taught through the lense of java.",
      "Learned storage of data through visualization of structures like the binary tree, stack, etc.",
      "Focused on the visualization of sorting like quicksort, selectsort, etc.",
      "Learned how to solve problems efficiently, sorting data, organization of code. ",
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
    name: "Todo List",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
