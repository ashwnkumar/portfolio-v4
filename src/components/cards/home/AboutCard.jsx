import React, { useState } from "react";
import { admin } from "../../../data/admin";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

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
      icon: faFileLines,
      onClick: handleDownnloadResume,
    },
    { title: "Github", url: admin.github, icon: faGithub },
    { title: "LinkedIn", url: admin.linkedin, icon: faLinkedin },
  ];

  return (
    <div className="w-full  flex flex-col items-start justify-between mt-2 gap-2 text-xl">
      <h3 className="text-2xl">
        Hello world. I'm{" "}
        <span className="text-primary font-secondary">{admin.name}</span>
      </h3>
      <FontAwesomeIcon icon="fa-solid fa-download" />
      <p className="">
        I'm a{" "}
        <span className="text-primary font-secondary tracking-wider">
          MERN Stack Developer
        </span>{" "}
        based out of Pune, Maharashtra, India. I love building web application
        and especially{" "}
        <span className="text-primary font-secondary">
          User Facing Interfaces
        </span>
        . When I'm not coding, you'll find me either jamming to music, watching
        movies fiddling with the camera.
      </p>
      <div className="self-end flex items-center justify-center gap-5">
        {actions.map((action) => (
          <a
            href={action.url}
            target="_blank"
            rel="noreferrer"
            onClick={action.onClick ? action.onClick : null}
            key={action.title}
            className="hover:bg-dark"
          >
            <FontAwesomeIcon icon={action.icon} size="xl" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
