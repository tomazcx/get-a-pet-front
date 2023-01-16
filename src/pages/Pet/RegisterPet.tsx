import { Button } from "../../components/form/button"
import { Input } from "../../components/form/input"
import { Title } from "../../components/others/title"
import { useForm } from 'react-hook-form'
import { FieldValues } from "react-hook-form/dist/types"
import { useNavigate } from "react-router-dom"
import api from "../../utils/api"

export const RegisterPet = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const registerPet = async (data: FieldValues) => {
        try {

            const formData = new FormData()

            await Object.keys(data).forEach(key => {
                if(key === 'images'){
                    for(let i =0; i < data[key].length; i++){
                        formData.append('images', data[key][i])
                    }
                } else{
                    formData.append(key, data[key])
                }
            })


            await api.post("/pet/register", formData)
            navigate("/user/pets")
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <main className="flex-1 flex flex-col justify-center items-center py-12">
            <form onSubmit={handleSubmit(registerPet)} className="w-11/12 max-w-[400px] flex flex-col gap-8">
                <Title text="Cadastrar um pet" />
                <Input register={register} type="text" label="Nome" name="name" id="name" required={true} />
                <Input register={register} type="number" label="Idade" name="age" id="age" required={true} />
                <Input register={register} type="text" label="Peso do pet" name="weight" id="weight" required={true} />
                <Input register={register} type="text" label="Cor do pet" name="color" id="color" required={true} />
                <Input register={register} type="file" multiple label="Imagens do pet" name="images" id="images" required={true} />
                <Button text="Cadastrar" />

            </form>
        </main>
    )
} 