import { Button, ButtonProps, StyledEngineProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Theme from "../../../Themes/themes";

const useStyles = makeStyles({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "none",
    fontFamily: "Cera Pro",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
  },
  button1: {
    position: "relative",
    width: "284px",
    height: "52px",
    backgroundColor: "white",
    color: Theme.palette.secondary.main,
    boxShadow: "none",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    "&:hover": {
      backgroundColor: Theme.palette.secondary.main,
      color: "white",
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
    },
  },
  button2: {
    width: "163px",
    height: "20px",
    backgroundColor: "White",
    color: Theme.palette.secondary.main,
    lineHeight: "20px",
    outline: "none",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  },
  button3: {
    width: "122px",
    height: "44px",
    backgroundColor: "White",
    color: Theme.palette.primary.main,
    outline: "none",
    border: "solid 1px black",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "White",
      color: Theme.palette.text_color.main,
      boxShadow: "none",
      border: "solid 1px black",
    },
  },
  button4: {
    height: "44px",
    width: "170px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    lineHeight: "20.11px",
    position: "relative",
    backgroundColor: "#2ce080",
    color: Theme.palette.text_color.main,
    "&:hover": {
      backgroundColor: "#00C263",
    },
  },
  button5: {
    height: "44px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    lineHeight: "20.11px",
    position: "relative",
    color: "#6D787E",
    padding: "12px 24px 12px 24px",
    "&:hover": {
      color: Theme.palette.text_color.main,
      backgroundColor: "white"
    },
  },
});

export interface ButtonComponentProps extends ButtonProps {
  startIcon?: React.ReactNode | undefined;
}

export const ButtonComponent = (props: ButtonComponentProps) => {
  const classes = useStyles();
  let className;
  if (props.className === "button1") {
    className = classes.button1;
  } else if (props.className === "button2") {
    className = classes.button2;
  } else if (props.className === "button3") {
    className = classes.button3;
  } else if (props.className === "button4") {
    className = classes.button4;
  } else if (props.className === "button5") {
    className = classes.button5;
  }
  return (
    <StyledEngineProvider injectFirst>
      <Button
        variant={props.variant}
        className={`${className} ${classes.button}`}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </Button>
    </StyledEngineProvider>
  );
};
