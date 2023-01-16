import { Title } from "../../components/others/title"
import { Button } from "../../components/form/button"
import { Input } from "../../components/form/input"
import { PasswordInput } from "../../components/form/passwordInput"
import { useForm } from "react-hook-form"
import { useState, useContext  } from "react"
import { useNavigate } from "react-router-dom"
import { FieldValues } from "react-hook-form/dist/types"
import { Context } from "../../context/UserContext"



export const Login = () => {

    const {register, handleSubmit} = useForm()
    const [error, setError] = useState(false)
    const {login} = useContext<any>(Context)
    const navigate = useNavigate()

    const loginQuery = async(data : FieldValues) => {
        try{
            await login(data)
            navigate('/')
        }catch(err){
            console.log(err)
            setError(true)
        }
    }

    return (
        <main className="flex-1 flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(loginQuery)} className="w-11/12 max-w-[400px] flex flex-col gap-8">
                <Title text="Realizar login" />
                <Input register={register}  type="email" label="Email" name="email" id="email" required={true} />
                <PasswordInput register={register}  name="password" required={true} label="Senha" />
                {error ? <span className="text-red-400">Credenciais inválidas</span> : <></>}
                <Button text="Entrar" />
                <div className="flex flex-col gap-2">
                    <span>Esqueceu sua senha? <a href="/change-password" className="underline text-yellow-400">Clique aqui</a></span>
                    <span>Não possui uma conta? <a href="/register" className="underline text-yellow-400">Registre-se</a></span>
                </div>
            </form>
        </main>
    )
}