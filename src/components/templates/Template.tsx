import { makeStyles, ThemeProvider } from "@mui/styles";
import React from "react";

import { Grid } from "@mui/material";
import Theme from "../../Themes/themes";

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
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
};
export const RootTemplate = (props: MyProps) => {

  return (
    <ThemeProvider theme={Theme}>
      <Grid item container direction="column" display= "flex"
            justifyContent= "center" sx={{ textAlign: "left" }} data-testid="rootTemplate">
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "1%",
            paddingBottom: "2%",
          }}
        >
          {props.header}
        </Grid>
        <Grid
          item
          sx={{ display: "flex", justifyContent: "center", minHeight: "43.06vh"}}
        >
          {props.body}
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "#F1F6F4",
            display: "flex",
            justifyContent: "center",
            mt: "60px",
          }}
        >
          {props.footer}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
