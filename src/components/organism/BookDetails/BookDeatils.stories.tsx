import { ThemeProvider } from "@mui/styles";
import { Story } from "@storybook/react";
import { getBooks } from "../../../data/Data";
import Theme from "../../../Themes/themes";
import { Book } from "../../molecules/BookCard/BookCard";
import {  BookDetailsComponenet } from "./BookDetails";

export default {
    title: "Organisms/BookDetailsComponent",
    component: BookDetailsComponenet
  }
  
  

  
  export const BookDetails = () => <BookDetailsComponenet/>;
