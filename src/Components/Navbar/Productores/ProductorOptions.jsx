import React from 'react'
import { AiOutlineProduct } from "react-icons/ai";
import { FaUsers } from 'react-icons/fa';
import { MdMoneyOff } from 'react-icons/md';
import { IoSearchOutline } from 'react-icons/io5';

const ProductorOptions = () => {
  return (
    <div className='w-full h-[70vh] flex flex-col items-start justify-around max-[1000px]:hidden'>
          <section className='p-2 w-full'>
            <a className='flex items-center justify-start w-full border py-2 px-4 mb-2 font-bold text-white rounded-[10px] bg-primary-blue '><FaUsers className='mr-2' size={24}/> Asegurados</a>
            <a className='flex items-center justify-start w-full  py-2 px-4 mb-2 font-bold text-[#5E5E5E] rounded-[20px]'><AiOutlineProduct className='mr-2' size={24}/> Productos</a>
            <a className='flex items-center justify-start w-full  py-2 px-4 mb-2 font-bold text-[#5E5E5E] rounded-[20px]'><MdMoneyOff className='mr-2' size={24}/> Lista de mora</a>
        </section>

        <section className='flex items-center flex-col  p-2'>
            <p className='font-bold text-sm'>Busquedas recientes</p>
            <p className='flex items-center justify-start w-full  py-2 px-4 mb-2 font-regular text-sm rounded-[20px]' ><IoSearchOutline className='mr-1'/> Maximo chen</p>
        </section>

       
        <section className='w-full flex items-center p-2'>
            <button className='w-full bg-primary-blue py-2 rounded-[20px] font-bold text-white text-sm'>Cerrar sesion</button>
        </section>
    </div>
  )
}

export default ProductorOptions