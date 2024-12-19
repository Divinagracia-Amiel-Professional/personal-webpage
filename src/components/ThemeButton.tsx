import React, { useContext, ReactNode } from "react";
import { Theme, ThemeContextType } from "../constants/typeIndex";
import { ThemeContext } from "../hooks/themeProvider";
import { LightModeIcon, DarkModeIcon } from "../constants/iconsIndex";

const ThemeButton = () => {
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType

    const onClickHandler = () => {
        console.log('change theme')
        setMode(prevState => {
            return({
                ...prevState,
                isDarkMode: !prevState.isDarkMode
            })
        })
    }

    const icon = !theme.isDarkMode ? <LightModeIcon /> : <DarkModeIcon />

    return <div className="button-theme"
        onClick={() => {
            onClickHandler()
        }}
    >
        {icon}
    </div>
}

export default ThemeButton
