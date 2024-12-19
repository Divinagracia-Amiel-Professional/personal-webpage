import React, { createContext, ReactNode, useState } from 'react'
import { Theme, ThemeContextType, ThemeProviderProps } from '../constants/typeIndex'
import Color from 'color'

export const ThemeContext = createContext<ThemeContextType | null>(null)

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

const ThemeProvider = ({ children }: ThemeProviderProps) => {  
    const [ themeMode, setMode] = useState<Theme>(DefaultTheme)

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
            theme: themeMode, 
            setMode: setMode
       }}>
            { children }
       </ThemeContext.Provider>
    )
}

export default ThemeProvider

