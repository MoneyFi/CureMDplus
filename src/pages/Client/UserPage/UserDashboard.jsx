import React from 'react'
import logo from '../../../assets/icons/Logo_Azul.png'
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosLogOut } from "react-icons/io";
import { logoutUser } from '../../../features/User/userSlice';
import { createToast } from '../../../features/toastSlice/toastSlice';


const UserDashboard = () => {
    const { data } = useSelector((state) => state.user);
    const nav = useNavigate();
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(createToast('Cerrando sesion...'))
        setTimeout(() => {
            dispatch(logoutUser())
            nav('/')
            dispatch(createToast('Sesion cerrada'))
        }, 3000)
    }
    // Con el user_id se haria el fetch de los datos de la compra del producto
    // datos del plan, vigencia, denuncia siniestros, productor, vias de contacto
    return (
        <section className='layout background flex flex-col items-center justify-between '>
            <div  className='w-full flex items-center justify-between py-2 px-4'>
                <div className='w-[200px]'>
                    <img src={logo} alt='logo'/>
                </div>
                <button onClick={logout} title='Cerrar Sesion' className='text-xs font-bold font-varela text-white bg-[#E8193E] px-6 py-2 flex justify-center items-center gap-2 rounded-2xl shadow-md'>
                    <IoIosLogOut size={30}/>
                    <p className='hidden md:block'>Cerrar Sesión</p>
                </button>
            </div>


            <div className='w-full flex flex-col items-center justify-center'>
                <h3 className='font-bold text-3xl text-primary-blue'>¡Bienvenido!</h3>

                <div className='p-4  mt-10 '>
                <p className='p-2'><strong className='text-primary-blue'>Titular: </strong>{data.first_name + ' ' + data.last_Name}</p>
                    <p className='p-2'><strong className='text-primary-blue'>Fecha de compra: </strong> 30/5/2024</p>
                    <p className='p-2'><strong className='text-primary-blue'>Plan:</strong> Esencial</p>
                    <p className='p-2'><strong className='text-primary-blue'>Vigencia: </strong> 30 dias</p>
                    <p className='p-2'><strong className='text-primary-blue'>Productor: </strong> Juan Casares</p>

                    <div className='p-4 flex items-center justify-center w-full'>
                    <button className='bg-primary-blue font-bold text-white rounded w-full p-2'>Descargar mi poliza</button>
                    </div>
                </div>
            </div>

            <footer className='flex items-center justify-between h-[8vh]'>
                <div className='flex flex-col items-center justify-center text-sm'>
                <p className='font-bold text-primary-blue'>¿Necesitas ayuda?</p>
                <p className='flex items-center justify-center'><FaPhoneAlt  className='mr-2'/> 0800-444-0001 <strong className='ml-2'> opcion 3</strong></p>
                </div>
            </footer>

        </section>
    )
}

export default UserDashboard;