import { Story } from "@storybook/react";
import { ButtonComponent, ButtonComponentProps } from "./Button";
import Add from "@material-ui/icons/Add";
import ArrowForword from "@material-ui/icons/ArrowForward";

export default {
  title: "Atoms/Button",
  component: ButtonComponent,
};

const Template: Story<ButtonComponentProps> = (args) => (
  <ButtonComponent {...args} />
);

export const AddToLibrary = Template.bind({});
AddToLibrary.args = {
  className: "button1",
  variant: "contained",
  children: "Add to Library",
  startIcon: <Add />,
};

export const Finished = Template.bind({});
Finished.args = {
  className: "button2",
  variant: "text",
  children: "finished",
};

export const ReadNow = Template.bind({});
ReadNow.args = {
  className: "button3",
  variant: "outlined",
  children: "Readnow",
};

export const FinishReading = Template.bind({});
FinishReading.args = {
  className: "button4",
  variant: "contained",
  children: "FinishReading",
};

export const SendTokindle = Template.bind({});
SendTokindle.args = {
  className: "button5",
  variant: "text",
  children: "Send to Kindle",
  endIcon: <ArrowForword />,
};
