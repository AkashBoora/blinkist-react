import { Icon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TypographyComponent } from "../../atoms/Typography/Typography";

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
    fontFamily: "Cera Pro",
    alignItems: "center",
    gap: "8px",
  },
});

export interface IconAndTextComponentProps {
  iconSource: React.ReactNode;
  title?: string | JSX.Element;
  variant?:
    | "inherit"
    | "button"
    | "overline"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "heading"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "subtitle3"
    | "body3"
    | "caption1"
    | "caption2";
  className?: string;
  onClick?: (arg: any) => void;
  style?: React.CSSProperties;
  color?: any;
  src?: string;
}

export const IconAndTextComponent = (props: IconAndTextComponentProps) => {
  const styles = useStyles();
  return (
    <div className={styles.main} style={props.style} data-testid="iconAndText">
      <Icon>{props.iconSource}</Icon>
      <img src={props.src} alt={props.src}></img>
      <TypographyComponent
        variant={props.variant}
        color={props.color}
        className={`${props.className}`}
        onClick={props.onClick}
      >
        {props.title}
      </TypographyComponent>
    </div>
  );
};
