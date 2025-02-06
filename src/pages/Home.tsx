import React, { useContext } from "react";
import { HomeProps } from "../constants/typeIndex";
import { Logo, MoonIcon, SunIcon, ChevronRightRounded } from "../constants/iconsIndex";
import { HomeProfilePic } from "../constants/imageIndex";
import { NavBar, ThemeButton, PageWrapper, CustomButtom } from "../components/componentIndex";
import Color from "color";
import { ThemeContext } from "../hooks/themeProvider"
import { ThemeContextType, Theme } from "../constants/typeIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { useWindowDimensions, useThemeContext } from "../hooks/hooksIndex";

const Home = (props: HomeProps) => {
    const { theme, setMode } = useThemeContext()
    const { height, width } = useWindowDimensions()
    const navigate = useNavigate()
    
    
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
                        style={{ color: theme.components.contentText.textFill.toString() }}
                    >
                        Hello World, I'm <br/><span style={{color: theme.components.contentText.emphasizedFill.toString()}} className="xxx-large roboto-mono-bold">Amiel Divinagracia</span>.
                    </p>
                    <p
                        className="x-large roboto-mono-regular"
                        style={{ color: theme.components.contentText.textFill.toString() }}
                    >
                        An Aspiring <br/><span style={{color: theme.components.contentText.emphasizedFill.toString()}} className="xxx-large roboto-mono-bold">Developer</span>.
                    </p>
                    <CustomButtom 
                        mode='transparent-bordered'
                        text={"Check Out My Projects"}
                        isTextBold={true}
                        showIcon={true}
                        iconPosition="right"
                        // borderColor={textFillLogic}
                        bgColor={theme.components.button.backgroundFill}
                        textColor={theme.components.button.textFill}
                        hoverIconColor={theme.components.button.iconHoverFill as Color}
                        hoverBgColor={theme.components.button.backgroundHoverFill}
                        icon={<ChevronRightRounded sx={{color: theme.components.button.textFill.toString()}} />}
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