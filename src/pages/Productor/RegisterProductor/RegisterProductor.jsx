import React, { useState } from 'react'
import logo from '../../../assets/icons/Logo_Azul.png'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const RegisterProductor = () => {
    const [pass, setPass] = useState(false)
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
        dni_productor: '0',
        capt: ''
    })

    
    const dataHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


  return (
    <div className='layout background flex items-center justify-center flex-col' 
    >
        <div className='w-[200px] '>
                <img src={logo} alt='logo' />
            </div>

            <section className={`flex flex-col min-w-[400px] items-center justify-center   max-[400px]:p-4 `} >
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
                    className='formLabel input w-full' placeholder='Correo electrónico:' />
            </div>

            <div className='formLabel label'>
                <input
                    onChange={(e) => dataHandler(e)}
                    name='telefono'
                    value={data.telefono}
                    className='formLabel input w-full' placeholder='Teléfono:' />
            </div>

            <div className='formLabel label'>
                            <select
                                name='dni_productor'
                                defaultValue=""
                                onChange={(e) => dataHandler(e)}
                                className='w-full py-[.3em] px-[.1em] border border-[#c7c7c7] rounded-[5px] max-[800px]:w-full max-[800px]:mb-[.5rem] text-center'>
                                <option disabled value="">Broker</option>
                            </select>
                        </div>


                <div className='w-full flex items-center justify-center p-2 mt-4'>
                <button
                    onClick={() => handleConfirmar()}
                    disabled={!Object.values(data).every(e => e !== '')}
                    className='bg-primary-blue font-bold text-white py-2 px-6 rounded w-full disabled:bg-[#c7c7c7]'>Registrarse</button>
            </div>
            </section>     
    </div>
  )
}

export default RegisterProductor