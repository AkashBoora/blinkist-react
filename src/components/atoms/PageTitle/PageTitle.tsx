import { Typography } from "@mui/material";
import Theme from "../../../Themes/themes";

export interface PageTitleProps {
  title: string;
}

export const PageTitleComponent = (props: PageTitleProps) => {
  return (
    <Typography
      variant="heading"
      component="h2"
      fontFamily={"Cera Pro"}
      style={{
        color: Theme.palette.text_color.main,
        marginBottom: Theme.spacing(16),
        marginTop: Theme.spacing(6),
        fontSize: "24px",
        lineHeight:" 30px"
      }}
    >
      {props.title}
    </Typography>
  );
};
