import React from "react";
import { HomeProps } from "../constants/typeIndex";
import { Logo } from "../constants/iconsIndex";
import Color from "color";

const Home = (props: HomeProps) => {

    return (
        <>
            <div className='title'>
                Home
            </div>
            <Logo height={100} width={100} fill={[Color('black'), Color('black')]} invert={false}/>
        </>
    )
}

export default Home