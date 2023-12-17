import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  jquery,
  bootstrap,
  git,
  figma,
  sketch,
  tatvasoft,
  viitorcloud,
  bookstore,
  blogapp,
  freelancer,
  movieapp,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    icon: "about"
  },
  {
    id: "work",
    title: "Work",
    icon:"work"
  },
  {
    id: "contact",
    title: "Contact",
    icon: "contact"
  },
];

const services = [
  {
    title: "Web Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: web,
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
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Sketch",
    icon: sketch,
  },
];

const experiences = [
  {
    title: "Web Designer",
    company_name: "TatvaSoft",
    icon: tatvasoft,
    iconBg: "#FEFEFE",
    date: "Jan 2018 - Dec 2020",
    points: [
      "Design web applications / PWA / SPAs / Email Templates / Invoices",
      "Add beautiful animations to UI",
      "Convert mockup files to pixel perfect UI (Figma, Invision, InDesign, Sketch, Photoshop, Photopea)",
      "Mentoring junior developers",
      "Communicate with client on daily basis to ensure smooth development",
      "Technologies for designing: HTML, CSS, JavaScript, jQuery, SCSS, LESS, Bootstrap, Material UI, Tailwind CSS, React, Angular, Vue, HubSpot, Magento, Shopify, WordPress animation css libraries, third party libraries customization components like carousel, dropdown etc..",
      "Version control with: Git, GitHub, GitLab, Gerrit",
      "IDE: Visual Studio Code, Sublime",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Viitorcloud Technologies Pvt. Ltd.",
    icon: viitorcloud,
    iconBg: "#383E56",
    date: "Jan 2021 - Oct 2023",
    points: [
      "Design & develop websites / PWA / SPAs / Email Templates using agile, scrum methodology",
      "Add beautiful animations to UI",
      "Convert mockup files to pixel perfect UI (Figma, Invision, InDesign, Sketch, Photoshop, Photopea)",
      "Conduct training programs for interns",
      "Support in technical interviews for hiring",
      "Technologies for development: React, Redux, Typescript, ES6, JavaScript, Reactstrap, React Material UI, ajax, axios",
      "Testing with Jest, React Testing Library",
      "API integration",
      "Technologies for designing: Styled Component, HTML, CSS, JavaScript, jQuery, SCSS, LESS, Bootstrap, Laravel, WordPress, Material UI, Tailwind CSS, React, Angular, Vue, Framer motion, animation CSS libraries, third party libraries customization components like carousel, dropdown etc..",
      "Version control with: Git, GitHub, GitLab, Gerrit",
      "IDE: Visual Studio Code",
    ],
  },
  {
    title: "React Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#FEFEFE",
    date: "Oct 2023 - Present",
    points: [
      "Design & develop multipurpose web platform using React, Typescript, ES6, JavaScript, React bootstrap, ajax",
      "Add beautiful animations to UI",
      "Convert mockup files to pixel perfect UI (Figma)",
      "Testing with Jest, React Testing Library",
      "API integration",
      "Version control with: Git, GitHub",
      "IDE: Visual Studio Code",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jenny proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Arme Corp",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jenny does.",
    name: "Chris Brown",
    designation: "CTO",
    company: "QRP Co",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "After Jenny optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CFO",
    company: "838 Regs",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const projects = [
  {
    name: "Book Store",
    description:
      "Web-based platform that allows users to search books from NY times APIs, and manage favourites, lists of pulications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "context-API",
        color: "yellow-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/maitri-97/book-store/tree/master",
  },
  {
    name: "Blog App",
    description:
      "Web application that enables users add, update, delete blog, see list of blogs of a particular blogger.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "json-server",
        color: "yellow-text-gradient",
      },
    ],
    image: blogapp,
    source_code_link: "https://github.com/maitri-97/redux-blog",
  },
  {
    name: "Movie App",
    description:
      "A web application for IMDB review of any movies, series.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://github.com/maitri-97/redux-movie-app",
  },
  {
    name: "3D Portfolio",
    description:
      "A web application for IMDB review of any movies, series.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/maitri-97/redux-movie-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
