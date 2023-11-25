import { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [disc, setDisc] = useState("");
  const [bookImg, setBookImg] = useState("");

  const setBookData = (title, disc, bookImg) => {
    setTitle(title);
    setDisc(disc);
    setBookImg(bookImg);
  };

  return (
    <BookContext.Provider value={{ title, disc, bookImg, setBookData }}>
      {children}
    </BookContext.Provider>
  );
};
