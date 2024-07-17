import React from 'react'
import { AiOutlineProduct } from "react-icons/ai";
import { FaUsers } from 'react-icons/fa';
import { MdMoneyOff } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AdminOptions = () => {
  const navigate = useNavigate()
  const logout = ()=>{
    navigate('/')
  }

  return (
    <div className='w-full h-[70vh] flex flex-col items-start justify-around max-[1000px]:hidden'>
          <section className='p-2 w-full'>
            <a className='flex items-center justify-start w-full border text-white rounded-[10px]  py-2 px-4 mb-2 font-bold bg-primary-blue'><MdMoneyOff className='mr-2' size={24}/> Transferencias</a>
            <a className='flex items-center justify-start w-full  py-2 px-4 mb-2 font-bold text-[#5E5E5E] rounded-[20px] '><FaUsers className='mr-2' size={24}/> Usuarios(Prox.)</a>
            <a className='flex items-center justify-start w-full  py-2 px-4 mb-2 font-bold text-[#5E5E5E] rounded-[20px]'><AiOutlineProduct className='mr-2' size={24}/> Coberturas(Prox.)</a>
        </section>
       
        <section className='w-full flex items-center p-2'>
            <button 
            onClick={()=>logout()}
            className='w-full bg-primary-blue py-2 rounded-[20px] font-bold text-white text-sm'>Salir</button>
        </section>
    </div>
  )
}

export default AdminOptions;