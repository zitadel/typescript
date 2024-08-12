import { applyTheme, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";

enum Palettes {
  Purple,
  Blue,
}

export function computeColors(hex: string, systemDark: boolean) {
  // Get the theme from a hex color
  const theme = themeFromSourceColor(argbFromHex(hex));

  // Apply the theme to the body by updating custom properties for material tokens
  applyTheme(theme, { target: document.body, dark: systemDark });
}
