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
    TJX_Symbol,
    workhub_icon,
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
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Storybook Champion",
      icon: backend,
    },
    {
      title: "put stuff here 2",
      icon: creator,
    },
    {
      title: "put stuff here 3",
      icon: creator,
    },
    {
      title: "put stuff here 4",
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
      title: "Junior Software Development Intern",
      company_name: "Workhub",
      icon: workhub_icon,
      iconBg: "#DFE1DE",
      date: "May 2024  - September 2024 ",
      points: [
        "Gained hands-on experience in full-stack development by working with SQL, .NET APIs, and frontend to create and enhance web pages.",
        "Continued improving Storybook by ensuring compatibility with Angular 15, streamlining the development and testing of UI components for future upgrades.",
        "Collaborated closely with cross-functional teams to implement full-stack features, improving user experience and performance across multiple applications.",
      ],
    },
    {
      title: "Junior Software Development Intern",
      company_name: "Workhub",
      icon: workhub_icon,
      iconBg: "#DFE1DE",
      date: "May 2023   - September 2023 ",
      points: [
        "Demonstrated proficiency in HTML/CSS and TypeScript to implement changes and enhancements, such as modifying buttons, styling elements, and optimizing UI components to meet design and functionality requirements",
        "Designed and developed custom global UI components, including chip components, tooltip components, priority pill components, chip filters, and more.",
        "Utilized Storybook, a development environment tool, to create and showcase a centralized repository and playground for UI components, streamlining development, testing, and documentation processes for the development teams.",
      ],
    },
    {
      title: "Sales Associate	",
      company_name: "Winners ",
      icon: TJX_Symbol,
      iconBg: "#ffff",
      date: "May 2022 - April 2023",
      points: [
        "Greet customers in a friendly manner; be knowledgeable to answer questions regarding merchandise items, prices, and brands and provide information on promotions, TJX Canada policies, and procedures, events, and store locations.",
        "Handle cash registers and demonstrate a high degree of customer service while processing all refunds, exchanges, and purchases in accordance with company guidelines.",
        "Ensure all merchandise is received, processed and merchandise presentation standards are maintained.",
        "Perform the assigned maintenance duties efficiently.",
        "Assist with Fitting Room duties including ensuring the counter area is clean, organized, and has the proper supplies in place and assisting customer inquiries.",
        "Reporting suspicious behaviors to managers to prevent theft and promote the safety of employees and customers.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };