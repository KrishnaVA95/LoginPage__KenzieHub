import { Header } from "../../components/Header"
import { ContainerFormRegister } from "../../components/RegisterForm"
import { StyledContainerPage } from './style'

export const RegisterPage = () =>{
    return(
        <StyledContainerPage>
            <Header/>
            <ContainerFormRegister text='Crie sua conta'/>
        </StyledContainerPage>
    )
}