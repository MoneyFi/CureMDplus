import React from 'react'

const ClientesCard = ({nombre, dni, poliza, vencimiento, estado, plan}) => {
  return (
    <li className='w-full p-4 bg-[#d9d9d9] rounded flex items-center justify-around text-sm mb-2'>
              <div className='flex flex-col items-start'>
              <p className='font-bold text-primary-blue'>{nombre} </p>
              <p className=''>{plan}</p>
              </div>

              <div>
              <p className='font-bold text-primary-blue'>DNI:</p>
              <p>{dni}</p>
              </div>
              
              <div >
              <p className='font-bold text-primary-blue'>Poliza:</p>
              <p>{poliza}</p>
              </div>

              <div>
              <p className='font-bold text-primary-blue'>Fecha de vencimiento:</p>
              <p>{vencimiento}</p>
              </div>

              <p className={`font-bold ${estado === 'Activo' ? 'text-[#009700]' : 'text-[#ff0f0f]'}`}>{estado}</p>

            </li>
  )
}

export default ClientesCard