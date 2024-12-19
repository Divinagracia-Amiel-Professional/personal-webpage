import React from 'react'
import { ButtonProps } from '../constants/typeIndex'

const CustomButtom = (props: ButtonProps) => {

    return(
        <div className='custom-button'>
            <p>{props.text}</p>
        </div>
    )
}

export default CustomButtom