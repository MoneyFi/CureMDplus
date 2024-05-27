import React from 'react'

const Anual = ({paymentOptions, setPaymentOptions,discount}) => {
  return (
    <div className='w-full flex flex-col gap-2 justify-center items-center'>
        <span className='font-roboto font-light'>A pagar en:</span>
         <select className='w-full shadow px-3 py-1 text-secondary-blue font-sans font-bold bg-white text-center rounded-lg cursor-pointer' name="discount" defaultValue={discount} id="" onChange={(e) => setPaymentOptions({ ...paymentOptions, discount: e.target.value })}>
          <option value='true'>PAGO UNICO</option>
           <option value='false'>CUOTAS</option>
          </select>
        </div>
  )
}

export default Anual