import React from 'react'
import mobile from '../../assets/icons/CureMD-Pantallas.png'
import app from '../../assets/icons/cureMDmobile.png'

const Publicity = () => {
  return (
    <div id='landing' className='w-[100vw] h-[100vh] flex justify-around items-center flex-wrap'>
      <div>
       <img src={mobile} alt="" width={300} id='mobile' />
      </div>
      <div className='flex flex-col gap-5 justify-center items-center'>
        <img src={app} alt="Hola" width={600} />
        <h2 className='text-secondary-blue text-[3em] font-sans font-light'>App de <b className='font-bold'>Telemedicina</b></h2>
        <p className='text-secondary-blue font-sans font-light text-[2em] w-[20em] text-center'>Planes accesibles, atención personalizada y tecnología de vanguardia para cuidar tu salud.</p>
      </div>
    </div>
  )
}

export default Publicity
