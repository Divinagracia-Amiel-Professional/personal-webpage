import React, { useContext } from "react";
import { HomeProps } from "../constants/typeIndex";
import { Logo } from "../constants/iconsIndex";
import { NavBar, ThemeButton } from "../components/componentIndex";
import Color from "color";
import { ThemeContext } from "../hooks/themeProvider"
import { ThemeContextType, Theme } from "../constants/typeIndex";

const Home = (props: HomeProps) => {
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType

    return (
        <div className="page-wrapper" style={{
            background: 'linear-gradient(15deg, #A44A3F, #F4EEA9)',
            backgroundSize: '150% 125%',
            backgroundAttachment: 'fixed',
            backgroundPosition: "100% 50%"
        }}>
            <NavBar />
            <ThemeButton />
            <div className='title'>
                Home
            </div>
            <Logo scale={10} fill={[Color('black'), Color('white')]} invert={false}/>
        </div>
    )
}

export default Home

/* background: linear-gradient(15deg, #A44A3F, #F4EEA9);
  background-size: 150% 125%; 
  background-position: 100% 50%; 
  background-attachment: fixed;  */