import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    document.body.getAttribute("theme") || "dark"
  );

  return <div className="grid grid-cols-2 grid-rows-2"></div>;
};

export default ThemeSwitcher;
