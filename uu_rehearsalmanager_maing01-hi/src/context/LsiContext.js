import React, { createContext, useContext, useState } from "react";
import importLsi from "../lsi/import-lsi.js";

const LsiContext = createContext();

export const useLsiContext = () => {
  return useContext(LsiContext);
};

const LsiProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LsiContext.Provider value={{ language, changeLanguage, importLsi }}>
      {children}
    </LsiContext.Provider>
  );
};

export default LsiProvider;