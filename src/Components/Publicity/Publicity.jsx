import React from 'react'
import app from '../../assets/icons/app_telemedicina.png'
import video from '../../assets/app-video.mov'
import gstore from '../../assets/icons/google-store.png'
import istore from '../../assets/icons/ios-store.png'
import { Link } from 'react-router-dom'

const Publicity = () => {
  return (
    <div id='publicity' className='w-full min-h-[100vh] flex justify-center items-center flex-wrap p-12 gap-0 md:gap-4 '>
      <video src={video} autoPlay loop muted className='hidden md:block md:w-[260px]' id='mobile'></video>
      <div className='w-[500px] px-4 flex flex-col md:flex justify-center items-center gap-4'>
        <img src={app} alt="App Telemedicina" className='w-full md:w-3/4 mb-4' />
        <Link to="/telemedicina" className='px-4 py-3 mb:px-6 mb:py-4 hover:bg-secondary-blue rounded-xl shadow-xl hover:text-white text-secondary-blue bg-white transition-colors'>
          <h2 className='text-xl mb:text-2xl  font-sans font-light text-center'>App de <b className='font-bold'>Telemedicina</b></h2>
        </Link>
        <p className='text-white font-sans font-light md:max-w text-center'>Nuestro enfoque integral combina cobertura para enfermedades complejas cono la <strong>comodidad y eficiencia de la telemedicina,</strong>  asegurando que nuestros afiliados reciban la mejor atencion posible sin importar donde se necuentren.</p>
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