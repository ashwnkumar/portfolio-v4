import React from "react";
import { admin } from "../../../data/admin";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUpRight, FileText } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Tooltip from "../../Tooltip";
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
    <div className="group w-full h-full flex flex-col items-start justify-around ">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl">
          Hey there, I'm{" "}
          <span className="text-primary font-medium  font-secondary">
            Ashwin Kumar
          </span>
        </h3>
        <Link
          to={"/about"}
          className="bg-card group-hover:bg-primary group-hover:text-dark border border-border text-primary rounded-full p-2 group-hover:rotate-45 transition-all duration-300"
        >
          <ArrowUpRight />
        </Link>
      </div>
      <p className="text-xl md:text-2xl">
        I build things for the{" "}
        <span className="text-primary font-medium font-secondary">Web.</span>
      </p>
      <div className="w-full flex justify-end gap-3">
        {actions.map((action, index) => (
          <Tooltip key={index} text={action.title}>
            <a
              href={action.url}
              target="_blank"
              rel="noreferrer"
              onClick={action.onClick ? action.onClick : null}
              key={action.title}
              className=""
            >
              <action.icon size={28} strokeWidth={1.5} />
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
//  <a
//             href={action.url}
//             target="_blank"
//             rel="noreferrer"
//             onClick={action.onClick ? action.onClick : null}
//             key={action.title}
//             className="hover:bg-dark"
//           >
//             <action.icon size={32} strokeWidth={1.5} />
//           </a>
