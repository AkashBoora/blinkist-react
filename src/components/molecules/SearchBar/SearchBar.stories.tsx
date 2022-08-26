import { Story } from "@storybook/react";
import { SearchBarComponent, SearchBarComponentProps } from "./SearchBar";

export default {
    title: "Molecules/SearchBar",
    component: SearchBarComponent,
  };
  
  const Template: Story<SearchBarComponentProps> = (args) => (
    <SearchBarComponent {...args} />
  );
  
  export const SearchBar = Template.bind({});