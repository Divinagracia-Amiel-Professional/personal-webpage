import React, { createContext, ReactNode, useState, useMemo } from 'react'
import { Theme, ThemeContextType, ThemeProviderProps, ThemeExtension  } from '../constants/typeIndex'
import Color from 'color'

export const ThemeContext = createContext<ThemeContextType<Theme | ThemeExtension> | null>(null)

const DefaultTheme: Theme = {
    isDarkMode: false,
    lightTheme: {
        primary: Color('#A44A3F'),  
        secondary: Color('#414066'),
        tertiary: Color('#F4EEA9'),
        background: Color('white'),
        onBackground: Color('black'),
        accent1: Color('#95190C'),
        accent2: Color('#28112B')
    },
    darkTheme: {
        primary: Color('#F4EEA9'),  
        secondary: Color('#A44A3F'),
        tertiary: Color('#414066'),
        background: Color('black'),
        onBackground: Color('white'),
        accent1: Color('#95190C'),
        accent2: Color('#28112B')
    }
}

const extendTheme = (theme: Theme): ThemeExtension => {
    return({
        ...theme,
        components: {
            button: {
                textFill: !theme.isDarkMode ? theme.lightTheme.background : theme.darkTheme.secondary,
                backgroundFill: !theme.isDarkMode ? theme.lightTheme.primary : theme.darkTheme.primary,
                iconFill: !theme.isDarkMode ? theme.lightTheme.background : theme.darkTheme.secondary,
                iconHoverFill: !theme.isDarkMode ? theme.lightTheme.background : theme.darkTheme.tertiary,
                backgroundHoverFill: !theme.isDarkMode ? theme.lightTheme.secondary : theme.darkTheme.onBackground,
            },
            resumeButton: {
                textFill: !theme.isDarkMode ? theme.lightTheme.secondary : theme.darkTheme.onBackground,
                backgroundFill: Color('rgba(0, 0, 0, 0)'),
                iconFill: !theme.isDarkMode ? theme.lightTheme.secondary : theme.darkTheme.onBackground,
                iconHoverFill: !theme.isDarkMode ? theme.lightTheme.background : theme.darkTheme.secondary,
                backgroundHoverFill: !theme.isDarkMode ? theme.lightTheme.secondary : theme.darkTheme.onBackground,
            },
            contentText: {
                textFill: !theme.isDarkMode ? theme.lightTheme.secondary : theme.darkTheme.onBackground,
                emphasizedFill: !theme.isDarkMode ? theme.lightTheme.accent1 : theme.darkTheme.primary,
            },
            pageWrapper: {
                headerTextFill: !theme.isDarkMode ? theme.lightTheme.accent1 : theme.darkTheme.primary,
                footerTextFill: !theme.isDarkMode ? theme.lightTheme.background : theme.darkTheme.tertiary,
                footerBgFill: !theme.isDarkMode ? theme.lightTheme.primary : theme.darkTheme.onBackground,
            },
            navBarButtons: {
                textFill: !theme.isDarkMode ? theme.lightTheme.secondary : theme.darkTheme.onBackground,
                backgroundFill: Color('rgba(0, 0, 0, 0)'),
                iconFill: !theme.isDarkMode ? [theme.lightTheme.secondary, theme.lightTheme.background] : [theme.lightTheme.background, theme.lightTheme.secondary],
                selectedTextFill: !theme.isDarkMode ? theme.lightTheme.tertiary : theme.darkTheme.secondary,
                selectedBgFill: !theme.isDarkMode ? theme.lightTheme.secondary : theme.darkTheme.onBackground,
            },
            contactButtons: {
                textFill: !theme.isDarkMode ? theme.lightTheme.background : theme.darkTheme.tertiary,
                backgroundFill: !theme.isDarkMode ? theme.lightTheme.secondary : theme.darkTheme.onBackground,
                iconFill: !theme.isDarkMode ? theme.lightTheme.background : theme.darkTheme.tertiary,
                iconHoverFill: !theme.isDarkMode ? theme.lightTheme.tertiary : theme.darkTheme.secondary,
            },
            themeButton: {
                iconFill: !theme.isDarkMode ?  [theme.lightTheme.secondary, theme.lightTheme.tertiary] : [theme.lightTheme.tertiary, theme.lightTheme.primary],
            }
        }
    })
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {  
    const [ themeMode, setMode] = useState<Theme | ThemeExtension>(DefaultTheme)

    const useExtendedTheme = useMemo(() => extendTheme(themeMode), [themeMode])

    // const toggleHandler = () => {
    //     setMode(prevState => {
    //         return ({
    //             ...prevState,
    //             isDarkMode: !prevState.isDarkMode
    //         })
    //     }) 
    // }

    return (
       <ThemeContext.Provider value={{ 
            theme: useExtendedTheme, 
            setMode: setMode
       }}>
            { children }
       </ThemeContext.Provider>
    )
}

export default ThemeProvider

