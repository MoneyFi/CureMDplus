import React, { useEffect } from 'react'

const FormRegister = ({position, setPosition}) => {

    useEffect(()=>{

    },[position,setPosition])

const handleConfirmar = (e) =>{
    setPosition(e)
}


  return (
    <section className='flex flex-col  items-center justify-center' >
                <div className='formLabel label'>
                    <div>
                    <input className='formLabel input' placeholder='Nombre:'/>
                    </div>
                    <div>
                    <input className=' formLabel input' placeholder='Apellido:'/>
                    </div>
                </div>

                <div className='formLabel label w-full'>
                    
                    <input className='formLabel input w-full' placeholder='Contraseña:'/>
                    
                </div>

                <div className='formLabel label '>
                    <input className='formLabel input w-full' placeholder='Correo electronico:'/>
                </div>

                <div className='formLabel label w-full '>
                    <div className='w-full'>
                    <input className='formLabel input w-full' placeholder='Cuil:'/>
                    </div>
                    <div>

                    <select className='py-[.3em] px-[.1em] border border-[#c7c7c7] rounded-[5px]'>
                    <option disabled value="">Elegi tu genero</option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                            <option value="other">Prefiero no decirlo</option>    
                    </select>    
                    
                    </div>
                </div>

                <div className='formLabel label'>
                    <div>
                    <input className='formLabel input' placeholder='Pais:'/>
                    </div>
                    <div>
                    <input className='formLabel input' placeholder='Ciudad:'/>
                    </div>
                </div>

                <div className='formLabel label'>
                    <input className='formLabel input w-full' placeholder='Direccion:'/>
                </div>

                <div className='formLabel label'>
                    <input className='formLabel input w-full' 
                    type='date'
                    placeholder='Fecha de nacimiento:'/>
                </div>

                <div className='formLabel label'>
                    <input className='formLabel input w-full' placeholder='Telefono:'/>
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