import { link } from "fs";
import { sub } from "motion/react-client";
import React from "react";


export const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
    subItems: [
      { link: "#web-development", name: "Web Development" },
      { link: "#graphic-design", name: "Graphic Design" },
      { link: "#seo", name: "SEO" },
      { link: "#digital-marketing", name: "Digital Marketing" },
      { link: "#social-media-management", name: "Social Media Management" },
    ],
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "NewsLetter",
    link: "#newsletter",
  },
  {
    name: "Contact Us",
    link: "#contact",
  },
];

export const GridItem = [
  {
    id: 1,
    title: "I prioritize workplace collaboration and foster open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently, pursuing a Bachelor's degree in Software Engineering at SZABIST Karachi",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];