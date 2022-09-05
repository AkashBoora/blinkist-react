import { Story } from "@storybook/react";
import { FooterNavListComponent, FooterNavListComponentProps } from "./FooterNavList";
import { FooterNavData } from "../../../data/FooterNavData";

export default {
    title: "Molecules/FooterNavList",
    component: FooterNavListComponent,
  };
  
  const Template: Story<FooterNavListComponentProps> = (args) => (
    <FooterNavListComponent {...args} />
  );
  
  export const FooterNavList = Template.bind({});
  FooterNavList.args={
    title: FooterNavData.Editorial.title,
    data: FooterNavData.Editorial.data
  }