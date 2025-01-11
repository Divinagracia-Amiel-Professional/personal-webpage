import React, { useContext } from "react";
import { ProjectProps } from "../constants/typeIndex";
import { PageWrapper, CustomButtom} from "../components/componentIndex";
import { ThemeContext } from "../hooks/themeProvider";
import { ThemeContextType } from "../constants/typeIndex";
import { ChevronRightRounded } from "@mui/icons-material";

type ProjectBlockProps = {
    index: number,
    title: string,
    details: string,
    imgUrls?: string[],
    link?: string,
}

const projectsObjects: Omit<ProjectBlockProps, 'index'>[] = [
    {
        title: "Overloaded",
        details: "Overloaded is a mobile fitness app designed to optimize workout routines and enhance overall well-being through the proven training system of progressive overloading. The application serves as a progressive overload tracker and offers features that are indispensable tools not only for muscle-building enthusiasts but also powerlifters, weightlifters, etc. This app utilized React Native to develop the mobile application and Google Firebase for an online database and Redux-Persist for offline storage. My role in this project was as the lead frontend and backend developer."
    },
    {
        title: "Intelliwatt: Home Automation and Energy Monitoring System",
        details: "Intelliwatt is a web application that was developed for our thesis project, which is a viable and efficient home energy management system that has the capability to monitor, log, control, alarm and manage household devices and their variables. This app utilized the open-source home automation framework ‘Home Assistant’ for data gathering and control. React was then used for creating an intuitive custom dashboard using REST API to receive data from Home Assistant. My role in this project was as the lead frontend and backend developer for the web application side."
    }
]

const ProjectBlock = ({
    title,
    index,
    details,
    imgUrls,
    link
}: ProjectBlockProps) => {

    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType
    const textFill = !theme.isDarkMode ? theme.lightTheme.secondary.string() : theme.darkTheme.onBackground.string()
    const buttonTextFill = !theme.isDarkMode ? theme.lightTheme.background : theme.darkTheme.secondary
    const buttonFill = !theme.isDarkMode ? theme.lightTheme.primary : theme.darkTheme.primary

    return(
        <div
            className="project-block"
            style={{flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}
        >
            <div
                className="project-details"
            >
                <p
                    className="project-details-title x-large lexend-bold"
                    style={{
                        color: textFill
                    }}
                > {title} </p>
                <hr style={{width: '50%', height: 1, background: textFill, border: 0}} />
                <p
                    style={{
                        color: textFill,
                        marginBottom: 20
                    }} className="project-details-body medium roboto-mono-regular"
                > {details}</p>
                <CustomButtom 
                    mode='transparent-bordered'
                    text={"View Repository"}
                    isTextBold={true}
                    showIcon={true}
                    iconPosition="right"
                    // borderColor={textFillLogic}
                    bgColor={buttonFill}
                    textColor={buttonTextFill}
                    icon={<ChevronRightRounded sx={{color: buttonTextFill.string()}} />}
                    isBorderCurved={true}
                    onClick={() => {
                        
                    }}
                />
            </div>
            <div
                className="project-imgs"
            >
                <p>imgs</p>
            </div>
        </div>
    )
}

const Projects = (props: ProjectProps) => {
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType

    return (
        <PageWrapper>
            <div
                className="projects-content"
            >
                <div
                    className="projects-header-container"
                >
                    <p 
                        className="xx-large lexend-bold"
                        style={{
                            color: !theme.isDarkMode ? theme.lightTheme.accent1.string() : theme.darkTheme.primary.string()
                        }}
                    >
                        Projects
                    </p>
                </div>
                {
                    projectsObjects.map((project, index, arr) => {
                        return(
                            <ProjectBlock 
                                key={project.title}
                                index={index}
                                title={project.title}
                                details={project.details}
                            />
                        )
                    })
                }
            </div>
        </PageWrapper>
    )
}

export default Projects