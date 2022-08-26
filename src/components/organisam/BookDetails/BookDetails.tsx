import { Grid } from "@mui/material";
import { TypographyComponent } from "../../atoms/Typography/Typography";
import Theme from "../../../Themes/themes";
import { Book } from "../../molecules/BookCard/BookCard";
import { ButtonComponent } from "../../atoms/Button/Button";
import ArrowForword from "@material-ui/icons/ArrowForward";
import { IconAndTextComponent } from "../../molecules/IcontAndText/IconAndText";
import { ReactComponent as Time } from "./../../../assets/icons/time.svg";
import { TabsBookDetailComponent } from "../../molecules/TabsInBookDetails/TabsInBookDetailsTab";

export interface BookDeatailsProps {
  book: Book;
}

export const BookDetailsComponenet = (props: BookDeatailsProps) => {
  const images = require.context("../../../assets/CoverPages", true);
  return (
    <Grid container width="62.7%">
      <Grid item>
        <Grid container direction="row">
          <Grid item md={9}>
            <Grid container direction="column" rowSpacing={10}>
              <Grid item>
                <TypographyComponent
                  variant="body2"
                  color={Theme.palette.text_color.main}
                  name="Get the key ideas from"
                />
              </Grid>
              <Grid item>
                <Grid container direction="column" rowSpacing={4}>
                  <Grid item>
                    <TypographyComponent
                      variant="heading"
                      color={Theme.palette.text_color.main}
                    >
                      {props.book.title}
                    </TypographyComponent>
                  </Grid>
                  <Grid item>
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
                      <span>By {props.book.author}</span>
                    </TypographyComponent>
                  </Grid>
                  <Grid item>
                    <IconAndTextComponent
                      iconSource={<Time />}
                      variant="caption1"
                      title={`${props.book.readTime} minutes`}
                      color={Theme.palette.text_color.light}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item marginTop={Theme.spacing(20)}>
                <Grid container direction="row" columnSpacing={5}>
                  <Grid item>
                    <ButtonComponent
                      className="button3"
                      variant="outlined"
                      children="Readnow"
                    />
                  </Grid>
                  <Grid item>
                    <ButtonComponent
                      className="button4"
                      variant="contained"
                      children="Finish Reading"
                    />
                  </Grid>
                  <Grid item></Grid>
                  <ButtonComponent
                    className="button5"
                    variant="text"
                    children="send to Kindle"
                    endIcon={<ArrowForword />}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} marginTop={Theme.spacing(18)}>
            <img
              src={images(`./${props.book.imageLink}`)}
              alt="BookCoverPage"
              style={{ width: "21.3vw", height: "21.3vw" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item marginTop={Theme.spacing(15)} md={10}>
        <TabsBookDetailComponent />
      </Grid>
    </Grid>
  );
};
