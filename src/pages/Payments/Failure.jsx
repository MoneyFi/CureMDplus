import React from 'react'
import reject from '../../assets/icons/rejected.png'
import { Link } from 'react-router-dom'

const Failure = () => {
  return (
    <article className='w-full flex items-center justify-center flex-col'>
            <div className='w-[250px]'>
                <img src={reject} alt='success'/>
            </div>
            <div className='w-full flex items-center justify-center flex-col p-4'>
                <h3 className='text-3xl font-bold p-2'>Oh, algo salio mal...</h3>
                <p className='font-light p-4 text-center'>Por favor, intente nuevamente mas tarde, o comuniquese con su proveedor para continuar.</p>
                <button className='px-12 py-3 bg-[#E8193E] font-bold text-white rounded-[20px]'>
                  <Link to="/payment">
                    Intentar nuevamente
                  </Link>
                </button>
            </div>
        </article>
  )
}

export default Failure