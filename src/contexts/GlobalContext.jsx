import { createContext, useContext, useEffect, useState } from "react";
import adminData from "../data/admin.json";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    setAdmin(adminData);
  }, []);
  return (
    <GlobalContext.Provider value={{ admin }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
