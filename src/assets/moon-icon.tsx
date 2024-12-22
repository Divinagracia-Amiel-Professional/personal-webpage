import React, { useState, useEffect } from "react";
import { SVGParams, SVGConstants, multiColor } from "../constants/typeIndex";
import { ErrorComponent } from "../components/componentIndex"
import Color from "color";

const constants: SVGConstants = {
    colorLength: 2,
    width: 30,
    height: 30,
}

const MoonIcon = ({ 
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
            <path d="M23.731 15.7692C23.5777 17.4277 22.9553 19.0082 21.9366 20.3258C20.9178 21.6434 19.5449 22.6436 17.9785 23.2094C16.412 23.7753 14.7168 23.8832 13.0912 23.5208C11.4656 23.1583 9.97691 22.3404 8.79922 21.1627C7.62153 19.985 6.8036 18.4963 6.44113 16.8707C6.07867 15.2451 6.18666 13.5499 6.75247 11.9834C7.31828 10.417 8.31851 9.04409 9.63612 8.02536C10.9537 7.00663 12.5342 6.38422 14.1927 6.23096C13.2217 7.54456 12.7545 9.16303 12.8759 10.792C12.9974 12.421 13.6995 13.9523 14.8546 15.1073C16.0097 16.2624 17.5409 16.9645 19.1699 17.086C20.7989 17.2074 22.4174 16.7402 23.731 15.7692Z" fill={fill[1].string()} stroke={fill[1].string()} strokeWidth={`${1.94858}`} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default MoonIcon