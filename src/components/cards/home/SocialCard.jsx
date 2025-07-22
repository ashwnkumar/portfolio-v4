import React from "react";
import { admin } from "../../../data/admin";

const SocialCard = () => {
  const newLinks = admin.links.filter(
    (item) => item.title !== "Github" && item.title !== "LinkedIn"
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-row items-center justify-center gap-2">
        {newLinks.map((item) => (
          <a key={item.title} href={item.link} target="_blank" rel="noreferrer">
            <item.icon size={32} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialCard;
