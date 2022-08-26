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
    classing?: "medium" | "small",
    style?: React.CSSProperties
}

export const LogoComponent = (props:LogoComponentProps)=>{
    let classes = useStyles();
    let className = classes.medium;
    if(props.classing === "small"){
        className = classes.small;
    }
    return(
        <div>
            <img style={props.style} src={Logo} className={className} alt="BlinkistLogo"></img>
        </div>
    )
}