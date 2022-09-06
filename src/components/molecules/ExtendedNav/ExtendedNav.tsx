import { ExploreCategeries } from "../../../data/ExtendNavDetails";
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { TypographyComponent } from "../../atoms/Typography/Typography";
import { IconAndTextComponent } from "../IcontAndText/IconAndText";

const useStyles = makeStyles({
  grid: {
    flexGrow: 1,
    height: "398px",
    width: "100%",
    left: "0px",
    top: "0px",
    borderRadius: "0px",
    background: "#F1F6F4",
    justifyContent: "center",
    alignItems: "center",
  },
  tabs: {
    paddingLeft: "9px !important",
    marginTop: "3%",
    marginLeft: "15%",
    textDecoration: "none !important",
    whiteSpace: "nowrap",
    display: "grid",
    justifyContent: "left",
    alignItems: "center",
  },
});

export interface CategoryInterface {
  name: string;
  icon: React.ReactNode;
}
export interface ExtendedNavProps {
  onCategoryClick?: (arg: string) => void;
}

export const ExtendNavComponent = (props: ExtendedNavProps) => {
  let classes = useStyles();
  return (
    <Box data-testid="extendedNav" className={classes.grid}>
      <Grid >
        <Container maxWidth="md">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box className={classes.tabs}>
                <TypographyComponent
                  variant="body3"
                  name="Explore by Category"
                  color="#116BE9"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className={classes.tabs}>
                <TypographyComponent
                  variant="body3"
                  name="See recently added titles"
                  color="#6D787E"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className={classes.tabs}>
                <TypographyComponent
                  variant="body3"
                  name="See popular titles"
                  color="#6D787E"
                />
              </Box>
            </Grid>
          </Grid>
          <hr color="#042330" />
        </Container>
        <Container maxWidth="md">
          <Grid container spacing={5}>
            {ExploreCategeries.map((category: CategoryInterface, index:number) => {
              const { name, icon } = category;
              return (
                <Grid item xs={12} sm={4} key={index}>

                <a  href={`http://localhost:3001/explore/${name}`}
                style={{
                  textDecoration: "none",
                }}>
                  <Box className={classes.tabs}>
                    <IconAndTextComponent onClick={props.onCategoryClick} title={name} variant="body2" color="#6D787E" iconSource={icon}/>
                  </Box>

                </a>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
};
