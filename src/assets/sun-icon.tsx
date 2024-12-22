import React, { useState, useEffect } from "react";
import { SVGParams, SVGConstants, multiColor } from "../constants/typeIndex";
import { ErrorComponent } from "../components/componentIndex"
import Color from "color";

const constants: SVGConstants = {
    colorLength: 2,
    width: 30,
    height: 30,
}

const SunIcon = ({ 
    scale = 1,
    height = constants.height,
    width = constants.width,
    fill = [Color('transparent'), Color('black'), Color('white')],
    strokeColor = Color('black'),
    strokeWidth = 1,
    invert = false 
}: SVGParams) => {
    const [ fillState, setFillstate ] = useState<multiColor>(fill)
    
    const horizontalScale = width * scale;
    const verticalScale = height * scale;

    if(fill.length < constants.colorLength){
    return <ErrorComponent
        message={`Input at least ${constants.colorLength} fills`}
    />
    }

    useEffect(() => {
        setFillstate(prevState => prevState.reverse())
    }, [invert])
        
    return (
        <svg 
            width={horizontalScale} 
            height={verticalScale} 
            viewBox={`0 0 ${constants.width} ${constants.height}`}
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx={`${constants.width / 2}`} cy={`${constants.height / 2}`} r={`${constants.width / 2}`} fill={fill[0].string()}/>
            <path d="M15.05 23.1318V24.95M20.8319 20.7319L22.1228 22.0228M7.9773 22.0228L9.2682 20.7319M23.2319 14.95H25.05M5.05005 14.95H6.86823M20.8319 9.16811L22.1228 7.8772M7.9773 7.8772L9.2682 9.16811M15.05 4.94995V6.76813M19.5955 14.95C19.5955 17.4603 17.5604 19.4954 15.05 19.4954C12.5397 19.4954 10.5046 17.4603 10.5046 14.95C10.5046 12.4396 12.5397 10.4045 15.05 10.4045C17.5604 10.4045 19.5955 12.4396 19.5955 14.95Z" fill={fill[1].string()} stroke={fill[1].string()} strokeWidth={`${2.1875}`} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default SunIcon