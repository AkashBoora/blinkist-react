import { TypographyComponent } from "../../atoms/Typography/Typography";
import Theme from "../../../Themes/themes";
import { makeStyles, styled } from "@mui/styles";

const useStyles = makeStyles({
    editorial:{
        width: "214px"
    },
    general:{
        width: "142px"
    }
})
const Items = styled("div")({
  marginTop: Theme.spacing(4),
});

export interface FooterNavListComponentProps {
  title: string;
  data: Array<string>;
  type: "editorial" | "general";
}
export const FooterNavListComponent = (props: FooterNavListComponentProps) => {
  let { data, title, type } = props;
  let classes =  useStyles();
  let className;
  if(type === "general"){
    className= classes.general
  }else{
    className = classes.editorial
  }
  return (
    <div data-testid="footerNavList" className={className} >
      <TypographyComponent
        variant="body1"
        color={Theme.palette.text_color.main}
      >
        {title}
      </TypographyComponent>
      {data.map((text, key) => {
        return (
          <Items key={key}>
            <TypographyComponent
              variant="body2"
              color={Theme.palette.text_color.light}
            >
              {text}
            </TypographyComponent>
          </Items>
        );
      })}
    </div>
  );
};
