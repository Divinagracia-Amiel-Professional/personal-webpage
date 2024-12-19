import Color from "color"
// Pages Component Props

type HomeProps = {

}

type AboutProps = {

}

type ProjectProps = {

}

type ErrorComponentProps = {
    message: string
}

// Components

type ButtonProps = {
    text: string,
    mode?: "navbar" | "transparent-bordered" | "solid",
    icon?: SVGElement | HTMLElement,
    iconPosition?: "top" | "bottom" | "left" | "right",
    showIcon?: boolean,
    showText?: boolean,
}

type NavBarProps = {

}

type multiColor = Color[]

type SVGParams = {
    scale?: number, // scaling of svg by decimal percentage
    height?: number, // height of svg by px
    width?: number, // width of svg by px
    strokeWidth?: number, // thickness of stroke if it exists on svg
    strokeColor?: Color, // color of stroke if it exists on svg
    fill?: multiColor, // Color array of fill by primary to accent colors
    invert?: boolean, // invert color array
}

type SVGConstants = {
    colorLength: number // Number of fills the svg have
    height: number, // default height and width of viewbox for auto scaling
    width: number,
}

export type {
    HomeProps,
    AboutProps,
    ProjectProps,
    NavBarProps,

    ButtonProps,

    multiColor,
    SVGParams,
    SVGConstants,
    
    ErrorComponentProps
}