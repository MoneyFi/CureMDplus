import React, { useEffect } from 'react'
import logo from '../../../assets/icons/Logo_Azul.png'
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosLogOut } from "react-icons/io";
import { logoutUser } from '../../../features/User/userSlice';
import { createToast } from '../../../features/toastSlice/toastSlice';
import { calculateExpiryDate } from '../../../API/Cron/Cron';
import { getProdsThunk } from '../../../features/prodSlice/prodThunks';


const UserDashboard = () => {
    const { productores } = useSelector((state) => state.prod);
    const login = JSON.parse(localStorage.getItem('login'))
    const plan = JSON.parse(localStorage.getItem('plan'))
    const { data_user: data } = login
    let coberturaDate;
    let expired;
    if(plan && plan.comprado){
        coberturaDate = new Date(plan?.startDate)
        expired = calculateExpiryDate(plan?.startDate, plan?.facturacion)
    }
    let find = productores?.filter(p => p.prod_dni === data.dni_productor)[0];
    let productor = find ||'Carlos Salinas'
    const nav = useNavigate();
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(createToast('Cerrando sesion...'))
        setTimeout(() => {
            localStorage.removeItem('login')
            dispatch(logoutUser())
            nav('/')
            dispatch(createToast('Sesion cerrada'))
        }, 3000)
    }
    // Con el user_id se haria el fetch de los datos de la compra del producto
    // datos del plan, vigencia, denuncia siniestros, productor, vias de contacto
    useEffect(() => {
        dispatch(getProdsThunk())
    },[])

    return (
        <section className='layout background flex flex-col items-center justify-between '>
            <div className='w-full flex items-center justify-between py-2 px-4'>
                <div className='w-[200px]'>
                    <img src={logo} alt='logo' />
                </div>
                <button onClick={logout} title='Cerrar Sesion' className='text-xs font-bold font-varela text-primary-blue px-6 py-2 flex justify-center items-center gap-2 rounded-2xl shadow-md'>
                    <IoIosLogOut size={30} />
                    <p className='hidden md:block'>Cerrar Sesión</p>
                </button>
            </div>

            {plan && plan?.comprado ? (
                <div className='w-full flex flex-col items-center justify-center'>
                    <h3 className='font-bold text-3xl text-primary-blue'>¡Bienvenido!</h3>

                    <div className='p-4  mt-10 '>
                        <p className='p-2'><strong className='text-primary-blue'>Titular: </strong>{data.first_name + ' ' + data.last_Name}</p>
                        <p className='p-2'><strong className='text-primary-blue'>Activación de cobertura: </strong> {coberturaDate.toLocaleString().split(',')[0]}</p>
                        <p className='p-2'><strong className='text-primary-blue'>Vigencia hasta: </strong> {expired.toLocaleString().split(',')[0]}</p>
                        <p className='p-2'><strong className='text-primary-blue'>Plan:</strong> {plan.plan}</p>
                        <p className='p-2'><strong className='text-primary-blue'>Facturacion: </strong> {plan.facturacion.split("")[0].toUpperCase() + plan.facturacion.slice(1)}</p>
                        <p className='p-2'><strong className='text-primary-blue'>Productor: </strong> {productor}</p>

                        <div className='p-4 flex items-center justify-center w-full'>
                            <button onClick={() => dispatch(createToast('Descargando certificado...'))} className='bg-primary-blue font-bold text-white rounded w-full p-2'>Descargar certificado</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className='font-bold text-lg text-primary-blue text-center px-4'>¡Bienvenido! <br/>Aún no ha adquirido ningún plan.</p>
            )}



            <footer className='flex items-center justify-between h-[8vh]'>
                <div className='flex  items-center justify-center text-sm'>
                    <p className='mr-1'>¿Necesitas ayuda? </p>
                    <a className='flex items-center justify-center font-bold text-primary-blue ' href=' https://api.whatsapp.com/send?phone=543517860525&text=Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20CureMD' target='_blank'> Escribe aqui </a>
                </div>
            </footer>

        </section>
    )
}

export default UserDashboard;