import React, { useContext, ReactNode } from "react";
import { Theme, ThemeContextType } from "../constants/typeIndex";
import { ThemeContext } from "../hooks/themeProvider";
import { LightModeIcon, DarkModeIcon, SunIcon, MoonIcon } from "../constants/iconsIndex";
import Color from "color";
import CustomButtom from "./Button";

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

    const icon = theme.isDarkMode ? <SunIcon scale={1.5} fill={[Color("#F4EEA9"), Color("#A44A3F")]} /> : <MoonIcon scale={1.5} fill={[Color("#414066"), Color("#F4EEA9")]} />

    return (
        <CustomButtom 
            mode="icon-only"
            text='text'
            iconPosition="right"
            showText={false}
            showIcon={true}
            icon={icon}
            onClick={() => {
                onClickHandler()
            }}
        />
    )
}

export default ThemeButton
