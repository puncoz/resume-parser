import {
    FunctionComponent,
    HTMLProps,
} from "react"

const sizeClassMap = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-lg",
}

type ButtonSize = "small" | "medium" | "large"

export type ButtonProps = {
    rounded?: boolean
    buttonSize?: ButtonSize
} & HTMLProps<HTMLButtonElement>

const Button: FunctionComponent<ButtonProps> = (props) => {
    const { rounded, className, buttonSize } = props

    return (
        <button className={`
            inline-flex items-center 
            px-2.5 py-1.5 
            border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2
            ${rounded ? "rounded-full" : "rounded"}
             font-medium 
            ${sizeClassMap[buttonSize ?? "small"] || ""}
            ${className}
        `}>
            Button
        </button>
    )
}

export default Button
