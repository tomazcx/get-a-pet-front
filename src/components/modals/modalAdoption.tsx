import { useNavigate } from "react-router-dom"
import api from "../../utils/api"

interface ModalInterface{
    setModal(value:boolean):void,
    id:string
}

export const ModalAdoption = ({setModal, id} : ModalInterface) => {

    const navigate = useNavigate()

    const finishAdoption = async() => {
        await api.patch(`/pet/schedule/finish/${id}`)
        navigate(0)
    }

    return(
        <>
            <p className="text-lg">Deseja concluir a adoção?</p>
            <hr />
            <span>Essa ação não pode ser desfeita.</span>
            <div className="flex gap-4">
                <button onClick={() => setModal(false)} className="bg-red-400 py-1 rounded hover:bg-red-500 transition-colors px-4">Cancelar</button>
                <button onClick={() => finishAdoption()} className="bg-green-400 py-1 rounded hover:bg-green-500 transition-colors px-4">Concluir</button>
            </div>
        </>
    )
}