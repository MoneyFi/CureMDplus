import React from 'react'
import { useSelector } from 'react-redux'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    const { data, user_id } = useSelector(state => state.user)
    // Con el user_id se haria el fetch de los datos de la compra del producto
    return (
        <section className='px-5 py-10 flex flex-col justify-start items-start gap-4 min-h-screen w-screen font-roboto'>
            <Link to='/'>
                <button className='font-sans font-bold flex justify-center items-center gap-1 text-sm text-secondary-blue mb-4'>
                    <IoIosArrowBack size={20} />
                    <p>Volver al Home</p>
                </button>
            </Link>
            <h1 className='font-varela text-primary-blue text-2xl'>Mi Cuenta</h1>
            <hr className='w-full h-[1px] -mt-2 border-secondary-blue'/>
            <h3 className='text-xl'>Bienvenido <strong className='text-secondary-blue'>{`${data?.first_name} ${data?.last_Name}`}</strong></h3>
            <h1 className='font-varela text-primary-blue text-xl'>Plan Activo</h1>
            <hr className='w-full h-[1px] -mt-2 border-secondary-blue'/>
            <div className='self-center flex flex-col justify-center items-center shadow-md py-8 px-10 gap-2 bg-[#3aac0d] font-sans font-bold text-white rounded-md text-lg'>
                <span>PLAN PRO</span>
                <span className='text-sm'>Vigencia de Cobertura:</span>
                <p className='text-sm'>01/01/2025</p>
            </div>
            <h1 className='font-varela text-primary-blue text-xl'>Denuncia de siniestros</h1>
            <hr className='w-full h-[1px] -mt-2 border-secondary-blue'/>
            <h1 className='font-varela text-primary-blue text-xl'>Tu Productor</h1>
            <hr className='w-full h-[1px] -mt-2 border-secondary-blue'/>
            <h1 className='font-varela text-primary-blue text-xl'>Vias de Contacto</h1>
            <hr className='w-full h-[1px] -mt-2 border-secondary-blue'/>
        </section>
    )
}

export default UserDashboard;