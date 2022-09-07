import { Home } from "@material-ui/icons";
import { ThemeProvider } from "@mui/styles";
import { Story } from "@storybook/react";
import { Component } from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { getBooks } from "../../../data/Data";
import Theme from "../../../Themes/themes";
import { Book } from "../../molecules/BookCard/BookCard";
import {
  HomePageTabComponent,
  HomePageTabComponentProps,
} from "./HomePageTabs";

export default {
  title: "Organisms/HomePageTabs",
  component: HomePageTabComponent,
};

const Template: Story<HomePageTabComponentProps> = (args) => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <HomePageTabComponent {...args} />
    </BrowserRouter>
  </ThemeProvider>
);

export const HomePageTabs = Template.bind({});
HomePageTabs.args = {
  books: getBooks(),
  changeBookStatus: () => handleClick(getBooks()[0]),
};

const handleClick = (arg: any) => {};
