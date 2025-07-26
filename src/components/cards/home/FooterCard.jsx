import React from "react";
import { admin } from "../../../data/admin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconCoffee } from "@tabler/icons-react";

const FooterCard = () => {
  const { socialLinks: links } = admin;
  return (
    <div className="w-full h-full flex flex-col items-center justify-between divide-y divide-border">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-3 pb-3">
        <div className="text-start">
          <h3 className="text-xl md:text-2xl flex items-center gap-2 text-primary">
            Let’s chat over virtual coffee{" "}
            <IconCoffee size={32} strokeWidth={1.5} />{" "}
          </h3>
          <p className="text-lg md:text-xl">
            Whether it’s ideas or feedback, I’m here for it.
          </p>
        </div>

        <div className="flex items-center gap-4  ">
          {links.map((item) => {
            return (
              <a
                href={item.link}
                key={item.title}
                target="_blank"
                rel="noreferrer"
                className="p-4 hover-link rounded-xl border border-border hover:text-gray-200 transition-all duration-300 ease-in-out"
                style={{
                  transition: "background-color 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <FontAwesomeIcon icon={item.icon} size="2xl" />
              </a>
            );
          })}
        </div>
      </div>
      <p className="text-sm"> &copy; 2025 Ashwin Kumar. All Rights Reserved</p>
    </div>
  );
};

export default FooterCard;
