import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Register from '../../../Components/Form/Register'
import Payment from '../../Payments/Payment/Payment'
import Login from '../../../Components/Form/Login'

const PaymentSection = () => {
    const { price } = useSelector(state => state.payment)
    const [step, setStep] = useState(1);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    const payment = useSelector((state)=> state.pay)

    function formatearMonto(numero) {
        return numero.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        });
    }

    useEffect(()=>{

    },[step])

    switch (step) {
        case 1:
            return <Register nextStep={nextStep} setStep={setStep} />;
        case 2:
            return <Login nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <Payment price={price} formatearMonto={formatearMonto} prevStep={prevStep} />
    }
//   return (
//     <div className='layout background flex items-center justify-center'>

//         <button onClick={()=>handleSteps(1)}>1</button>
//         <button onClick={()=>handleSteps(2)}>2</button>

//         <section className='w-[800px]  h-[100vh]  flex items-center justify-between relative overflow-hidden max-[800px]:w-full'>
//         <article className={`w-[2000px] absolute  flex items-center justify-around   ${step === 1 ?  'ml-[0px] transform duration-700' : 'ml-[-730px] transform duration-700' }`}>
//             <Register/>

//             <div className='w-[1000px] '>
//             <Payment price={payment && payment.amount} formatearMonto={formatearMonto} />
//             </div>
//         </article>

//         </section>
//     </div>
//   )
}

export default PaymentSection