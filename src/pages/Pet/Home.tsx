import { PetCard } from "../../components/cards/petCard"
import { Title } from "../../components/others/title"
import axios from 'axios'
import { useEffect, useState } from "react"
import api from "../../utils/api"

interface PetInterface {
    _id: string,
    name: string,
    images:[string],
    available:boolean,
    adopter: {
        name:string
    }
    owner: {
        name: string
    }
}

export const Home = () => {

    const [pets, setPets] = useState<PetInterface[]>([])

    const getPets = async() => {
        const Pets = await api.get("/pet/all")
        setPets(Pets.data)
    }

    useEffect(() => {
        getPets()
    } ,[])


    return (
        <main className="flex-1 p-12">
            <section className="flex flex-col gap-12">
                <Title text="Adote um pet" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pets?.map((pet:PetInterface) => <PetCard key={pet._id} petData={pet} />)}
                </div>
            </section>
        </main>
    )
}