import React from 'react'
import { TechProvider } from './TechContext'
import { UserProvider } from './UserContext'

export const Providers = ({ children }) =>{
    return(
        <TechProvider>
            <UserProvider>
                { children }
            </UserProvider>
        </TechProvider>
    )
}