import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { toast } from 'react-toastify';
import { TechContext } from "./TechContext";

export const UserContext = createContext({})


export const UserProvider = ({ children }) =>{
    //um para todos:
    const [] = useState('')


    const {techList, setTechList} = useContext(TechContext)
    

    const navigate = useNavigate()

    
    useEffect(() =>{
        const token = localStorage.getItem("@KenzieHub-TOKEN:")
        const tokenJson = JSON.parse(token)
        if(token){
            const userAutoLogin = async () =>{
                try {
                    const response = await api.get('/profile', {
                        headers: {
                            Authorization: `Bearer ${tokenJson}`
                        }
                    })
                    setUser(response.data)
                    setTechList(response.data.techs)
                    navigate('/dashboard')
                    toast.success('Usuário logou com sucesso')
                } catch (error) {
                    console.error(error)
                }
            }
            userAutoLogin()
        }
    }, [])


    const userRegister = async (data) => {
        try{
            const response = await api.post('/users', data)
            navigate('/')
            toast.success('Usuario criado com sucesso')
        }catch (error){
            toast.error('Email já cadastrado')
            console.error(error)
        }
    }

    const userLogin = async (data) => {
        try{
            await api.post('/sessions', data).then((res) => {
                //Debug ()
                window.localStorage.clear();
                window.localStorage.setItem("@KenzieHub-TOKEN:", JSON.stringify(res.data.token))
                window.localStorage.setItem("@KenzieHub-UserID:", JSON.stringify(res.data.user.id))
                window.localStorage.setItem("@KenzieHub-User:", JSON.stringify(res.data.user))
                setUser(res.data.user)
                setTechList(res.data.user.techs)
            })
            navigate('/dashboard')
            toast.success('Usuário logou com sucesso')
        }catch (error){
            toast.error('Email ou senha inválido')
            console.error(error)
        }
    }

    const userLogout = () =>{
        window.localStorage.removeItem("@KenzieHub-TOKEN:")
        window.localStorage.removeItem("@KenzieHub-UserID:")
        window.localStorage.removeItem("@KenzieHub-User:")
        setUser(null)
        navigate('/')
        toast.success('Usuário Deslogou')
    }




    return(
        <UserContext.Provider value={{
            user,
            setUser,
            userRegister,
            userLogin,
            userLogout,
            techList,
            setTechList
        }}>
            { children }
        </UserContext.Provider>
    )
}