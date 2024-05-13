import React from 'react'
import mobile from '../../assets/icons/CureMD-Pantallas.png'
import app from '../../assets/icons/cureMDmobile.png'

const Publicity = () => {
  return (
    <div id='landing' className='w-full min-h-[100vh] flex justify-center items-center flex-wrap p-[3em]'>
      <div className='w-[100%] md:w-1/2 lg:w-1/3 px-4'>
        <img src={mobile} alt="" className='w-full md:max-w-xs lg:max-w-sm mx-auto mb-8 md:mb-0' id='mobile' />
      </div>
      <div className='w-full md:w-1/2 lg:w-2/3 px-4 flex flex-col justify-center items-center'>
        <img src={app} alt="Hola" className='w-full md:max-w-md lg:max-w-lg mx-auto mb-8' />
        <h2 className='text-secondary-blue text-[3em] font-sans font-light mb-4 md:mb-6 text-center'>App de <b className='font-bold'>Telemedicina</b></h2>
        <p className='text-secondary-blue font-sans font-light text-[1.5em] md:text-[2em] w-full md:max-w-lg text-center'>Planes accesibles, atención personalizada y tecnología de vanguardia para cuidar tu salud.</p>
      </div>
    </div>
  )
}

export default Publicity