import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from "@joaovictor3g/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    radii,
    fonts,
    lineHeights,
    space,
  },
});
