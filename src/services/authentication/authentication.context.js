import React, {useState, createContext} from 'react'
import { AuthInput } from '../../features/account/components/account.styles'
import {loginRequest, registerRequest, sessionCheck, userLogout} from './authentication.service'


export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    sessionCheck(setUser, setIsLoading)

    const onLogin = (email, password) => {
        setIsLoading(true)
        loginRequest(email, password)
        .then((user)=>{
            setUser(user)
            setIsLoading(false)
        })
        .catch((e)=>{
            setIsLoading(false)
            setError(e.toString())
        })
    }

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true)
        if (password !== repeatedPassword){
            setError("Error: Passwords do not match")
            return
        }
        
        registerRequest(email, password)
        .then((user)=>{
            setUser(user)
            setIsLoading(false)
        })
        .catch((e)=>{
            setIsLoading(false)
            setError(e.toString())
        })
    }

    const onLogout = () => {
        userLogout(setUser)
    }

    return (
    <AuthenticationContext.Provider
        value = {{
            isAuthenticated: !!user, 
            user, 
            isLoading, 
            error, 
            onLogin,
            onRegister,
            onLogout
        }}
    >
        {props.children}
    </AuthenticationContext.Provider>
    )
}