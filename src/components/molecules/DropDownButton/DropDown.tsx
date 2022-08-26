import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Theme from "../../../Themes/themes";
import { AvatarComponent } from "../../atoms/Avatar/Avatar";
import { IconComponent } from "../../atoms/Icon/Icon";
import { TypographyComponent } from "../../atoms/Typography/Typography";
import Down_arrow from "./../../../assets/icons/down arrow.svg"

const useStyles= makeStyles({
    main: {
        display: 'flex', 
        flexDirection: 'row', 
        gap: '1px 1px'
      },
      typography: {
        alignSelf: "center",
        fontWeight: "500",
        color: Theme.palette.text_color.main,
      },
      dropdownarrow: {
        width: 20.61,
        height: 26.48,
        alignSelf: 'center',
        marginLeft: 6.7
      }
})

export interface DropDownComponentProps{
    title?: string,
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
}
export const DropDownComponent = (props:DropDownComponentProps)=>{
    let classes = useStyles();
    return(
        <Box className={`${classes.main} ${props.className}`}>
        {props.title === 'Account' ? (
          <AvatarComponent letter="BA"/>
        ) : (
            <TypographyComponent variant='body2' className={classes.typography}>
                {props.title}
            </TypographyComponent>
        )}
        <IconComponent onClick={props.onClick} src={Down_arrow} style={props.style} className={classes.dropdownarrow}/>
      </Box>

    )

}