import React from 'react'
import cureLogoBlanco from '../../assets/icons/Logo_bco.png'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const FooterLanding = () => {
  return (
    <footer className='w-full bg-primary-blue text-white h-[30vh] flex items-center justify-around'>
        <div className='w-[300px]'> 
            <img alt='logo_blanco' src={cureLogoBlanco}/>
        </div>
        <article className='w-[600px] flex flex-col items-center justify-center'>
    <h4 className="text-2xl  py-1">
      Tu alternativa <strong>accesible</strong> para una 
    </h4>
    <h4 className='text-2xl py-1'>
    cobertura <strong>integral de salud</strong> 
    </h4>
    </article>
    <article className='p-2 flex flex-col '>
        <h4 className='p-1'>Whatsapp</h4>
        <h4 className='p-1'>contact@curemd.io</h4>
        <div className='p-1 flex items-center justify-start'>
            <FaInstagram  className='ml-1' size={25}/>
            <FaFacebookF className='ml-1'  size={25}/>
            <FaTwitter className='ml-1'  size={25}/>
            <FaLinkedin className='ml-1'  size={25}/>

        </div>
    </article>
    </footer>
  )
}

export default FooterLanding