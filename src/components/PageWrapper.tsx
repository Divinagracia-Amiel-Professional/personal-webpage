import React, { createContext, ReactNode, useContext, useEffect } from 'react'
import { PageWrapperProps } from '../constants/typeIndex'
import { useThemeContext, useScrollPosition } from '../hooks/hooksIndex'
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
    const { theme, setMode } = useThemeContext()
    const scrollPos = useScrollPosition()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className="page-wrapper" 
            style={{
                backgroundImage: !theme.isDarkMode ? 'linear-gradient(15deg, #A44A3F, #F4EEA9)' : 'linear-gradient(15deg, #414066, #A44A3F)',
                backgroundSize: !theme.isDarkMode ? '150% 150%' : '100% 100%',
                backgroundAttachment: 'fixed',
                backgroundPosition: !theme.isDarkMode ? "100% 50%" : "top",
                transition: "background-image 5s ease-in-out, background-size 5s ease-in-out, background-position 5s ease-in-out"
            }}
        >
            <NavBar scrollPosition={scrollPos} />
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