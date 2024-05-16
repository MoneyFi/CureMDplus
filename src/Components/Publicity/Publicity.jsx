import React from 'react'
import mobile from '../../assets/icons/CureMD-Pantallas.png'
import app from '../../assets/icons/cureMDmobile.png'

const Publicity = () => {
  return (
    <div id='publicity' className='w-full min-h-[100vh] flex justify-center items-center flex-wrap p-12 gap-0 md:gap-4'>
      <img src={mobile} alt="" className='hidden md:w-[250px] md:block' id='mobile' />
      <div className='md:w-3/4 px-4 flex flex-col md:flex justify-center items-center gap-4'>
        <img src={app} alt="Hola" className='w-full md:w-2/4 mb-4' />
        <h2 className='text-secondary-blue text-2xl md:text-6xl font-sans font-light mb-4 md:mb-6 text-center'>App de <b className='font-bold'>Telemedicina</b></h2>
        <p className='text-secondary-blue font-sans font-light text-lg md:text-2xl md:max-w text-center'>Planes accesibles, atención personalizada y tecnología de vanguardia para cuidar tu salud.</p>
      </div>
    </div>
  )
}

export default Publicity