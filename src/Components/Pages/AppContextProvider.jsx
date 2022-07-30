import React, { createContext, useEffect, useState } from "react";

export const DashboardContext = createContext();

const AppContextProvider = ({ children }) => {
  const [inputs, setInputs] = useState({
    fullName: "",
    displayName: "",
  });
  const values = {
    inputs,
    setInputs,
  };

  return (
    <DashboardContext.Provider value={values}>
      {children}
    </DashboardContext.Provider>
  );
};

export default AppContextProvider;
