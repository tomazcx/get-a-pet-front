import { PetAdoptionItem } from "../../../components/cards/petAdoptionItem"
import { PetItem } from "../../../components/cards/petItem"
import { Title } from "../../../components/others/title"
import {useCookies} from 'react-cookie'
import axios from "axios"
import {useEffect, useState} from 'react'

interface PetInterface{
    _id:string,
    name:string,
    available:boolean,
    images:[string]
    owner:{
        name:string,
        phone:string
    }
}

export const UserAdoptions = () => {

    const [cookies, setCookie] = useCookies(['user-auth'])
    const [pets, setPets] = useState<PetInterface[]>([])

    const getAdoptions = async() => {

        try{
            const response = await axios.get("http://localhost:8080/pet/myadoptions", {
                headers: {
                    Authorization: `Bearer: ${cookies['user-auth']}`
                }
            })

            setPets(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getAdoptions()
    }, [])

    console.log(pets.length)

    return (
        <section className="md:col-span-10 p-8 flex flex-col gap-12">
            <Title text="Minhas adoções" />


            <div className="flex flex-col gap-4">
                <div className="hidden md:grid grid-cols-12 p-4 font-semibold">
                    <span className="col-span-2">Imagem</span>
                    <span className="col-span-2">Nome</span>

                </div>
                <ul>
                {pets.length > 0 ? pets.map(pet => <PetAdoptionItem petData={pet} key={pet._id} />) : <span className='p-4'>Não há pets em processo de adoção.</span>}
                </ul>
            </div>
        </section>

    )
}