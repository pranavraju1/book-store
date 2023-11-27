import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Detail = () => {
  const { globalObj } = useContext(GlobalContext);
  console.log(globalObj);
  return (
    <div>
      <h3 style={{ color: "red" }}>Title:{globalObj.bookName}</h3>
      <p>Author:{globalObj.authorName}</p>
      <p>Description{globalObj.disc}</p>
      <p>Language:{globalObj.language}</p>
      <p>Publisher:{globalObj.publisher}</p>
      <p>Published-Date:{globalObj.pubDate}</p>
      <p>Rating-count:{globalObj.ratingCount}</p>
      <p>Average-rating{globalObj.averageRating}</p>
    </div>
  );
};

export default Detail;
