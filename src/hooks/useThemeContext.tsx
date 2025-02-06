
import React, { useContext } from "react";
import { Theme, ThemeContextType, ThemeExtension } from "../constants/typeIndex";
import { ThemeContext } from "../hooks/themeProvider";

const isThemeExtension = (theme: Theme | ThemeExtension): theme is ThemeExtension => { //type guard func
    return (theme as ThemeExtension).components !== undefined;
};

const useThemeContext = () => {
    const context = useContext(ThemeContext) as ThemeContextType<ThemeExtension>

    if (!context) throw new Error("ThemeContext must be used within a ThemeProvider")

    const { theme, setMode } = context

    return { theme, setMode }
}

export default useThemeContext