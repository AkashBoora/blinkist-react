import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Logo from "./../../../assets/icons/Blinkist.png";
import { ExtendNavComponent } from "../../molecules/ExtendedNav/ExtendedNav";
import { ReactComponent as Search } from "./../../../assets/icons/search.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AvatarComponent } from "../../atoms/Avatar/Avatar";
import { Link } from "react-router-dom";
import { styled } from "@mui/styles";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/system";
import { ButtonComponent } from "../../atoms/Button/Button";
import Theme from "../../../Themes/themes";
import { TypographyComponent } from "../../atoms/Typography/Typography";

const MainContainer = styled("div")({
  width: "100%",
  height: 44,
  position: "relative",
  bottom: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const useStyles = makeStyles({
  visible: {
    position: "absolute",
    height: "100%",
    zIndex: 1,
    width: "100%",
  },
  hidden: {
    display: "none",
  },
  headerLink: {
    display: "flex",
    fontFamily: "Cera Pro",
    fontWeight: 500,
    alignItems: "center",
    fontSize: "16px",
    color: "#03314B",
    textTransform: "none",
    width: "auto",
    "&:hover": {
      backgroundColor: "white",
      borderBottom: "solid 3px #22C870",
      justifyContent: "center",
    },
  },
});

const GridSxMain = {
  height: "44",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const LogOutButtonSx ={ marginLeft: "420px", padding: "0px" };
const ButtonSx = { backgroundColor: "white", padding: "0" };
const ExtendedNavSx = {top: "150%", width: "100%", background: "#9DA3A673",
}

export const HeaderComponent = () => {
  const classes = useStyles();

  const { logout, user } = useAuth0();

  const [clicked, handleClicked] = useState(false);
  const [logoutButton, setLogOutButton] = useState(false);

  const LogOutDropDown = () => {
    return (
      <Grid
        item
        className={logoutButton ? classes.visible : classes.hidden}
        top="90%"
        left="69.8%"
      >
        <ButtonComponent
          children="Log Out"
          onClick={() => logout()}
          variant="button5"
        />
      </Grid>
    );
  };

  const ExtendedNav = () => {
    const body = document.body,
      html = document.documentElement;

    const pageHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    return (
      <Grid
        item
        height={pageHeight}
        sx={ExtendedNavSx}
        className={clicked ? classes.visible : classes.hidden}
      >
        <ExtendNavComponent />
      </Grid>
    );
  };
  return (
    <ThemeProvider theme={Theme}>
      <MainContainer>
        <Grid data-testid="header" container direction="row">
          <Grid item container sx={GridSxMain} gap="32px">
            <Grid item>
              <Link to="/mylibrary">
                <img
                  src={Logo}
                  style={{ height: "26px", width: "124.09px" }}
                  alt="logo"
                />
              </Link>
            </Grid>
            <Grid item>
              <IconButton style={{ padding: "0px" }}>
                <Search />
              </IconButton>
            </Grid>
            <Grid item>
              <Button sx={ButtonSx}>
                <Typography
                  color = "#03314B"
                  className={classes.headerLink}
                  onClick={() => {
                    handleClicked(!clicked);
                    setLogOutButton(false);
                  }}
                >
                  Explore{" "}
                  {clicked ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Link
                to="/mylibrary"
                style={{
                  textDecoration: "none",
                  color: "#03314B",
                  fontFamily: "Cera Pro",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                <TypographyComponent fontFamily="Cera Pro" variant="body2">
                  My Library
                </TypographyComponent>
              </Link>
            </Grid>
            <Grid item sx={LogOutButtonSx}>
              {" "}
              <Box
                style={{
                  fontFamily: "Cera Pro",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  data-testid="avatar"
                  name=" "
                  endIcon={
                    logoutButton ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )
                  }
                  onClick={() => {
                    setLogOutButton(!logoutButton);
                    handleClicked(false);
                  }}
                  startIcon={<AvatarComponent letter={user?.name?.charAt(0)} />}
                />
              </Box>
            </Grid>
          </Grid>
          <ExtendedNav></ExtendedNav>
          <LogOutDropDown></LogOutDropDown>
        </Grid>
      </MainContainer>
    </ThemeProvider>
  );
};
