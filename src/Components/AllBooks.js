import React, { useEffect, useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

// we will be using useEffect to do the fetch call
// useState to store all the books
const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const globalContext = useContext(GlobalContext);
  useEffect(() => {
    async function getAllBooks() {
      let books = [];
      const res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
      );
      const data = await res.json();
      console.log(data.items);
      const res2 = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Homes"
      );
      const data2 = await res2.json();
      books = [...data.items, ...data2.items];
      setAllBooks(books);
    }
    getAllBooks();
  }, []);

  function clickedBook(e, ID) {
    e.preventDefault();
    let bookName,
      authorName,
      disc,
      avgrating,
      ratingCount,
      publisher,
      language,
      pubDate;
    allBooks.length > 0 &&
      allBooks.map((book) => {
        if (ID == book.id) {
          bookName = book.volumeInfo.title;
          authorName = book.volumeInfo.authors[0];
          publisher = book.volumeInfo.publisher;
          pubDate = book.volumeInfo.publishedDate;
          disc = book.volumeInfo.description;
          // if(book.volumeInfo.averageRating)
          avgrating = book.volumeInfo.averageRating;
          // if(book.volumeInfo.ratingsCount)
          ratingCount = book.volumeInfo.ratingsCount;
          language = book.volumeInfo.language;
        }
      });
    let globalObj = {
      bookName: bookName,
      authorName: authorName,
      publisher: publisher,
      pubDate: pubDate,
      disc: disc,
      averageRating: avgrating,
      ratingCount: ratingCount,
      language: language,
    };
    // console.log(globalObj);
    globalContext.setGlobalObj(globalObj);
  }
  return (
    <div className="all-books">
      <h3>More Books</h3>
      <div
        className="books-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        {allBooks.length > 0 &&
          allBooks.map((book) => {
            return (
              <div key={book.id} onClick={(e) => clickedBook(e, book.id)}>
                <img src={book.volumeInfo.imageLinks.thumbnail} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllBooks;
