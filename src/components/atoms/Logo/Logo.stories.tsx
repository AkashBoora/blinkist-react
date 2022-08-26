import { LogoComponent } from "./Logo";

export default{
    title: "Atoms/Logo",
    component: LogoComponent
}

export const Medium = ()=> <LogoComponent classing="medium"/>
export const Small = ()=> <LogoComponent classing="small"/>