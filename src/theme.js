import { createTheme } from "@mui/material/styles";

import HKGroteskBold from "./assets/fonts/HKGrotesk-Bold.ttf";
import HKGroteskLight from "./assets/fonts/HKGrotesk-Light.ttf";
import HKGroteskMedium from "./assets/fonts/HKGrotesk-Medium.ttf";
import HKGroteskRegular from "./assets/fonts/HKGrotesk-Regular.ttf";
import HKGroteskSemiBold from "./assets/fonts/HKGrotesk-SemiBold.ttf";

import JostBlack from "./assets/fonts/Jost-Black.ttf";
import JostBold from "./assets/fonts/Jost-Bold.ttf";
import JostLight from "./assets/fonts/Jost-Light.ttf";
import JostMedium from "./assets/fonts/Jost-Medium.ttf";
import JostRegular from "./assets/fonts/Jost-Regular.ttf";
import JostSemiBold from "./assets/fonts/Jost-SemiBold.ttf";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e6bc6",
    },
    secondary: {
      main: "#ffffff",
    },
    grey: {
      light: "#A5A5A5",
      semi_light: "#777777",
      main: "#333333",
      dark: "#242424",
    },
    red: {
      main: "#E22D2D",
    },
    green: {
      main: "#438E44",
    },
  },
  breakpoints: {
    values: {
      lg: 1320,
    },
  },
  typography: {
    fontFamily: "HK Grotesk, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'HK Grotesk';
          font-weight: 300;
          src: url(${HKGroteskLight})
        }
        @font-face {
          font-family: 'HK Grotesk';
          font-weight: 400;
          src: url(${HKGroteskRegular})
        }
        @font-face {
          font-family: 'HK Grotesk';
          font-weight: 500;
          src: url(${HKGroteskMedium})
        }
        @font-face {
          font-family: 'HK Grotesk';
          font-weight: 600;
          src: url(${HKGroteskSemiBold})
        }
        @font-face {
          font-family: 'HK Grotesk';
          font-weight: 700;
          src: url(${HKGroteskBold})
        }
        @font-face {
          font-family: 'Jost';
          font-weight: 300;
          src: url(${JostLight})
        }
        @font-face {
          font-family: 'Jost';
          font-weight: 400;
          src: url(${JostRegular})
        }
        @font-face {
          font-family: 'Jost';
          font-weight: 500;
          src: url(${JostMedium})
        }
        @font-face {
          font-family: 'Jost';
          font-weight: 600;
          src: url(${JostSemiBold})
        }
        @font-face {
          font-family: 'Jost';
          font-weight: 700;
          src: url(${JostBold})
        }
        @font-face {
          font-family: 'Jost';
          font-weight: 900;
          src: url(${JostBlack})
        }
      `,
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          width: "auto",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "8px",
          position: "relative",
        },
      },
    },
  },
});

export default theme;
