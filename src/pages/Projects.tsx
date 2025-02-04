import React, { CSSProperties, ReactElement, useContext, useState, useEffect, useMemo } from "react";
import { ProjectProps } from "../constants/typeIndex";
import { PageWrapper, CustomButtom} from "../components/componentIndex";
import { ThemeContext } from "../hooks/themeProvider";
import { ThemeContextType } from "../constants/typeIndex";
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

type EventVoidFunc = (e: EventObject) => void

type ProjectBlockProps = {
    index: number,
    title: string,
    details: string,
    logoUrl?: string,
    imgUrls: string[],
    link?: string,
}

// type InitSetters = [ React.Dispatch<React.SetStateAction<number>>, React.Dispatch<React.SetStateAction<boolean>> ]

// type InitThumbItemsType = {
//     items: string[],
//     setters: InitSetters
// }

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
    }
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

type ThumbItemType = {
    items: string[],
    getThumbIndex: () => number,
    setThumbIndex: React.Dispatch<React.SetStateAction<number>>,
    setThumbAnim: React.Dispatch<React.SetStateAction<boolean>>
    thumbIndex: number
}

interface ThumbItemComponentProps extends Omit<ThumbItemType, 'items'> {
    index: number,
    imgRef: string
}

const ThumbItemComponent = ({
    getThumbIndex,
    setThumbAnim,
    setThumbIndex,
    index,
    imgRef,
    thumbIndex
}: ThumbItemComponentProps) => {
    const thisItemIndex = index;

    console.log(`thumbIndex: ${thumbIndex}`)
    
    return(
        <div
            className="projects-img-container-thumb"
            style={{
                border: thisItemIndex === getThumbIndex() ? '2px solid white' : 0
            }}
            onClick={() => (
                setThumbIndex(index),
                setThumbAnim(true)
            )}
        >
            <img src={imgRef} alt={imgRef} />
        </div>
    )
}

const initThumbItems = ({items, getThumbIndex, setThumbIndex, setThumbAnim, thumbIndex}: ThumbItemType) => {
    const carouselArray = items.map((imgRef, index) => {
        return(
            <ThumbItemComponent 
                index={index}
                imgRef={imgRef}
                getThumbIndex={getThumbIndex}
                setThumbIndex={setThumbIndex}
                setThumbAnim={setThumbAnim}
                thumbIndex={thumbIndex}
            />
        )
    })

    return carouselArray
} // setter for thumbnail arr of react components


const SliderModal = ({
    open,
    setToggle,
    imgUrls
}: SliderModalProps) => {
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType
    const [ mainIndex, setMainIndex ] = useState<number>(0)
    const [ mainAnim, setMainAnim ] = useState<boolean>(false)
    const [ thumbIndex, setThumbIndex ] = useState<number>(0)
    const [ thumbAnim, setThumbAnim ] = useState<boolean>(false)

    const getThumbIndex = () => { //get thumb index inside item
        return thumbIndex
    }

    const items = initItems(imgUrls)
    // const initThumbs = initThumbItems({
    //     thumbIndex: thumbIndex,
    //     items: imgUrls,
    //     getThumbIndex: getThumbIndex, 
    //     setThumbIndex: setThumbIndex, 
    //     setThumbAnim: setThumbAnim
    // })

    const initThumbs = initThumbItems({
        thumbIndex, 
        items: imgUrls,
        getThumbIndex,
        setThumbIndex,
        setThumbAnim
    })
  
    const [ thumbs, setThumbs ] = useState<ReactElement[]>(initThumbs)
    const [ mainItems ] = useState<ReactElement[]>(items)

    const textFill = !theme.isDarkMode ? theme.lightTheme.secondary.string() : theme.darkTheme.onBackground.string()
    const iconHoverFill = !theme.isDarkMode ? theme.lightTheme.tertiary.string() : theme.darkTheme.tertiary.string()
    const buttonTextFill = !theme.isDarkMode ? theme.lightTheme.background.string() : theme.darkTheme.secondary.string()
    const buttonFill = !theme.isDarkMode ? theme.lightTheme.primary.string() : theme.darkTheme.primary.string()

    // useEffect(() => {
    //     setThumbs(initThumbItems({
    //         thumbIndex, 
    //         items: imgUrls,
    //         getThumbIndex,
    //         setThumbIndex,
    //         setThumbAnim
    //     }));
    // }, [thumbIndex, imgUrls]);

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

    // const slideNext = () => {
    //     if(!thumbAnim && thumbIndex < thumbs.length - 1){
    //         setThumbAnim(true)
    //         setThumbIndex(prevState => prevState + 1)
    //     }
    // }

    // const slidePrev = () => {
    //     if(!thumbAnim && thumbIndex > 0){
    //         setThumbAnim(true)
    //         setThumbIndex(prevState => prevState - 1)
    //     }
    // }

    // const syncMainBeforeChange = (e: EventObject) => {
    //     setMainAnim(true)
    // }

    // const syncMainAfterChange = (e: EventObject) => {
        
    //     setMainAnim(false)

    //     if(e.type === 'action'){
    //         setThumbIndex(e.item)
    //         setThumbAnim(false)
    //     } else {
    //         setMainIndex(thumbIndex)
    //     }
    // }

    // const syncThumbs = (e: EventObject) => {
    //     console.log(e)
    //     setThumbIndex(e.item)
    //     setThumbAnim(false)

    //     if (!mainAnim) {
    //         setMainIndex(e.item)
    //     }
    // }

    const IconButtonStyle: SxProps = {
        color: buttonTextFill,
        "&:hover": { color: iconHoverFill }
    }

    const ButtonBGStyle: CSSProperties = {
        background: buttonFill
    }

    const renderPrevButton = ({ isDisabled }: { isDisabled?: boolean | undefined}) => {
        return (
            <div
                className="cursor-pointer"
                // style={ButtonBGStyle}
            >
                <ChevronLeftRounded 
                    sx={IconButtonStyle}
                />
            </div>
        );
    };
    
    const renderNextButton = ({ isDisabled }: { isDisabled?: boolean | undefined}) => {
        return (
            <CustomButtom 
                mode='icon-with-BG'
                text='text'
                iconPosition="right"
                showText={false}
                showIcon={true}
                bgColor={Color('red')}
                icon={
                    <ChevronRightRounded 
                        sx={IconButtonStyle}
                    />
                }
                onClick={() => {
                    // navigate("/")
                }}
            />
        );
    };

    // <div
    //     className="cursor-pointer"
    //     // style={ButtonBGStyle}

    // >
    //     <ChevronRightRounded 
    //         sx={IconButtonStyle}
    //     />
    // </div>

    console.log(mainIndex)
    
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
                    renderNextButton={renderNextButton}
                    renderPrevButton={renderPrevButton}
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
                    <CustomButtom 
                        mode='icon-with-BG'
                        text='text'
                        iconPosition="right"
                        showText={false}
                        showIcon={true}
                        bgColor={Color(buttonFill)}
                        isBorderCurved={true}
                        icon={
                            <ChevronLeftRounded 
                                sx={IconButtonStyle}
                            />
                        }
                        onClick={() => {
                            slidePrev()
                        }}
                    />
                    <CustomButtom 
                        mode='icon-with-BG'
                        text='text'
                        iconPosition="right"
                        showText={false}
                        showIcon={true}
                        bgColor={Color(buttonFill)}
                        isBorderCurved={true}
                        icon={
                            <ChevronRightRounded 
                                sx={IconButtonStyle}
                            />
                        }
                        onClick={() => {
                            slideNext()
                        }}
                    />
                </div>
                {/* <AliceCarousel
                    activeIndex={mainIndex}
                    animationType="fadeout"
                    animationDuration={400}
                    disableDotsControls
                    disableButtonsControls
                    items={mainItems}
                    mouseTracking={!thumbAnim}
                    onSlideChange={syncMainBeforeChange}
                    onSlideChanged={syncMainAfterChange}
                    touchTracking={!thumbAnim}
                />
                <div
                    className="thumbs"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        // maxWidth: '30vw',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        // justifyContent: 'space-between'
                    }}
                >
                    <div 
                        style={{
                            cursor: 'pointer',
                            padding: 20
                        }}
                        className="btn-prev" onClick={slidePrev}
                    >
                            &lang;
                    </div>
                    <AliceCarousel
                        activeIndex={thumbIndex}
                        autoWidth
                        disableButtonsControls
                        disableDotsControls
                        items={thumbs}
                        mouseTracking={false}
                        onSlideChanged={syncThumbs}
                        touchTracking={!mainAnim}
                    />
                    <div
                        style={{
                            cursor: 'pointer',
                            padding: 20
                        }} 
                        className="btn-next" 
                        onClick={slideNext}
                    >
                            &rang;
                    </div>
                </div>  */}
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
    const [ open, setOpen ] = useState<boolean>(false) 
    const setToggle = () => {
        setOpen(prevState => !prevState)
    }

    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType
    const textFill = !theme.isDarkMode ? theme.lightTheme.secondary.string() : theme.darkTheme.onBackground.string()
    const buttonTextFill = !theme.isDarkMode ? theme.lightTheme.background : theme.darkTheme.secondary
    const buttonFill = !theme.isDarkMode ? theme.lightTheme.primary : theme.darkTheme.primary
    const hasManyImages = imgUrls?.length > 2

    return(
        <div
            className="project-block"
            style={{flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}
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
                    }} className="project-details-body regSize roboto-mono-regular"
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
                        <div
                            className="cursor-pointer"
                            style={{
                                display: "flex",
                                flexDirection: "row"
                            }}
                            onClick={() => {
                                if(hasManyImages){
                                    setToggle()
                                }
                            }}
                        >
                            <p className="regSize roboto-mono-regular" style={{color: textFill}}>{`${imgUrls.length - 2}+ more`}</p>
                            <ChevronRightRounded sx={{color: textFill}}/>
                        </div> 
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
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType

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