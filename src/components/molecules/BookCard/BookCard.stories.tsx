import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import Theme from "../../../Themes/themes";
import { BookCardComponent, BookCardComponentProps } from "./BookCard";
import { MemoryRouter } from "react-router-dom";
import { getBooks } from "../../../data/Data";



export default {
  title: "Molecules/BookCard",
  component: BookCardComponent
}


const Template: Story< BookCardComponentProps> = (args) => (
  <ThemeProvider theme={Theme}>
    <MemoryRouter>
      <BookCardComponent {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadCard = Template.bind({});
ReadCard.args = {
  book:getBooks()[0],
   bookObject:getBooks(),
    typeOfCard:"reading",
    changeBookStatus: ()=>handleClick(getBooks()[0])
};

export const FinishedCard = Template.bind({});
FinishedCard.args = {
  book: getBooks()[0],
  bookObject: getBooks(),
  typeOfCard: "finished",
  changeBookStatus: () => handleClick(getBooks()[0]),
};

export const AddToLibraryCard = Template.bind({});
AddToLibraryCard.args = {
  book: getBooks()[0],
  bookObject: getBooks(),
  typeOfCard: "myLibrary",
  changeBookStatus: () => handleClick(getBooks()[0]),
};


export const ExploreCard = Template.bind({});
ExploreCard.args = {
  book: getBooks()[0],
  bookObject: getBooks(),
  typeOfCard: "explore",
  changeBookStatus: () => handleClick(getBooks()[0]),
};


const handleClick= (arg:any)=> {

}