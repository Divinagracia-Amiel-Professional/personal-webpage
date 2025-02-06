import React, { ReactNode, useState, useEffect, ElementType, ReactElement } from 'react'
import { ButtonProps, SVGParams, multiColor } from '../constants/typeIndex'
import { SvgIcon, SvgIconProps, SxProps } from '@mui/material'
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
                
            })
    }
}

interface ButtomWrapperProps extends ButtonProps {
    children: ReactNode,
    isHovering: boolean,
    setIsHovering: React.Dispatch<React.SetStateAction<boolean>>,
    toggleHoverState: () => void
}

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
    isHovering,
    setIsHovering,
    toggleHoverState
}: Omit<ButtomWrapperProps, 'text'>) => {

    const childrenPositions = (iconPosition === "right" || iconPosition === "bottom") ? children : React.Children.toArray(children).reverse()

    const getBGFill = () => {
        if(isHovering && hoverBgColor){
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
            if(isHovering && mode === 'resume'){
                return 0
            } else {
                return borderColor !== 'none' ? `2px solid ${borderColor.string()}` : 0
            }
        }
    }

    const logMode = isHovering ? mode : 'none'

    return(
        <div 
            className='custom-button'
            style={{
                display: showIcon || showText ? 'flex' : 'none',
                flexDirection: (iconPosition === 'left' || iconPosition === 'right') ? 'row' : 'column' ,
                border: getBorderFill(),
                borderRadius: isBorderCurved ? 15 : 0,
                background: getBGFill(),
                ...getStyles(mode)
            }}
            onClick={() => {
                onClick()
            }}
            onMouseOver={toggleHoverState}
            onMouseOut={toggleHoverState}
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
    hoverBgColor = undefined
}: ButtonProps) => {
    const [ isHovering, setIsHovering ] = useState<boolean>(false)
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
                // const getHoverColor = () => {
                //     if(muiIcon.props.sx){
                //         return hoverIconColor && isHovering ? hoverIconColor.toString() : muiIcon.props.sx.color
                //     }
                // }

                IconComponent = React.cloneElement(
                    muiIcon, 
                    {
                        ...muiIcon.props,   
                        sx: { 
                            ...(muiIcon.props.sx || {}),
                            color: hoverIconColor && isHovering ? hoverIconColor.toString() : muiIcon.props.sx?.color,
                        },
                        
                    }
                )
           } else if ('scale' in icon.props) {
                const customIcon = icon as ReactElement<SVGParams>
                IconComponent = React.cloneElement(
                    customIcon, 
                    {
                        ...icon.props
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
            isHovering={isHovering}
            setIsHovering={setIsHovering}
            toggleHoverState={toggleHoverState}
        >
            <p 
                className='custom-button-text lexend-regular large'
                style={{
                    display: showText ? 'block' : 'none',
                    color: hoverIconColor && isHovering ? hoverIconColor.toString() : textColor.string(),
                    fontWeight: isTextBold ? 700 : 400,
                    textDecoration: isHovering && mode === 'navbar' ? 'underline' : 'none',
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