import { InputHTMLAttributes } from "react"

interface InputInterface extends InputHTMLAttributes<HTMLInputElement>{
    label:string,
    name:string,
    register:any
}

export const Input = ({label, name, register,...rest } : InputInterface) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name}>{label}</label>
            <input name={name} { ... rest} {...register(name)}   className="bg-gray-100 p-2 rounded" />
        </div>
    )
}