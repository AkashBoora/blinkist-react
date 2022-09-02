import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BannerComponent } from "../../molecules/Banner/Banner";
import { Book } from "../../molecules/BookCard/BookCard";
import { SearchBarComponent } from "../../molecules/SearchBar/SearchBar";
import { CardsWithStatusComponent } from "../../organisam/CardsWithStatus/CardsWithStatus";
import { FooterComponent } from "../../organisam/Footer/Footer";
import { HeaderComponent } from "../../organisam/Header/Header";
import { RootTemplate } from "../../templates/Template";
import axios from "axios";
import { HomePageTabComponent } from "../../organisam/HomePageTabs/HomePageTabs";

interface Props {
  type: string;
  onFinishedClick: (arg: Book) => void;
  books: Array<Book>;
  book: Book;
  setData: any;
}

function handleClick(book: Book) {
  console.log("Hello");
}
// const Entrepreneurship = (props: { book: data[]; setData: any }) => {
export const MyLibraryPageComponent = () => {
  const [bookData, setBookData] = useState<Book[]>([]);
  const [dataModifiedToggle, setDataModifiedToggle] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/dataBase")
      .then((res: any) => {
        setBookData(res.data);
      })
      .catch((error: any) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/dataBase")
      .then((res: any) => {
        setBookData(res.data);
      })
      .catch((error: any) => console.log(error));
  }, [dataModifiedToggle]);

  async function changeBookStatus(book: Book) {
    if (book.status === "myLibrary") {
      book.status = "reading";
    } else if (book.status === "reading") {
      book.status = "finished";
    } else {
      book.status = "reading";
    }
    await axios.put(`http://localhost:3000/dataBase/${book.id}`, book);
    setDataModifiedToggle((prevState: boolean) => !prevState);
  }
  return (
    <RootTemplate
      header={<HeaderComponent></HeaderComponent>}
      body={
        <div>
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
      }
      footer={<FooterComponent></FooterComponent>}
    />
  );
};
