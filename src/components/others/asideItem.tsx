import { ReactNode, useState } from "react"
import {useLocation, useNavigate } from "react-router-dom"

interface ItemInterface extends React.LinkHTMLAttributes<HTMLAnchorElement>{
    text:string,
    icon: ReactNode,
}

export const AsideItem = ({ text, icon, ... rest }: ItemInterface) => {

    const location = useLocation().pathname
    const [isSelected, setSelected] = useState(location === rest.href)
    const navigate = useNavigate()

    return (
        <a {...rest} className={`py-4 px-2 border-b flex items-center justify-between ${isSelected ? 'bg-yellow-300' : ''} border-yellow-300 hover:bg-yellow-300 transition-colors`}>
            <span>{text}</span>
            {icon}
        </a>
    )
}