import React, { CSSProperties, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavBarProps } from "../constants/typeIndex";
import { Theme, ThemeContextType } from "../constants/typeIndex";
import { ThemeContext } from "../hooks/themeProvider";
import { Logo } from "../constants/iconsIndex";
import CustomButtom from "./Button";
import ThemeButton from "./ThemeButton";
import Color from "color";
import { useWindowDimensions } from "../hooks/hooksIndex";
import CollapsableNavbarDrawer from "./Drawer";

const getPhoneStyling: CSSProperties = {
    
}

const NavBar = (props: NavBarProps) => {
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType
    const navigate = useNavigate()
    const location = useLocation()


    const { height, width } = useWindowDimensions()

    console.log(`h: ${height} w: ${width}`)
    const textFillLogic = !theme.isDarkMode ? theme.lightTheme.secondary : theme.darkTheme.onBackground
    const selectedTextFillLogic = !theme.isDarkMode ? theme.lightTheme.tertiary : theme.darkTheme.secondary

    const getTextFill = <T,>(pathName: T) => {
        if(pathName === location.pathname){
            return selectedTextFillLogic
        } else {
            return textFillLogic
        }
    }

    const getBGFill = <T,>(pathName: T) => {
        if(pathName === location.pathname){
            return !theme.isDarkMode ? theme.lightTheme.secondary : theme.darkTheme.onBackground
        } else {
            return 'transparent'
        }
    }

    return (
        <div className="navbar" style={{
            paddingLeft: width < 800 ? 25 : '15vw',
            paddingRight: width < 800 ? 35 : '15vw',
            justifyContent: width > 800 ? 'center' : 'space-between',
            background: !theme.isDarkMode ? theme.lightTheme.primary.fade(0.9).string() : theme.darkTheme.tertiary.fade(0.9).string(),
            backdropFilter: "blur(10px)"
        }}>
            <CustomButtom 
                mode='icon-only'
                text='text'
                iconPosition="right"
                showText={false}
                showIcon={width > 800 ? true : false}
                icon={<Logo scale={1.5} fill={!theme.isDarkMode ? [Color("#414066"), Color("white")] : [Color("white"), Color("#414066")]} />}
                onClick={() => {
                    navigate("/")
                }}
            />
            <div className="navbar-tabs-block" style={{
                // background: !theme.isDarkMode ? theme.lightTheme.primary.fade(0.7).string() : theme.darkTheme.tertiary.fade(0.7).string(),
                // backdropFilter: "blur(10px)"
                display: width > 800 ? 'flex' : 'none'
            }}>
                <div className="navbar-tabs-routes">
                    <CustomButtom 
                        mode="navbar"
                        text={"About"} 
                        onClick={() => {
                            navigate("/about")
                        }}
                        textColor={getTextFill('/about')}
                        bgColor={getBGFill('/about')}
                        isTextBold={location.pathname === '/about'}
                    />
                    <CustomButtom 
                        mode="navbar"
                        text={"Projects"}
                        onClick={() => {
                            navigate("/projects")
                        }}
                        textColor={getTextFill('/projects')}
                        bgColor={getBGFill('/projects')}
                        isTextBold={location.pathname === '/projects'}
                    />
                </div>
                <CustomButtom 
                    mode='resume'
                    text={"Resume"}
                    borderColor={textFillLogic}
                    textColor={textFillLogic}
                    isBorderCurved={true}
                    onClick={() => {
                        window.open("https://drive.google.com/file/d/1Ps4DJcIw1zJGanGCM5z-ZMRqJYZl-8WL/view?usp=sharing", "_blank", "noopener,noreferrer");
                    }}
                 />
            </div>
            <CollapsableNavbarDrawer />
            <ThemeButton />
        </div>
    )
}

export default NavBar;