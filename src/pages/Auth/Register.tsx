import { Button } from "../../components/form/button"
import { Input } from "../../components/form/input"
import { PasswordInput } from "../../components/form/passwordInput"
import { Title } from "../../components/others/title"
import {useForm} from 'react-hook-form'
import { FieldValues } from "react-hook-form/dist/types"
import {useState, useContext} from 'react'
import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom"
import { Context } from "../../context/UserContext"


export const Register = () => {

    const {register, handleSubmit} = useForm()
    const {registerUser} = useContext<any>(Context)
    const [error, setError] = useState("")
    const [cookies, setCookie] = useCookies()
    const navigate = useNavigate()


    const handleRegister = async(data : FieldValues) => {
        try{

            if(data.password !== data.confirmPassword) throw new Error("As senhas devem ser iguais.")

            const response = await registerUser(data)
            
            const token = response.token
            setCookie('user-auth', token)
            navigate('/')

        }catch(err:any){
            setError(err.message)
        }
    }

    return (
        <main className="flex-1 flex flex-col justify-center items-center py-12">
            <form onSubmit={handleSubmit(handleRegister)} className="w-11/12 max-w-[400px] flex flex-col gap-8">
                <Title text="Registrar" />
                <Input register={register} type="text" label="Nome" name="name" id="name" required={true} />
                <Input register={register} type="email" label="Email" name="email" id="email" required={true} />
                <Input register={register} type="text" label="Número de contato" name="phone" id="phone" required={true} />
                <PasswordInput register={register} label="Senha" name="password" id="password" required={true} />
                <PasswordInput register={register} label="Confirmar senha" name="confirmPassword" id="confirmPassword" required={true} />
                {error ? <span className="text-red-400">{error}</span> : <></>}
                <Button text="Cadastrar" />
                
                <div className="flex flex-col gap-2">
                    <span>Já possui uma conta? <a href="/login" className="underline text-yellow-400">Clique aqui</a></span>
                </div>
            </form>
        </main>
    )
}