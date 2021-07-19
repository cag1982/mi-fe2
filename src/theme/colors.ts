import { Colors } from "./types";

export const baseColors = {
  failure: "#FF4545",
  primary: "#FF8960",
  primaryBright: "#FF8E71",
  primaryDark: "#FF8960",
  secondary: "#170358",
  success: "#31DB3B",
  warning: "#FFB118",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#382673",
  backgroundDisabled: "#C4C4C4",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#170358",
  tertiary: "rgba(255, 255, 255, .2)",
  text: "#FFFFFF",
  textDisabled: "#6E648E",
  textSubtle: "#FCE9F2",
  borderColor: "#E9EAEB",
  card: "#5137A6",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5137A6 0%, #10114C 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#382673",
  backgroundDisabled: "#C4C4C4",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#170358",
  tertiary: "rgba(255, 255, 255, .2)",
  text: "#FFFFFF",
  textDisabled: "#6E648E",
  textSubtle: "#FCE9F2",
  borderColor: "#E9EAEB",
  card: "#5137A6",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5137A6 0%, #10114C 100%)",
  },
};
