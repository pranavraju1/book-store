import React, { useState } from "react";
import "./AppStyle.css";
import Navbar from "./Components/Navbar";
import Render from "./Components/Render";

const App = () => {
  const [searResults, setSearchResults] = useState(null);
  return (
    <div>
      <Navbar setSearchResults={setSearchResults}/>
      {/* <Render/> */}
    </div>
  ) 

};

export default App;

// API key
// AIzaSyBCNSbUjeTH8RA42LHa-fVeMiTlI91yCO8
