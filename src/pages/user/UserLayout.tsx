import { Outlet } from "react-router-dom"
import { AsideUser } from "../../components/sections/asideUser"
import {  useState,useEffect } from 'react'
import Modal from "react-modal"
import { ModalSession } from "../../components/modals/modalSession"
import api from "../../utils/api"
import {useCookieWatcher} from '@fcannizzaro/react-use-cookie-watcher'

interface UserInterface{
    name?:string,
    email?:string,
    phone?:string,
    image?:string
}

export const UserLayout = () => {

    const [user, setUser] = useState<UserInterface>({})

    const isNotExpired = useCookieWatcher('user-auth',{
        checkEvery: 500
    })

    const userData = async () => {
        try {
            const response = await api.get('/user/find')
            setUser(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        userData()
    }, [])


    return (
        <main className="flex-1 md:grid grid-cols-12">
            <Modal
                isOpen={!isNotExpired}
                ariaHideApp={false}
                className="absolute top-[200px] left-1/2 -translate-x-1/2 flex flex-col gap-4 rounded p-4 bg-gray-100"
                contentLabel="Finish adoption Modal"
            >
                <ModalSession />
            </Modal>
            <AsideUser image={user?.image} />
            <Outlet context={user} />
        </main>
    )
}