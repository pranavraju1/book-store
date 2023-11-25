import React, { useState } from "react";
import image from "../images/Standard Collection 11.png";
import axios from "axios";
import { useBookContext } from "../context/BookContext";
const Navbar = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bigdata, setBigData] = useState(null);
  const { setBookData } = useBookContext();
  function implementSearch(e) {
    if (e) {
      e.preventDefault();
    }
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: searchTerm,
        },
      })
      .then((res) => {
        setBigData(res.data.items);
        console.log(res.data.items);
        const title = res.data.items.map(getTitle);
        const disc = res.data.items.map(getDisc);
        const bookImg = res.data.items.map(getImg);
        // console.log(title);
        // console.log(disc);
        // console.log(bookImg);
        setBookData(title, disc, bookImg);
      });
  }

  function getTitle(item) {
    return item.volumeInfo.title;
  }
  function getDisc(item) {
    return item.volumeInfo.description;
  }
  function getImg(item) {
    return item.volumeInfo.imageLinks;
  }

  return (
    <div className="navbar">
      <div id="nav-logo">
        <img src={image} alt="" />
      </div>
      <div className="navbar-text1">KeazoN</div>
      <div className="navbar-text2">Books</div>
      <div className="nav-in">
        <form onSubmit={implementSearch}>
          <input
            type="text"
            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
