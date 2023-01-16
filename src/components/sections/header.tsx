import { PawPrint, User, CalendarCheck, List } from "phosphor-react"
import { useState } from "react"
import { UserHeader } from "../modals/userHeader"

export const Header = () => {

    const [modalUser, setModal] = useState(false)

    return (
        <header className="bg-yellow-300 md:px-20 px-4 py-2 flex items-center justify-between">
            <a href="/" className="flex items-center md:gap-4 flex-col md:flex-row">
                <PawPrint size={32} color="#171717" />
                <span className="uppercase font-semibold md:text-xl">Get A Pet</span>
            </a>

            <div className="md:flex items-center gap-8 text-base hidden relative">
                <span onMouseEnter={() => setModal(true)}  onMouseLeave={() => setModal(false)} className="flex flex-col items-center cursor-pointer">
                    <User size={24} color="#171717" />
                    <span >Minha conta</span>
                    
                    <UserHeader active={modalUser}/>
                </span>


                <a href="/" className="flex-col items-center cursor-pointer flex">
                    <CalendarCheck size={24} color="#171717" />
                    <span>Adotar</span>
                </a>
            </div>

            <List size={24} color="#171717" className="md:hidden" />


        </header>
    )
}