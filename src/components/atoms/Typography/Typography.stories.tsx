import { Story } from "@storybook/react";
import { TypographyComponent, TypographyComponentProps } from "./Typography";

export default {
  title: "Atoms/Typography",
  component: TypographyComponent,
};

const Template: Story<TypographyComponentProps> = (args) => (
  <TypographyComponent {...args} />
);

export const heading = Template.bind({});
heading.args = {
  variant: "heading",
  children: "Heading",
  color: "text_color.dark",
};

export const subtitle1 = Template.bind({});
subtitle1.args = {
  variant: "subtitle1",
  children: "Subtitle1",
  color: "text_color.dark",
};

export const subtitle2 = Template.bind({});
subtitle2.args = {
  variant: "subtitle2",
  children: "Subtitle2",
  color: "text_color.dark",
};

export const subtitle3 = Template.bind({});
subtitle3.args = {
  variant: "subtitle3",
  children: "Subtitle3",
  color: "text_color.dark",
};

export const body1 = Template.bind({});
body1.args = {
  variant: "body1",
  children: "Body1",
  color: "text_color.main",
};

export const body2 = Template.bind({});
body2.args = {
  variant: "body2",
  children: "Body2",
  color: "text_color.main",
};

export const body3 = Template.bind({});
body3.args = {
  variant: "body3",
  children: "Body3",
  color: "text_color.main",
};

export const caption1 = Template.bind({});
caption1.args = {
  variant: "caption1",
  children: "Caption1",
  color: "text_color.light",
};

export const caption2 = Template.bind({});
caption2.args = {
  variant: "caption2",
  children: "Caption2",
  color: "text_color.light",
};
