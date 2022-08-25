import { extendTheme } from "@chakra-ui/react";

const mainTheme = extendTheme({
  config: {
    cssVarPrefix: "chakra",
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  semanticTokens: {
    colors: {
      "chakra-body-text": {
        _light: "gray.600",
        _dark: "gray.300",
      },
      "chakra-body-bg": {
        _light: "main",
        _dark: "gray.800",
      },
    },
  },
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Montserrat", sans-serif',
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "60px",
    "7xl": "72px",
    "8xl": "96px",
    "9xl": "128px",
  },
  colors: {
    main: "#EFF2FA",
  },
});

export default mainTheme;
