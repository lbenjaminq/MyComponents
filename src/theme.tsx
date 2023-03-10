import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import React from "react";

type ThemeProp = {
  children: JSX.Element
};

enum themePalette {
  BG = "#EBEBEB",
  BLUE = "rgba(29,221,255,0.9)",
  BLUE_LIGHT = "rgba(137,237,255,1)",
  WHITE = "#FFFFFF",
  BLACK = "#1A1A1A",
  ROSE = '#ff3f6c',
  FONT_GLOBAL = "'Roboto Flex', sans-serif",
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
  SUCCESS_MAIN = "BLUE",
  BG_SUCCESS_MAIN = "rgba(60,60,60,60,0.1)"
}

let theme = createTheme()

theme = createTheme(theme, {
  palette: {
    primary: {
      main: themePalette.BLACK,
      dark: themePalette.BLUE,
      light: themePalette.WHITE,
    },
    secondary: {
      main: themePalette.WHITE
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            border: "none",
            outline: "none",
          },
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          //down, between
          [theme.breakpoints.between("xs", "sm")]: {
            border: "2px solid blue"
          },
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            border: "none",
            outline: "none",
          },
        },
        contained: {
          fontFamily: "'Montserrat', sans-serif",
          backgroundColor: themePalette.ROSE,
          color: themePalette.WHITE,
          "&:hover": {
            backgroundColor: themePalette.WHITE,
            color: themePalette.BLACK,
            textDecoration: "underline"
          },
        },
        outlined: {
          "&:hover": {
            border: `1px ${themePalette.BLUE} solid`
          },
        }
      },
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5em",
          padding: "10px 10px"
        },
      }
    },
  }
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}