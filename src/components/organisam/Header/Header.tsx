import { makeStyles } from "@material-ui/styles";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { LogoComponent } from "../../atoms/Logo/Logo";
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
        top="90%" left="69.5%"
      >
        <ButtonComponent
          children="Log Out"
          onClick={() => logout()}
          className="button5"
        />
      </Grid>
    );
  };

  const ExtendedNav = () => {
    var body = document.body,
      html = document.documentElement;

    var pageHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    return (
      <Grid
        item
        sx={{
          height: pageHeight,
          top: "150%",
          width: "100%",
          background: "#9DA3A673",
        }}
        className={clicked ? classes.visible : classes.hidden}
      >
        <ExtendNavComponent />
      </Grid>
    );
  };
  return (
    <MainContainer>
      <Grid container direction="row">
        <Grid
          item
          container
          sx={{
            height: "44",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          gap="32px"
        >
          <Grid item>
            <Link to="/mylibrary">
              <LogoComponent classing="medium"/>
            </Link>
          </Grid>
          <Grid item>
            <IconButton style={{ padding: "0px" }}>
              <Search />
            </IconButton>
          </Grid>
          <Grid item>
            <Button sx={{ backgroundColor: "white", padding: "0" }}>
              <Typography
                sx={{ color: "#03314B" }}
                className={classes.headerLink}
                onClick={() => {
                  handleClicked(!clicked);
                  setLogOutButton(false);
                }}
              >
                Explore{" "}
                {clicked ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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
              <Typography
                fontFamily="Cera Pro"
                fontWeight="500"
                fontSize="16px"
              >
                My Library
              </Typography>
            </Link>
          </Grid>
          <Grid item sx={{ marginLeft: "21%", padding: "0px" }}>
            {" "}
            <Box
              style={{
                fontFamily: "Cera Pro",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
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
  );
};
