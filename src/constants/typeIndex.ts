import Color from "color"
import { ReactNode, SetStateAction, Dispatch, ReactElement, KeyboardEvent, MouseEvent } from "react"
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

type PageWrapperProps = {
    children: ReactNode,
    title?: string | null,
}

// type DrawerToggleHandler = (event: React.KeyboardEvent | React.MouseEvent) => void;

type ButtonProps = {
    text: string,
    textColor?: Color,
    isTextBold?: boolean,
    bgColor?: Color | 'transparent',
    borderColor?: Color | 'none',
    isBorderCurved?: boolean,
    mode?: "navbar" | "transparent-bordered" | "solid" | "icon-only" | "resume" | "icon-with-BG",
    icon?: ReactElement | null,
    iconPosition?: "top" | "bottom" | "left" | "right",
    showIcon?: boolean,
    showText?: boolean,
    onClick?: () => void | ((event: KeyboardEvent | MouseEvent) => void)
    onHover?: () => void;
}

type ContactsProps = {

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

type WindowDimensions = {
    height: number,
    width: number
}

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
    ContactsProps,
    PageWrapperProps,

    multiColor,
    SVGParams,
    SVGConstants,
    
    ErrorComponentProps,

    Theme,
    ThemeContextType,
    ThemeProviderProps,
    WindowDimensions
}