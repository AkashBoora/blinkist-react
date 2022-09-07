import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Book } from "../../molecules/BookCard/BookCard";
import { CardsWithStatusComponent } from "../CardsWithStatus/CardsWithStatus";

const useStyles = makeStyles({
    root: {
    },
    tabs: { 
      width: "15vw",
      textAlign:"left",
      justifyContent:"left",
      justifyItem:"left",
      marginLeft:"0px"
    },
    content: {
      color: "#03314B",
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20px",
      padding: "0px"
    },
    isSelected:{
  
    }
  });

const TabListSx = {justifyContent:"start",alignItems:"start",alignText:"left"}
const TabSx = {textAlign:"left",typography: "subtitle3", textTransform: "none"}
export interface HomePageTabComponentProps {
    books: Array<Book>
    changeBookStatus: (arg: Book) => void
}

export const HomePageTabComponent = (props: HomePageTabComponentProps) => {
    const classes = useStyles();
    const [value,setValue]=useState("1");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

    return(
        <Box data-testid="homePageTab">
            <TabContext value={value}>
                <Box fontFamily='Cera Pro' >
                    <TabList
                        sx={TabListSx}
                        onChange={handleChange}
                        TabIndicatorProps={{
                            style:{fontWeight:400}
                        }}>
                        <Tab className={classes.tabs} label="Currently Reading" value="1" sx={TabSx} />
                        <Tab className={classes.tabs} label="Finished" value="2" sx={TabSx}/>
                    </TabList>
                </Box>
                <TabPanel value="1" style={{padding:"30px 0px"}}>
                    <CardsWithStatusComponent books={props.books} category="" status="reading" changeBookStatus={props.changeBookStatus} isCategoryTab={false}/>
                </TabPanel>

                <TabPanel value="2" style={{padding:"30px 0px"}}>
                    <CardsWithStatusComponent books={props.books} category="" status="finished" changeBookStatus={props.changeBookStatus} isCategoryTab={false}/>
                </TabPanel>
            </TabContext>
        </Box>
    )
}