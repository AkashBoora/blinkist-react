import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { BookDetailsTabData } from "../../../data/BookDetailsTabData";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import { makeStyles } from "@mui/styles";
import { TypographyComponent } from "../../atoms/Typography/Typography";
const useStyles = makeStyles({
  root: {
  },
  tabs: { 
    width: "13vw",
    textTransform: "none"
  },
  content: {
    color: "#03314B",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
  },
  isSelected:{

  }
});
const BoxSx = { justifyContent:"left !important", typography: "subtitle1" };
const TabListSx = { borderBottom: 2, borderColor: "#E1ECFC"}
export const TabsBookDetailComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box data-testid="tabs" sx={BoxSx}>
      <TabContext value={value} >
        <Box
          fontFamily={"Cera Pro"}
          fontWeight={"Medium"}
        >
          <TabList
            onChange={handleChange}
            className={classes.root}
            sx={TabListSx}
            TabIndicatorProps={{
              style: { color: "#03314B", background:"#03314B", padding: "0px"}
            }}
          >
            <Tab label={BookDetailsTabData[0].title} value="1" className={classes.tabs} style={{textTransform: "none", fontSize: "16px"}}/>
            <Tab label={BookDetailsTabData[1].title} value="2" className={classes.tabs} style={{textTransform: "none", fontSize: "16px"}}/>
            <Tab label={BookDetailsTabData[2].title} value="3" className={classes.tabs} style={{textTransform: "none", fontSize: "16px"}}/>
          </TabList>
        </Box>
        <TabPanel value="1" className={classes.content}><TypographyComponent variant="body2">{BookDetailsTabData[0].content}</TypographyComponent></TabPanel>
        <TabPanel value="2"className={classes.content}><TypographyComponent variant="body2">{BookDetailsTabData[1].content}</TypographyComponent></TabPanel>
        <TabPanel value="3"className={classes.content}><TypographyComponent variant="body2">{BookDetailsTabData[2].content}</TypographyComponent></TabPanel>
      </TabContext>
    </Box>
  );
};
