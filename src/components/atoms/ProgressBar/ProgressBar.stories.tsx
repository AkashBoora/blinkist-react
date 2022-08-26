import { Story } from "@storybook/react";
import { ProgressBarComponent, ProgrssBarComponentProps } from "./ProgreeBar";

export default {
  title: "Atoms/ProgressBar",
  component: ProgressBarComponent,
};

const Template: Story<ProgrssBarComponentProps> = (args) => (
  <ProgressBarComponent {...args} />
);

export const Semi = Template.bind({});
Semi.args = {
  type: "semi",
};

export const Full = Template.bind({});
Full.args = {
  type: "full",
};
