import { AvatarComponent, AvatarComponentProps } from "./Avatar";
import { Story } from "@storybook/react";

export default {
  title: "Atoms/Avatars",
  component: AvatarComponent,
};
const Template: Story<AvatarComponentProps> = (args) => (
  <AvatarComponent {...args} />
);

export const Avatar = Template.bind({});
Avatar.args = {
  letter: "BA",
};
