import React from "react";
import { NavBarProps } from "../constants/typeIndex";
import { Logo } from "../constants/iconsIndex";
import CustomButtom from "./Button";

const NavBar = (props: NavBarProps) => {
    return (
        <div className="navbar">
            <Logo />
            <div className="navbar-tabs-block">
                <div className="navbar-tabs-routes">
                    <CustomButtom text={"About"} />
                    <CustomButtom text={"Projects"} />
                </div>
                <CustomButtom text={"Resume"} />
            </div>
        </div>
    )
}

export default NavBar;