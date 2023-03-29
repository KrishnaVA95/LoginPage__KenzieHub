import React, { useContext } from 'react'
import { StyledContainer } from './style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { InputControl } from '../inputControl'
import { BtnSubmit } from '../btnSubmitControl';
import { SelectControl } from '../SelectControl'

import { UserContext } from '../../providers/UserContext';
  
const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email('Email invalido'),
    password: yup.string().matches(/(\d)/, 'Deve conter ao menos um número').matches(/[a-z]/, 'Deve conter ao menos uma letra minuscula').matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula').matches(/(\W|_)/, 'Deve conter ao menos um caracter especial').matches(/.{8,}/, 'Deve conter oito ou mais caracteres'),
    repitPass: yup.string().oneOf([yup.ref('password')], 'As senhas devem coincidir'),
    bio: yup.string(),
    contact: yup.string().url('Deve ser uma url'),
    course_module: yup.string()
})

export const ContainerFormRegister = ({text}) =>{

    const { userRegister } = useContext(UserContext)

    const { register, handleSubmit,formState: { errors }, } = useForm({
        resolver: yupResolver(formSchema)
    })


    return(
        <StyledContainer>
            <h2>{text}</h2>
            <p>Rapido e gratís, vamos nessa</p>

            <form onSubmit={handleSubmit(userRegister)}>
                        <InputControl 
                            placeholder='Digite aqui seu nome' 
                            type='text' 
                            idName='name'
                            register={register('name')} 
                            error={errors.name?.message}
                        />
                    

                
                        <InputControl 
                            placeholder='Digite aqui seu email' 
                            type='' 
                            idName='email'
                            register={register('email')} 
                            error={errors.email?.message}
                        />
                        

                        <InputControl 
                            placeholder='Digite aqui sua senha' 
                            type='password'
                            idName='pass' 
                            register={register('password')}
                            error={errors.password?.message}
                        />
                        

                        <InputControl 
                            placeholder='Digite novamente sua senha' 
                            type='password'
                            idName='repitPass' 
                            register={register('repitPass')}
                            error={errors.repitPass?.message}
                        />

                        <InputControl 
                            placeholder='Fale sobre você' 
                            type='text'
                            idName='description' 
                            register={register('bio')}
                            error={errors.bio?.message}
                        />
                        
                        <InputControl 
                            placeholder='Contato - social midia' 
                            type='text'
                            idName='constact' 
                            register={register('contact')}
                            error={errors.contact?.message}
                        />
                        
                        <SelectControl
                            origin='register'
                            placeholder='Selecionar módulo'
                            register={register('course_module')}
                            error={errors.course_module?.message}
                        />


                <BtnSubmit typeStyle='negative' text='Cadastrar'/>

        
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





