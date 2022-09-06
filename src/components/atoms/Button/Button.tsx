import { Button, ButtonProps, StyledEngineProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
  }
});

export interface ButtonComponentProps extends ButtonProps {
  startIcon?: React.ReactNode;
  onClick?: any;
}

export const ButtonComponent = (props: ButtonComponentProps) => {
  const classes = useStyles();
  return (
    <StyledEngineProvider injectFirst>
      <Button data-testid="button"
        variant={props.variant}
        className={`${classes.button}`}
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
