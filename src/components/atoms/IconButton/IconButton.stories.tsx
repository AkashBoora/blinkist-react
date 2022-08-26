import { Story } from "@storybook/react";
import { IconButtonComponent, IconButtonComponentProps } from "./IconButton";

import {ReactComponent as Search} from "./../../../assets/icons/search.svg";
import {ReactComponent as DownArrow} from "./../../../assets/icons/down arrow.svg";
import {ReactComponent as UpArrow} from "./../../../assets/icons/up arrow.svg";


export default{
    title: "Atoms/IconButton",
    Component: IconButtonComponent
}

const Template: Story<IconButtonComponentProps> = (args) =>(
    <IconButtonComponent {...args}/>
);

export const SearchIconButton = Template.bind({});
SearchIconButton.args={
    children:<Search/>
}

export const DownArrowIconButton = Template.bind({});
DownArrowIconButton.args={
    children:<DownArrow/>
}

export const UpArrowIconButton = Template.bind({});
UpArrowIconButton.args={
    children:<UpArrow/>
}
