import { PageTitleComponent } from "./PageTitle";
import { ComponentStory } from "@storybook/react";

export default{
    title: "Atoms/PageTitles",
    Component: PageTitleComponent
};


const Template: ComponentStory<typeof PageTitleComponent> = (args) => (
    <PageTitleComponent{...args} />
)

export const pageTitle = Template.bind({})
pageTitle.args = {
    title : "Trending Blinks"
}