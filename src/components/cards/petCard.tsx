
interface PetInterface {
    petData: {
        _id: string,
        name: string,
        images:[string],
        available:boolean,
        adopter: {
            name:string
        },
        owner: {
            name: string
        }
    }
}

export const PetCard = ({petData}: PetInterface) => {

    console.log(petData.adopter)

    return (
        <div className='flex flex-col gap-4 col-span-1'>
            <img src={`http://localhost:8080/images/pets/${petData.images[0]}`} alt="Foto do pet" width={400} height={300} className="w-[400px] h-[200px] object-cover" />
            <span>{petData.name}</span>
            <span>Dono: {petData.owner.name}</span>
            {petData.available && !petData.adopter ?
            <a href={`/pet/${petData._id}`} className='bg-yellow-300 text-center hover:bg-yellow-400 transition-colors rounded p-4'>Ver detalhes</a> : 
            <span className="text-center rounded cursor-not-allowed bg-gray-200 p-4">Pet indisponível</span>
            }
        </div>
    )
}
