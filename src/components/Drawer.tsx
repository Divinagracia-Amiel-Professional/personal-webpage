import React, { useState, KeyboardEvent, MouseEvent, useContext, memo, ReactElement } from "react";
import { Drawer, Box, List, ListItem, ListItemText, ListItemButton, SvgIconProps } from "@mui/material";
import { MenuIcon } from "../constants/iconsIndex";
import CustomButtom from "./Button";
import { useWindowDimensions } from "../hooks/hooksIndex"
import { Theme, ThemeContextType } from "../constants/typeIndex";
import { ThemeContext } from "../hooks/themeProvider";
import { useNavigate, useLocation } from "react-router-dom";
import router from "../routes/Routes";

type Anchor = 'top' | 'left' | 'bottom' | 'right';
type DrawerState = {
    top: boolean,
    left: boolean,
    right: boolean,
    bottom: boolean
}

var trigger = 0

type DrawerListItems = {
    route: string,
    icon: ReactElement<SvgIconProps>
}

const CollapsableNavbarDrawer = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [ isDrawerOpen, setIsDrawerOpen ] = useState<DrawerState>({
        top: false,
        left: false,
        right: false,
        bottom: false
    })
    const { height, width } = useWindowDimensions()
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType
    const navigate = useNavigate()

    const toggleOpenDrawer = ( isDrawerOpen: boolean ) =>
        ( event: KeyboardEvent | MouseEvent ) => {
            if (          
                event?.type === 'keydown' &&
                ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
            ) {
                return;
        }

        setIsDrawerOpen(prevState => ({
            ...prevState, left: isDrawerOpen
        }))
    }

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    console.log(selectedIndex)

    const list = ( anchor: Anchor) => {
        return(
            <Box
                sx={{ 
                    width: 300
                }}
                role="presentation"
                onClick={toggleOpenDrawer(false)}
                onKeyDown={toggleOpenDrawer(false)}
            >
                <List

                >
                    {['Home', 'About', 'Projects'].map((route, index) => (
                        
                        <ListItemButton 
                            key={route}
                            selected={selectedIndex === index}
                            onClick={(event) => {
                                handleListItemClick(event, index)
                                const navigateString = route === 'Home' ? "/" : `/${route.toLowerCase()}`
                                navigate(navigateString)
                            }}
                        >
                            <ListItemText primary={route} />
                        </ListItemButton>
                    ))}
                    <ListItemButton
                        alignItems="center"
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        <ListItemText primary='Resume' />
                    </ListItemButton>
                </List>   
            </Box>
        )
    }

    console.log(isDrawerOpen)

    return (
        <>
            <div
                style={{
                    padding: 10,
                    display: width < 850 ? 'flex' : 'none'
                }}
                onClick={toggleOpenDrawer(true)}
            >
                <MenuIcon />
            </div>
            <Drawer
                anchor={'left'}
                open={isDrawerOpen['left']}
                onClose={toggleOpenDrawer(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                    backgroundColor: !theme.isDarkMode ? theme.lightTheme.primary.fade(0.9).string() : theme.darkTheme.tertiary.fade(0.5).string(), // Set background color
                    backdropFilter:  "blur(10px)",
                    // color: "#fff", // Set text color (optional)
                    },
                }}
            >
                {list('left')}
            </Drawer>
        </>
    )
}

export default memo(CollapsableNavbarDrawer)