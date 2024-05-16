import React, { useEffect, useState } from 'react'
import cureLogo from '../../assets/icons/Logo_Azul.png'
import cureLogoBco from '../../assets/icons/Logo_bco.png'
import { TbMenu } from "react-icons/tb";
import { Link } from 'react-router-dom'
import NavbarLandingResponsive from './NavbarLandingResponsive';

const NavbarLanding = () => {
    const [isFixed, setIsFixed] = useState(false)
    const [open,setOpen]=useState(false)
    const glass = "w-full bg-[#283E94]  bg-clip-padding backdrop-filter backdrop-blur-[50%] bg-opacity-70  shadow text-white"

    useEffect(()=>{
        const handleScroll = () => {
          // Verifica la posición actual del scroll
          const scrollPosition = window.scrollY;
      
          // Establece si la barra de navegación debe estar fija o no
          setIsFixed(scrollPosition > 80); // Puedes ajustar el valor según tus necesidades
        };
      
        // Agrega un event listener para manejar el scroll
        window.addEventListener('scroll', handleScroll);
      
        
        // Limpia el event listener cuando el componente se desmonta
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      
      
      },[])


  return (
    <header className={!isFixed? 'flex items-center justify-between w-full p-3 fixed z-20 text-white ' : `${glass} flex items-center justify-between w-full fixed p-3 z-20`}>
        
       
           <div className='w-[220px] max-[500px]:w-[200px]'>
            <img alt='logo' src={cureLogoBco}/>
        </div>
            
        <button 
        onClick={()=>setOpen(!open)}
        className='min-[800px]:hidden flex items-center justify-center p-2 relative'>
        <TbMenu size={25} />

        {
          open === true?
        (<div className='absolute'>
          <NavbarLandingResponsive open={open} setOpen={setOpen}/>
        </div>)
        :
        null
        }
        </button>
        <div className='max-[800px]:hidden'>
            <a  href='#products'  className='px-3 py-1 font-regular text-md'>Productos</a>
            <a  href='#publicity'  className='px-3 py-1 font-regular text-md'>Sobre nosotros</a>
            <a  href='#footer'  className='px-3 py-1 font-regular text-md'>Contacto</a>
            <Link to='/faqs'  className='px-3 py-1 font-regular text-md'>FAQs</Link>
        </div>

        <div className='max-[800px]:hidden'>
            <a  href='#products'  className='px-3 py-1 font-regular text-md'>Ingresar</a>
            <a  href='#publicity'  className={`px-3 py-1 font-regular text-md rounded bg-primary-skyblue text-white`}>Contactanos</a>
          
        </div>
    </header>
  )
}

export default NavbarLanding