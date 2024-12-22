import React, { createContext, ReactNode, useContext } from 'react'
import { Theme, ThemeContextType, ThemeProviderProps, PageWrapperProps } from '../constants/typeIndex'
import { ThemeContext } from '../hooks/themeProvider'
import NavBar from './NavBar'
import Color from 'color'

const PageWrapper = ({ children }: ThemeProviderProps) => {  
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType

    return (
        <div className="page-wrapper" style={{
            backgroundImage: !theme.isDarkMode ? 'linear-gradient(15deg, #A44A3F, #F4EEA9)' : 'linear-gradient(15deg, #414066, #A44A3F)',
            backgroundSize: !theme.isDarkMode ? '150% 125%' : '100% 100%',
            backgroundAttachment: 'fixed',
            backgroundPosition: !theme.isDarkMode ? "100% 50%" : "top"
        }}>
            <NavBar />
            { children }
        </div>  
    )
}

export default PageWrapper