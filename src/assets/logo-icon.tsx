import React, { useState, useEffect } from "react";
import { SVGParams, SVGConstants, multiColor } from "../constants/typeIndex";
import { ErrorComponent } from "../components/componentIndex"
import Color from "color";

const constants: SVGConstants = {
    colorLength: 2,
    width: 30,
    height: 30,
}

const Logo = ({ 
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
            <path d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z" fill={fillState[0].string()}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.15479 14.8077C6.16938 13.7308 6.35251 12.7404 6.70417 11.8367C7.08572 10.8794 7.61403 10.0526 8.28909 9.3564C8.97883 8.64565 9.77863 8.09447 10.6885 7.70283C11.593 7.3197 12.5747 7.12397 13.6337 7.11566L13.7042 7.11538H16.2598C17.3869 7.11538 18.4013 7.30188 19.3031 7.67486C20.2198 8.04784 21.0013 8.58494 21.6475 9.28615C22.2938 9.98736 22.7897 10.8154 23.1354 11.7702C23.481 12.7251 23.6538 13.7843 23.6538 14.948C23.6538 16.1118 23.481 17.1785 23.1354 18.1482C22.7897 19.1031 22.2938 19.9311 21.6475 20.6323C21.0163 21.3186 20.2423 21.8482 19.3256 22.2212C18.4088 22.5942 17.3869 22.7807 16.2598 22.7807H13.6337V16.1476H8.5894L8.59403 22.794L6.15385 20.4666V14.948L6.15479 14.8077ZM13.6337 9.40032V13.8896H8.65194C8.71375 13.4809 8.81293 13.094 8.94948 12.7288C9.19895 12.0471 9.55116 11.4596 10.0061 10.9664C10.4757 10.4733 11.0187 10.0889 11.635 9.8133C12.2462 9.54639 12.9124 9.40873 13.6337 9.40032ZM16.0683 20.4533H16.147C16.9436 20.4533 17.6499 20.3265 18.2661 20.0728C18.8973 19.8192 19.4233 19.4612 19.8441 18.9986C20.2799 18.5212 20.6105 17.9394 20.836 17.2531C21.0614 16.5668 21.1741 15.7984 21.1741 14.948C21.1741 14.0976 21.0614 13.3368 20.836 12.6654C20.6105 11.9791 20.2799 11.3972 19.8441 10.9198C19.4083 10.4424 18.8823 10.0769 18.2661 9.82325C17.6499 9.56962 16.9436 9.4428 16.147 9.4428H16.0683V20.4533Z" fill={fillState[1].string()}/>
        </svg>
    );
}

export default Logo;