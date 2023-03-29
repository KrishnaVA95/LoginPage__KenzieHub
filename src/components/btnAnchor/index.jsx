import { Link } from "react-router-dom"
import { StyleContainerAnchor } from "./style"



export const BtnAnchor = ({text, url, typeStyle}) =>{
    return(
        <StyleContainerAnchor typeStyle={typeStyle}>
            <Link to={url}>
                {text}
            </Link>
        </StyleContainerAnchor>
    )
}