import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS
export const GREY = {
  0: "#FFFFFF",
  100: "#F1F1F1",
  200: "#EEEEEE",
  300: "#E6E6E6",
  400: "#DDDDDD",
  500: "#D5D5D5",
  600: "#CDCDCD",
  700: "#C4C4C4",
  800: "#BCBCBC",
  900: "#B4B4B4",
  1000: "#ABABAB",
  1100: "#A3A3A3",
  1200: "#8A8A8A",
  1300: "#A1A1A1",
  1400: "#EFEFEF",
};

export const PRIMARY = {
  lighter: "#FEF3DA",
  light: "#FAD191",
  main: "#EF9E48",
  dark: "#AC5D24",
  darker: "#722E0D",
  contrastText: "#2F2F2F",
};

export const SECONDARY = {
  lighter: "#F4F4F4",
  light: "#C0C0C0",
  main: "#2F2F2F",
  dark: "#211719",
  darker: "#16090D",
  contrastText: "#FFFFFF",
};

export const INFO = {
  lighter: "#DFF3FC",
  light: "#9DCFF1",
  main: "#5895D3",
  dark: "#2C5797",
  darker: "#102965",
  contrastText: "#ffffff",
};

export const SUCCESS = {
  lighter: "#D3FCE1",
  light: "#79EFB8",
  main: "#25CB9E",
  dark: "#129288",
  darker: "#075661",
  contrastText: "#ffffff",
};

export const WARNING = {
  lighter: "#FEEBD2",
  light: "#FEB379",
  main: "#FD6320",
  dark: "#B62C10",
  darker: "#790A06",
  contrastText: "#ffffff",
};

export const ERROR = {
  lighter: "#FDE1D6",
  light: "#F78F85",
  main: "#E73647",
  dark: "#A61B41",
  darker: "#6E0A38",
  contrastText: "#ffffff",
};

const palette = {
  common: { black: "#000000", white: "#ffffff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[1400], 0.8),
  text: {
    primary: "#0F2137",
    secondary: "#5D646D",
    disabled: "#E0E0E7",
    contrastText: "#ffffff",
  },
  background: {
    paper: "#ffffff",
    default: GREY[100],
  },
  action: {
    active: "#2F2F2F",
    hover: alpha("#2F2F2F", 0.08),
    selected: alpha("#2F2F2F", 0.16),
    disabled: alpha(GREY[1200], 0.2),
    disabledBackground: alpha("#2F2F2F", 0.24),
    focus: alpha("#2F2F2F", 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
