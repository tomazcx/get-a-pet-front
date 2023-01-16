import { FieldValues } from "react-hook-form/dist/types"
import api from "../utils/api"
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

export const useAuth = () => {

    const [cookies, setCookie, removeCookie] = useCookies()
    const [Authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        if (cookies['user-auth']){
            api.defaults.headers.common["Authorization"] = `Bearer: ${cookies['user-auth']}`
            setAuthenticated(true)
        }else{
            api.defaults.headers.common["Authorization"];
            setAuthenticated(false)
        }
    }, [])


    const registerUser = async (user: FieldValues) => {
        const response = await api.post('/user/register', user)
        setCookie('user-auth', response.data.token, {
            maxAge: 600
        })

        api.defaults.headers.common["Authorization"] = `Bearer: ${cookies['user-auth']}`
        setAuthenticated(true)
        
        return response.data
    }

    const login = async (user: FieldValues) => {
        const response = await api.post("/user/login", {
            email: user.email,
            password: user.password
        })

        setCookie('user-auth', response.data.token, {
            maxAge: 600
        })

        api.defaults.headers.common["Authorization"] = `Bearer: ${cookies['user-auth']}`
        setAuthenticated(true)
    }

    const logout = () => {
        removeCookie('user-auth')
        api.defaults.headers.common["Authorization"];
        setAuthenticated(false)
    }


    return { registerUser, Authenticated, logout, login }

}