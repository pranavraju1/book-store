import React from "react";
import { useBookContext } from "../context/BookContext";

const Display = () => {
  const { title, disc, bookImg } = useBookContext();

  console.log("displaying display");
  console.log("Title:", title);
  console.log("Description:", disc);
  console.log("Image:", bookImg);

  return (
    <div>
      {/* <h2>Title: {title}</h2>
      <p>Description: {disc}</p>
      <img src={bookImg} alt="Book Cover" /> */}
      Display
    </div>
  );
};

export default Display;
