import React, { CSSProperties, useContext } from "react";
import { useNavigate } from "react-router-dom";
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

    const { height, width } = useWindowDimensions()

    console.log(`h: ${height} w: ${width}`)

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
                        text={"About"} 
                        onClick={() => {
                            navigate("/about")
                        }}
                    />
                    <CustomButtom 
                        text={"Projects"}
                        onClick={() => {
                            navigate("/projects")
                        }}
                    />
                </div>
                <CustomButtom text={"Resume"} />
            </div>
            <CollapsableNavbarDrawer />
            <ThemeButton />
        </div>
    )
}

export default NavBar;