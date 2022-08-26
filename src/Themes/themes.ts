import { createTheme } from "@mui/material/styles";

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
    placeholder?: string
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
});

export default Theme;
