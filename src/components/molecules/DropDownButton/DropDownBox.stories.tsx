import { Story } from "@storybook/react";
import { DropDownComponent } from "./DropDown";

export default {
    title: 'Molecules/Drop Down',
    component: DropDownComponent
}

const Template: Story<any> = args => <DropDownComponent {...args} />

export const ExploreDropdown = Template.bind({})
ExploreDropdown.args = {
    title: 'Explore'
}

export const AccountDropdown = Template.bind({})
AccountDropdown.args = {
    title: 'Account'
}