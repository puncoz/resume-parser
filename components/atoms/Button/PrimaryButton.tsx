import { FunctionComponent }   from "react"
import Button, { ButtonProps } from "./Button"

type Props = {} & ButtonProps

const PrimaryButton: FunctionComponent<Props> = ({ className, ...props }) => {
    return (
        <Button className={`
             focus:ring-primary-500
             text-white 
             bg-primary-600 hover:bg-primary-700 
             ${className}
        `} {...props}/>
    )
}

export default PrimaryButton
