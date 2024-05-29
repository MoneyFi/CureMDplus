import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Register from '../../../Components/Form/Register'
import Payment from '../../Payments/Payment/Payment'

const RegisterClient = () => {
    const payment = useSelector((state)=> state.pay)
    const [step, setStep]= useState(1) 

    function formatearMonto(numero) {
        return numero.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        });
    }

    useEffect(()=>{},[step])

    const handleSteps = (e)=>{
        console.log(e)
        setStep(e)
    }
    console.log(payment)
  return (
    <div className='layout background flex items-center justify-center'>

        <button onClick={()=>handleSteps(1)}>1</button>
        <button onClick={()=>handleSteps(2)}>2</button>

        <section className='w-[800px]  h-[100vh]  flex items-center justify-between relative overflow-hidden max-[800px]:w-full'>
        <article className={`w-[2000px] absolute  flex items-center justify-around   ${step === 1 ?  'ml-[0px] transform duration-700' : 'ml-[-730px] transform duration-700' }`}>
            <Register/>

            <div className='w-[1000px] '>
            <Payment price={payment && payment.amount} formatearMonto={formatearMonto} />
            </div>
        </article>

        </section>
    </div>
  )
}

export default RegisterClient