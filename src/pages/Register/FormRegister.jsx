import React, { useEffect, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../../features/User/userThunks';
import { createToast } from '../../features/toastSlice/toastSlice';
import { Link } from 'react-router-dom';
import { uploadData } from '../../features/User/userSlice';
import { getProdsThunk } from '../../features/prodSlice/prodThunks';
import { Productores_Call } from '../../API/Productores/Productores';
import LoginRegister from './LoginRegister';

const FormRegister = ({ position, setPosition, setHaveAccount }) => {

    const dispatch = useDispatch()
    const { response } = useSelector((state) => state.user)
    const [loading, setLoading] = useState(false)
    const [exists, setExists] = useState(false)
    const [productor, setProductor] = useState(false)
    const { productores } = useSelector((state) => state.prod)
    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        contraseña: '',
        mail: '',
        cuil: '',
        genero: '',
        pais: '',
        ciudad: '',
        direccion: '',
        fecha_de_nacimiento: '',
        telefono: '',
        dni_productor: '0'
    })

    const [pass, setPass] = useState(false)

    useEffect(() => {
        const fetchProds = async () => {
            dispatch(getProdsThunk())
        }
        fetchProds();
    }, [position, setPosition])

    const handleConfirmar = (e) => {
        dispatch(loginUserThunk({ email: data.mail, password: "" }))
        dispatch(createToast('Cargando...'));
        setTimeout(() => {
            setLoading(true)
        }, 2000)
    }

    const dataHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    //Este useEffect va a servir cuando tengamos la ruta para verificar que no exista el correo en la base
    useEffect(() => {
        if (loading) {
            if (response === 'fail_email') {
                dispatch(uploadData(data));
                const registerdata = JSON.stringify(data)
                localStorage.setItem('register', registerdata)
                setPosition(2)
                setLoading(false)
                return;
            }
            if (response === 'fail_password') {
                dispatch(createToast('El correo ya se encuentra en uso'))
                setExists(true)
                setLoading(false)
                return;
            }
            dispatch(createToast('Error en el servidor, intentelo mas tarde'))
            setLoading(false)
            return;
        }
    }, [loading])


    useEffect(()=>{
        Productores_Call()
    },[])


    return (
        <section className={`flex flex-col min-w-[400px]   items-center justify-center max-[800px]:mt-[120px]  max-[400px]:p-4   ${productor && 'mt-10 max-[400px]:mt-[200px]'}`} >
            <div className='formLabel label max-[800px]:flex-col '>
                <div>
                    <input
                        name='nombre'
                        value={data.nombre}
                        onChange={(e) => dataHandler(e)}
                        className='formLabel input max-[800px]:w-full max-[800px]:mb-[.5rem]' placeholder='Nombre:' />
                </div>
                <div>
                    <input
                        name='apellido'
                        value={data.apellido}
                        onChange={(e) => dataHandler(e)}
                        className=' formLabel input max-[800px]:w-full' placeholder='Apellido:' />
                </div>
            </div>

            <div className='formLabel label w-full relative'>

                <input
                    name='contraseña'
                    value={data.contraseña}
                    onChange={(e) => dataHandler(e)}

                    type={!pass && 'password'}
                    className='formLabel input w-full' placeholder='Contraseña:' />

                <button
                    onClick={() => setPass(!pass)}
                    className='absolute ml-[90%] mt-2'>
                    {
                        !pass ?
                            <FaRegEye color='gray' size={20} />
                            :
                            <FaRegEyeSlash color='gray' size={20} />
                    }
                </button>
            </div>

            <div className='formLabel label '>
                <input
                    onChange={(e) => dataHandler(e)}
                    name='mail'
                    value={data.mail}
                    className='formLabel input w-full' placeholder='Correo electronico:' />
            </div>

            <div className='formLabel label w-full max-[800px]:flex-col '>
                <div className='w-full max-[800px]:w-full max-[800px]:mb-[.5rem]'>
                    <input
                        onChange={(e) => dataHandler(e)}
                        name='cuil'
                        value={data.cuil}
                        className='formLabel input w-full' placeholder='Cuil:' />
                </div>
                <div>

                    <select
                        name='genero'
                        defaultValue=""
                        onChange={(e) => dataHandler(e)}
                        className='py-[.3em] px-[.1em] border border-[#c7c7c7] rounded-[5px] max-[800px]:w-full max-[800px]:mb-[.5rem]'>
                        <option disabled value="">Elegi tu genero</option>
                        <option value="Male">Masculino</option>
                        <option value="Female">Femenino</option>
                        <option value="Other">Prefiero no decirlo</option>
                    </select>

                </div>
            </div>

            <div className='formLabel label max-[800px]:flex-col'>
                <div >
                    <input
                        onChange={(e) => dataHandler(e)}
                        name='pais'
                        value={data.pais}
                        className='formLabel input max-[800px]:w-full max-[800px]:mb-[.5rem]' placeholder='Pais:' />
                </div>
                <div>
                    <input
                        name='ciudad'
                        value={data.ciudad}
                        onChange={(e) => dataHandler(e)}
                        className='formLabel input max-[800px]:w-full max-[800px]:mb-[.5rem]' placeholder='Ciudad:' />
                </div>
            </div>

            <div className='formLabel label'>
                <input
                    onChange={(e) => dataHandler(e)}
                    name='direccion'
                    value={data.direccion}
                    className='formLabel input w-full' placeholder='Direccion:' />
            </div>

            <div className='formLabel label'>
                <input className='formLabel input w-full'
                    type='date'
                    onChange={(e) => dataHandler(e)}
                    name='fecha_de_nacimiento'
                    value={data.fecha_de_nacimiento}
                    placeholder='Fecha de nacimiento:' />
            </div>

            <div className='formLabel label'>
                <input
                    onChange={(e) => dataHandler(e)}
                    name='telefono'
                    value={data.telefono}
                    className='formLabel input w-full' placeholder='Telefono:' />
            </div>

            <div className='p-2 flex items-center justify-center'>
                <p className='text-sm font-light'>¿ya estas en contacto con un productor? (opcional)</p>
                <input onClick={() => setProductor(!productor)} className='ml-3' type='checkbox' />
            </div>

            {
                productor && (
                    <div className='formLabel label flex-col '>
                        <div className='w-full'>
                            <select
                                name='dni_productor'
                                defaultValue=""
                                onChange={(e) => dataHandler(e)}
                                className='w-full py-[.3em] px-[.1em] border border-[#c7c7c7] rounded-[5px] max-[800px]:w-full max-[800px]:mb-[.5rem]'>
                                <option disabled value="">Elige tu productor</option>
                                {productores ? productores?.map((p) => (
                                    <option value={p.prod_dni}>{p.prod_name + " " + p.prod_lastname}</option>
                                )) : <option disabled>No hay productores disponibles</option>}
                            </select>
                        </div>
                    </div>
                )
            }

            <div className='w-full flex items-center justify-center p-2 mt-4'>
                <button
                    onClick={() => handleConfirmar()}
                    disabled={!Object.values(data).every(e => e !== '')}
                    className='bg-primary-blue font-bold text-white py-2 px-6 rounded w-full disabled:bg-[#c7c7c7]'>Confirmar</button>
            </div>

            

            <div className='p-2'>
                <p className='text-sm font-light'>Lea nuestros <strong className='text-primary-blue font-semibold'><Link to="/terminosycondiciones">Terminos y Condiciones</Link></strong></p>
            </div>

            {exists &&
               <LoginRegister setExists={setExists} setHaveAccount={setHaveAccount}/>
            }

        </section>
    )
}

export default FormRegister