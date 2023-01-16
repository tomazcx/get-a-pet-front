import { useNavigate, useParams } from "react-router-dom"
import { Title } from "../../components/others/title"
import { useContext, useEffect, useState } from "react"
import { Button } from "../../components/form/button"
import { Image } from "../../components/others/image"
import api from "../../utils/api"
import { Context } from "../../context/UserContext"

interface PetInterface{
    name?:string,
    color?:string,
    age?:number,
    weight?:string,
    images?: [string]
}

export const Pet = () => {
    const { id } = useParams()
    const [petData, setData] = useState<PetInterface>({})
    const [selectedImg, setSelected] = useState(0)
    const [error, setError] = useState('')
    const {Authenticated} = useContext<any>(Context)
    const navigate = useNavigate()

    const getData = async(id?:string) => {
        try{
            console.log(id)
            const result = await api.get(`/pet/${id}`)
            setData(result.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getData(id)
    }, [])

    const schedule = async() => {
        try{
            await api.patch(`/pet/schedule/${id}`)
            navigate('/user/adoptions')
        }catch(err:any){
            setError(err.response.data.error)
        }
    }



    return (
        <main className="flex-1 p-12 flex flex-col gap-8 ">
            <div className="flex gap-4 items-center">
                <a href="/" className="underline hover:text-gray-700 text-base">Voltar</a>
                <Title text="Informações do Pet" />
            </div>

            <section className="flex flex-col md:grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-4 items-center max-w-[400px] mx-auto">
                    <img src={`http://localhost:8080/images/pets/${petData.images? petData.images[selectedImg] : ""}`}  alt="Imagem pet" className="w-[400px] h-[400px] object-cover rounded" />
                    <div className="grid grid-cols-3 items-center mx-auto gap-4 w-full">
                        {petData.images?.map(image => <Image image={image} selectedImg={selectedImg} index={petData.images?.indexOf(image)} setSelected={setSelected}  /> ) }                        
                    </div>
                </div>
                <article className="text-base flex flex-col gap-4">
                    <p>Nome: <span>{petData.name}</span></p>
                    <p>Idade: <span>{petData.age}</span></p>
                    <p>Peso: <span>{petData.weight}</span></p>
                    <p>Cor: <span>{petData.color}</span></p>
                    {Authenticated ? 
                    <Button onClick={() => schedule()} text={'Solicitar uma visita'} />
                    :
                    <a href="/login" className="bg-yellow-300 rounded py-2 px-4 hover:bg-yellow-400 transition-colors max-w-[300px] text-center">Faça login para adotar um pet</a>
                    }
                    {error !== '' ? <span className="text-red-400">{error}</span> : <></>}
                </article>
            </section>
        </main>
    )
}