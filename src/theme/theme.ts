import { createTheme } from "@shopify/restyle";

import { palette } from "./palette";

const theme = createTheme({
    colors: {
        primary: palette.primaryColor,
        secondary: palette.secondaryColor,
        white: palette.white,
        black: palette.black
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40
    },
    breakpoints: {
        phone: 0,
        tablet: 768
    }
});

export type Theme = typeof theme;
export default theme;
