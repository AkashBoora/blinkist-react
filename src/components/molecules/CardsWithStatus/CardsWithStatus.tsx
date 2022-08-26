import { Grid } from "@mui/material";
import { Book, BookCardComponent } from "../BookCard/BookCard";

export interface CardsWithStatusProps {
  status: string;
  books: Array<Book>;
  onClick: (arg:Book) => void;
}

export const CardsWithStatusComponent = (props: CardsWithStatusProps) => {
  return (
    <Grid container 
    sx={{
      display: "flex",
      flexWrap: "wrap",
      margin:"0%",
      padding:"0%"
    }}>
      {props.books.map((book: Book, index : number) => {
        const { status } = book;
        return (
          <div>
            {(props.status === status) && (
              <Grid  md={3} key={index} sx={{margin: "5%"}}>
                <BookCardComponent book={book} typeOfCard={book.status} onFinishedClick={props.onClick} bookObject={props.books}/>
              </Grid>
            )}
          </div>
        );
      })}
    </Grid>
  );
};
