import { useNavigate } from 'react-router-dom'
import { Button } from '../form/button'
import Modal from 'react-modal'
import { ModalDelete } from '../modals/modalDelete'
import { useState } from 'react'
import { ModalAdoption } from '../modals/modalAdoption'
import { ModalCancelAdoption } from '../modals/modalCancelAdoption'

interface PetInterface {
    petData: {
        _id: string
        name: string,
        images: [string],
        available: boolean,
        adopter: {
            _id: string,
            name: string
        }
    }
}

export const PetItem = ({ petData }: PetInterface) => {

    const navigate = useNavigate()
    const [modalDelete, setModalDelete] = useState(false)
    const [modalAdoption, setModalAdoption] = useState(false)
    const [modalCancel, setModalCancel] = useState(false)

    return (
        <li className="grid grid-cols-12 p-4 border-b border-yellow-300 items-center gap-4">
            <Modal
                isOpen={modalDelete}
                ariaHideApp={false}
                className="absolute top-[200px] left-1/2 -translate-x-1/2 flex flex-col gap-4 rounded p-4 bg-gray-100"
                contentLabel="Finish adoption Modal"
            >
                <ModalDelete setModal={setModalDelete} id={petData._id} />
            </Modal>

            <Modal
                isOpen={modalAdoption}
                ariaHideApp={false}
                className="absolute top-[200px] left-1/2 -translate-x-1/2 flex flex-col gap-4 rounded p-4 bg-gray-100"
                contentLabel="Finish adoption Modal"
            >
                <ModalAdoption id={petData._id} setModal={setModalAdoption} />
            </Modal>
            <Modal
                isOpen={modalCancel}
                ariaHideApp={false}
                className="absolute top-[200px] left-1/2 -translate-x-1/2 flex flex-col gap-4 rounded p-4 bg-gray-100"
                contentLabel="Finish adoption Modal"
            >
                <ModalCancelAdoption id={petData._id} setModal={setModalCancel} />
            </Modal>

            <img src={`http://localhost:8080/images/pets/${petData.images[0]}`} alt="Foto pet" className='col-span-2 rounded' width={'100px'} />
            <span className='col-span-2'>{petData.name}</span>


            {petData.available && petData.adopter ?
                <div className='col-start-7 col-span-4 flex gap-4'>
                    <button onClick={() => setModalAdoption(true)} className='border border-green-400 hover:bg-green-400 transition-colors py-1 px-4 rounded'>
                        Concluir adoção
                    </button>
                    <button onClick={() => setModalCancel(true)} className='border border-red-400 hover:bg-red-400 transition-colors py-1 px-4 rounded'>
                        Cancelar adoção
                    </button>
                </div>
                : <></>}

            {petData.available ? <span className='col-span-2 col-start-11 flex gap-4 items-center'>
                <a href={`/pet/edit/${petData._id}`} className='border border-yellow-400 rounded px-4 py-1 text-gray-800 transition-colors hover:bg-yellow-400'>Editar</a>
                <Button onClick={() => setModalDelete(true)} text='Excluir' />
            </span> : <span className='col-span-2 col-start-11 text-center'>Pet ja adotado!</span>}


        </li>
    )
}