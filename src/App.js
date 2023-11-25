import React, { useState } from "react";
import "./AppStyle.css";
import Navbar from "./Components/Navbar";
import { BookProvider } from "./context/BookContext";
import Display from "./Components/Display";

const App = () => {
  const [searResults, setSearchResults] = useState(null);
  return (
    <BookProvider>
      <Navbar setSearchResults={setSearchResults} />
      <Display />
    </BookProvider>
  );
};

export default App;

// API key
// AIzaSyBCNSbUjeTH8RA42LHa-fVeMiTlI91yCO8
