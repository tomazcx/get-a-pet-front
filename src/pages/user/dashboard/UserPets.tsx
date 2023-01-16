import { useState } from "react"
import { PetItem } from "../../../components/cards/petItem"
import { Title } from "../../../components/others/title"
import Modal from 'react-modal'

import { ModalAdoption } from "../../../components/modals/modalAdoption"
import {useEffect} from 'react'
import useCookies from 'react-cookie/cjs/useCookies'
import axios from "axios"

interface PetInterface{
    _id:string,
    name:string,
    age:number,
    weight:string,
    available:boolean,
    images:[string],
    adopter:{
        name:string,
        _id:string
    },
    owner:{
        name:string,
        _id:string
    }
    
}

export const UserPets = () => {

    const [cookies, setCookie, removeCookie] = useCookies()
    const [pets, setPets] = useState<PetInterface[]>([])


    const getPets = async() => {
        try{

            const response = await axios.get("http://localhost:8080/pet/mypets", {
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
        getPets()
    }, [])

    return (
        <section className="col-span-10 p-8 flex flex-col gap-12">
            

            <div className="flex justify-between items-center">
                <Title text="Meus pets" />
                <a href="/pet/register" className="bg-yellow-300 py-2 px-8 rounded hover:bg-yellow-400 text-center transition-colors">Cadastrar pet</a>
            </div>

            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-12 p-4 font-semibold">
                    <span className="col-span-2">Imagem</span>
                    <span className="col-span-2">Nome</span>

                </div>
                <ul>
                {pets.length > 0 ? pets.map(pet => <PetItem petData={pet} key={pet._id} />) : <span className='p-4'>Não há pets cadastrados.</span>}

                </ul>
            </div>
        </section>

    )
}