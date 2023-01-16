import img from '../../assets/calopsita-olhando.jpg'

interface PetInterface {
    petData: {
        _id: string,
        name: string,
        available: boolean,
        images:[string],
        owner: {
            name: string,
            phone: string
        }
    }
}

export const PetAdoptionItem = ({ petData }: PetInterface) => {
    return (
        <li className="grid grid-cols-12 p-4 border-b border-yellow-300 items-center gap-4">
            <img src={`http://localhost:8080/images/pets/${petData.images[0]}`} alt="Foto pet" className='col-span-2 rounded hidden md:block' width={'100px'} />
            <span className='col-span-2'>{petData.name}</span>
            {
                petData.available ?
                    <span className="flex flex-col col-span-4 gap-2">
                        <span>Ligue para: {petData.owner.phone}</span>
                        <span>Fale com: {petData.owner.name}</span>
                    </span>:
                    <></>
            }
            <span className='col-start-10 col-span-2'>{petData.available ? "Adoção em processo" : "Pet adotado!"}</span>

        </li>
    )
}