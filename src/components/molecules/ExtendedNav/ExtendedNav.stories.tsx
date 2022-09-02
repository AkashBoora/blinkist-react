import { ThemeProvider } from "@mui/styles"
import { Story } from "@storybook/react"
import Theme from "../../../Themes/themes"
import { ExtendedNavProps, ExtendNavComponent } from "./ExtendedNav"

export default {
    title: "Organisms/ExtendedNav",
    component: ExtendNavComponent
}


const Template: Story< ExtendedNavProps> = (args) => (
    <ThemeProvider theme={Theme}>
        <ExtendNavComponent {...args} />
    </ThemeProvider>
  );


export const ExtendedNav = Template.bind({});
ExtendedNav.args={
    onCategoryClick: ()=>handleClick("hello")
}

const handleClick = (arg:any) => {}