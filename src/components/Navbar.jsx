import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const items = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Projects", url: "/projects" },
  ];

  return (
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-dark/30 border border-border rounded-full p-2 px-3 flex items-center gap-5 z-30">
      {items.map((item, index) => (
        <NavLink
          to={item.url}
          key={index}
          className={({ isActive }) =>
            `${isActive ? "bg-primary text-dark font-medium p-1 px-3 rounded-full" : ""}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
