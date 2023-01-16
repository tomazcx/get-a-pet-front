import { createContext } from 'react'
import { useAuth } from '../hooks/useAuth'

const Context = createContext({})


const UserProvider = ({ children }: { children: React.ReactNode }) => {

    const { registerUser, Authenticated, logout, login } = useAuth()

    return (<Context.Provider value={{ registerUser, Authenticated, login, logout }}>
        {children}
    </Context.Provider>)
}

export { Context, UserProvider }