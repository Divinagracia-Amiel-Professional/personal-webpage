import React, { ReactNode } from 'react'
import { ButtonProps } from '../constants/typeIndex'

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
        default:
            return ({
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 40,
                paddingRight: 40
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
    showText
}: Omit<ButtomWrapperProps, 'text'>) => {
    const childrenPositions = (iconPosition === "right" || iconPosition === "bottom") ? children : React.Children.toArray(children).reverse()

    return(
        <div 
            className='custom-button'
            style={{
                display: showIcon || showText ? 'flex' : 'none',
                flexDirection: (iconPosition === 'left' || iconPosition === 'right') ? 'row' : 'column' ,
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
    iconPosition = 'left'
}: ButtonProps) => {

    return(
        <ButtomWrapper
            showText={showText}
            showIcon={showIcon}
            mode={mode}
            iconPosition={iconPosition}
            onClick={onClick}
        >
            <p 
                className='custom-button-text'
                style={{
                    display: showText ? 'block' : 'none'
                }}
            >
                {text}
            </p>
            <div
                style={{
                    display: showIcon ? 'block' : 'none' 
                }}
            >
                { icon ? icon : null }
            </div>
        </ButtomWrapper>
    )
}

export default CustomButtom