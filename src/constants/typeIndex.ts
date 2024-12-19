import Color from "color"
import { ReactNode, SetStateAction, Dispatch } from "react"
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
    onClick?: () => void;
    onHover?: () => void;
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

// Hooks

// type Theme = "light" | "dark"

type ThemeColors = {
    primary: Color,
    secondary: Color,
    tertiary: Color,
    accent1: Color,
    accent2: Color,
    background: Color,
    onBackground: Color
    
    // accent: Color,
    // accent2: Color,
    // accent3: Color
}

type Theme = {
    isDarkMode: boolean,
    lightTheme: ThemeColors,
    darkTheme: ThemeColors
}

type ThemeContextType = {
    theme: Theme,
    setMode: Dispatch<SetStateAction<Theme>>
}

type ThemeProviderProps = {
    children: ReactNode
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
    
    ErrorComponentProps,

    Theme,
    ThemeContextType,
    ThemeProviderProps
}