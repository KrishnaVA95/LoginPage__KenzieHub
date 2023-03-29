import React, { useContext } from 'react'
import { StyledContainer } from './style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { InputControl } from '../inputControl'
import { BtnSubmit } from '../btnSubmitControl';
import { BtnAnchor } from '../btnAnchor';

import { UserContext } from '../../providers/UserContext';

const formSchema = yup.object().shape({
    email: yup.string().email('Email invalido'),
    password: yup.string()
})

export const ContainerFormLogin = ({title}) =>{

    const { userLogin } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(formSchema)
    })


    return(
        <StyledContainer>
            <h2>{title}</h2>

            <form onSubmit={handleSubmit(userLogin)}>
        
                <InputControl 
                    placeholder='Email' 
                    type='' 
                    idName='email'
                    register={register('email')} 
                    origin='loginPage'
                    error={errors.email?.message}
                />

                <InputControl 
                    placeholder='Password' 
                    type='password'
                    idName='pass' 
                    register={register('password')}
                    origin='loginPage'
                    error={errors.password?.message}
                />
                

                <BtnSubmit typeStyle='primary' text='Entrar'/>
                <span>Ainda não possui conta?</span>
                <BtnAnchor text='Cadastrar' url='/register'/>

        
            </form>

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
        </StyledContainer>
    )
}