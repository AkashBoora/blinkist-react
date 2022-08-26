import { makeStyles } from "@mui/styles";
import Theme from "../../../Themes/themes";

const useStyles = makeStyles({
  root: {
    height: Theme.spacing(4),
    background: Theme.palette.background_color.light,
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
  semi: {
    height: "100%",
    background: "#E1ECFC",
    width: "40%",
    borderBottomLeftRadius: "8px",
  },
  full: {
    height: "100%",
    background: "#E1ECFC",
    width: "100%",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
});

export interface ProgrssBarComponentProps {
  type?: "semi" | "full";
}

export const ProgressBarComponent = (props: ProgrssBarComponentProps) => {
  const classes = useStyles();
  let style;
  if (props.type === "full") {
    style = classes.full;
  } else {
    style = classes.semi;
  }
  return (
    <div className={classes.root}>
      <div className={style}></div>
    </div>
  );
};
