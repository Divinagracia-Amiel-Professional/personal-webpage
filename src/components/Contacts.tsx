import React, { useContext, ReactElement } from "react";
import { ContactsProps } from "../constants/typeIndex";
import CustomButtom from "./Button";
import Color from "color";
import { Theme, ThemeContextType } from "../constants/typeIndex";
import { ThemeContext } from "../hooks/themeProvider";
import { useWindowDimensions } from "../hooks/hooksIndex";
import { LinkedInIcon, PhoneIcon, GitHubIcon, EmailIcon } from "../constants/iconsIndex";

type ContactButtonItemsType = {
    text: string,
    icon: ReactElement | null,
    link: string,
}

const Contacts = (props: ContactsProps) => {
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType
    const { width, height } = useWindowDimensions()

    const IconFillLogic = !theme.isDarkMode ? theme.lightTheme.background.string() : theme.darkTheme.tertiary.string()

    const ContactButtonItems: ContactButtonItemsType[] = [
        {
            text: 'LinkedIn',
            icon: <LinkedInIcon sx={{ color: IconFillLogic, fontSize: 35 }} />,
            link: '/'
        },
        {
            text: 'Phone',
            icon: <PhoneIcon sx={{ color: IconFillLogic, fontSize: 35 }} />,
            link: '/'
        },
        {
            text: 'Email',
            icon: <EmailIcon sx={{ color: IconFillLogic, fontSize: 35 }} />,
            link: '/'
        },
        {
            text: 'GitHub',
            icon: <GitHubIcon sx={{ color: IconFillLogic, fontSize: 35 }} />,
            link: '/'
        }
    ]

    return(
        <div
            className="contacts-block"
            style={{
                background: !theme.isDarkMode ? theme.lightTheme.secondary.string() : theme.darkTheme.onBackground.string()
            }}
        >
            {
                ContactButtonItems.map(contactItems => {
                    return(
                        <CustomButtom 
                            key={contactItems.text}
                            mode='icon-only'
                            text={contactItems.text}
                            iconPosition="right"
                            showText={false}
                            showIcon={true}
                            icon={contactItems.icon}
                            onClick={() => {
                                // navigate("/")
                            }}
                        />
                    )
                })
            }
        </div>
    )
}

export default Contacts