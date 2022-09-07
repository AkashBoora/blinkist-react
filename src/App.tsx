import React from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import LoginPage from "./LoginPage";
import { useAuth0 } from "@auth0/auth0-react";
import Routing from "./Routing";
import { TypographyComponent } from "./components/atoms/Typography/Typography";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return (
      <Grid
        display="flex"
        height="98vh"
        alignItems="center"
        justifyContent="center"
        data-testid="appLoading"
      >
        <Box  display="flex" alignItems="center" justifyContent="center">
          <CircularProgress size={"30px"}></CircularProgress>
          <TypographyComponent
            variant="heading"

            style={{ paddingLeft: "20px", fontSize: "30px" }}
          >
            Loading...
          </TypographyComponent>
        </Box>
      </Grid>
    );
  }
  return (
    <div data-testid="app">
      {!isAuthenticated ? <LoginPage /> : null}
      {isAuthenticated && <Routing />}
    </div>
  );
}

export default App;
