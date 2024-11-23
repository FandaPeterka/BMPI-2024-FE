// HomeContext.js
import React, { createContext, useContext } from "react";

const HomeContext = createContext();

export const useHomeContext = () => {
  return useContext(HomeContext);
};

const HomeProvider = ({ children }) => {
  const value = {
    
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeProvider;