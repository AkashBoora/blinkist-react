import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BannerComponent } from "../../molecules/Banner/Banner";
import { Book } from "../../molecules/BookCard/BookCard";
import { SearchBarComponent } from "../../molecules/SearchBar/SearchBar";
import { CardsWithStatusComponent } from "../CardsWithStatus/CardsWithStatus";
import { fetchAllBooks, updateBook } from "../../../APIs";

let category = "";
export const ExplorePageBodyComponent = () => {
  let url = window.location.href;
  category = url.slice(30).replaceAll("%20", " ");

  const [bookData, setBookData] = useState<Book[]>([]);
  const [dataModifiedToggle, setDataModifiedToggle] = useState(false);
  const [searchText, setSearchText] = useState("");
  console.log(category);
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
    updateBook(book);
    setDataModifiedToggle((prevState: boolean) => !prevState);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value !== "") {
      setSearchText(event.target.value);
    }
    console.log("hello");
    setDataModifiedToggle((prevState: boolean) => !prevState);
  }
  return (
    <div
      style={{ justifyContent: "center" }}
      data-testid="explorePageComponent"
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          justifyContent: "center",
        }}
        gap="30px"
      >
        <BannerComponent />
        <Box>
          <SearchBarComponent handleChange={handleChange} />
        </Box>

        <Box
          data-testid="bookData"
          sx={{ paddingTop: "1%" }}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "912px",
          }}
        >
          <CardsWithStatusComponent
            style={{ paddingTop: "2%" }}
            isCategoryTab={true}
            books={bookData}
            category={category.toLowerCase()}
            changeBookStatus={changeBookStatus}
            seachText={searchText.toLowerCase()}
          />
        </Box>
      </Box>
    </div>
  );
};