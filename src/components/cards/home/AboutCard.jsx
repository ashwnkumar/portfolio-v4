import React from "react";
import { admin } from "../../../data/admin";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileText } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
// import Tooltip from "../../Tooltip"; // Optional

const AboutCard = () => {
  const handleDownnloadResume = () => {
    const link = document.createElement("a");
    link.href = admin.resume;
    link.download = "Ashwin-Kumar-Resume.pdf";
    link.click();
    link.remove();
    document.body.removeChild(link);
  };



  const actions = [
    {
      title: "Download Resume",
      url: admin.resume,
      icon: FileText,
      onClick: handleDownnloadResume,
    },
    { title: "Github", url: admin.github, icon: IconBrandGithub },
    { title: "LinkedIn", url: admin.linkedin, icon: IconBrandLinkedin },
  ];

  return (
    <div className="w-full flex flex-col gap-2 text-xl ">
      <h3 className="text-2xl">
        Hey there, I’m{" "}
        <span className="text-primary text-3xl font-medium">Ashwin.</span>
      </h3>
      <p>
        I'm a Computer Engineer based in Pune, Maharashtra, and I create things for the web.
      </p>
      <p>
        I love building full-stack web apps that are not just functional but feel great to use.

      </p>
      <p>My sweet spot is crafting clean interfaces and making sure they’re backed by solid logic on the backend.</p>
      <p>
        Outside of development, I’m into music, film, and photography — anything that tells a story or feels creative.
      </p>

      <div className="self-end flex items-center gap-5 ">
        {actions.map((action) => (
          // <Tooltip text={action.title} key={action.title}>

          <a
            href={action.url}
            target="_blank"
            rel="noreferrer"
            onClick={action.onClick ? action.onClick : null}
            key={action.title}
            className="hover:bg-dark"
          >
            <action.icon size={32} strokeWidth={1.5} />
          </a>
          // </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
