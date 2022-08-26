import { Story } from "@storybook/react";
import Search from "./../../../assets/icons/search.svg";
import DownArrow from "./../../../assets/icons/down arrow.svg";
import UpArrow from "./../../../assets/icons/up arrow.svg";
import Add from "./../../../assets/icons/add.svg";
import Time from "./../../../assets/icons/time.svg";
import Entrepreneurship from "./../../../assets/icons/entrepreneurship.svg";
import Economics from "./../../../assets/icons/economics.svg";
import CorporateCulture from "./../../../assets/icons/corporate culture.svg";
import Relationship from "./../../../assets/icons/sex and relationship.svg";
import Politcs from "./../../../assets/icons/politics.svg";
import Communication from "./../../../assets/icons/communication skills.svg";
import Motivation from "./../../../assets/icons/motivation and inspiration.svg";
import Career from "./../../../assets/icons/career and success.svg";
import Nature from "./../../../assets/icons/nature.svg";
import Remove from "./../../../assets/icons/remove 2.svg";
import ReadAgain from "./../../../assets/icons/read again.svg";
import Uncheked from "./../../../assets/icons/unchecked.svg";
import Check from "./../../../assets/icons/check.svg";
import Upload from "./../../../assets/icons/upload.svg";
import Edit from "./../../../assets/icons/edit.svg";
import { IconComponent, IconComponentProps } from "./Icon";

export default {
  title: "Atoms/Icons",
  component: IconComponent,
};

const Template: Story<IconComponentProps> = (args) => (
  <IconComponent {...args} />
);

export const search = Template.bind({});
search.args = {
  src: Search,
};

export const downArrow = Template.bind({});
downArrow.args = {
  src: DownArrow,
};

export const upArrow = Template.bind({});
upArrow.args = {
  src: UpArrow,
};

export const add = Template.bind({});
add.args = {
  src: Add,
};

export const time = Template.bind({});
time.args = {
  src: Time,
};

export const entrepreneurship = Template.bind({});
entrepreneurship.args = {
  src: Entrepreneurship,
};

export const economics = Template.bind({});
economics.args = {
  src: Economics,
};

export const corporateCulture = Template.bind({});
corporateCulture.args = {
  src: CorporateCulture,
};

export const relationship = Template.bind({});
relationship.args = {
  src: Relationship,
};

export const politics = Template.bind({});
politics.args = {
  src: Politcs,
};

export const communication = Template.bind({});
communication.args = {
  src: Communication,
};

export const motivation = Template.bind({});
motivation.args = {
  src: Motivation,
};

export const career = Template.bind({});
career.args = {
  src: Career,
};

export const nature = Template.bind({});
nature.args = {
  src: Nature,
};

export const remove = Template.bind({});
remove.args = {
  src: Remove,
};

export const readAgain = Template.bind({});
readAgain.args = {
  src: ReadAgain,
};

export const uncheked = Template.bind({});
uncheked.args = {
  src: Uncheked,
};

export const check = Template.bind({});
check.args = {
  src: Check,
};

export const upload = Template.bind({});
upload.args = {
  src: Upload,
};

export const edit = Template.bind({});
edit.args = {
  src: Edit,
};
