import React from "react";
import { Story } from "@storybook/react";
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
  isCategoryTab: false,
  changeBookStatus:()=> handleClick(getBooks()[0])
};

export const FinishedCards = Template.bind({});
FinishedCards.args = {
  books: getBooks(),
  status:"finished",
  isCategoryTab: false,
  changeBookStatus:()=> handleClick(getBooks()[0])
};

export const ExplorePage = Template.bind({});
ExplorePage.args = {
  books: getBooks(),
  isCategoryTab: true,
  category: "entrepreneurship",
  changeBookStatus:()=> handleClick(getBooks()[0])
};

const handleClick = (arg:any) => {}