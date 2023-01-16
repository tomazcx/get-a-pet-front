import { ButtonHTMLAttributes } from "react"

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement>{
    text:string
}

export const Button = ({text, ... rest}: ButtonInterface) => {
    return(
        <button {... rest} className="bg-yellow-300 rounded py-1 px-4 hover:bg-yellow-400 transition-colors max-w-[200px]">{text}</button>

    )
}