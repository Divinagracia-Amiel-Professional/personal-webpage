import React, { ReactNode } from 'react'
import { ButtonProps } from '../constants/typeIndex'
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
    isBorderCurved = false
}: Omit<ButtomWrapperProps, 'text'>) => {
    const childrenPositions = (iconPosition === "right" || iconPosition === "bottom") ? children : React.Children.toArray(children).reverse()

    return(
        <div 
            className='custom-button'
            style={{
                display: showIcon || showText ? 'flex' : 'none',
                flexDirection: (iconPosition === 'left' || iconPosition === 'right') ? 'row' : 'column' ,
                border: borderColor !== 'none' ? `2px solid ${borderColor.string()}` : 0,
                borderRadius: isBorderCurved ? 15 : 0,
                background: bgColor !== 'transparent' ? bgColor.string() : 'transparent',
                ...getStyles(mode)
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
    icon = null,
    iconPosition = 'left',
    borderColor = 'none',
    bgColor = 'transparent',
    textColor = Color('white'),
    isBorderCurved = false,
    isTextBold = false,
}: ButtonProps) => {

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
        >
            <p 
                className='custom-button-text lexend-regular large'
                style={{
                    display: showText ? 'block' : 'none',
                    color: textColor.string(),
                    fontWeight: isTextBold ? 700 : 400,
                    ...getTextStyle(mode)
                }}
            >
                {text}
            </p>
            <div
                style={{
                    display: showIcon ? 'flex' : 'none' 
                }}
            >
                { icon ? icon : null }
            </div>
        </ButtomWrapper>
    )
}

export default CustomButtom