import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/form/button"
import { Input } from "../../components/form/input"
import { PasswordInput } from "../../components/form/passwordInput"
import { Title } from "../../components/others/title"
import api from "../../utils/api"

export const ChangePassword = () => {

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const changePassword = async({email, password, confirmPassword} : FieldValues) => {
        try{
            await api.patch(`/user/edit/password/${email}`, {
                password,
                confirmPassword
            })

            navigate('/login')
        }catch(err:any){
            setError(err.response.data.error)
        }


    }

    return(
        <main className="flex-1 flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(changePassword)} className="w-10/12 max-w-[400px] flex flex-col gap-8">
            <Title text="Alterar senha:" /> 
            <Input register={register} label="Email:" name="email" type={'email'} required={true} />
            <PasswordInput register={register} label="Senha" name="password" type={'password'} required={true} />
            <PasswordInput register={register} label="Confirmar senha" name="confirmPassword" type={'password'} required={true} />
            {error ? <span className="text-red-400">{error}</span> : <></>}
            <Button text="Alterar" />
        </form>
    </main>
    )
}