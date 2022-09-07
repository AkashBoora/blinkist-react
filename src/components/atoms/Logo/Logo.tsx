
import Logo from "./../../../assets/icons/Blinkist.png"

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