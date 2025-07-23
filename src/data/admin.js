import { faArtstation, faInstagram, faPinterest, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export const admin = {
  name: "Ashwin Kumar",
  email: "ashwin12kumar07@gmail.com",
  linkedin: "https://www.linkedin.com/in/ashwin-kumar-221160240/",
  github: "https://github.com/ashwnkumar",
  resume: "/assets/resume.pdf",
  homeImage: "/assets/home.jpg",
  socialLinks: [
    { title: "Instagram", link: "https://www.instagram.com/ashwnkumar/", icon: faInstagram, color: "#E1306C" },
    { title: "X", link: "https://www.instagram.com/ashwnkumaar/", icon: faXTwitter, color: "#000000" },
    { title: "ArtStation", link: "https://www.artstation.com/ashwnkumar/", icon: faArtstation, color: "#42A5F5" },
    // { title: "Pinterest", link: "https://www.pinterest.com/ashwnkumar07", icon: faPinterest, color: "#E60023" },

  ],
  workExp: [
    {
      _id: "ndss",
      company: "NDSoftTech Solutions",
      position: "SDE - Trainee",
      from: "Jul 2025",
      skills: ["ReactJS", "NodeJS", "JavaScript", "Express.js", "MongoDB", "NodeJS", "React Native", "TailwindCSS"]
    },
    {
      _id: "dreams",
      company: "Dreams International Pvt. Ltd.",
      position: "ReactJS Intern",
      from: "Nov 2024",
      to: "May 2025",
      work: [
        "Participated in end-to-end project development—from initial coding to final deployment—ensuring reliable performance in production environments.",
        "Developed numerous reusable React components to accelerate development and maintain a clean, scalable codebase.",
        "Took charge of complete UI redesigns for multiple projects, improving how they looked, felt, and performed.",
        "Worked closely with design teams and backend engineers to turn concepts into functional, polished web applications."
      ],
      skills: ["ReactJS", "Axios", "JavaScript", "Figma", "TailwindCSS"]
    },
  ]
};
