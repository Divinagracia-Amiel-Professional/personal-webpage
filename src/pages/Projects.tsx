import React, { CSSProperties, ReactElement, useContext, useState, useEffect, useMemo } from "react";
import { ProjectProps } from "../constants/typeIndex";
import { PageWrapper, CustomButtom} from "../components/componentIndex";
import { useThemeContext, useWindowDimensions } from "../hooks/hooksIndex";
import { ChevronRightRounded, ChevronLeftRounded } from "../constants/iconsIndex";
import { SxProps } from "@mui/material";
import { Modal } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import { EventObject, SlideInfo, DotsItem, EventType } from "react-alice-carousel";
import "../css/carousel.css"
import { 
    OverloadedLogo,
    HomeAssistantLogo,
    OverloadedImg1,
    OverloadedImg2,
    OverloadedImg3,
    OverloadedImg4,
    OverloadedImg5,
    OverloadedImg6,
    HomeAssistantImg1,
    HomeAssistantImg2,
    HomeAssistantImg3,
    HomeAssistantImg4,
    HomeAssistantImg5,
    HomeAssistantImg6
} from "../constants/imageIndex";
import Color from "color";

type ProjectBlockProps = {
    index: number,
    title: string,
    details: string,
    logoUrl?: string,
    imgUrls: string[],
    link?: string,
}

interface SliderModalProps extends Pick<ProjectBlockProps, 'imgUrls'>{
    open: boolean,
    setToggle: () => void
}

const projectsObjects: Omit<ProjectBlockProps, 'index'>[] = [
    {
        title: "Overloaded",
        details: "Overloaded is a mobile fitness app designed to optimize workout routines and enhance overall well-being through the proven training system of progressive overloading. The application serves as a progressive overload tracker and offers features that are indispensable tools not only for muscle-building enthusiasts but also powerlifters, weightlifters, etc. This app utilized React Native to develop the mobile application and Google Firebase for an online database and Redux-Persist for offline storage. My role in this project was as the lead frontend and backend developer.",
        logoUrl: OverloadedLogo,
        imgUrls: [
            OverloadedImg1,
            OverloadedImg2,
            OverloadedImg3,
            OverloadedImg4,
            OverloadedImg5,
            OverloadedImg6
        ],
        link: "https://github.com/Divinagracia-Amiel-Professional/Overloaded-Weightlifting-App"
    },
    {
        title: "Intelliwatt: Home Automation and Energy Monitoring System",
        details: "Intelliwatt is a web application that was developed for our thesis project, which is a viable and efficient home energy management system that has the capability to monitor, log, control, alarm and manage household devices and their variables. This app utilized the open-source home automation framework ‘Home Assistant’ for data gathering and control. React was then used for creating an intuitive custom dashboard using REST API to receive data from Home Assistant. My role in this project was as the lead frontend and backend developer for the web application side.",
        logoUrl: HomeAssistantLogo,
        imgUrls: [
            HomeAssistantImg1,
            HomeAssistantImg2,
            HomeAssistantImg3,
            HomeAssistantImg4,
            HomeAssistantImg5,
            HomeAssistantImg6,
        ],
        link: "https://github.com/Divinagracia-Amiel-Professional/home-assistant-simplified-web"
    },
    // {
    //     title: "Personal Webpage",
    //     details: "Intelliwatt is a web application that was developed for our thesis project, which is a viable and efficient home energy management system that has the capability to monitor, log, control, alarm and manage household devices and their variables. This app utilized the open-source home automation framework ‘Home Assistant’ for data gathering and control. React was then used for creating an intuitive custom dashboard using REST API to receive data from Home Assistant. My role in this project was as the lead frontend and backend developer for the web application side.",
    //     logoUrl: HomeAssistantLogo,
    //     imgUrls: [
    //         HomeAssistantImg1,
    //         HomeAssistantImg2,
    //         HomeAssistantImg3,
    //         HomeAssistantImg4,
    //         HomeAssistantImg5,
    //         HomeAssistantImg6,
    //     ],
    //     link: "https://github.com/Divinagracia-Amiel-Professional/home-assistant-simplified-web"
    // }
]

const initItems = (
    items: string[],
) => {
    return items.map((imgRef, index) => {
        return(
            <div
                className="projects-img-container"
                style={{
                    position: 'relative',
                }}
            >
                <div //for blurred background
                    className="blur-img-background"
                    style={{
                        backgroundImage: `url(${imgRef})`,
                    }}
                ></div>
                <div className="darken-img-background"></div>
                <img src={imgRef} alt={imgRef} />
            </div>
        )
    })
} // setter for main items

const SliderModal = ({
    open,
    setToggle,
    imgUrls
}: SliderModalProps) => {
    const { theme, setMode } = useThemeContext()
    const [ mainIndex, setMainIndex ] = useState<number>(0)
    const [ mainAnim, setMainAnim ] = useState<boolean>(false)
    const [ thumbIndex, setThumbIndex ] = useState<number>(0)
    const [ thumbAnim, setThumbAnim ] = useState<boolean>(false)

    const items = initItems(imgUrls)                                                                
  
    const [ mainItems ] = useState<ReactElement[]>(items)

    const slideNext = () => {
        if(mainIndex < items.length - 1){
            setMainIndex(prevState => (prevState + 1))
        }
    }

    const slidePrev = () => {
        if(mainIndex > 0){
            setMainIndex(prevState => (prevState - 1))
        }
    }

    const handleSetMainIndex = (e: EventObject) => {
        console.log(e)
        setMainIndex(e.item)
    }

    console.log(mainIndex)
    
    const sliderButtonsProps = [
        {
            icon: <ChevronLeftRounded sx={{ color: theme.components.button.iconFill?.toString() }} />,
            onClick: () => slidePrev() 
        },
        {
            icon: <ChevronRightRounded sx={{ color: theme.components.button.iconFill?.toString() }} />,
            onClick: () => slideNext()
        }
    ]
    
    return(
        <Modal
            open={open}
            onClose={setToggle}
            sx={{
                border: 0
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    minHeight: '100%',
                    width: '50vw',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    justifySelf: 'center',
                    border: 0,
                    gap: 20,
                }}
            >
                <AliceCarousel
                    activeIndex={mainIndex}
                    mouseTracking={false}
                    items={mainItems}
                    animationDuration={800}

                    // responsive={responsive}   
                    controlsStrategy="alternate"
                    onSlideChanged={handleSetMainIndex}
                    disableButtonsControls
                    syncStateOnPropsUpdate={true}
                />
                <div
                    className="carousel-buttons"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        maxWidth: '30vw',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        gap: 80,
                        // alignSelf: 'stretch',
                    }}
                >
                    {
                        sliderButtonsProps.map(button => (
                            <CustomButtom
                                mode='icon-with-BG'
                                text='text'
                                iconPosition="right"
                                showText={false}
                                showIcon={true}
                                bgColor={theme.components.button.backgroundFill}
                                hoverIconColor={theme.components.button.iconHoverFill}
                                hoverBgColor={theme.components.button.backgroundHoverFill}
                                isBorderCurved={true}
                                icon={button.icon}
                                onClick={button.onClick}
                            />
                        ))
                    }
                </div>
            </div>   
        </Modal>
    )
}

const ProjectBlock = ({
    title,
    index,
    details,
    imgUrls,
    logoUrl,
    link
}: ProjectBlockProps) => {
    const { theme, setMode } = useThemeContext()
    const [ open, setOpen ] = useState<boolean>(false) 
    const { width, height } = useWindowDimensions()
    const setToggle = () => {
        setOpen(prevState => !prevState)
    }
    
    const hasManyImages = imgUrls?.length > 2

    return(
        <div
            className="project-block"
            style={{
                flexDirection: width > 850 ? (index % 2 === 0 ? 'row' : 'row-reverse') : 'column',
                gap: width > 850 ? 10 : 50
            }}
        >
            <div
                className="project-details"
            >
                <div
                    className="project-logo-img-container"
                >
                    <img src={logoUrl} alt={logoUrl} />
                </div>
                <p
                    className={`project-details-title x-large lexend-bold`}
                    style={{
                        color: theme.components.contentText.textFill.toString()
                    }}
                > {title} </p>
                <hr style={{width: '50%', height: 1, background: theme.components.contentText.textFill.toString(), border: 0}} />
                <p
                    style={{
                        color: theme.components.contentText.textFill.toString(),
                        marginBottom: 20
                    }} className={`project-details-body regSize roboto-mono-regular`}
                > {details}</p>
                <CustomButtom 
                    mode='transparent-bordered'
                    text={"View Repository"}
                    isTextBold={true}
                    showIcon={true}
                    iconPosition="right"
                    // borderColor={textFillLogic}
                    bgColor={theme.components.button.backgroundFill}
                    textColor={theme.components.button.textFill}
                    hoverIconColor={theme.components.button.iconHoverFill}
                    hoverBgColor={theme.components.button.backgroundHoverFill}
                    icon={<ChevronRightRounded sx={{color: theme.components.button.textFill.string()}} />}
                    isBorderCurved={true}
                    onClick={() => {
                        window.open(link, "_blank", "noopener,noreferrer");
                    }}
                />
            </div>
            <div
                className="project-imgs"
                onClick={() => {}}
            >
                {
                    imgUrls.slice(0, 2).map((imgRef, index) => {
                        return(
                            <div
                                key={index}
                                className="projects-img-container"
                            >
                                <img src={imgRef} alt={imgRef} />
                            </div>
                        )
                    })
                }
                {
                    hasManyImages ? 
                        <CustomButtom 
                            mode='text-only'
                            text={`${imgUrls.length - 2}+ more`}
                            isTextBold={true}
                            showIcon={true}
                            iconPosition="right"
                            // borderColor={textFillLogic}
                            bgColor={Color('rgb(0,0,0,0)')}
                            textColor={theme.components.contentText.textFill}
                            hoverIconColor={theme.components.contentText.emphasizedFill}
                            icon={<ChevronRightRounded sx={{color: theme.components.contentText.textFill.toString()}} />}
                            isBorderCurved={true}
                            onClick={() => {
                                if(hasManyImages){
                                setToggle()
                            }
                            }}
                        />
                        : null
                }
            </div>
            <SliderModal 
                open={open}
                setToggle={setToggle}
                imgUrls={imgUrls}
            />
        </div>
    )
}

const Projects = (props: ProjectProps) => {

    return (
        <PageWrapper
            title='Projects'
        >
            <div
                className="projects-content"
            >
                {
                    projectsObjects.map((project, index, arr) => {
                        return(
                            <ProjectBlock 
                                key={project.title}
                                index={index}
                                title={project.title}
                                details={project.details}
                                imgUrls={project.imgUrls}
                                logoUrl={project.logoUrl}
                                link={project.link}
                            />
                        )
                    })
                }
            </div>
        </PageWrapper>
    )
}

export default Projects