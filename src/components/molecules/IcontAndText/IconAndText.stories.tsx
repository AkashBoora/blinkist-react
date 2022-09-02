import { Story } from "@storybook/react";
import { IconAndTextComponent, IconAndTextComponentProps } from "./IconAndText";
import { ReactComponent as Time } from "./../../../assets/icons/time.svg";
import { ReactComponent as UserIcon } from "./../../../assets/icons/UserIcon.svg";
import { ReactComponent as Entreprenuer } from "./../../../assets/icons/entrepreneurship.svg";
import Theme from "../../../Themes/themes";

export default {
  title: "Molecules/IconAndText",
  component: IconAndTextComponent,
};

const Template: Story<IconAndTextComponentProps> = (args) => (
  <IconAndTextComponent {...args} />
);

export const TimeIcon = Template.bind({});
TimeIcon.args = {
  iconSource: <Time />,
  variant: "caption1",
  title: "13-min read",
  color: Theme.palette.text_color.light,
};

export const User = Template.bind({});
User.args = {
  iconSource: <UserIcon />,
  variant: "caption1",
  title: "1.9k reads",
  color: Theme.palette.text_color.light,
};

export const EntrepreneurIcon = Template.bind({});
EntrepreneurIcon.args = {
  iconSource: <Entreprenuer />,
  variant: "body2",
  color: Theme.palette.text_color.light,
  title: "Entreprenuership",
};

