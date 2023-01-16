import { useNavigate } from "react-router-dom"
import api from "../../utils/api"

interface ModalInterface{
    setModal(value:boolean):void
    id:string
}

export const ModalCancelAdoption = ({setModal, id} : ModalInterface) => {

    const navigate = useNavigate()

    const cancelAdoption = async() => {
        await api.patch(`/pet/schedule/cancel/${id}`)
        navigate(0)        
    }

    return(
        <>
            <p className="text-lg">Deseja cancelar a adoção?</p>
            <hr />
            <span>Essa ação não pode ser desfeita.</span>
            <div className="flex gap-4">
                <button onClick={() => setModal(false)} className="bg-red-400 py-1 rounded hover:bg-red-500 transition-colors px-4">Não</button>
                <button onClick={() => cancelAdoption()} className="border border-red-400 py-1 rounded hover:bg-red-500 transition-colors px-4">Sim</button>
            </div>
        </>
    )
}