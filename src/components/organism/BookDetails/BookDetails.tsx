import { Grid, ThemeProvider } from "@mui/material";
import { TypographyComponent } from "../../atoms/Typography/Typography";
import Theme from "../../../Themes/themes";
import { Book } from "../../molecules/BookCard/BookCard";
import { ButtonComponent } from "../../atoms/Button/Button";
import ArrowForword from "@material-ui/icons/ArrowForward";
import { IconAndTextComponent } from "../../molecules/IcontAndText/IconAndText";
import { ReactComponent as Time } from "./../../../assets/icons/time.svg";
import { TabsBookDetailComponent } from "../TabsInBookDetails/TabsInBookDetailsTab";
import { useEffect, useState } from "react";
import { fetchBookById, updateBook } from "../../../APIs";
import { useLocation } from "react-router-dom";


export const BookDetailsComponenet = () => {

  let id = Number(useLocation().pathname.slice(13));
  console.log(useLocation().pathname);

  const [book, setBookData] = useState<Book>();
  const [dataModifiedToggle,setDataModifiedToggle] = useState(false);

  useEffect(() => {
    fetchBookById(id).then((book:Book)=>{setBookData(book);});
  }, []);

  useEffect(() => {
    fetchBookById(id).then((book:Book)=>setBookData(book));
  }, [dataModifiedToggle]);

  async function changeBookStatus(book: any) {
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
  let buttonText;

  if(book?.status==="myLibrary"){
    buttonText = "Add to Library"
  }else if(book?.status === "reading"){
    buttonText = "Finished"
  }else {
    buttonText = "Read Again"
  }
  return (
    <ThemeProvider theme={Theme}>
    <Grid container data-testid="bookDetails" style={{display: "flex", justifyContent:"left", }}>
      <Grid item>
        <Grid container direction="row">
          <Grid item md={9}>
            <Grid container direction="column" rowSpacing={10}>
              <Grid item data-testid="top">
                <TypographyComponent
                  variant="body2"
                  color={Theme.palette.text_color.main}
                  name="Get the key ideas from"
                />
              </Grid>
              <Grid item data-testid="title">
                <Grid container direction="column" rowSpacing={4}>
                  <Grid item>
                    <TypographyComponent
                      variant="heading"
                      color={Theme.palette.text_color.main}
                    >
                      {book?.title}
                    </TypographyComponent>
                  </Grid>
                  <Grid item data-testid="tag">
                    <TypographyComponent
                      variant="subtitle1"
                      style={{ fontSize: "20px" }}
                      color={Theme.palette.text_color.main}
                    >
                      Turning Your Business into an Enduring Great Company
                    </TypographyComponent>
                  </Grid>
                  <Grid item>
                    <TypographyComponent
                      variant="body2"
                      color={Theme.palette.text_color.light}
                    >
                      <span>By {book?.author}</span>
                    </TypographyComponent>
                  </Grid>
                  <Grid item>
                    <IconAndTextComponent
                      iconSource={<Time />}
                      variant="caption1"
                      title={`${book?.readTime} minutes`}
                      color={Theme.palette.text_color.light}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item marginTop={Theme.spacing(20)}>
                <Grid container direction="row" columnSpacing={5}>
                  <Grid item>
                    <ButtonComponent
                      variant="button3"
                      children="Readnow"
                    />
                  </Grid>
                  <Grid data-testid="button" item>
                    <ButtonComponent
                      variant="button4"
                      children={buttonText}
                      onClick={()=>changeBookStatus(book)}
                    />
                  </Grid>
                  <Grid item></Grid>
                  <ButtonComponent
                    variant="button5"
                    children="send to Kindle"
                    endIcon={<ArrowForword />}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} marginTop={Theme.spacing(10)}>
            <img
              src={book?.imageLink}
              alt="BookCoverPage"
              style={{ width: "19vw", height: "19vw" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item marginTop={Theme.spacing(15)} md={10} display= "flex" justifyContent="left !important">
        <TabsBookDetailComponent />
      </Grid>
    </Grid>
    </ThemeProvider>
  );
};
