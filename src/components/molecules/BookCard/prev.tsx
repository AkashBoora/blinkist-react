import { ThemeContext } from "@emotion/react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useState } from "@storybook/addons";
import { Theme as ReactTheme } from "@emotion/react";
import { TypographyComponent } from "../../atoms/Typography/Typography";
import { IconAndTextComponent } from "../IcontAndText/IconAndText";
import { ReactComponent as Time } from "./../../../assets/icons/time.svg";
import { ReactComponent as UserIcon } from "./../../../assets/icons/UserIcon.svg";
import { ReactComponent as Entreprenuer } from "./../../../assets/icons/entrepreneurship.svg";
import Theme from "../../../Themes/themes";
import { ButtonComponent } from "../../atoms/Button/Button";
import Add from "@material-ui/icons/Add";

const useStyles: any = makeStyles((theme: ReactTheme) => ({
  flexGrow: {
    flex: "1",
  },
  titleOfBook: {
    color: "#03314B",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "23px",
    paddingBottom: "8px",
    fontFamily: "Cera Pro",
  },
  authorName: {
    color: "#6D787E",
    fontWeight: "500",
    fontSize: "16px",
    fontFamily: "Cera Pro",
    lineHeight: "20px",
    paddingTop: "16px",
  },

  Reads: {
    display: "flex",
    justifyContent: "space-between",
    whiteSpace: "nowrap",
    paddingTop: "16px",
  },
  finish: {
    display: "flex",
    color: "#0365F2",
    textAlignment: "centre",
    justifyContent: "center",
    paddingBottom: "16px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
  },
  spacing: {
    gap: Theme.spacing(4),
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "12px",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: Theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#E1ECFC",
  },
}));

export type Book = {
  id: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  readTime: string;
  readersCount: string;
  status: string;
};

export interface BookCardComponentProps {
  book: Book;
  typeOfCard?: string;
  onFinishedClick: (arg: any) => void;
  bookObject: Array<Book>;
}

export const BookCardComponent = (props: BookCardComponentProps) => {
  const classes = useStyles();
  const images = require.context("../../../assets/CoverPages", true);
  const typeOfCard = props.typeOfCard;
  return (
    <Box>
      <Card
        sx={{
          width: "284px",
          height: "466px",
          borderRadius: "8px",
          margin: "15px"
        }}
      >
        <CardMedia
          component="img"
          height="294.1px"
          width="292px"
          src={images(`./${props.book.imageLink}`)}
        />
        <CardContent className={classes.spacing}>
          <Box className={classes.titleOfBook}>
            <TypographyComponent
              className={classes.titleOfBook}
              variant="subtitle2"
              children={props.book.title}
            />
          </Box>
          <Box>
            <Typography
              className={classes.authorName}
              variant="subtitle3"
              children={props.book.author}
            />
          </Box>
          <Box className={classes.Reads}>
            <IconAndTextComponent
              iconSource={<Time />}
              variant="caption1"
              title={`${props.book.readTime} minutes`}
              color={Theme.palette.text_color.light}
            />
            <IconAndTextComponent
              iconSource={<UserIcon />}
              variant="caption1"
              title={props.book.readersCount}
              color={Theme.palette.text_color.light}
            />
          </Box>
        </CardContent>
        <Box>
          {typeOfCard === "myLibrary" && (
            <Box>
              <ButtonComponent
                children="Add to Library"
                className="button1"
                startIcon={<Add />}
                onClick={props.onFinishedClick}
              />
            </Box>
          )}

          {typeOfCard === "finished" && (
            <Box>
              <Box className={classes.finish}>
                <ButtonComponent
                  children="Read Again"
                  startIcon={undefined}
                  className="button2"
                />
              </Box>
              <BorderLinearProgress variant="determinate" value={100} />
            </Box>
          )}

          {typeOfCard === "reading" && (
            <Box>
              <Box className={classes.finish}>
                <ButtonComponent
                  children="Finished"
                  startIcon={undefined}
                  className="button2"
                />
              </Box>
              <BorderLinearProgress variant="determinate" value={30} />
            </Box>
          )}
          {typeOfCard === "explore" && (
            <Box sx={{marginTop:"36px"}}>
              <BorderLinearProgress variant="determinate" value={30} />
            </Box>
          )}
        </Box>
      </Card>
    </Box>
  );
};
