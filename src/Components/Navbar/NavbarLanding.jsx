import React, { useEffect, useState } from 'react'
import cureLogo from '../../assets/icons/Logo_Azul.png'
import cureLogoBco from '../../assets/icons/Logo_bco.png'
import { TbMenu } from "react-icons/tb";

const NavbarLanding = () => {
    const [isFixed, setIsFixed] = useState(false)
    const glass = "bg-primary-blue text-white"

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
    <header className={!isFixed? 'flex items-center justify-between w-full p-3 fixed z-20 text-primary-blue ' : `${glass} flex items-center justify-between w-full fixed p-3 z-20`}>
        
        {
            !isFixed ? 
            (
                <div className='w-[250px] max-[500px]:w-[200px]'>
            <img alt='logo' src={cureLogo}/>
            </div>
            )
            :
           ( <div className='w-[250px] max-[500px]:w-[200px]'>
            <img alt='logo' src={cureLogoBco}/>
        </div>
            )
        }
        <div className='min-[800px]:hidden flex items-center justify-center p-2'>
        <TbMenu size={25} />
        </div>
        <div className='max-[800px]:hidden'>
            <a className='px-3 py-1 font-semibold text-xl'>Productos</a>
            <a className='px-3 py-1 font-semibold text-xl'>Sobre nosotros</a>
            <a className='px-3 py-1 font-semibold text-xl'>Contacto</a>
        </div>
    </header>
  )
}

export default NavbarLanding