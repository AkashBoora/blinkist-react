import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Book } from "../../molecules/BookCard/BookCard";
import { CardsWithStatusComponent } from "../../molecules/CardsWithStatus/CardsWithStatus";

const useStyles = makeStyles({
    root: {
    },
    tabs: { 
      width: "15vw"
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
export interface HomePageTabComponentProps {
    books: Array<Book>
    onClick: (arg: Book) => void
}

export const HomePageTabComponent = (props: HomePageTabComponentProps) => {
    const classes = useStyles();
    const [value,setValue]=useState("1");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

    return(
        <Box>
            <TabContext value={value}>
                <Box fontFamily='Cera Pro' >
                    <TabList
                        sx={{justifyContent:"start",alignItems:"start",alignText:"left"}}
                        onChange={handleChange}
                        TabIndicatorProps={{
                            style:{fontWeight:700}
                        }}>
                        <Tab className={classes.tabs} label="Currently Reading" value="1" sx={{textAlign:"left",typography: "subtitle3", textTransform: "none"}} />
                        <Tab className={classes.tabs} label="Finished" value="2" sx={{typography: "subtitle3", textTransform: "none"}}/>
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <CardsWithStatusComponent books={props.books} status="reading" onClick={props.onClick}/>
                </TabPanel>

                <TabPanel value="2">
                    <CardsWithStatusComponent books={props.books} status="finished" onClick={props.onClick}/>
                </TabPanel>
            </TabContext>
        </Box>
    )
}