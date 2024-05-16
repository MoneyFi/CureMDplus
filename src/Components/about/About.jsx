import React from 'react'
import AboutCards from './AboutCards'
import logo from '../../assets/icons/Logo_Azul.png'
import { ImQuotesRight } from "react-icons/im";
import { BsImageFill } from "react-icons/bs";
import Carrusel from './Carrusel';
import logoBco from '../../assets/icons/Logo_bco.png'





const About = () => {
    
  return (
    <div className='layout background flex items-center justify-between flex-col ' id='testimonials'>

        <div className='bg-white rounded w-[80%] h-[200px]  shadow  relative mt-10 flex items-center justify-between overflow-hidden max-[900px]:flex-col max-[800px]:min-h-[500px] max-[500px]:w-[98%]'>
        <div className='w-[300px] h-[280px] bg-primary-blue flex items-center justify-center max-[800px]:w-full '>
            <img src={logoBco} alt="" className='w-[220px]' />
        </div>

        <div className='w-[70%] flex flex-col p-4 max-[800px]:w-full'>
            <h4 className='font-semibold text-primary-blue text-md'>Sobre nosotros</h4>
        <div className='py-2'>
                <ImQuotesRight  size={20} color='#283E94'/>
                </div>
            <p className='text-sm font-light'>Somos un equipo de profesionales multidisciplinares dedicados al campo de la salud y la tecnología con más de 10 años de experiencia. En CureMD+, nuestra misión es poder democratizar la salud de calidad y llevarla al mayor número de personas</p>
            <p className='bg-white p-4 rounded-[15px] self-end font-semibold not-italic  text-primary-blue text-sm'>
                Equipo de CureMD
            </p>
            </div>
        </div>
        <Carrusel/>
        <div className='w-full h-[150px] bg-white flex items-center justify-end px-4 max-[700px]:h-[120px]'>
           
        </div>
    </div>
  )
}

export default About