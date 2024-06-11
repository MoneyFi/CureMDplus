import React, { useEffect, useState } from 'react'
import logo from '../../../assets/icons/Logo_Azul.png'
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosLogOut } from "react-icons/io";
import { logoutUser } from '../../../features/User/userSlice';
import { createToast } from '../../../features/toastSlice/toastSlice';
import ReactPDF, { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Credential } from './Credential';
import { getProdsThunk } from '../../../features/prodSlice/prodThunks';


const UserDashboard = () => {
    const { data } = useSelector((state) => state.user);
    const { productores } = useSelector((state) => state.prod);
    const [productor, setProductor] = useState({
        prod_name: 'Carlos',
        prod_lastname: 'Salinas',
        prod_email: 'curemd-plus@moneyfi.io'
    });
    if(data?.dni_productor && data?.dni_productor !== '0'){
        const findProd = productores.find((prod) => prod.prod_dni === data.dni_productor);
        if(findProd){
            setProductor(findProd);
        }
    }
    const nav = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem('login')
        dispatch(createToast('Cerrando sesion...'))
        setTimeout(() => {
            dispatch(logoutUser())
            nav('/')
            dispatch(createToast('Sesion cerrada'))
        }, 3000)
    }

    useEffect(() => {
        const fetchProds = async () => {
            dispatch(getProdsThunk())
        }
        fetchProds();
    }, [])

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


            <div className='w-full flex flex-col items-center justify-center'>
                <h3 className='font-bold text-3xl text-primary-blue'>¡Bienvenido!</h3>

                <div className='p-4  mt-10 '>
                    <p className='p-2'><strong className='text-primary-blue'>Titular: </strong>{data.first_name + ' ' + data.last_Name}</p>
                    <p className='p-2'><strong className='text-primary-blue'>Fecha de compra: </strong> 30/5/2024</p>
                    <p className='p-2'><strong className='text-primary-blue'>Plan:</strong> Esencial</p>
                    <p className='p-2'><strong className='text-primary-blue'>Vigencia: </strong> 30 dias</p>
                    <p className='p-2'><strong className='text-primary-blue'>Productor: </strong> {productor.prod_name + ' ' + productor.prod_lastname}</p>

                    <div className='p-4 flex items-center justify-center w-full'>
                        <PDFDownloadLink document={<Credential data={data} productor={productor} />} fileName='poliza_colectiva.pdf'>
                            {({ loading, url, error, blob }) => loading ?
                                <button className='bg-primary-blue font-bold text-white rounded w-full p-2'>Cargando poliza...</button>
                                :
                                <button className='bg-primary-blue font-bold text-white rounded w-full p-2'>Descargar mi poliza</button>
                            }
                        </PDFDownloadLink>
                    </div>
                </div>
            </div>

            <footer className='flex items-center justify-between h-[8vh]'>
                <div className='flex flex-col items-center justify-center text-sm'>
                    <p className='font-bold text-primary-blue'>¿Necesitas ayuda?</p>
                    <p className='flex items-center justify-center'><FaPhoneAlt className='mr-2' /> 0800-444-0001 <strong className='ml-2'> opcion 3</strong></p>
                </div>
            </footer>

        </section>
    )
}

export default UserDashboard;