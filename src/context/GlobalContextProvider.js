import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalContextProvider = ({ children }) => {
  const [globalObj, setGlobalObj] = useState(null);

  return (
    <GlobalContext.Provider value={{ globalObj, setGlobalObj }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
