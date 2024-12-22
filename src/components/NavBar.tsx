import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavBarProps } from "../constants/typeIndex";
import { Theme, ThemeContextType } from "../constants/typeIndex";
import { ThemeContext } from "../hooks/themeProvider";
import { Logo } from "../constants/iconsIndex";
import CustomButtom from "./Button";
import ThemeButton from "./ThemeButton";
import Color from "color";


const NavBar = (props: NavBarProps) => {
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType
    const navigate = useNavigate()

    return (
        <div className="navbar" style={{
            background: !theme.isDarkMode ? theme.lightTheme.primary.fade(0.9).string() : theme.darkTheme.tertiary.fade(0.9).string(),
            backdropFilter: "blur(10px)"
        }}>
            <CustomButtom 
                text='text'
                iconPosition="right"
                showText={false}
                showIcon={true}
                icon={<Logo scale={1.5} fill={!theme.isDarkMode ? [Color("#414066"), Color("white")] : [Color("white"), Color("#414066")]} />}
                onClick={() => {
                    navigate("/")
                }}
            />
            <div className="navbar-tabs-block" style={{
                // background: !theme.isDarkMode ? theme.lightTheme.primary.fade(0.7).string() : theme.darkTheme.tertiary.fade(0.7).string(),
                // backdropFilter: "blur(10px)"
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
            <ThemeButton />
        </div>
    )
}

export default NavBar;