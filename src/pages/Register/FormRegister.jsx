import React, { useEffect, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk, registerUserThunk } from '../../features/User/userThunks';
import { createToast } from '../../features/toastSlice/toastSlice';
import { Link } from 'react-router-dom';
import { uploadData } from '../../features/User/userSlice';

const FormRegister = ({ position, setPosition }) => {

    const dispatch = useDispatch()
    const { response } = useSelector((state) => state.user)
    const [loading, setLoading] = useState(false)
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
        telefono: ''
    })

    const [pass, setPass] = useState(false)

    useEffect(() => {

    }, [position, setPosition])

    const handleConfirmar = (e) => {
        dispatch(uploadData(data));
        dispatch(createToast('Cargando...'));
        setPosition(2)
    }

    const dataHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    //Este useEffect va a servir cuando tengamos la ruta para verificar que no exista el correo en la base
    // useEffect(() => {
    //     if (loading) {
    //         if (response === 'success') {
    //             dispatch(loginUserThunk({ email: data.mail, password: data.contraseña }))
    //             setPosition(2)
    //             setLoading(false)
    //             return;
    //         }
    //         if (response === 'repeat') {
    //             dispatch(createToast('El correo ya se encuentra en uso'))
    //             setLoading(false)
    //             return;
    //         }
    //         if (response === 'failure') {
    //             dispatch(createToast('Error en el servidor, intentelo mas tarde'))
    //             setLoading(false)
    //             return;
    //         }
    //     }
    // }, [loading])



    return (
        <section className='flex flex-col w-[400px]  items-center justify-center max-[800px]:mt-[120px] max-[400px]:w-[340px] ' >
            <div className='formLabel label max-[800px]:flex-col'>
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
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Prefiero no decirlo</option>
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

            <div className='p-2'>
                <p className='text-sm font-light'>¿ya tienes cuenta? <strong className='text-primary-blue font-semibold'>Inicia sesion</strong></p>
            </div>

            <div className='w-full flex items-center justify-center p-2'>
                <button
                    onClick={() => handleConfirmar()}
                    disabled={!Object.values(data).every(e => e !== '')}
                    className='bg-primary-blue font-bold text-white py-2 px-6 rounded w-full disabled:bg-[#c7c7c7]'>Confirmar</button>
            </div>

            <div className='p-2'>
                <p className='text-sm font-light'>Lea nuestros <strong className='text-primary-blue font-semibold'><Link to="/terminosycondiciones">Terminos y Condiciones</Link></strong></p>
            </div>

        </section>
    )
}

export default FormRegister