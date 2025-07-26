import {
  faArtstation,
  faInstagram,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  IconBrandBlender,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLinkedin,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
} from "@tabler/icons-react";
import { FileText, Github, Mail } from "lucide-react";

export const admin = {
  name: "Ashwin Kumar",
  email: "ashwin12kumar07@gmail.com",
  mailto: {
    url: "mailto:ashwin12kumar07@gmail.com",
    icon: Mail,
    label: "Email",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/ashwin-kumar-221160240/",
    icon: IconBrandLinkedin,
    label: "LinkedIn",
  },
  github: {
    url: "https://github.com/ashwnkumar",
    icon: IconBrandGithub,
    label: "Github",
  },
  resume: { url: "/assets/resume.pdf", icon: FileText, label: "Resume" },
  homeImage: "/assets/home.jpg",
  framesByAshwin: "https://www.instagram.com/frames.by.ashwin/",
  socialLinks: [
    {
      title: "Email",
      link: "mailto:ashwin12kumar07@gmail.com",
      icon: faEnvelope,
      color: "#34A853",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/ashwnkumar/",
      icon: faInstagram,
      color: "#E1306C",
    },
    {
      title: "X",
      link: "https://www.instagram.com/ashwnkumaar/",
      icon: faXTwitter,
      color: "#000000",
    },
    {
      title: "ArtStation",
      link: "https://www.artstation.com/ashwnkumar/",
      icon: faArtstation,
      color: "#42A5F5",
    },
  ],
  stack: [
    { label: "ReactJS", icon: IconBrandReact },
    { label: "MongoDB", icon: IconBrandMongodb },
    { label: "ExpressJS", icon: IconBrandNodejs },
    { label: "NodeJS", icon: IconBrandNodejs },
    { label: "React Native", icon: IconBrandReactNative },
    { label: "JavaScript", icon: IconBrandJavascript },
    { label: "HTML", icon: IconBrandHtml5 },
    { label: "CSS", icon: IconBrandCss3 },
    { label: "Blender", icon: IconBrandBlender },
    { label: "Figma", icon: IconBrandFigma },
  ],
  workExp: [
    {
      id: "ndss",
      company: "NDSoftTech Solutions",
      position: "SDE - Trainee",
      from: "Jul 2025",
      skills: [
        "ReactJS",
        "NodeJS",
        "JavaScript",
        "Express.js",
        "MongoDB",
        "NodeJS",
        "React Native",
        "TailwindCSS",
      ],
    },
    {
      id: "dreams",
      company: "Dreams International Pvt. Ltd.",
      position: "ReactJS Intern",
      from: "Nov 2024",
      to: "May 2025",
      work: [
        "Participated in end-to-end project development—from initial coding to final deployment—ensuring reliable performance in production environments.",
        "Developed numerous reusable React components to accelerate development and maintain a clean, scalable codebase.",
        "Took charge of complete UI redesigns for multiple projects, improving how they looked, felt, and performed.",
        "Worked closely with design teams and backend engineers to turn concepts into functional, polished web applications.",
      ],
      skills: ["ReactJS", "Axios", "JavaScript", "Figma", "TailwindCSS"],
    },
  ],
};
