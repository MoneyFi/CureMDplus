import React, { useEffect } from 'react'
import logo from '../../../assets/icons/Logo_Azul.png'
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import { Link } from 'react-router-dom';

const SuccessProductor = () => {

    useEffect(() => {
        const interval = setInterval(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

  return (
    <section className='layout background flex items-center justify-center flex-col'>
         <div className='w-[200px]'>
                <img src={logo} alt='logo' />
         </div>
         <div className='p-4 text-center'>
        <h3 className=''><strong className='font-bold text-primary-blue'>¡Felicidades!</strong> Tu cuenta ha sido creada con exito.</h3>
        <h3>Por favor, ingresa para acceder a tu plataforma.</h3>
         </div>
        <div>
            <Link to={'/loginproductor'} className='bg-primary-blue font-bold text-white py-2 px-6 rounded '>Ingresar</Link>
        </div>
    </section>
  )
}

export default SuccessProductor