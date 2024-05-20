import React from 'react'
import cureLogoBlanco from '../../assets/icons/Logo_bco.png'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const FooterLanding = () => {
  return (
    <footer id='footer' className='w-full bg-primary-blue text-white min-h-[30vh] flex flex-col items-center gap-5 justify-center px-5 md:justify-between md:flex-row md:px-10'>
      <article className='w-screen flex flex-col md:flex-row items-center justify-around md:justify-center gap-2'>
        <div className='w-[170px] md:w-[200px]'>
          <img alt='logo_blanco' src={cureLogoBlanco} className='w-full' />
        </div>
        <h4 className="text-sm md:text-xl w-[450px]  text-center">
          Tu alternativa <strong>accesible</strong> para una cobertura <strong>integral de salud</strong>
        </h4>
      </article>
      <article className='flex justify-between md:justify-end md:gap-5 items-start w-full md:w-2/4'>
        <div className='flex flex-col items-center justify-start'>
          <span className='font-bold text-[#838080] mb-1'>Contacto</span>
          <p className='text-sm'>(+54) 9 11 1234-5678</p>
          <p className='text-sm'>contact@curemd.io</p>
        </div>
        <div className='flex flex-col items-center justify-start gap-2'>
          <span className='font-bold text-[#838080]'>Siguenos</span>
          <div className='flex items-center justify-center'>
            <FaInstagram className='ml-1' size={25} />
            <FaFacebookF className='ml-1' size={25} />
            <FaTwitter className='ml-1' size={25} />
            <FaLinkedin className='ml-1' size={25} />
          </div>
        </div>
      </article>
    </footer>
  )
}

export default FooterLanding