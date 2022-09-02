import React from "react";
import { ComponentStory, Story } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import Theme from "../../../Themes/themes";
import { MemoryRouter } from "react-router-dom";
import { getBooks } from "../../../data/Data";

import { CardsWithStatusComponent, CardsWithStatusProps } from "./CardsWithStatus";



export default {
  title: "Organisms/CardsWithStatus",
  component: CardsWithStatusComponent
}


const Template: Story< CardsWithStatusProps> = (args) => (
  <ThemeProvider theme={Theme}>
    <MemoryRouter>
      <CardsWithStatusComponent {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const CurrentlyReadingCards = Template.bind({});
CurrentlyReadingCards.args = {
  books: getBooks(),
  status:"reading",
  changeBookStatus:()=> handleClick(getBooks()[0])
};

export const FinishedCards = Template.bind({});
FinishedCards.args = {
  books: getBooks(),
  status:"finished",
  changeBookStatus:()=> handleClick(getBooks()[0])
};

export const TrendingBooks = Template.bind({});
TrendingBooks.args = {
  books: getBooks(),
  isCategoryTab: true,
  category: "trendingBlinks",
  changeBookStatus:()=> handleClick(getBooks()[0])
};

export const JustAddedBooks = Template.bind({});
JustAddedBooks.args = {
  books: getBooks(),
  isCategoryTab: true,
  category: "justAdd",
  changeBookStatus:()=> handleClick(getBooks()[0])
};

export const FeaturedBooks = Template.bind({});
FeaturedBooks.args = {
  books: getBooks(),
  isCategoryTab: true,
  category: "featured",
  changeBookStatus:()=> handleClick(getBooks()[0])
};

const handleClick = (arg:any) => {}