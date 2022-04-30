import { FunctionComponent }   from "react"
import Button, { ButtonProps } from "./Button"

type Props = {} & ButtonProps

const SecondaryButton: FunctionComponent<Props> = ({ className, ...props }) => {
    return (
        <Button className={`
             focus:ring-secondary-500
             text-white 
             bg-secondary-600 hover:bg-secondary-700 
             ${className}
        `} {...props}/>
    )
}

export default SecondaryButton
