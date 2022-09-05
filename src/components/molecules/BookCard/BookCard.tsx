import {
  Box,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  linearProgressClasses
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme as ReactTheme } from "@emotion/react";
import { TypographyComponent } from "../../atoms/Typography/Typography";
import { IconAndTextComponent } from "../IcontAndText/IconAndText";
import { ReactComponent as Time } from "./../../../assets/icons/time.svg";
import { ReactComponent as UserIcon } from "./../../../assets/icons/UserIcon.svg";
import Theme from "../../../Themes/themes";
import { ButtonComponent } from "../../atoms/Button/Button";
import Add from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

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
  },
  linearProgress: {
    height: "12px !important",
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: Theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#E1ECFC",
    },
  }
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
  changeBookStatus: (arg: Book) => void;
  bookObject: Array<Book>;
  isCategoryTab?: boolean;
}

const buttonPropTypes = {
  myLibrary: {
    buttonVisiable: true,
    buttonText: "Add to Library",
    buttonClassName: "button1",
    startIcon: <Add />,
    linearBarVisible: false,
    linearBarValue: 0
  },
  finished: {
    buttonVisiable: true,
    buttonText: "Read Again",
    buttonClassName: "button2",
    startIcon: null,
    linearBarVisible: true,
    linearBarValue: 100
  },
  reading:{
    buttonVisiable: true,
    buttonText: "Finished",
    buttonClassName: "button2",
    startIcon: null,
    linearBarVisible: true,
    linearBarValue: 30,
  },
  exploreReading:{
    buttonVisiable: false,
    buttonText: "",
    buttonClassName: "",
    startIcon: null,
    linearBarVisible: true,
    linearBarValue: 30,
  },
  exploreFinished:{
    buttonVisiable: false,
    buttonText: "Finished",
    buttonClassName: "button2",
    startIcon: null,
    linearBarVisible: true,
    linearBarValue: 100,
  }
}

interface buttonAndBarParam {
  buttonVisiable: boolean;
  buttonText: string,
  buttonClassName: string,
  startIcon: React.ReactNode | null,
  linearBarVisible: boolean,
  linearBarValue: number,
}

export const BookCardComponent = (props: BookCardComponentProps) => {
  const classes = useStyles();

  let typeOfCard = props.typeOfCard;
  let boxClassName = classes.addToLibrary;
  let linearBoxClassName = classes.addToLibrary;
  let buttonAndBar : buttonAndBarParam = buttonPropTypes.myLibrary;
  

  if (typeOfCard === "myLibrary") {
    buttonAndBar = buttonPropTypes.myLibrary;
  } else if (typeOfCard === "finished" && !props.isCategoryTab) {
    boxClassName = classes.finish;
    buttonAndBar = buttonPropTypes.finished;
  } else if (typeOfCard === "reading" && !props.isCategoryTab) {
    boxClassName = classes.finish;
    linearBoxClassName = classes.addToLibrary;
    buttonAndBar = buttonPropTypes.reading;
  } else if (props.isCategoryTab && props.typeOfCard !== "myLibrary") {
    linearBoxClassName = classes.explore;
    if (props.book.status === "reading") {    
    buttonAndBar = buttonPropTypes.exploreReading;
    } else {
      buttonAndBar = buttonPropTypes.exploreFinished;
    }
  }

  return (
    <Box data-testId="bookCard">
      <Card
        sx={{
          width: "284px",
          height: "466px",
          borderRadius: "8px",
        }}
      >
        <Link to={`/bookdetails/${props.book.id}`} style={{textDecoration:"none"}}>
        <CardMedia
          component="img"
          height="294.1px"
          width="292px"
          src={props.book.imageLink}
        />
        <CardContent className={classes.spacing} style={{paddingBottom:"16px"}}>
          <Box className={classes.titleOfBook}>
            <TypographyComponent
              className={classes.titleOfBook}
              variant="subtitle2"
              children={props.book.title}
            />
          </Box>
          <Box>
            <TypographyComponent
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
        </Link>
        <Box>
          <Box className={boxClassName}>
            {buttonAndBar.buttonVisiable === true && (
              <ButtonComponent
                className={buttonAndBar.buttonClassName}
                children={buttonAndBar.buttonText}
                startIcon={buttonAndBar.startIcon}
                onClick={()=>props.changeBookStatus(props.book)}
              />
            )}
          </Box>
          <Box className={linearBoxClassName}>
            {buttonAndBar.linearBarVisible === true && (
              <LinearProgress
                className={classes.linearProgress}
                variant="determinate"
                value={buttonAndBar.linearBarValue}
              />
            )}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
