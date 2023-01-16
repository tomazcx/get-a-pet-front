import { ArrowRight } from 'phosphor-react'
import useCookies from 'react-cookie/cjs/useCookies'
import { Context } from '../../context/UserContext'
import {useContext} from 'react'

export const UserHeader = ({ active }: { active: boolean }) => {
    const {Authenticated} = useContext<any>(Context)


    if (active) {
        return (
            <div className="bg-yellow-300 absolute top-12 w-full md:max-w-[150px] flex flex-col  text-sm">

                {Authenticated ?
                    <a href="/user" className="p-4 border-b hover:text-gray-600 border-black items-center transition-colors flex justify-between ">
                        <span>Perfil</span>
                        <ArrowRight size={16} color="#171717" />
                    </a> :
                    <a href="/login" className="p-4 border-b hover:text-gray-600 border-black items-center transition-colors flex justify-between ">
                        <span>Entrar</span>
                        <ArrowRight size={16} color="#171717" />
                    </a>}

                <a href="/register" className="p-4  hover:text-gray-600 transition-colors flex justify-between items-center ">
                    <span>Registrar-se</span>
                    <ArrowRight size={16} color="#171717" />
                </a>

            </div>
        )
    }

    return <></>
}