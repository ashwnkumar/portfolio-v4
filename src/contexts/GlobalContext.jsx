import { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [theme, setTheme] = useState(document.body.getAttribute("theme") || "dark");

  useEffect(() => {


    const theme = localStorage.getItem("theme");
    if (theme) {
      document.body.setAttribute("theme", theme);
      setTheme(theme);
    }
  }, []);
  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
