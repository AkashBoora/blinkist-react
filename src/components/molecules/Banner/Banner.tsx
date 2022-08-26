import { ThemeProvider } from "@mui/material";
import { styled } from "@mui/system";
import { BannerData } from "../../../data/BannerData";
import Theme from "../../../Themes/themes";
import { TypographyComponent } from "../../atoms/Typography/Typography";
import image from "../../../assets/icons/bannerimg.png";

const MainBoxContainer = styled("div")({
  width: "912px",
  height: "264px",
  backgroundColor: Theme.palette.background_color.main,
});

const RightContainer = styled("div")({
  position: "absolute",
  height: "230px",
  gap: "15px",
  width: "249px",
  left: "618px",
  top: "17px",
});

const LeftContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  gap: "15px",
  top: "45px",
  bottom: "45px",
  left: "45px",
});

const LeftTopContainer = styled("div")({
  color: Theme.palette.text_color.main,
  width: "319px",
  height: "90px",
});

const LeftBottomContainer = styled("div")({
  color: Theme.palette.text_color.light,
  width: "463px",
  height: "69px",
});

export interface BannerComponentProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const BannerComponent = (props: BannerComponentProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <MainBoxContainer className={props.className}>
        <LeftContainer>
          <LeftTopContainer>
            <TypographyComponent variant="heading">
              {BannerData.heading}
            </TypographyComponent>
          </LeftTopContainer>
          <LeftBottomContainer>
            <TypographyComponent variant="subtitle3">
              {BannerData.content}
            </TypographyComponent>
          </LeftBottomContainer>
        </LeftContainer>
        <RightContainer>
          <img
            src={image}
            style={{ height: "230px", width: "249px" }}
            alt="Banner"
          />
        </RightContainer>
      </MainBoxContainer>
    </ThemeProvider>
  );
};
