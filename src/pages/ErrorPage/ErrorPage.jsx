import React, { useEffect } from 'react'
import iconCureMDPlus from '../../assets/icons/Logo_Azul.png'

const ErrorPage = () => {
    useEffect (() => {
        setTimeout(() => {
            window.location.href = '/'
        }, 3000)
    },[])
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-5 bg-white px-5'>
      <img src={iconCureMDPlus} alt="" width={250} />
      <span className='text-3xl font-bold font-varela text-secondary-blue'>Error 404</span>
      <p className='text-lg text-[#838080] font-sans'>Ruta no encontrada</p>
      <span className='text-sm animate-pulse text-[#686767]'>Volviendo a la página principal...</span>
    </div>
  )
}

export default ErrorPage;