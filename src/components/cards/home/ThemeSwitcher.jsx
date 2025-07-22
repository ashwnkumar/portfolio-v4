import React, { useState } from "react";
import { useGlobal } from "../../../contexts/GlobalContext";
import { Barcode, Moon, Rabbit, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useGlobal()

  const themes = [
    { name: "Dark", key: "dark", icon: Moon },
    { name: "Light", key: "light", icon: Sun },
    { name: "Neo", key: "matrix", icon: Rabbit },
    { name: "2049", key: "cyberpunk", icon: Barcode },
  ]

  const changeTheme = (theme) => {
    document.body.setAttribute("theme", theme);
    setTheme(theme);
  }


  return <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-5 p-5">
    {themes.map((item) => (
      <button onClick={() => changeTheme(item.key)} key={item.key} className="group flex flex-col items-center justify-center gap-2 cursor-pointer">
        <span className={` bg-dark p-3 rounded-full z-10 border border-border ${item.key === theme ? "bg-primary text-dark" : "hover:bg-hover"}`}>
          <item.icon size={28} strokeWidth={1.5} />
        </span>
        <p className="text-base -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">{item.name}</p>
      </button>
    ))}
  </div>;
};

export default ThemeSwitcher;
