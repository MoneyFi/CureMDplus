import React from 'react'
import { AiOutlineProduct } from "react-icons/ai";
import { FaUsers } from 'react-icons/fa';
import { MdMoneyOff } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

const AdminOptions = ({ open, setOpen }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const logout = () => {
    navigate('/')
  }

  return (
    <>
      {open && (
        <div className='absolute z-50 flex flex-col items-center justify-around px-4 py-3 bg-white rounded-md shadow-lg top-20 right-5'>
          <section className='p-2 w-full'>
            <button onClick={() => {navigate('transfers' + location.search); setOpen(!open)}} className={`flex items-center justify-start w-full py-2 px-4 mb-2 font-bold transition-colors hover:shadow-lg ${location.pathname === '/admin/transfers' ? 'text-white rounded-[10px] bg-primary-blue' : 'text-[#5E5E5E] rounded-[20px]'}`}><MdMoneyOff className='mr-2' size={24} /> Transferencias</button>
            <button onClick={() => {navigate('users' + location.search); setOpen(!open)}} className={`flex items-center justify-start w-full py-2 px-4 mb-2 font-bold transition-colors hover:shadow-lg ${location.pathname === '/admin/users' ? 'text-white rounded-[10px] bg-primary-blue' : 'text-[#5E5E5E] rounded-[20px]'}`}><FaUsers className='mr-2' size={24} /> Usuarios</button>
            <a className='flex items-center justify-start w-full  py-2 px-4 mb-2 font-bold text-[#5E5E5E] rounded-[20px] cursor-not-allowed'><AiOutlineProduct className='mr-2' size={24} /> Coberturas(Prox.)</a>
          </section>

          <section className='w-full flex items-center p-2'>
            <button
              onClick={() => logout()}
              className='w-full bg-primary-blue py-2 rounded-[20px] font-bold text-white text-sm'>Salir</button>
          </section>
        </div>
      )}
      <div className={`w-full h-[70vh] flex flex-col items-start justify-around max-[1000px]:hidden`}>
        <section className='p-2 w-full'>
          <button onClick={() => navigate('transfers' + location.search)} className={`flex items-center justify-start w-full py-2 px-4 mb-2 font-bold transition-colors hover:shadow-lg ${location.pathname === '/admin/transfers' ? 'text-white rounded-[10px] bg-primary-blue' : 'text-[#5E5E5E] rounded-[20px]'}`}><MdMoneyOff className='mr-2' size={24} /> Transferencias</button>
          <button onClick={() => navigate('users' + location.search)} className={`flex items-center justify-start w-full py-2 px-4 mb-2 font-bold transition-colors hover:shadow-lg ${location.pathname === '/admin/users' ? 'text-white rounded-[10px] bg-primary-blue' : 'text-[#5E5E5E] rounded-[20px]'}`}><FaUsers className='mr-2' size={24} /> Usuarios</button>
          <a className='flex items-center justify-start w-full  py-2 px-4 mb-2 font-bold text-[#5E5E5E] rounded-[20px] cursor-not-allowed'><AiOutlineProduct className='mr-2' size={24} /> Coberturas(Prox.)</a>
        </section>

        <section className='w-full flex items-center p-2'>
          <button
            onClick={() => logout()}
            className='w-full bg-primary-blue py-2 rounded-[20px] font-bold text-white text-sm'>Salir</button>
        </section>
      </div>
    </>
  )
}

export default AdminOptions;