import { AddressBook, CalendarBlank, Dog, SignOut } from 'phosphor-react'
import User from '../../assets/149071.png'
import { AsideItem } from '../others/asideItem'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/UserContext'
import { useContext } from 'react'

interface AsideInterface {
    image?: string
}

export const AsideUser = ({ image }: AsideInterface) => {

    const { logout } = useContext<any>(Context)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logout()
        navigate('/')
    }


    return (
        <aside className="col-span-2 hidden md:flex flex-col gap-8 bg-yellow-200 items-center">
            <img src={image ? `http://localhost:8080/images/users/${image}` : User} alt="Foto de perfil" className='w-[150px] h-[150px] rounded-full object-cover mt-4' />

            <nav className='flex flex-col w-full'>

                <AsideItem key={'00'} text='Dados pessoais' icon={<AddressBook size={24} color="#171717" />} href="/user" />
                <AsideItem key={'01'} text='Meus pets' icon={<Dog size={24} color="#171717" />} href="/user/pets" />
                <AsideItem key={'02'} text='Minhas adoções' icon={<CalendarBlank size={24} color="#171717" />} href="/user/adoptions" />
                <AsideItem key={'03'} onClick={() => handleLogOut()} text='Sair' icon={<SignOut size={24} color="#171717" />} href="#" />



            </nav>
        </aside>
    )
}