import { TypographyComponent } from "../../atoms/Typography/Typography";
import Theme from "../../../Themes/themes";
import { makeStyles, styled } from "@mui/styles";

const useStyles = makeStyles({
    general:{
        width: "160px"
    }
})
const Items = styled("div")({
  marginTop: Theme.spacing(4),
});

export interface FooterNavListComponentProps {
  title: string;
  data: Array<string>;
}
export const FooterNavListComponent = (props: FooterNavListComponentProps) => {
  let { data, title } = props;
  let classes =  useStyles();
  let className= classes.general;
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
