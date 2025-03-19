import React, { CSSProperties, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { multiColor, NavBarProps } from "../constants/typeIndex";
import { Logo, DownloadRounded } from "../constants/iconsIndex";
import CustomButtom from "./Button";
import ThemeButton from "./ThemeButton";
import Color from "color";
import { useWindowDimensions, useThemeContext } from "../hooks/hooksIndex";
import CollapsableNavbarDrawer from "./Drawer";

const getPhoneStyling: CSSProperties = {
    
}

const NavBar = ({ scrollPosition }: NavBarProps) => {
    const { theme, setMode } = useThemeContext()
    const navigate = useNavigate()
    const location = useLocation()
    const { height, width } = useWindowDimensions()

    console.log(`h: ${height} w: ${width}`)
    
    const getTextFill = <T,>(pathName: T) => {
        if(pathName === location.pathname){
            return theme.components.navBarButtons.selectedTextFill
        } else {
            return theme.components.navBarButtons.textFill
        }
    }

    const getBGFill = <T,>(pathName: T) => {
        if(pathName === location.pathname){
            return theme.components.navBarButtons.selectedBgFill
        } else {
            return theme.components.navBarButtons.backgroundFill
        }
    }


    return (
        <div className="navbar" style={{
            paddingLeft: width < 850 ? 25 : '15vw',
            paddingRight: width < 850 ? 35 : '15vw',
            justifyContent: width > 850 ? 'center' : 'space-between',
            background: scrollPosition > 50 ? (!theme.isDarkMode ? theme.lightTheme.primary.fade(0.8).string() : theme.darkTheme.tertiary.fade(0.8).string()) : 'none',
            backdropFilter: `${scrollPosition > 50 ? "blur(10px)" : "none"}`,
            transition: "background 250ms ease-in-out"
        }}>
            {/* <p>{scrollPosition}</p> */}
            <CustomButtom 
                mode='icon-only'
                text='text'
                iconPosition="right"
                showText={false}
                showIcon={width > 850 ? true : false}
                icon={<Logo scale={1.5} fill={theme.components.navBarButtons.iconFill} />}
                onClick={() => {
                    navigate("/")
                }}
            />
            <div className="navbar-tabs-block" style={{
                // background: !theme.isDarkMode ? theme.lightTheme.primary.fade(0.7).string() : theme.darkTheme.tertiary.fade(0.7).string(),
                // backdropFilter: "blur(10px)"
                display: width > 850 ? 'flex' : 'none'
            }}>
                <div className="navbar-tabs-routes">
                    <CustomButtom 
                        mode="navbar"
                        text={"About"} 
                        onClick={() => {
                            navigate("/about")
                        }}
                        hoverIconColor={getTextFill('/about')}
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
                        hoverIconColor={getTextFill('/projects')}
                        textColor={getTextFill('/projects')}
                        bgColor={getBGFill('/projects')}
                        isTextBold={location.pathname === '/projects'}
                    />
                </div>
                <CustomButtom 
                    mode='resume'
                    text={"Resume"}
                    borderColor={theme.components.resumeButton.textFill}
                    hoverBgColor={theme.components.resumeButton.backgroundHoverFill}
                    hoverIconColor={theme.components.resumeButton.iconHoverFill}
                    // icon={<DownloadRounded sx={{color: theme.components.resumeButton.iconFill?.toString(), fontSize: 30}}/>}
                    // showIcon
                    // iconPosition="top"
                    textColor={theme.components.resumeButton.textFill}
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