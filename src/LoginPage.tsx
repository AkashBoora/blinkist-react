import { useAuth0 } from "@auth0/auth0-react";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import image from "./assets/icons/new.png";

import background from "./assets/icons/background.png";
import { ButtonComponent } from "./components/atoms/Button/Button";
import Theme from "./Themes/themes";

function LoginPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <ThemeProvider theme={Theme}>
      <Grid
        data-testid="login"
        display="flex"
        height="98vh"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          position="absolute"
          left="695px"
          top="230px"
          style={{ zIndex: -1 }}
        >
          <Box component={"img"} src={background} alt={"Login Image"}></Box>
        </Grid>
        <Grid
          width="900px"
          container
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={6}>
            <Grid container md={12} gap="30px">
              <Grid item md={9}>
                <Typography
                  fontSize={"40px"}
                  fontWeight={700}
                  lineHeight={"45.25px"}
                  textAlign={"left"}
                  color={Theme.palette.text_color.main}
                >
                  More knowledge in less time
                </Typography>
              </Grid>
              <Grid md={11}>
                <Typography
                  fontSize={"20px"}
                  fontWeight={400}
                  lineHeight={"25px"}
                  textAlign={"left"}
                  color={Theme.palette.text_color.light}
                >
                  Perfect for curious people who love to learn, busy people who
                  don’t have time to read, and even people who aren’t into
                  reading.
                </Typography>
              </Grid>
              <Grid
                item
                display="flex"
                alignItems="center"
                justifyContent="center"
                justifyItems="center"
              >
                <ButtonComponent
                  variant="button4"
                  children="Log in"
                  onClick={() => loginWithRedirect()}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid md={6} justifyContent={"flex-start"}>
            <Box
              paddingTop="140px"
              paddingLeft="20px"
              component={"img"}
              src={image}
              alt={"Login Image"}
            ></Box>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LoginPage;
