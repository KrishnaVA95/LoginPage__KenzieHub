import React, { useContext } from 'react'
import { StyleContainerModal } from './style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { SelectControl } from '../SelectControl';
import { BtnSubmit  } from '../btnSubmitControl';
import { TechContext } from '../../providers/TechContext';

const formSchema = yup.object().shape({
    status: yup.string()
})


export const ContainerFormUpdateTech = () =>{

    const { editinTech, techUpdate } = useContext(TechContext)

    const { register, handleSubmit, reset,formState: { errors }, } = useForm({
        // defaultValues: {
        //     status: 'Intermediário'
        // }
    })

    const submit = (data) =>{
        techUpdate(data, editinTech.id)
        reset()
    }


    if(editinTech != null){
        return(
            <StyleContainerModal>
                <header>
                    <h4>Atualizar tecnologia</h4>   
                    <BtnSubmit origin='formUpdate' typeStyle='dark' text='X'/>
                </header>
    
                <form onSubmit={handleSubmit(submit)}>
                    <h5>{editinTech.title}</h5>
                    <SelectControl
                        origin='dash'  
                        placeholder='Atualizar Status'
                        register={register('status')}
                        error={errors.course_module?.message}
                    />
                    <div className='container__btns'>
                        <BtnSubmit typeStyle='dark' text='Atualizar tecnologia'/>
                        <BtnSubmit  typeStyle='negative' text='Deletar' origin='formUpdate'/>
                    </div>

    
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