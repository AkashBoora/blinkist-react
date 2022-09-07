import { Grid } from "@mui/material";
import {  styled } from "@mui/styles";
import { FooterNavData } from "../../../data/FooterNavData";
import Theme from "../../../Themes/themes";
import Logo from "./../../../assets/icons/Blinkist.png";
import { TypographyComponent } from "../../atoms/Typography/Typography";
import { FooterNavListComponent } from "../FooterNavList/FooterNavList";

const MainContainer = styled("div")({
  width: "100%",
  height: 370,
  backgroundColor: "#F1F6F4",
  position: "relative",
  bottom: "0px",
  display: "flex", justifyContent: "center", 
});

const WrapContaner = styled("div")({
  display: "flex", justifyContent: "center", 
  justifyItems: "center",

  flexDirection: "column",
});

const LeftContainer = styled("div")({
  position: "relative",
  top: 38,
  width: 378,
  height: "300px !important",
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

const RightContainer = styled("div")({
  position: "relative",
  top: 38,
  display: "flex",
  gap: 32,
});

const BottomContainer = styled("div")({
});

export const FooterComponent = () => {
  return (
    <MainContainer data-testid="footer">
      <WrapContaner>
        <Grid display="flex">
            <LeftContainer>
            <img src={Logo} style={{height: '24px', width: '99.1px'}} alt="logo"/>
            <TypographyComponent variant="subtitle1" color={Theme.palette.secondary.main} style={{width: "350px"}}>
                Big ideas in small packages Start learning now
            </TypographyComponent>
            </LeftContainer>
            <RightContainer>
                <FooterNavListComponent title={FooterNavData.Editorial.title} data={FooterNavData.Editorial.data}/>
                <FooterNavListComponent title={FooterNavData.UsefulLinks.title} data={FooterNavData.UsefulLinks.data}/>
                <FooterNavListComponent title={FooterNavData.Company.title} data={FooterNavData.Company.data}/>
            </RightContainer>
            </Grid>
        <BottomContainer>
            <TypographyComponent variant="caption1" color={Theme.palette.text_color.light}>Ⓒ Blinkist 2021 Sitemap  |  Imprint  |  Terms of Service  |  Privacy Policies</TypographyComponent>
        </BottomContainer>
      </WrapContaner>
    </MainContainer>
  );
};
