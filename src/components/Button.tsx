import React from 'react'
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
        default:
            return ({
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 40,
                paddingRight: 40
            })
    }
}

const CustomButtom = ({
    text = 'text',
    mode = 'solid'
}: ButtonProps) => {

    return(
        <div 
            className='custom-button'
            style={{
                ...getStyles(mode)
            }}
        >
            <p className='custom-button-text'>{text}</p>
        </div>
    )
}

export default CustomButtom