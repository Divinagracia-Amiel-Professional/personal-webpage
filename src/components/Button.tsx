import React, { ReactNode, useState, useEffect, ElementType, ReactElement, useRef } from 'react'
import { ButtonProps, SVGParams, multiColor } from '../constants/typeIndex'
import { SvgIcon, SvgIconProps, SxProps } from '@mui/material'
import { useWindowDimensions } from '../hooks/hooksIndex'
import Color from 'color'

const getStyles = (mode: string | undefined): React.CSSProperties => {
    switch(mode){
        case 'navbar':
            return ({
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 100,
            })
        case 'transparent-bordered':
            return ({
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 40,
                paddingRight: 40
            })
        case 'icon-only':
            return ({
                padding: 10
            })
        case 'text-only':
            ({
                padding: 0,
                margin: 0
            })
        case 'resume':
            return({
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 40,
                paddingRight: 40,
            })
        case 'icon-with-BG':
            return({
                padding: 10,
                flex: '0 0 0',
                alignSelf: 'auto'
            })
        default:
            return ({
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 40,
                paddingRight: 40,
                borderRadius: 15,
            })
    }
}

const getTextStyle = (mode: string | undefined): React.CSSProperties => {
    switch(mode){
        case 'navbar':
            return ({
                fontSize: 16,
            })
        case 'transparent-bordered':
            return ({
                fontSize: 16
            })
        case 'icon-only':
            return ({
                
            })
        case 'resume': {
            return({
                fontSize: 20,
                fontWeight: 700
            })
        }
        default:
            return ({
                fontWeight: 400
            })
    }
}

interface ButtomWrapperProps extends ButtonProps {
    children: ReactNode,
    divRef: React.RefObject<HTMLDivElement>
    isInside: boolean,
}

const useIsPointerInside = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isInside, setIsInside] = useState(false);

    useEffect(() => {
        const checkPointer = (event: MouseEvent) => {
            if (!divRef.current) return;
            const rect = divRef.current.getBoundingClientRect();
            const inside =
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom;
            setIsInside(inside);
        };

        document.addEventListener("mousemove", checkPointer);
        return () => document.removeEventListener("mousemove", checkPointer);
    }, []);

    return { divRef, isInside };
};

const ButtomWrapper = ({
    children, 
    mode, 
    onClick = () => {}, 
    iconPosition,
    showIcon,
    showText,
    borderColor = 'none',
    bgColor = 'transparent',
    textColor = Color('white'),
    isBorderCurved = false,
    hoverIconColor,
    hoverBgColor,
    isInside,
    divRef
}: Omit<ButtomWrapperProps, 'text'>) => {
    const childrenPositions = (iconPosition === "right" || iconPosition === "bottom") ? children : React.Children.toArray(children).reverse()


    console.log(isInside)

    const getBGFill = () => {
        if(isInside && hoverBgColor){
            return hoverBgColor.toString()
        }
        else if(bgColor !== 'transparent'){
            return bgColor.string()
        } else {
            return 'transparent'
        }
    }

    const getBorderFill = () => {
        if(borderColor){
            if(isInside && mode === 'resume'){
                return 0
            } else {
                return borderColor !== 'none' ? `2px solid ${borderColor.string()}` : 0
            }
        }
    }

    // ${ isInside ? "expand-selected" : " " }`

    return(
        <div 
            ref={divRef}
            className={`custom-button custom-button-transprop simple-transition faster`}
            style={{
                display: showIcon || showText ? 'flex' : 'none',
                gap: isInside ? 20 : 10,
                flexDirection: (iconPosition === 'left' || iconPosition === 'right') ? 'row' : 'column' ,
                border: getBorderFill(),
                borderRadius: isBorderCurved ? 15 : 0,
                background: getBGFill(),
                ...getStyles(mode),
            }}
            onClick={() => {
                onClick()
            }}
        >
            { childrenPositions }
        </div>
    )
}

const CustomButtom = ({
    text = 'text',
    mode = 'solid',
    onClick = () => {},
    showText = true,
    showIcon = false,
    icon,
    iconProps = {},
    iconPosition = 'left',
    borderColor = 'none',
    bgColor = 'transparent',
    textColor = Color('white'),
    isBorderCurved = false,
    isTextBold = false,
    hoverIconColor = undefined,
    hoverBgColor = undefined,
}: ButtonProps) => {
    const [ isHovering, setIsHovering ] = useState<boolean>(false)
    const { divRef, isInside } = useIsPointerInside()
    const { height, width } = useWindowDimensions()
    let IconComponent: ReactNode = null

    const toggleHoverState = () => {
        if(hoverIconColor || hoverBgColor){
            setIsHovering(prevState => !prevState)
        }
    }

    if(icon){
        if(React.isValidElement(icon)){
           if ('sx' in icon.props){
                const muiIcon = icon as ReactElement<SvgIconProps>
                IconComponent = React.cloneElement(
                    muiIcon, 
                    {
                        ...muiIcon.props,   
                        sx: { 
                            ...(muiIcon.props.sx || {}),
                            color: hoverIconColor && isInside ? hoverIconColor.toString() : muiIcon.props.sx?.color,
                            transitionProperty: "color",
                            transition: "0.25s ease-in-out"
                        },
                        
                    }
                )
           } else if ('scale' in icon.props) {
                const customIcon = icon as ReactElement<SVGParams>
                IconComponent = React.cloneElement(
                    customIcon, 
                    {
                        ...icon.props,
                        
                        fill: hoverIconColor && isInside ? hoverIconColor : icon.props.fill
                    } as SVGParams
                )
           }
        } else {
            const iconInstance = React.createElement(icon as ElementType);
            console.log(iconInstance.props)
        }
        // React.cloneElement(icon, {})
    }

    return(
        <ButtomWrapper
            showText={showText}
            showIcon={showIcon}
            mode={mode}
            iconPosition={iconPosition}
            onClick={onClick}
            borderColor={borderColor}
            bgColor={bgColor}
            isBorderCurved={isBorderCurved}
            hoverIconColor={hoverIconColor}
            hoverBgColor={hoverBgColor}
            divRef={divRef}
            isInside={isInside}
        >
            <p 
                className={`${mode === 'text-only' ? 'roboto-mono-regular regSize' : `lexend-regular large`} text-transprop faster`}
                style={{
                    display: showText ? 'block' : 'none',
                    color: hoverIconColor && isInside ? hoverIconColor.toString() : textColor.string(),
                    fontWeight: isTextBold ? 700 : 400,
                    textDecoration: isInside && (mode === 'navbar' || mode === 'text-only') ? 'underline' : 'none',
                    ...getTextStyle(mode),
                }}
            >
                {text}
            </p>
            <div
                style={{
                    display: showIcon ? 'flex' : 'none', 
                }}
            >
                {/* { icon ? icon : null } */}
                {
                    IconComponent
                }
            </div>
        </ButtomWrapper>
    )
}

export default CustomButtom