import React, { useEffect, useState } from 'react'
import Icono from '../../../Components/Icono/Icono'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MERCADO_PAGO_LOGO } from '../../../Constants/Constants'
import { mercadoPago } from '../../../API/Payment/payment'

const PaymentProduct = () => {
    const {id} = useParams()
    const [tipo,setTipo] = useState('mensual')
    const [amount,setAmount] = useState()
    const payment = useSelector((state)=>state.payment)
    const userData = localStorage.getItem('login')
    const userParse = JSON.parse(userData)

    

    useEffect(()=>{
        if(tipo === 'mensual'){
            setAmount(payment.price)
        }else{
            setAmount(payment.price * 12)
        }
    },[tipo])

    const mercado_pago_handler = () =>{
        mercadoPago({
            amount: amount,
            producto: payment.title,
            mail: userParse.data_user.email
        })
    }

  return (
    <div className='layout background flex flex-col items-center justify-center '>
        <Icono/>

        <section className='w-3/4  flex flex-col items-center max-[800px]:w-full'>
            <div className='flex flex-col items-start justify-center p-4 max-[800px]:w-full'>
            <h4 className='text-xl'>Plan a contratar: <strong className='text-primary-blue'>{payment.plan}</strong> </h4>
            <h5 className='text-xl'>Precio a pagar: <strong className='text-primary-blue  text-2xl'>${payment.price}</strong></h5>
            </div>

            <div className='w-full max-w-[300px] p-4 flex items-center justify-center'>
                

                <button 
                onClick={()=>setTipo('mensual')}
                className={`px-12 py-2 ${tipo === 'mensual' ?'bg-primary-blue text-white' : 'bg-transparent text-primary-blue'} rounded font-bold  mr-4`}>Mensual</button>
                <button 
                onClick={()=>setTipo('anual')}
                className={`px-12 py-2 ${tipo === 'anual' ?'bg-primary-blue text-white' : 'bg-transparent text-primary-blue'} rounded font-bold  mr-4`}>Anual</button>
            </div>
            
            <div className='p-8 flex flex-col items-center justify-center w-full max-w-[500px]'>
            <h5 className='text-xl p-4 font-bold'>Total a pagar: <strong className='text-primary-blue  text-2xl'>${amount}</strong></h5>
            <button 
            onClick={()=>mercado_pago_handler()}
            className='flex items-center justify-center py-3 px-12 font-bold shadow rounded-[10px] w-full'> <img className='w-[85px] h-[25px] ml-2 text-sm ' src={MERCADO_PAGO_LOGO}/></button>
            </div>

        </section>

    </div>
  )
}

export default PaymentProduct