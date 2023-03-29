import { createContext, useState } from "react";
import { api } from '../services/api'
import { toast } from 'react-toastify';


export const TechContext = createContext({})

export const TechProvider = ({ children }) =>{

    const [modal, setModal] = useState(false)

    const [techList, setTechList] = useState([])

    const [editinTech, setEditinTech] = useState(null)
    
    const techCreate = async (data) =>{
        const token = localStorage.getItem("@KenzieHub-TOKEN:")
        const tokenJson = JSON.parse(token)
        try {
            const response = await api.post('/users/techs', data, {
                headers: {
                    Authorization: `Bearer ${tokenJson}`
                }
            })
            // add front
            setTechList([...techList, response.data])
            setModal(false)
            toast.success('Tecnologia criada com sucesso')
        } catch (error) {
            console.error(error)
            toast.error('Essa tecnologia já foi cadastrada')
        }
    }

    const techDelete = async (id) =>{
        const token = localStorage.getItem("@KenzieHub-TOKEN:")
        const tokenJson = JSON.parse(token)
        try {
            const response = await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${tokenJson}`
                }
            })
            setTechList(techList.filter((tech) =>{
                return tech.id != id
            }))
            setEditinTech(null)
            toast.success('Tecnologia removida')
        } catch (error) {
            console.error(error)
            toast.error('Não foi possivel remover a tecnologia')
        }
    } 

    const techUpdate = async (data ,id) =>{
        const token = localStorage.getItem("@KenzieHub-TOKEN:")
        const tokenJson = JSON.parse(token)
        try {
            const response = await api.put(`/users/techs/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${tokenJson}`
                }
            })
            //atualizar - front
            const newListTech = techList.map((tech) =>{
                if(tech.id == id){
                    return {... tech, ...data}
                }else {
                    return tech
                }
            })
            setTechList(newListTech)
            setEditinTech(null)
            toast.success('Tecnologia atualizada')
        } catch (error) {
            console.error(error)
        }
    }


    return(
        <TechContext.Provider value={{
            techCreate,
            modal, 
            setModal,
            techList,
            setTechList,
            techDelete,
            techUpdate,
            editinTech,
            setEditinTech
        }}>
            { children }
        </TechContext.Provider>
    )
}