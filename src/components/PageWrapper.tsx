import React, { createContext, ReactNode, useContext } from 'react'
import { Theme, ThemeContextType, ThemeProviderProps, PageWrapperProps } from '../constants/typeIndex'
import { ThemeContext } from '../hooks/themeProvider'
import { useThemeContext } from '../hooks/hooksIndex'
import NavBar from './NavBar'
import Contacts from './Contacts'
import Color from 'color'

type FooterProps = {

}

const Header = ({ title }: Omit<PageWrapperProps, 'children'>) => {
    const { theme, setMode } = useThemeContext()

    return(
        <div
            className="header-container"
            style={{
                display: title ? 'flex' : 'none'
            }}
        >
            <p 
                className="xx-large lexend-bold"
                style={{
                    color: theme.components.pageWrapper.headerTextFill.toString()
                }}
            >
                { title }
            </p>
        </div>
    )
} 

const Footer = (props: FooterProps) => {
    const { theme, setMode } = useThemeContext()

    return(
        <div
            className='footer-block'
            style={{
                backgroundColor: theme.components.pageWrapper.footerBgFill.toString()
            }}
        >
            <p
                className='small roboto-mono-light'  
                style={{
                    color: theme.components.pageWrapper.footerTextFill.toString()
                }}
            >&copy; 2024 Amiel Divinagracia</p>
        </div>
    )
}

const PageWrapper = ({ children, title }: PageWrapperProps) => {  
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType

    return (
        <div className="page-wrapper" style={{
            backgroundImage: !theme.isDarkMode ? 'linear-gradient(15deg, #A44A3F, #F4EEA9)' : 'linear-gradient(15deg, #414066, #A44A3F)',
            backgroundSize: !theme.isDarkMode ? '150% 150%' : '100% 100%',
            backgroundAttachment: 'fixed',
            backgroundPosition: !theme.isDarkMode ? "100% 50%" : "top"
        }}>
            <NavBar />
            <Contacts />
            <Header
                title={ title ? title : null }
            />
            { children }
            <Footer />
        </div>  
    )
}

export default PageWrapper
export {
    Header
}