import { createTheme } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    grey_scale: Palette["primary"];
    text_color: Palette["primary"];
    background_color: Palette["primary"];
  }

  interface PaletteOptions {
    grey_scale?: PaletteOptions["primary"];
    text_color?: PaletteOptions["primary"];
    background_color?: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    heading: React.CSSProperties;
    subtitle3: React.CSSProperties;
    body3: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }

  interface ButtonVariants {
    button1: React.CSSProperties;
    button2: React.CSSProperties;
    button3: React.CSSProperties;
    button4: React.CSSProperties;
    button5: React.CSSProperties;
  }

  interface ButtonVariantsOptions {
    button1: React.CSSProperties;
    button2: React.CSSProperties;
    button3: React.CSSProperties;
    button4: React.CSSProperties;
    button5: React.CSSProperties;
  }
  interface PaletteColor {
    light: string;
    dark: string;
    darker?: string;
    placeholder?: string;
  }

  interface SimplePaletteColorOptions {
    light?: string;
    dark?: string;
    darker?: string;
    placeholder?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    grey_scale: true;
    text_color: true;
    background_color: true;
  }
}

declare module "@mui/material" {
  interface PropsColorOverriides {
    grey_scale: true;
    text_color: true;
    background_color: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    button1: true;
    button2: true;
    button3: true;
    button4: true;
    button5: true;
  }

  interface ButtonPropsColorOverrides {
    grey_scale: true;
    text_color: true;
    background_color: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    subtitle3: true;
    body3: true;
    caption1: true;
    caption2: true;
  }

  interface TypographyPropsColorOverrides {
    grey_scale: true;
    text_color: true;
    background_color: true;
  }
}

const Theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      light: "#E2F2E9",
      main: "#2CE080",
      dark: "#22C870",
      darker: "#20BA68",
    },
    secondary: {
      light: "#DFE8F6",
      main: "#0365F2",
    },
    grey_scale: {
      light: "#BAC9CF",
      main: "#6C787F",
      dark: "#3A4649",
      darker: "#042330",
    },
    text_color: {
      light: "#6D787E",
      main: "#03314B",
      placeholder: "#747575",
      dark: "#042330",
    },
    background_color: {
      light: "#F7F7F7",
      main: "#F1F6F4",
    },
  },
  typography: {
    fontFamily: "Cera Pro",
    heading: {
      fontSize: "36px",
      lineHeight: "45px",
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: "Cera Pro",
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 700,
    },
    subtitle3: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 700,
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    body3: {
      fontSize: "20px",
      lineHeight: "20px",
      fontWeight: 400,
    },
    caption1: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: 400,
    },
    caption2: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "button1" },
          style: {
            position: "relative",
            width: "284px",
            height: "52px",
            backgroundColor: "white",
            color: "#0365F2",
            boxShadow: "none",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            "&:hover": {
              backgroundColor: "#0365F2",
              color: "white",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
            },
          }
        },
        {
          props: { variant: "button2" },
          style: {
            width: "163px",
            height: "20px",
            backgroundColor: "White",
            color: "#0365F2",
            lineHeight: "20px",
            outline: "none",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: "rgba(0,0,0,0)",
            }
          }
        },
        {
          props: { variant: "button3" },
          style: {
            width: "122px",
            height: "44px",
            backgroundColor: "White",
            color: "#2CE080",
            outline: "none",
            border: "solid 1px #03314B",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "White",
              color: "#03314B",
              boxShadow: "none",
              border: "solid 1px #2CE080",
            }
          }
        },
        {
          props: { variant: "button4" },
          style: {
            height: "44px",
            width: "170px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            lineHeight: "20.11px",
            position: "relative",
            backgroundColor: "#2ce080",
            color: "#03314B",
            "&:hover": {
              backgroundColor: "#00C263",
            }
          }
        },
        {
          props: { variant: "button5" },
          style: {
            height: "44px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            lineHeight: "20.11px",
            position: "relative",
            color: "#6D787E",
            padding: "12px 24px 12px 24px",
            "&:hover": {
              color: "#03314B",
              backgroundColor: "rgba(0, 0, 0, 0)"
            }
            }
          }
      ],
    },
  },
});

export default Theme;
