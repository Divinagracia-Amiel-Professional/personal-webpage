import React, { useContext, ReactElement, useState } from "react";
import { ContactsProps } from "../constants/typeIndex";
import CustomButtom from "./Button";
import Color from "color";
import { Theme, ThemeContextType } from "../constants/typeIndex";
import { ThemeContext } from "../hooks/themeProvider";
import { useWindowDimensions, useThemeContext } from "../hooks/hooksIndex";
import { 
    LinkedInIcon,
    PhoneIcon, 
    GitHubIcon, 
    EmailIcon, 
    OpenInFullRounded,
    CloseFullscreenRounded 
} from "../constants/iconsIndex";

type ContactButtonItemsType = {
    text: string,
    icon: ReactElement | null,
    link: string,
}

const Contacts = (props: ContactsProps) => {
    const [ isExpanded, setIsExpanded ] = useState<boolean>(false)
    const { theme, setMode } = useThemeContext()
    const { width, height } = useWindowDimensions()

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState)
    }

    const ContactButtonItems: ContactButtonItemsType[] = [
        {
            text: 'LinkedIn',
            icon: <LinkedInIcon sx={{ color: theme.components.contactButtons.iconFill?.toString(), fontSize: 35 }} />,
            link: 'https://www.linkedin.com/in/amiel-divinagracia-7528a0241/'
        },
        {
            text: 'Phone',
            icon: <PhoneIcon sx={{ color: theme.components.contactButtons.iconFill?.toString(), fontSize: 35 }} />,
            link: '+639063976957'
        },
        {
            text: 'Email',
            icon: <EmailIcon sx={{ color: theme.components.contactButtons.iconFill?.toString(), fontSize: 35 }} />,
            link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=amielosias12345@gmail.com'
        },
        {
            text: 'GitHub',
            icon: <GitHubIcon sx={{ color: theme.components.contactButtons.iconFill?.toString(), fontSize: 35 }} />,
            link: 'https://github.com/Divinagracia-Amiel-Professional'
        }
    ]

    console.log(isExpanded)

    return(
        <div
            className="contacts-block"
            style={{
                background: theme.components.contactButtons.backgroundFill.toString()
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0,
                    borderRadius: 20,
                }}
            >
                {
                    ContactButtonItems.map((contactItem, index)=> {
                        const contactLinkText = contactItem.text === 'Email' ? contactItem.link.slice(50) : contactItem.link

                        return(
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    alignSelf: 'stretch',
                                    justifyContent: 'flex-start',
                                    gap: 10,
                                    // maxWidth: 400,
                                }}
                            >
                                <CustomButtom 
                                    key={contactItem.text}
                                    mode='icon-only'
                                    text={contactItem.text}
                                    iconPosition="left"
                                    showText={false}
                                    showIcon={true}
                                    hoverIconColor={theme.components.contactButtons.iconHoverFill}
                                    isBorderCurved 
                                    icon={contactItem.icon}
                                    onClick={() => {
                                        if(contactItem.text !== 'Phone'){
                                            window.open(contactItem.link, "_blank", "noopener,noreferrer");
                                        } else {
                                            toggleExpand()
                                        }
                                    }}
                                />
                                <p 
                                    className="small roboto-mono-regular"
                                    style={{
                                        display: isExpanded ? 'block' : 'none', 
                                        paddingRight: 15, 
                                        wordWrap: 'break-word',
                                        color: theme.components.contactButtons.textFill.toString(),
                                    }}
                                >
                                    {contactLinkText}
                                </p>
                            </div>    
                        )
                    })
                }
                <hr 
                    style={{
                        border: 0,
                        width: isExpanded ? '70%' : '70%',
                        borderTop: `1px solid ${theme.components.contactButtons.textFill.toString()}`,
                        margin: '10px 0',
                    }}
                />
                <CustomButtom 
                    mode='icon-only'
                    text={""}
                    iconPosition="right"
                    showText={false}
                    showIcon={true}
                    hoverIconColor={theme.components.contactButtons.iconHoverFill}
                    icon={
                        isExpanded ? 
                            <CloseFullscreenRounded sx={{ color: theme.components.contactButtons.iconFill?.toString(), fontSize: 25 }} /> :
                            <OpenInFullRounded sx={{ color: theme.components.contactButtons.iconFill?.toString(), fontSize: 25 }} />
                    }
                    onClick={toggleExpand}
                />
            </div>
        </div>
    )
}

export default Contacts