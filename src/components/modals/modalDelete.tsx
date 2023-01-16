import { useNavigate } from "react-router-dom"
import api from "../../utils/api"

interface ModalInterface{
    setModal(value:boolean):void,
    id: string
}

export const ModalDelete = ({setModal, id} : ModalInterface) => {

    const navigate = useNavigate()

    const deletPet = async () => {
        try{
            await api.delete(`pet/${id}`)
            navigate(0)
        }catch(err){
            console.log(err)
        }
    }


    return(
        <>
            <p className="text-lg">Deseja deletar o pet?</p>
            <hr />
            <span>Essa ação não pode ser desfeita.</span>
            <div className="flex gap-4">
                <button onClick={() => setModal(false)} className="bg-blue-400 py-1 rounded hover:bg-blue-500 transition-colors px-4">Cancelar</button>
                <button onClick={() => deletPet()} className="bg-red-400 py-1 rounded hover:bg-red-500 transition-colors px-4">Deletar</button>
            </div>
        </>
    )
}