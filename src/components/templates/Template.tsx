import { makeStyles, ThemeProvider } from "@mui/styles";
import React from "react";

import { Grid } from "@mui/material";
import Theme from "../../Themes/themes";
import { HeaderComponent } from "../organism/Header/Header";
import { FooterComponent } from "../molecules/Footer/Footer";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    position: "relative",
    margin: "0",
  },
  header: {
    position: "absolute",
    height: "86px",
    width: "100%",
    paddingTop: "30px",
  },
  body: {
    marginTop: "86px",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});
export type MyProps = {
  body: React.ReactNode;
};
const HeaderSx = {
  display: "flex",
  justifyContent: "center",
  paddingTop: "1%",
  paddingBottom: "2%",
};
const BodySx = {
  display: "flex",
  justifyContent: "center",
  minHeight: "43.06vh",
};
const FooterSx = {
  backgroundColor: "#F1F6F4",
  display: "flex",
  justifyContent: "center",
  mt: "60px",
};
export const RootTemplate = (props: MyProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Grid
        item
        container
        direction="column"
        display="flex"
        textAlign="left"
        justifyContent="center"
        data-testid="rootTemplate"
      >
        <Grid item sx={HeaderSx}>
          <HeaderComponent />
        </Grid>
        <Grid item sx={BodySx}>
          {props.body}
        </Grid>
        <Grid item sx={FooterSx}>
          <FooterComponent />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
