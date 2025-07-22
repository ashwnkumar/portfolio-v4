import { faCss3Alt, faGithub, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faBlender, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { IconBrandBlender, IconBrandCss3, IconBrandGithub, IconBrandHtml5, IconBrandJavascript, IconBrandNodejs, IconBrandReact, IconDatabase } from "@tabler/icons-react";

export const admin = {
  name: "Ashwin Kumar",
  email: "ashwin12kumar07@gmailc.com",
  home: "/assets/home.jpg",
  resume: "/assets/resume.pdf",
  links: [
    { title: "Instagram", url: "https://www.instagram.com/ashwnkumar" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/ashwin-kumar-221160240" },
    { title: "ArtStation", url: "https://www.artstation.com/ashwnkumar" },
    { title: "X (formerly Twitter)", url: "https://www.twitter.com/ashwnkumaar" },
    { title: "Github", url: "https://github.com/ashwnkumar" }
  ],
  workExp: [
    {
      company: "NDSoftTech Solutions",
      position: "SDE - Trainee",
      from: "July 2025"
    },
    {
      company: "Dreams International",
      position: "ReactJS Intern",
      from: "Nov 2024",
      to: "May 2025"
    }
  ],

  techStack: [
    { label: "ReactJS", icon: IconBrandReact },
    { label: "NodeJS", icon: IconBrandNodejs },
    { label: "MongoDB", icon: IconDatabase },
    { label: "Express", icon: IconBrandNodejs },
    { label: "HTML", icon: IconBrandHtml5 },
    { label: "CSS", icon: IconBrandCss3 },
    { label: "JavaScript", icon: IconBrandJavascript },
    { label: "GitHub", icon: IconBrandGithub },
    { label: "Blender", icon: IconBrandBlender }
  ]
};
