import React from 'react'
import mobile from '../../assets/icons/CureMD-Pantallas.png'
import app from '../../assets/icons/Logo_bco.png'
import appstore from '../../assets/icons/appstore.png'
import istore from '../../assets/icons/istore.png'


const Publicity = () => {
  return (
    <div id='publicity' className='w-full min-h-[100vh] flex justify-center items-center flex-wrap p-12 gap-0 md:gap-4 '>
      <img src={mobile} alt="" className='hidden md:w-[250px] md:block' id='mobile' />
      <div className='w-[500px] px-4 flex flex-col md:flex justify-center items-center gap-4'>
        <img src={app} alt="Hola" className='w-full md:w-2/4 mb-4' />
        <h2 className='text-white text-2xl  font-sans font-light mb-4 md:mb-6 text-center'>App de <b className='font-bold'>Telemedicina</b></h2>
        <p className='text-white font-sans font-light md:max-w text-center'>Planes accesibles, atención personalizada y tecnología de vanguardia para cuidar tu salud.</p>

        <div className='flex items-center justify-center  rounded-xl p-1'>
          <button className='w-[130px] flex items-center justify-center mr-2 bg-white rounded-xl p-1'>
            <img src={appstore} alt='appstore'/>
          </button>
          <button className='w-[130px] flex items-center justify-center bg-white rounded-xl p-1'>
            <img src={istore} alt='istore'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Publicity