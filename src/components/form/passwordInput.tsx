import { InputHTMLAttributes, useState } from "react";
import {Eye, EyeSlash} from 'phosphor-react'


interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string,
    register:any

}

export const PasswordInput = ({ label, name, register,...rest }: InputInterface) => {
    const [showPassword, setShow] = useState(false)

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name}>{label}</label>
            <div className="bg-gray-100 flex justify-between pr-2 items-center focus-within:outline outline-2 rounded">
                <input {... rest}  {...register(name)} name={name} type={showPassword ? 'text' : 'password'} className="bg-gray-100 flex-1 p-2 rounded outline-none" />
                {showPassword ? <EyeSlash onClick={() => setShow(false)} className='cursor-pointer' size={24} color="#171717" /> : <Eye onClick={() => setShow(true)} size={24} color="#171717" className="cursor-pointer" />}
            </div>
        </div>
    )
}