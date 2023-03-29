import React, { useContext } from 'react'
import { Header } from "../../components/Header"
import { StyledContainerPage } from './style'
import { UserContext } from '../../providers/UserContext'
import { ContainerFormTech } from '../../components/techForm'
import { ContainerTechShowcase } from '../../components/techShowcase'
import { ContainerFormUpdateTech } from '../../components/techFormUpdate'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const DashboardPage = () =>{
    

    const { user } = useContext(UserContext)

    return(
        <StyledContainerPage>
            <Header page='dash'/>
            <main>
                <header>
                    <h2>Olá, {user.name} </h2>
                    <span> {user.course_module}</span>
                </header>
                <ContainerTechShowcase/>
                <ContainerFormTech/>
                <ContainerFormUpdateTech/>
                 
            </main>

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