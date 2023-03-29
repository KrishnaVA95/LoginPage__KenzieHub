import { StyledContainerHeader } from "./style"
import { BtnAnchor } from "../btnAnchor"
import { BtnSubmit } from '../btnSubmitControl'
import { useNavigate } from 'react-router-dom'
import { Logo } from "../LogoKenzieHub"


export const Header = ({page}) =>{
    if(page == 'dash'){
        return(
            <StyledContainerHeader>
                <Logo/>
                <BtnSubmit text='logout' typeStyle='dark'/>
            </StyledContainerHeader>
        )

    }else{
        return(
            <StyledContainerHeader>
                <Logo/>
                <BtnAnchor text='Voltar' url='/' typeStyle='black'/>
            </StyledContainerHeader>
        )
    }

    

}