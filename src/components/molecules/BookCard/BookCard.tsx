import {
  Box,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  linearProgressClasses,
  ThemeProvider,
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

  Reads: {
    display: "flex",
    whiteSpace: "nowrap",
    paddingTop: "16px",
  },
  myLibrarytrue:{},
  finishedfalse:{
    display: "flex",
    color: "#0365F2",
    textAlignment: "centre",
    justifyContent: "center",
    paddingBottom: "16px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px"
  },
  readingfalse:{
    display: "flex",
    color: "#0365F2",
    textAlignment: "centre",
    justifyContent: "center",
    paddingBottom: "16px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px"
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
    lineHeight: "20px"
  },
  readingtrue:{
    marginTop: "36px",
  },
  finishedtrue:{
    marginTop: "36px",
  },
  addToLibrary: {},
  explore: {
    marginTop: "36px",
  },
  spacing: {
    gap: Theme.spacing(4),
  },
  linearProgress: {

    width:"100% !important",
    height: "12px !important",
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: Theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#E1ECFC",
    },
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
  tags: Array<string>;
};

export interface BookCardComponentProps {
  book: Book;
  typeOfCard: string;
  changeBookStatus: (arg: Book) => void;
  isCategoryTab?: boolean;
}

const ButtonPropTypes: Record<string, ButtonAndBarParam> = {
  myLibrarytrue: {
    buttonVisiable: true,
    buttonText: "Add to Library",
    buttonClassName: "button1",
    startIcon: <Add />,
    linearBarVisible: false,
    linearBarValue: 0,
  },
  finishedfalse: {
    buttonVisiable: true,
    buttonText: "Read Again",
    buttonClassName: "button2",
    startIcon: null,
    linearBarVisible: true,
    linearBarValue: 100,
  },
  readingfalse: {
    buttonVisiable: true,
    buttonText: "Finished",
    buttonClassName: "button2",
    startIcon: null,
    linearBarVisible: true,
    linearBarValue: 30,
  },
  readingtrue: {
    buttonVisiable: false,
    buttonText: "",
    buttonClassName: undefined,
    startIcon: null,
    linearBarVisible: true,
    linearBarValue: 30,
  },
  finishedtrue: {
    buttonVisiable: false,
    buttonText: "Finished",
    buttonClassName: "button2",
    startIcon: null,
    linearBarVisible: true,
    linearBarValue: 100,
  },
};

interface ButtonAndBarParam {
  buttonVisiable: boolean;
  buttonText: string;
  buttonClassName:
    | "text"
    | "button1"
    | "button2"
    | "button3"
    | "button4"
    | "button5"
    | "outlined"
    | "contained"
    | undefined;
  startIcon: React.ReactNode | null;
  linearBarVisible: boolean;
  linearBarValue: number;
}

const styleSx = { paddingBottom: "14px" }

const CardSx = {
  width: "284px",
  height: "466px",
  borderRadius: "8px",
}
export const BookCardComponent = (props: BookCardComponentProps) => {
  const classes = useStyles();

  let typeOfCard = props.typeOfCard;
  let string = `${typeOfCard}${props.isCategoryTab}`;
  let buttonAndBar: ButtonAndBarParam = ButtonPropTypes[string];
  let boxClassName = classes[string];

  return (
    <ThemeProvider theme={Theme}>
      <Box data-testid="bookCard">
        <Card
          sx={CardSx}
        >
          <Link
            to={`/bookdetails/${props.book.id}`}
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              component="img"
              height="294.1px"
              width="292px"
              src={props.book.imageLink}
            />
            <CardContent
              className={classes.spacing}
              style={styleSx}
            >
              <Box className={classes.titleOfBook}>
                <TypographyComponent
                  variant="subtitle2"
                  children={props.book.title}
                />
              </Box>
              <Box>
                <TypographyComponent
                  variant="body2"
                  color={Theme.palette.text_color.light}
                  children={props.book.author}
                />
              </Box>
              <Box className={classes.Reads}>
                <IconAndTextComponent
                  style={{paddingRight:"60px"}}
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
                  variant={buttonAndBar.buttonClassName}
                  children={buttonAndBar.buttonText}
                  startIcon={buttonAndBar.startIcon}
                  onClick={() => props.changeBookStatus(props.book)}
                />
              )}
            </Box>
            <Box>
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
    </ThemeProvider>
  );
};
