import React, { useEffect, useState } from 'react'
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";

const FormRegister = ({position, setPosition}) => {

    const[data, setData]= useState({
        nombre: '',
        apellido: '',
        contraseña:'',
        mail: '',
        cuil:'',
        genero:'',
        pais:'',
        ciudad:'',
        direccion:'',
        fecha_de_nacimiento:'',
        telefono:''
    })

    const [pass, setPass]= useState(false)


    useEffect(()=>{

    },[position,setPosition])

    const handleConfirmar = (e) =>{
    setPosition(e)
    }

    const dataHandler= (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        console.log(data)
    },[data])



  return (
    <section className='flex flex-col  items-center justify-center' >
                <div className='formLabel label'>
                    <div>
                    <input 
                    name='nombre'
                    value={data.nombre}
                    onChange={(e)=>dataHandler(e)}
                    className='formLabel input' placeholder='Nombre:'/>
                    </div>
                    <div>
                    <input 
                    name='apellido'
                    value={data.apellido}
                    onChange={(e)=>dataHandler(e)}
                    className=' formLabel input' placeholder='Apellido:'/>
                    </div>
                </div>

                <div className='formLabel label w-full relative'>
                    
                    <input 
                    name='contraseña'
                    value={data.contraseña}
                    onChange={(e)=>dataHandler(e)}

                    type={!pass && 'password'}
                    className='formLabel input w-full' placeholder='Contraseña:'/>
                    
                    <button 
                    onClick={()=>setPass(!pass)}
                    className='absolute ml-[90%] mt-2'>
                        {
                           ! pass ? 
                            <FaRegEye color='gray' size={20} />
                            :
                            <FaRegEyeSlash color='gray' size={20}  />
                        }
                    </button>
                </div>

                <div className='formLabel label '>
                    <input 
                    onChange={(e)=>dataHandler(e)}
                    name='mail'
                    value={data.mail}
                    className='formLabel input w-full' placeholder='Correo electronico:'/>
                </div>

                <div className='formLabel label w-full '>
                    <div className='w-full'>
                    <input 
                    onChange={(e)=>dataHandler(e)}
                    name='cuil'
                    value={data.cuil}
                    className='formLabel input w-full' placeholder='Cuil:'/>
                    </div>
                    <div>

                    <select 
                    name='genero'
                    onChange={(e)=>dataHandler(e)}
                    className='py-[.3em] px-[.1em] border border-[#c7c7c7] rounded-[5px]'>
                    <option disabled value="">Elegi tu genero</option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                            <option value="other">Prefiero no decirlo</option>    
                    </select>    
                    
                    </div>
                </div>

                <div className='formLabel label'>
                    <div>
                    <input 
                    onChange={(e)=>dataHandler(e)}
                    name='pais'
                    value={data.pais}
                    className='formLabel input' placeholder='Pais:'/>
                    </div>
                    <div>
                    <input 
                    name='ciudad'
                    value={data.ciudad}
                    onChange={(e)=>dataHandler(e)}
                    className='formLabel input' placeholder='Ciudad:'/>
                    </div>
                </div>

                <div className='formLabel label'>
                    <input 
                    onChange={(e)=>dataHandler(e)}
                    name='direccion'
                    value={data.direccion}
                    className='formLabel input w-full' placeholder='Direccion:'/>
                </div>

                <div className='formLabel label'>
                    <input className='formLabel input w-full' 
                    type='date'
                    onChange={(e)=>dataHandler(e)}
                    name='fecha_de_nacimiento'
                    value={data.fecha_de_nacimiento}
                    placeholder='Fecha de nacimiento:'/>
                </div>

                <div className='formLabel label'>
                    <input 
                    onChange={(e)=>dataHandler(e)}
                    name='telefono'
                    value={data.telefono}
                    className='formLabel input w-full' placeholder='Telefono:'/>
                </div>

                <div className='p-2'>
                    <p className='text-sm font-light'>¿ya tienes cuenta? <strong className='text-primary-blue font-semibold'>Inicia sesion</strong></p>
                </div>

               <div className='w-full flex items-center justify-center p-2'>
                <button 
                onClick={()=>handleConfirmar()}
                className='bg-primary-blue font-bold text-white py-2 px-6 rounded w-full'>Confirmar</button>
               </div>

               <div className='p-2'>
                    <p className='text-sm font-light'>Lea nuestros <strong className='text-primary-blue font-semibold'>Terminos y condiciones</strong></p>
                </div>

            </section>
  )
}

export default FormRegister