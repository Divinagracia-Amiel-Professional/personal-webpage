import React, { useContext, Fragment } from "react";
import { AboutProps } from "../constants/typeIndex";
import { PageWrapper } from "../components/componentIndex";
import { ThemeContextType } from "../constants/typeIndex";
import { ThemeContext } from "../hooks/themeProvider";
import { Header } from "../components/PageWrapper";
import { GradPic, DKLogo, AheadLogo } from "../constants/imageIndex";

type AboutBlockProps = 
| {
    title: string,
    imgRef: string,
    mode: "single-text",
    details: string,
    role?: never,
    accomplishments?: never,
    toolsUsed?: never
}
| {
    title: string,
    imgRef: string,
    mode: "internship",
    role: string,
    accomplishments: string[],
    toolsUsed: string[],
    details?: never
}

const AboutMeValue: AboutBlockProps = {
    title: "A Fresh Graduate ready to tackle the world",
    imgRef: GradPic,
    mode: "single-text",
    details: `From an early age, I have always been captivated by the world of software and game development from simple websites to hopefully someday different types of games. My computer engineering degree has helped me developed the foundation and skillset to pursue this long-time passion of mine. This passion and innate curiosity for developing software helps me fuel my eagerness to learn various programming languages, master development concepts, and be updated on emerging software trends, etc. 
    \n I want to develop applications that are meaningful to the lives of the users. There is something fulfilling about developing little tiny applications on the screen of little tiny devices that leaves an impact to the lives of its users. This is just the beginning of my journey to software development and I am excited to take my first steps towards software development, eager to learn, and contribute in creating impactful software.`
}

const InternshipValues: Extract<AboutBlockProps, { mode: "internship" }>[] = [
    {
        title: "GSYNC Solutions Philippines - DevKinetics Inc.",
        imgRef: DKLogo,
        mode: "internship",
        role: "Digital Automations Intern - UI Creatives, UX Designer",
        accomplishments: [
            "Creating Logos, Footers, Headers, etc. for projects under Digital Automations",
            "Established a Branding Kit for my assigned project",
            "Prototyped and designed the UX flow and UI of a booking system",
            "Contributed to the management of the main website of a project using WordPress"
        ],
        toolsUsed: [
            "Figma",
            "Directual",
            "WordPress",
            "DrawIO"
        ]
    }, 
    {
        title: "AHEAD Educational Group",
        imgRef: AheadLogo,
        mode: "internship",
        role: "IT & Web Maintenance",
        accomplishments: [
            "Creating Logos, Footers, Headers, etc. for projects under Digital Automations",
            "Established a Branding Kit for my assigned project",
            "Prototyped and designed the UX flow and UI of a booking system",
            "Contributed to the management of the main website of a project using WordPress"
        ],
        toolsUsed: [
            "Figma",
            "Directual",
            "WordPress",
            "DrawIO"
        ]
    }, 
]

const AboutBlock = ({
    title,
    mode,
    role,
    imgRef,
    accomplishments,
    toolsUsed,
    details
}: AboutBlockProps) => {
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType

    const normalTextFill = !theme.isDarkMode ? theme.lightTheme.secondary.string() : theme.darkTheme.onBackground.string() 
    const emphasizedFill = !theme.isDarkMode ? theme.lightTheme.accent1.string() : theme.darkTheme.primary.string()
    
    const detailsBlock: JSX.Element = mode === 'single-text' ? (
        <>
            <p
                className="medium roboto-mono-regular"
                style={{ color: normalTextFill }}
            >
                {
                    details.split('\n').map((line, index) => (
                        <Fragment key={index}>
                            {line}
                            <br />
                        </Fragment>
                    ))
                }
            </p>
        </>
    ) : (
        <>
            <p className="medium roboto-mono-regular" style={{color: normalTextFill}}>Role: {role}</p>
            <div className="list-block">
                <p className="medium roboto-mono-regular" style={{color: normalTextFill}}>Accomplishments: </p>
                <ul>
                    {
                        accomplishments ? accomplishments.map(item => {
                            return(
                                <li className="medium roboto-mono-regular" style={{color: normalTextFill}}>{item}</li>
                            )
                        }) :
                        null
                    }
                </ul>
            </div>
            <div className="list-block">
                <p className="medium roboto-mono-regular" style={{color:normalTextFill}}>Tools Used: </p>
                <ul>
                    {
                        toolsUsed ? toolsUsed.map(item => {
                            return(
                                <li className="medium roboto-mono-regular" style={{color: normalTextFill}}>{item}</li>
                            )
                        }) :
                        null
                    }
                </ul>
            </div>
        </>
    )

    return(
        <div
            className="about-block"
        >
            <div
                className="about-img-container"
            >
                <img src={imgRef} alt={imgRef} />
            </div>
            <div
                className="about-details-block"
            >
                <p
                    className="about-details-title lexend-bold x-large"
                    style={{
                        color: emphasizedFill
                    }}
                >
                    {title}
                </p>
                { detailsBlock }
            </div>
        </div>
    )
}

const About = (props: AboutProps) => {
    const { theme, setMode } = useContext(ThemeContext) as ThemeContextType

    return(
        <PageWrapper
            title={'About Me'}
        >
            <div
                className="about-content"
            >
                <AboutBlock 
                    title={AboutMeValue.title}
                    imgRef={AboutMeValue.imgRef}
                    mode={AboutMeValue.mode}
                    details={AboutMeValue.details}
                />
            </div>
            <Header title='Internships' />
            <div
                className="projects-content"
            >
                { 
                    InternshipValues.map(internship => {
                        return(
                            <AboutBlock 
                                title={internship.title}
                                imgRef={internship.imgRef}
                                mode={internship.mode}
                                role={internship.role}
                                accomplishments={internship.accomplishments}
                                toolsUsed={internship.toolsUsed}
                            />
                        )
                    })
                }
            </div>
        </PageWrapper>
    )
}

export default About