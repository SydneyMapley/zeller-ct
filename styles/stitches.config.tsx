import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

const fontFallbacks =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Verdana, sans-serif';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: "#202322",
      white: "#fafafa",
      grey: "#7f7e7c",
      blue: "#0370CE",
      lightBlue: "#eaf2fa",
    },
    fontSizes: {
      lrg: "1.5rem",
      med: "1.125rem",
      sm: "0.875rem",
      icon: "1.2rem",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
    },
    fonts: {
      default: `'Work Sans', ${fontFallbacks}`,
    },
    letterSpacings: {
      regular: "0.01em",
    },
    lineHeights: {
      medium: "140%",
    },
  },
  media: {
    min480: "(min-width: 480px)",
    min768: "(min-width: 768px)",
    min1024: "(min-width: 1024px)",
    min1200: "(min-width: 1200px)",
    min1440: "(min-width: 1440px)",
    min1920: "(min-width: 1920px)",
  },
  utils: {
    bg: (value: Stitches.PropertyValue<"background">) => ({
      background: value,
    }),
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"margin">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"margin">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"padding">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"padding">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
