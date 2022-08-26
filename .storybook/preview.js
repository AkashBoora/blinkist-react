import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import Theme from "/src/Themes/themes.ts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={Theme}>
      <ThemeProvider theme={Theme}>
          <Story />
      </ThemeProvider>
    </MUIThemeProvider>
  ),
]