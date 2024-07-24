import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { createPaymentIntent, mercadoPago } from '../../../API/Payment/payment'
import Anual from './Anual'
import {  MERCADO_PAGO_LOGO } from '../../../Constants/Constants'
import { RiBankFill } from "react-icons/ri";
import { useSelector } from 'react-redux'
import TransferPage from './TransferPage'

const Payment = ({ price, formatearMonto, position, setPosition }) => {
    const { upload } = useSelector(state => state.user)
    const { plan } = useSelector(state => state.payment)
    const planData = JSON.parse(localStorage.getItem('plan'))
    const registerData = JSON.parse(localStorage.getItem('register'))
    const login = JSON.parse(localStorage.getItem('login'))
    const [user, setUser] = useState({
        mail: '',
        telefono: '',
    })
    const [accessToken,setAccessToken] = useState('')

    const [bankTransfer, setBankTransfer] = useState(false);
    useEffect(() => {
        if (login && login?.data_user) {
            setUser({
                mail: login?.data_user.email,
                telefono: login?.data_user.user_registration_input_phone_number,
            })
        }
        if (registerData) {
            setUser({
                mail: registerData?.mail,
                telefono: registerData?.telefono,
            })
        }
    }, [])
    const [paymentOptions, setPaymentOptions] = React.useState({
        type: 'anual',
        discount: 'true'
    })
    const [amount, setAmount] = React.useState(12)
    const handleType = (e) => {
        setPaymentOptions({
            ...paymentOptions,
            type: e.target.value
        })
    }
    
    const handlerPago = async () =>{
        const nombre = registerData.nombre + ' ' + registerData.apellido
        
        const precio = amount.toString()
        try{
            const response =  await axios.post('http://199.192.30.130:8080/create-payment-intent',{
                name: nombre,
                email: user.mail,
                amount: '1',
                product: planData.plan,
                description: 'facturacion anual'
                
            })
            window.location.href = response.data.checkout_url
           

        }catch(error){
            console.error('error al generar el token')
        }
    }
    

    useEffect(() => {
    }, [position, setPosition])

    React.useEffect(() => {
        if (paymentOptions.discount === 'true' && paymentOptions.type === 'anual') {
            setAmount((price - (price * 0.1)) * 12)
        } else if (paymentOptions.type === 'mensual') {
            setAmount(price)
        } else {
            setAmount(price * 12)
        }
    }, [paymentOptions, handleType, price])

    return (
        <>
            {bankTransfer ? (
                <TransferPage setBankTransfer={setBankTransfer} price={amount} formatearMonto={formatearMonto}/>
            ) : (
                <section className=' w-[600px]  flex justify-center items-center mt-16 max-[500px]:w-[500px] max-[425px]:w-[425px] max-[375px]:w-[375px]'>
                    <article className='w-full bg-white rounded-lg flex flex-col justify-around items-center  px-12 py-8 gap-3 max-[800px]:w-[80%] max-[500px]:w-[90%]'>
                        <div className='w-full flex justify-between max-[400px]:flex-col-reverse'>
                            <div className='self-center'><span className='w-3/4 font-varela text-xl text-secondary-blue'>OPCIONES DE PAGO</span></div>
                            <div className='max-[400px]:mt-[-20px] max-[400px]:text-sm max-[400px]:p-2 max-[400px]:self-end'>
                                <button className='text-secondary-blue flex justify-center items-center text-center' onClick={() => setPosition(1)}>
                                    Atras
                                </button>
                            </div>
                        </div>
                        <span className='text-roboto font-light'>Tipo de Plan:</span>
                        <div className='flex justify-center gap-5 rounded-md px-4 py-2 shadow'>
                            <button onClick={handleType} value={'anual'}
                                className={`px-3 py-2 rounded-md shadow font-sans font-bold w-28 ${paymentOptions.type === 'anual' ? 'bg-secondary-blue text-white' : ''}`}>ANUAL</button>
                            <button onClick={handleType} value={'mensual'} className={`px-3 py-2 rounded-md shadow font-sans font-bold w-28 ${paymentOptions.type === 'mensual' ? 'bg-secondary-blue text-white' : ''}`}>MENSUAL</button>
                        </div>
                        {paymentOptions.type === 'anual' &&
                            <Anual paymentOptions={paymentOptions} setPaymentOptions={setPaymentOptions} discount={paymentOptions.discount} />
                        }
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <span className='font-varela text-secondary-blue text-lg'>TOTAL A PAGAR:</span>
                            <span className='font-sans text-3xl font-bold'>{formatearMonto(amount) + ' ARS' + (paymentOptions.type === 'mensual' ? ' /mes' : '')}</span>
                            {(paymentOptions.discount === 'true' && paymentOptions.type === 'anual') &&
                                <span className='rounded-lg px-5 py-1 text-[10px] text-white font-roboto bg-secondary-blue'>Aplicado un 10% de descuento</span>}
                        </div>
                        <hr className='w-full border border-secondary-blue rounded-full' />
                        <span className='text-roboto font-light'>Metodos de pago disponibles:</span>
                        {paymentOptions.discount === 'true' && paymentOptions.type === 'anual' &&
                            <>
                                <button
                                    onClick={() => handlerPago()}
                                    className='px-3 py-1 font-bold font-sans text-2xl rounded-md shadow-md w-full text-secondary-blue flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                                    <img src={MERCADO_PAGO_LOGO} alt="" width={130} />
                                </button>
                                {/* <button
                                    onClick={() => goCuotasHandler()}
                                    className='px-3 py-1 font-bold font-sans text-lg rounded-md shadow-md w-full flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                                    <img src={GO_CUOTAS_LOGO} alt="" width={100} />
                                </button> */}
                                <button
                                    onClick={() => {
                                        setBankTransfer(true)
                                        planData.facturacion = 'anual';
                                        let dateNow = new Date()
                                        planData.startDate = dateNow;
                                        localStorage.setItem('plan', JSON.stringify(planData))
                                    }}
                                    className='px-3 py-2 font-bold font-sans text-lg rounded-md shadow-md w-full flex justify-center gap-4 items-center bg-white hover:bg-[#cac8c8] transition-all text-secondary-blue'>
                                    <RiBankFill size={30} />
                                    <p>TRANSFERENCIA BANCARIA</p>
                                </button>
                            </>
                        }

                        {paymentOptions.type === 'mensual' &&
                            <>
                                <button
                                    onClick={() => mercadoPagoHandler()}
                                    className='px-3 py-1 font-bold font-sans text-2xl rounded-md shadow-md w-full text-secondary-blue flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                                    <img src={MERCADO_PAGO_LOGO} alt="" width={130} />
                                </button>
                                <button
                                    onClick={() => {
                                        setBankTransfer(true);
                                        planData.facturacion = 'mensual';
                                        let dateNow = new Date()
                                        planData.startDate = dateNow;
                                        localStorage.setItem('plan', JSON.stringify(planData))
                                    }}
                                    className='px-3 py-2 font-bold font-sans text-lg rounded-md shadow-md w-full flex justify-center gap-4 items-center bg-white hover:bg-[#cac8c8] transition-all text-secondary-blue'>
                                    <RiBankFill size={30} />
                                    <p>TRANSFERENCIA BANCARIA</p>
                                </button>
                            </>
                        }
                    </article>
                </section>
            )}
        </>
    )
}

export default Payment
