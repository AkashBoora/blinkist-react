import { ThemeProvider } from "@mui/styles";
import { Story } from "@storybook/react";
import { getBooks } from "../../../data/Data";
import Theme from "../../../Themes/themes";
import { Book } from "../../molecules/BookCard/BookCard";
import { BookDeatailsProps, BookDetailsComponenet } from "./BookDetails";

export default {
    title: "Organisms/BookDetailsComponent",
    component: BookDetailsComponenet
  }
  
  
  const Template: Story<BookDeatailsProps> = (args) => (
    <ThemeProvider theme={Theme}>
        <BookDetailsComponenet {...args} />
    </ThemeProvider>
  );
  
  export const BookDetails = Template.bind({});
  BookDetails.args = {
    book:getBooks()[0]
  };

  export const BookDetails2 = Template.bind({});
  BookDetails2.args = {
    book:getBooks()[1]
  };