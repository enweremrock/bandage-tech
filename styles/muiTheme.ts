import { createTheme } from "@mui/material/styles";

export const brandTheme = createTheme({
  palette: {
    primary: {
      main: "#23A6F0",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#252B42",
    },

    success: {
      main: "#2DC071",
      dark: "#23856D",
    },
    text: {
      primary: "#252B42",
      secondary: "#737373",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "Montserrat",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontWeightMedium: 500,
    h1: {
      fontFamily: "Montserrat",
    },
    h2: {
      fontSize: "4rem",
      lineHeight: "125%",
      fontWeight: 700,
      letterSpacing: "0.2px",
      fontFamily: "Montserrat",
    },
    h3: {
      fontSize: "2.4rem",
      lineHeight: "133.333%",
      fontWeight: 700,
      letterSpacing: "0.1px",
      fontFamily: "Montserrat",
    },
    h4: {
      fontSize: "2rem",
      lineHeight: "150%",
      fontWeight: 400,
      letterSpacing: "0.2px",
      fontFamily: "Montserrat",
    },
    h5: {
      fontSize: "1.6rem",
      lineHeight: "150%",
      fontWeight: 700,
      letterSpacing: "0.1px",
      fontFamily: "Montserrat",
    },

    h6: {
      fontSize: "1.4rem",
      lineHeight: "171.429%",
      fontWeight: 700,
      letterSpacing: "0.2px",
      fontFamily: "Montserrat",
    },
    body1: {
      fontSize: "1.4rem",
      lineHeight: "142.857%",
      fontWeight: 400,
      letterSpacing: "0.2px",
      fontFamily: "Montserrat",
    },
    body2: {
      fontSize: "1.4rem",
      lineHeight: "171.429%",
      fontWeight: 700,
      letterSpacing: "0.2px",
      fontFamily: "Montserrat",
    },
    subtitle1: {
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: " 0.2px",
      fontFamily: "Montserrat",
    },
    subtitle2: {
      fontSize: "1.2rem",
      lineHeight: "133.333%",
      fontWeight: 400,
      letterSpacing: "0.2px",
      fontFamily: "Montserrat",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src:url(/asset/fonts/montserrat-regular.woff2) format(woff2)
          }

          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-display: swap;
            font-weight: 500;
            src:url(/asset/fonts/montserrat-medium.woff2)
          }
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-display: swap;
            font-weight: 600;
            src:url(/asset/fonts/montserrat-semiBold.woff2)
          }
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src:url(/asset/fonts/montserrat-bold.woff2)
          }
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-display: swap;
            font-weight: 800;
            src:url(/asset/fonts/montserrat-extraBold.woff2)
          }
        `,
    },
  },
});
