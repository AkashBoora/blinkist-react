import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Book } from "../../molecules/BookCard/BookCard";
import { CardsWithStatusComponent } from "../../organisam/CardsWithStatus/CardsWithStatus";
import { FooterComponent } from "../../organisam/Footer/Footer";
import { HeaderComponent } from "../../organisam/Header/Header";
import { RootTemplate } from "../../templates/Template";
import axios from "axios";



export const CategoryResultsComponent = () => {
  let url = window.location.href;
  let category = url.slice(30);
  category = category.replaceAll("%20"," ");
  console.log(url);
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
        <div style={{ justifyContent: "center" }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
              justifyContent: "center",
            }}
            gap="30px"
          >
            <Typography
              variant="h5"
              fontFamily={"Cera Pro"}
              fontWeight="Bold"
              fontSize={"36px"}
              color="#03314B"
            >
                {category} Category Results
            </Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                width: "912px",
              }}
            >
              <CardsWithStatusComponent
                isCategoryTab={true}
                books={bookData}
                changeBookStatus={changeBookStatus}
                category={category.toLowerCase()}
              />
            </Box>
          </Box>
        </div>
      }
      footer={<FooterComponent></FooterComponent>}
    />
  );
};
