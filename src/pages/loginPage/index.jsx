
import { ContainerFormLogin } from "../../components/LoginForm"
import { Logo } from '../../components/LogoKenzieHub'
import { StyledContainerPage } from './style'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () =>{

    return(
        <StyledContainerPage>
            <Logo/>
            <ContainerFormLogin title='Login'/>

            <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
        </StyledContainerPage>
    )
}