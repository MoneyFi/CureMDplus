import React, { useEffect } from 'react'
import logo from '../../../assets/icons/Logo_Azul.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosLogOut } from "react-icons/io";
import { logoutUser } from '../../../features/User/userSlice';
import { createToast } from '../../../features/toastSlice/toastSlice';
import { getProdsThunk } from '../../../features/prodSlice/prodThunks';


const UserDashboard = () => {
    const { productores } = useSelector((state) => state.prod);
    const login = JSON.parse(localStorage.getItem('login'))
    const plan = JSON.parse(localStorage.getItem('plan_adquirido'))
    const { data_user: data } = login
    let coberturaDate = '';
    let expired = '';
    if (data && data.nombre_plan_curemd_plus) {
        coberturaDate = new Date(data?.fecha_cobro_curemd_plus);
        let now = new Date()
        expired = now > coberturaDate ? true : false
    }
    let find = productores?.filter(p => p.prod_dni === data.dni_productor)[0];
    let productor = find || 'Carlos Salinas'
    const nav = useNavigate();
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(createToast('Cerrando sesion...'))
        setTimeout(() => {
            localStorage.removeItem('login')
            localStorage.removeItem('para_actualizar')
            dispatch(logoutUser())
            nav('/')
            dispatch(createToast('Sesion cerrada'))
        }, 3000)
    }

    useEffect(() => {
        dispatch(getProdsThunk())
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

            {login && (login?.data_user?.status_curemd_plus === '0') && (login?.data_user?.nombre_plan_curemd_plus !== '0') ? (
                <div className='flex flex-col justify-center items-center py-2 px-4 bg-white shadow-md rounded-lg '>
                    <span className='text-2xl text-[#ff0000] font-varela font-bold'>Cuenta Inactiva</span>
                    <p className='font-roboto text-sm text-[#7a7a7a]'>Pendiente de aprobacion de pago.</p>
                </div>
            ) : ''}

            {plan && plan?.comprado ? (
                <div className='w-full flex flex-col items-center justify-center'>
                    <h3 className='font-bold text-3xl text-primary-blue'>¡Bienvenido!</h3>

                    <div className='p-4'>
                        <p className='text-xs md:text-sm text-[#7a7a7a] font-roboto text-center'>Su certificado estará disponible el primer dia habíl de cada mes.</p>
                    </div>

                    <div className='p-4  mt-10 '>
                        {expired &&
                            <>
                                <p className='p-2 text-center'><strong className='text-[#ff0000]'>Cobertura Caducada</strong></p>
                                <div className='p-2 text-center'>
                                    <p>Renueva tu plan aqui <Link to={'/adquirirproducto/todos'} className='text-primary-blue font-bold'>Aqui</Link></p>
                                </div>
                            </>
                        }
                        <p className='p-2'><strong className='text-primary-blue'>Titular: </strong>{data.first_name + ' ' + data.last_Name}</p>
                        <p className='p-2'><strong className='text-primary-blue'>Activación de cobertura: </strong> {coberturaDate.toLocaleString().split(',')[0]}</p>
                        <p className='p-2'><strong className='text-primary-blue'>Vigencia hasta: </strong> {expired.toLocaleString().split(',')[0]}</p>
                        <p className='p-2'><strong className='text-primary-blue'>Plan:</strong> {plan.plan}</p>
                        <p className='p-2'><strong className='text-primary-blue'>Facturacion: </strong> {plan.facturacion.split("")[0].toUpperCase() + plan.facturacion.slice(1)}</p>
                        <p className='p-2'><strong className='text-primary-blue'>Productor: </strong> {productor}</p>

                        <div className='p-4 flex items-center justify-center w-full'>
                            <a href={data?.certificado_url} target='_blank' onClick={() => dispatch(createToast(`${data?.certificado_url ? 'Descargando Certificado...' : 'Certificado aún no disponible'}`))} className='disabled:bg-[#7c7b7b] bg-primary-blue font-bold text-white rounded w-full p-2 text-center'>
                                {data?.certificado_url ? 'Descargar Certificado' : 'Certificado aún no disponible'}
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col items-center justyfy-center '>
                    <p className='font-bold text-lg text-primary-blue text-center px-4'>¡Bienvenido! <br />Aún no ha adquirido ningún plan.</p>
                    <div className='p-4'>
                        <p>Adquiere tu plan <Link to={'/adquirirproducto/todos'} className='text-primary-blue font-bold'>Aqui</Link></p>
                    </div>
                </div>
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