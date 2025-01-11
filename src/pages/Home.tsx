import React, { useContext } from "react";
import { HomeProps } from "../constants/typeIndex";
import { Logo, MoonIcon, SunIcon, ChevronRightRounded } from "../constants/iconsIndex";
import { HomeProfilePic } from "../constants/imageIndex";
import { NavBar, ThemeButton, PageWrapper, CustomButtom } from "../components/componentIndex";
import Color from "color";
import { ThemeContext } from "../hooks/themeProvider"
import { ThemeContextType, Theme } from "../constants/typeIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { useWindowDimensions } from "../hooks/hooksIndex";

const Home = (props: HomeProps) => {
    // const { theme, setMode } = useContext(ThemeContext) as ThemeContextType
    const { height, width } = useWindowDimensions()
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType
    const navigate = useNavigate()
    
    const normalTextFill = !theme.isDarkMode ? theme.lightTheme.secondary.string() : theme.darkTheme.onBackground.string() 
    const emphasizedFill = !theme.isDarkMode ? theme.lightTheme.accent1.string() : theme.darkTheme.primary.string()
    const buttonTextFill = !theme.isDarkMode ? theme.lightTheme.background : theme.darkTheme.secondary
    const buttonFill = !theme.isDarkMode ? theme.lightTheme.primary : theme.darkTheme.primary

    return (
        <PageWrapper>
            <div
                className="home-content"
                // style={{
                //     flexDirection: width < 850 ? 'column' : 'row'
                // }}
            >
                <div
                    className="home-intro-text"
                >
                    <p
                        className="x-large roboto-mono-regular"
                        style={{ color: normalTextFill }}
                    >
                        Hello World, I'm <br/><span style={{color: emphasizedFill}} className="xxx-large roboto-mono-bold">Amiel Divinagracia</span>.
                    </p>
                    <p
                        className="x-large roboto-mono-regular"
                        style={{ color: normalTextFill }}
                    >
                        An Aspiring <br/><span style={{color: emphasizedFill}} className="xxx-large roboto-mono-bold">Developer</span>.
                    </p>
                    <CustomButtom 
                        mode='transparent-bordered'
                        text={"Check Out My Projects"}
                        isTextBold={true}
                        showIcon={true}
                        iconPosition="right"
                        // borderColor={textFillLogic}
                        bgColor={buttonFill}
                        textColor={buttonTextFill}
                        icon={<ChevronRightRounded sx={{color: buttonTextFill.string()}} />}
                        isBorderCurved={true}
                        onClick={() => {
                            navigate('/projects')
                        }}
                    />
                </div>
                <div
                    className="home-img-container"
                >
                    <img src={HomeProfilePic} alt="home profile pic" />
                </div>
            </div>
        </PageWrapper>
    )
}

export default Home

/* background: linear-gradient(15deg, #A44A3F, #F4EEA9);
  background-size: 150% 125%; 
  background-position: 100% 50%; 
  background-attachment: fixed;  */

//   <Logo scale={10} fill={[Color('black'), Color('white')]}/>
//   <MoonIcon scale={10} fill={[Color('black'), Color('white')]} />
//   <SunIcon scale={10} fill={[Color('black'), Color('white')]}/>