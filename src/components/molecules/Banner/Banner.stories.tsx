import { Story } from "@storybook/react";
import { BannerComponent, BannerComponentProps } from "./Banner";

export default {
  title: "Molecules/Banner",
  component: BannerComponent,
};

const Template: Story<BannerComponentProps> = (args) => (
  <BannerComponent {...args} />
);

export const Banner = Template.bind({});
