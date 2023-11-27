import React from "react";
import Navbar from "./Components/Navbar";
import AllBooks from "./Components/AllBooks";
import Detail from "./Components/Detail";
import GlobalContextProvider from "./context/GlobalContextProvider";

const App = () => {
  return (
    <div>
      <GlobalContextProvider>
        <Navbar />
        <Detail />
        <AllBooks />
      </GlobalContextProvider>
    </div>
  );
};

export default App;

// API key
// AIzaSyBCNSbUjeTH8RA42LHa-fVeMiTlI91yCO8
