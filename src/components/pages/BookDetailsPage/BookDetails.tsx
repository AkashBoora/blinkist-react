import { Box } from "@mui/material";
import { Book } from "../../molecules/BookCard/BookCard";
import { FooterComponent } from "../../organisam/Footer/Footer";
import { HeaderComponent } from "../../organisam/Header/Header";
import { RootTemplate } from "../../templates/Template";
import { BookDetailsComponenet } from "../../organisam/BookDetails/BookDetails";
import { useEffect, useState } from "react";
import axios from "axios";

export interface BookDetailsPageComponentProps {}


export const BookDetailsPageComponent = (
  props: BookDetailsPageComponentProps
) => {
  let url = window.location.href;
  let id = Number(url.slice(34));
  console.log(url);

  console.log(id);
  const [bookData, setBookData] = useState<Book>();
  const [dataModifiedToggle,setDataModifiedToggle] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/dataBase/${id}`)
      .then((res: any) => {
        setBookData(res.data);
      })
      .catch((error: any) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/dataBase/${id}`)
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
      header={<HeaderComponent />}
      body={
        <div>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              width: "912px",
              justifyContent: "center"
            }}
          >
            {bookData && <BookDetailsComponenet changeBookStatus={changeBookStatus} book={bookData} />}
          </Box>
        </div>
      }
      footer={<FooterComponent></FooterComponent>}
    />
  );
};
