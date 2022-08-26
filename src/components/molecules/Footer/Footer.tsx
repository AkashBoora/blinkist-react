import {  styled } from "@mui/styles";
import { FooterNavData } from "../../../data/FooterNavData";
import Theme from "../../../Themes/themes";
import { LogoComponent } from "../../atoms/Logo/Logo";
import { TypographyComponent } from "../../atoms/Typography/Typography";
import { FooterNavListComponent } from "../FooterNavList/FooterNavList";

const MainContainer = styled("div")({
  width: "100%",
  height: 370,
  backgroundColor: "#F1F6F4",
  position: "relative",
  bottom: "0px",
});

const WrapContaner = styled("div")({
  display: "flex",
  flexDirection: "row",
  position: "relative",
  left: 220,
});

const LeftContainer = styled("div")({
  position: "relative",
  top: 38,
  left: 244,
  width: 378,
  height: "128px !important",
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

const RightContainer = styled("div")({
  position: "relative",
  top: 38,
  left: 310,
  display: "flex",
});

const BottomContainer = styled("div")({
  position: "absolute",
  left: 244,
  top: 310,
});

export const FooterComponent = () => {
  return (
    <MainContainer>
      <WrapContaner>
            <LeftContainer>
            <LogoComponent classing="small" />
            <TypographyComponent variant="subtitle1" color={Theme.palette.secondary.main} style={{width: "350px"}}>
                Big ideas in small packages Start learning now
            </TypographyComponent>
            </LeftContainer>
            <RightContainer>
                <FooterNavListComponent type="editorial" title={FooterNavData.Editorial.title} data={FooterNavData.Editorial.data}/>
                <FooterNavListComponent type="general" title={FooterNavData.UsefulLinks.title} data={FooterNavData.UsefulLinks.data}/>
                <FooterNavListComponent type="general" title={FooterNavData.Company.title} data={FooterNavData.Company.data}/>
            </RightContainer>
        <BottomContainer>
            <TypographyComponent variant="caption1" color={Theme.palette.text_color.light}>Ⓒ Blinkist 2021 Sitemap  |  Imprint  |  Terms of Service  |  Privacy Policies</TypographyComponent>
        </BottomContainer>
      </WrapContaner>
    </MainContainer>
  );
};
