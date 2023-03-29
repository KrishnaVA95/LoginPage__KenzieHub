import React, { useContext } from 'react'
import { StyleContainerModal } from './style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { InputControl } from '../inputControl';
import { SelectControl } from '../SelectControl';
import { BtnSubmit  } from '../btnSubmitControl';
import { TechContext } from '../../providers/TechContext';

const formSchema = yup.object().shape({
    title: yup.string(),
    status: yup.string()
})


export const ContainerFormTech = () =>{

    const { modal, techCreate } = useContext(TechContext)

    const { register, handleSubmit, reset,formState: { errors }, } = useForm({
        resolver: yupResolver(formSchema)
    })

    const submit = (data) =>{
        techCreate(data)
        reset()
    }

    if(modal == true){
        return(
            <StyleContainerModal>
                <header>
                    <h4>Cadastrar tecnologia</h4>   
                    <BtnSubmit origin='formCreate' typeStyle='dark' text='X'/>
                </header>
    
                <form onSubmit={handleSubmit(submit)}>
                    <InputControl 
                        placeholder='Nome da tecnologia' 
                        type='text' 
                        idName='name'      
                        register={register('title')} 
                        error={errors.name?.message}
                    />
    
                    <SelectControl
                        origin='dash'  
                        placeholder='Selecionar Status'
                        register={register('status')}
                        error={errors.course_module?.message}
                    />
    
                    <BtnSubmit typeStyle='dark' text='Cadastrar tecnologia'/>
    
                </form>
    
    
            </StyleContainerModal>
        )
    }else{
        return(
            <>
            </>
        )
    }

}