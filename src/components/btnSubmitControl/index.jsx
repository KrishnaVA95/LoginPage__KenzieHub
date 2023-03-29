import { StyleButton } from "./style"
import { useContext } from "react"
import {UserContext} from '../../providers/UserContext'
import { TechContext } from "../../providers/TechContext"


export const BtnSubmit = ( { text, typeStyle, origin } ) =>{
    const { userLogout } = useContext(UserContext)

    const { setModal, setEditinTech, techDelete, editinTech } = useContext(TechContext)

    if(text == 'logout'){
        return(
    
            <StyleButton onClick={() => userLogout()}  typeStyle={typeStyle} type="submit">
                {text}
            </StyleButton>
        )
    }else if(text == '+'){
        return(
            <StyleButton onClick={() => setModal(true)} text={text} typeStyle={typeStyle} type="button">
                {text}
            </StyleButton>
        )

    } else if(text == 'X' && origin == 'formCreate'){
        return(
            <StyleButton onClick={() => setModal(false)}  text={text}  typeStyle={typeStyle} type="button">
                {text}
            </StyleButton>
        )
    } else if(text == 'X' && origin == 'formUpdate'){
        return(
            <StyleButton onClick={() => setEditinTech(null)}  text={text}  typeStyle={typeStyle} type="button">
                {text}
            </StyleButton>
        )
    }else if(text == 'Deletar'){
        return(
            <StyleButton onClick={() => techDelete(editinTech.id)}  text={text}  typeStyle={typeStyle} type="button">
                {text}
            </StyleButton>
        )
    }  else{
        return(
    
            <StyleButton  typeStyle={typeStyle} type="submit">
                {text}
            </StyleButton>
        )
    }

}