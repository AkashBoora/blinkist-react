import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Book } from "../../molecules/BookCard/BookCard";
import { HomePageTabComponent } from "../HomePageTabs/HomePageTabs";
import { fetchAllBooks, updateBook } from "../../../APIs";

export const MyLibraryPageBodyComponent = () => {
  const [bookData, setBookData] = useState<Book[]>([]);
  const [dataModifiedToggle, setDataModifiedToggle] = useState(false);

  useEffect(() => {
    fetchAllBooks().then((books) => setBookData(books));
  }, []);

  useEffect(() => {
    fetchAllBooks().then((books) => setBookData(books));
  }, [dataModifiedToggle]);

  async function changeBookStatus(book: Book) {
    if (book.status === "myLibrary") {
      book.status = "reading";
    } else if (book.status === "reading") {
      book.status = "finished";
    } else {
      book.status = "reading";
    }
    updateBook(book).catch(error=>console.error(error));
    setDataModifiedToggle((prevState: boolean) => !prevState);
  }
  return (
    <div data-testid="myLibraryPageBodyComponent">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: "912px",
        }}
      >
        <Typography
          variant="h5"
          fontFamily={"Cera Pro"}
          fontWeight="Bold"
          fontSize={"36px"}
          paddingBottom="3%"
          color="#03314B"
        >
          My Library
        </Typography>

        <HomePageTabComponent
          changeBookStatus={changeBookStatus}
          books={bookData}
        />
      </Box>
    </div>
  );
};
