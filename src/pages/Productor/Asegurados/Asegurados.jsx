import React, { useEffect, useState } from 'react'
import { getClientes } from '../../../API/Productores/Productores'
import ClientesCard from './Clientes/ClientesCard'

const Asegurados = () => {
  const [data,setData]= useState(true)
  const id_productor_local = localStorage.getItem('productor')
  const productor_parse = JSON.parse(id_productor_local)


  useEffect(()=>{
    getClientes(productor_parse.code)
  },[productor_parse])


  return (
    <div className='layout background flex items-center  justify-start flex-col p-4'>

      <section className='flex w-full items-start justify-center flex-col'>
      <h3 className='text-2xl font-bold text-primary-blue p-4'>Asegurados</h3>

      {/* <div className='flex items-center justify-center p-2'>
      <div className='p-2 mr-2'>
        <input className='formLabel search' placeholder='Nombre, DNI, Poliza...'/>
      </div>

      <div className='p-2'>
        <p className='text-sm font-bold mb-2'>Filtro:</p>
        <span className='w-auto px-3 py-1 bg-primary-blue font-bold text-white rounded'>Maximo cheng x</span>
      </div>
      </div> */}

      </section>

      <section className=' w-full h-[85vh] flex items-center justify-center' >

        {
          data?
          (
          <ul className='w-full h-full overflow-y-scroll p-2  '>
            <ClientesCard nombre='Nahuel Cempellin' dni='38831011' poliza='111111' vencimiento='02/07/2024' estado='Activo' plan='Plan escencial' />
            <ClientesCard nombre='Rodrigo Casca' dni='22222222' vencimiento='03/08/2024' plan='Plan Pro' estado='Inactivo' poliza='222222'/>

          </ul>
          )
          :
          <h3>No tienes clientes aun...</h3>
        }
      </section>
    </div>
  )
}

export default Asegurados