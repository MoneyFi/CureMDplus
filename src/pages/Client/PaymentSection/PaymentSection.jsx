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

}

export default PaymentSection