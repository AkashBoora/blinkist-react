import { makeStyles } from "@mui/styles"
import Logo from "./../../../assets/icons/Blinkist.png"

const useStyles = makeStyles({
    medium:{
        height: '26px',
        width: '124.09px'
    },small:{
        height: '24px',
        width: '99.1px'
    }
})
export interface LogoComponentProps{
    style?: React.CSSProperties
}

export const LogoComponent = (props:LogoComponentProps)=>{
    return(
        <div data-testid="logo">
            <img style={props.style} src={Logo} alt="BlinkistLogo"></img>
        </div>
    )
}