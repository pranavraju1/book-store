import React from "react";
import { useBookContext } from "../context/BookContext";

const Display = () => {
  const { title, disc, bookImg } = useBookContext();
  // if (!bookImg[0].smallThumbnail == undefined) {
  //   return;
  // }

  console.log("displaying display");
  console.log("Title:", title);
  console.log("Description:", disc);
  // console.log("Image:", bookImg[0].smallThumbnail);
  // console.log(bookImg[0].smallThumbnail);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
      }}
    >
      {title &&
        title.map((value, index) => (
          <div key={index}>
            {bookImg[index] && bookImg[index].smallThumbnail ? (
              <img src={bookImg[index].smallThumbnail} />
            ) : (
              <p>No Image Available</p>
            )}
            <p style={{ color: "red", fontWeight: "bold" }}>{value}</p>
            <p>{disc[index]}</p>
          </div>
        ))}
    </div>
  );
};

export default Display;

// {/* <div className="row"> */}
// {title.map((item) => (
//   <div>{item}</div>
// ))}
// {/* </div> */}
