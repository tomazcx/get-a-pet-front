import { useForm } from "react-hook-form"
import { useNavigate, useOutletContext } from "react-router-dom"
import { Button } from "../../../components/form/button"
import { Input } from "../../../components/form/input"
import { Title } from "../../../components/others/title"
import {useEffect, useContext, useState} from 'react'
import { FieldValues } from "react-hook-form/dist/types"
import {useCookies} from 'react-cookie'
import { Context } from "../../../context/UserContext"
import api from "../../../utils/api"

interface UserInterface {
    _id: string,
    name: string,
    email: string,
    phone: string,
    image: string
}

export const UserInfo = () => {

    const user = useOutletContext<UserInterface>()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: ""
        },
    })

    useEffect(() => {
        reset({
            name: user.name,
            email: user.email,
            phone: user.phone
        })
    }, [user])

    const saveUserData = async(data: FieldValues) => {
        try{
            await api.patch('/user/edit', {
                name: data.name,
                email: data.email,
                phone: data.phone,
                image: data.image[0]
            }, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            })
            navigate(0)
        }catch(err : any){
            setError(err.message)
        }
    }

    return (
        <section className="col-span-10 p-8 flex flex-col gap-12">
            <Title text="Dados pessoais" />

            <form onSubmit={handleSubmit(saveUserData)} className="flex flex-col gap-8">
                <Input register={register} required label="Nome" name="name" id="name" />
                <Input register={register} required label="Email" name="email" id="email" />
                <Input register={register} required label="Número de contato" name="phone" id="phone" />
                <Input register={register} label="Imagem de perfil" name="image" id="image" type='file' />
                {error ? <span className="text-red-400">{error}</span> : <></>}
                <Button text="Salvar" />
            </form>
        </section>

    )
}