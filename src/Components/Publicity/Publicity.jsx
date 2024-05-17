import React from 'react'
// import app from '../../assets/icons/cureMDmobile.png'
import app from '../../assets/icons/Logo_bco.png'
import video from '../../assets/app-video.mov'
import gstore from '../../assets/icons/google-store.png'
import istore from '../../assets/icons/ios-store.png'

const Publicity = () => {
  return (
    <div id='publicity' className='w-full min-h-[100vh] flex justify-center items-center flex-wrap p-12 gap-0 md:gap-4 '>
      <video src={video} autoPlay loop muted className='hidden md:block md:w-[260px]' id='mobile'></video>
      {/* <img src={mobile} alt="" className='hidden md:w-[250px] md:block' id='mobile' /> */}
      <div className='w-[500px] px-4 flex flex-col md:flex justify-center items-center gap-4'>
        <img src={app} alt="Hola" className='w-full md:w-2/4 mb-4' />
        <h2 className='text-white text-2xl  font-sans font-light mb-4 md:mb-6 text-center'>App de <b className='font-bold'>Telemedicina</b></h2>
        <p className='text-white font-sans font-light md:max-w text-center'>Planes accesibles, atención personalizada y tecnología de vanguardia para cuidar tu salud.</p>
        <span className='text-white font-sans font-bold text-center'>Descarga la App en:</span>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-3'>
          <div className='flex justify-center bg-white rounded-[10px] w-2/3 md:w-2/5 '>
            <a href="https://play.google.com/store/apps/details?id=com.curemd2" target="_blank" rel="noopener noreferrer">
              <img src={gstore} alt="Google Play" />
            </a>
          </div>
          <div className='flex justify-center bg-white rounded-[10px] w-2/3 md:w-2/5 '>
            <a href="https://apps.apple.com/ar/app/curemd/id6450016400" target="_blank" rel="noopener noreferrer">
              <img src={istore} alt="App Store" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Publicity