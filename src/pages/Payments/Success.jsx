import React from 'react'
import success from '../../assets/icons/success.png'
import { Link } from 'react-router-dom'


const Success = () => {
  return (
    <article className='w-full flex items-center justify-center flex-col'>
            <div className='w-[250px]'>
                <img src={success} alt='success'/>
            </div>
            <div className='w-full flex items-center justify-center flex-col p-4'>
                <h3 className='text-3xl font-bold p-2'>¡Pago exitoso!</h3>
                <p className='font-light p-4'>Presione continuar para ir a su cuenta.</p>
                <button className='px-12 py-3 bg-primary-blue font-bold text-white rounded-[20px]'>
                  <Link to="/myaccount">
                    Continuar
                  </Link>
                </button>
            </div>
        </article>
  )
}

export default Success