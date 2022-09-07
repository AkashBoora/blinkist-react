import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export interface TypographyComponentProps extends TypographyProps {
  children?: string | JSX.Element;
  name?: string;
}

export const TypographyComponent = (props: TypographyComponentProps) => {
  return (
    <Typography data-testid="typography"
      variant={props.variant}
      color={props.color}
      fontFamily={"Cera Pro"}
      style={props.style}
    >
      {props.children}{props.name}
    </Typography>
  );
};
