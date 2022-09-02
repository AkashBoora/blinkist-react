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
import { Children } from "react";

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
  addToLibrary: {},
  explore: {
    marginTop: "36px",
  },
  spacing: {
    gap: Theme.spacing(4),
  }
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
  category: string;
  tags:Array<string>
};

export interface BookCardComponentProps {
  book: Book;
  typeOfCard?: string;
  onFinishedClick: (arg: any) => void;
  bookObject: Array<Book>;
  isCategoryTab?: boolean;
}
const buttonPropTypes = {
  myLibrary: {
    buttonVisiable: true,
    buttonText: "Add to Library",
    buttonClassName: "button1",
    boxClassName: "addToLibrary",
    startIcon: <Add />,
    linearBarVisible: false,
    linearBarValue: 0
  },
  finished: {
    buttonVisiable: true,
    buttonText: "Read Again",
    buttonClassName: "button2",
    boxClassName: "finish",
    startIcon: null,
    linearBarVisible: true,
    linearBarValue: 100
  },
  reading:{
    buttonVisiable: true,
    buttonText: "Finished",
    buttonClassName: "button2",
    boxClassName: "finish",
    linearBarVisible: true,
    linearBarValue: 30,
  }

}

export const BookCardComponent = (props: BookCardComponentProps) => {
  const classes = useStyles();
  const images = require.context("../../../assets/CoverPages", true);

  const typeOfCard = props.typeOfCard;
  let buttonClassName = "";
  let boxClassName = classes.addToLibrary;
  let linearBoxClassName = classes.addToLibrary;
  let linearBarValue = 0;
  let buttonVisiable = true;
  let buttonText = "";
  let linearBarVisible = true;
  let startIcon = undefined;

  if (typeOfCard === "myLibrary") {
    buttonVisiable = true;
    buttonText = "Add to Library";
    buttonClassName = "button1";
    boxClassName = classes.addToLibrary;
    startIcon = <Add />;
    linearBarVisible = false;
  } else if (typeOfCard === "finished" && !props.isCategoryTab) {
    buttonVisiable = true;
    buttonText = "Read Again";
    buttonClassName = "button2";
    boxClassName = classes.finish;
    linearBarVisible = true;
    linearBarValue = 100;
  } else if (typeOfCard === "reading" && !props.isCategoryTab) {
    buttonVisiable = true;
    buttonText = "Finished";
    buttonClassName = "button2";
    boxClassName = classes.finish;
    linearBarVisible = true;
    linearBarValue = 30;
  } else if (props.isCategoryTab && props.typeOfCard !== "myLibrary") {
    buttonVisiable = false;
    linearBoxClassName = classes.explore;
    linearBarVisible = true;
    if (props.book.status === "reading") {
      linearBarValue = 30;
    } else {
      linearBarValue = 100;
    }
  }

  return (
    <Box>
      <Card
        sx={{
          width: "284px",
          height: "466px",
          borderRadius: "8px",
          margin: "15px",
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
          <Box className={boxClassName}>
            {buttonVisiable === true && (
              <ButtonComponent
                className={buttonClassName}
                children={buttonText}
                startIcon={startIcon}
                onClick={props.onFinishedClick}
              />
            )}
          </Box>
          <Box className={linearBoxClassName}>
            {linearBarVisible === true && (
              <BorderLinearProgress
                variant="determinate"
                value={linearBarValue}
              />
            )}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
