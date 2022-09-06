import { Grid } from "@mui/material";
import { TypographyComponent } from "../../atoms/Typography/Typography";
import { Book, BookCardComponent } from "../../molecules/BookCard/BookCard";

export interface CardsWithStatusProps {
  status?: string;
  books: Array<Book>;
  changeBookStatus: (arg: Book) => void;
  category: string;
  isCategoryTab?: boolean;
  style?: React.CSSProperties;
  seachText?: string;
}

const sxForGrid =
  {
    flexWrap: "wrap",
    margin: "0%",
    padding: "0%",
}
export const CardsWithStatusComponent = (props: CardsWithStatusProps) => {
  let filteredBooks = props.books.filter(check);


  function check(book: Book) {
    const { status, category, title, author } = book;
    return (
      props.status === status ||
      (props.isCategoryTab && (props.category === category && props.seachText===undefined)) || 
      (props.category === category && props.seachText!== undefined && (title.toLowerCase().includes(props.seachText) || author.toLowerCase().includes(props.seachText)))
    );
  }

  return (
    <Grid
      display="flex"
      style={props.style}
      sx={sxForGrid}
      gap="30px"
      data-testid="cardsWithState"
    >
      {filteredBooks.length > 0 && filteredBooks.map((book: Book) => {
        return (
          <div key={book.id}>
              <Grid item>
                <BookCardComponent
                  book={book}
                  typeOfCard={book.status}
                  changeBookStatus={props.changeBookStatus}
                  isCategoryTab={props.isCategoryTab}
                />
              </Grid>
          </div>
        );
      })}
      {filteredBooks.length === 0 && 
        <TypographyComponent
        variant="h5"
        fontFamily={"Cera Pro"}
        fontWeight="Bold"
        fontSize={"24px"}
        paddingLeft= "5%"
        color="#03314B"
      >
          No Results Found
      </TypographyComponent>
      }
    </Grid>
  );
};
