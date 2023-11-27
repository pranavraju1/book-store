import React from "react";
import { FaSearch } from "react-icons/fa";
import bookheart from "../images/bx_bx-book-heart.png";
import daimond from "../images/fluent_premium-person-20-regular.png";
import bell from "../images/ic_round-notifications-none.png";
import avtar from "../images/IMG20210528181544.png";
const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="nav-v">KeazonBOOKS</div>
      <div className="nav-search" style={{ display: "flex" }}>
        <div className="search" style={{ display: "flex" }}>
          <div className="search-icon">
            <FaSearch />
          </div>
          <input type="text" placeholder="" />
        </div>
        <button>Search</button>
      </div>
      <div className="nav-icons">
        <img src={bookheart} />
        <img src={bell} />
        <img src={daimond} />
        <img src={avtar} />
      </div>
    </nav>
  );
};

export default Navbar;
