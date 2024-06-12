import React, { useEffect } from 'react'
import { goCuotas, mercadoPago } from '../../../API/Payment/payment'
import Anual from './Anual'
import { GO_CUOTAS_LOGO, MERCADO_PAGO_LOGO } from '../../../Constants/Constants'
import uuid from 'react-uuid'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Payment = ({ price, formatearMonto, position, setPosition }) => {
    const { upload } = useSelector(state => state.user)
    const { plan } = useSelector(state => state.payment)
    const planData = JSON.parse(localStorage.getItem('plan'))
    const registerData = JSON.parse(localStorage.getItem('register'))
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

    const goCuotasHandler = () => {
        const id = uuid()
        goCuotas({
            amount_in_cents: amount * 100,
            order_reference_id: id,
            phone_number: registerData.telefono
        })
    }

    const mercadoPagoHandler = () => {
        // const client_id = '';
        if(paymentOptions.discount === 'true' && paymentOptions.type === 'anual'){
            mercadoPago({
                amount: 1, //Para testear
                // amount: amount,
                mail: registerData.mail,
                producto: planData.plan,
                facturacion: 'anual'
            })
            return;
        }
        mercadoPago({
            amount: 1, //Para testear
            // amount: price,
            mail: registerData.mail,
            producto: planData.plan,
            facturacion: 'mensual'
        })
        return;
    }

    useEffect(()=>{

    },[position, setPosition])

    React.useEffect(() => {
        if (paymentOptions.discount === 'true' && paymentOptions.type === 'anual') {
            setAmount(price - (price * 0.1))
        } else if (paymentOptions.type === 'mensual') {
            setAmount(price / 12)
        } else {
            setAmount(price)
        }
    }, [paymentOptions, handleType, price])

    return (
        <section className=' w-[600px]  flex justify-center items-center mt-10  max-[500px]:w-[500px] max-[425px]:w-[425px] max-[375px]:w-[375px]'>
            <article className='w-full bg-white rounded-lg flex flex-col justify-around items-center  px-12 py-8 gap-3 max-[800px]:w-[80%] max-[500px]:w-[90%]'>
                <div className='w-full flex justify-between max-[400px]:flex-col-reverse'>
                    <div className='self-center'><span className='w-3/4 font-varela text-xl text-secondary-blue'>OPCIONES DE PAGO</span></div>
                    <div className='max-[400px]:mt-[-20px] max-[400px]:text-sm max-[400px]:p-2 max-[400px]:self-end'>
                        <button className='text-secondary-blue flex justify-center items-center text-center' onClick={()=>setPosition(1)}>
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
                            onClick={() => mercadoPagoHandler()}
                            className='px-3 py-1 font-bold font-sans text-2xl rounded-md shadow-md w-full text-secondary-blue flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                            <img src={MERCADO_PAGO_LOGO} alt="" width={130} />
                        </button>
                        <button
                            onClick={() => goCuotasHandler()}
                            className='px-3 py-1 font-bold font-sans text-lg rounded-md shadow-md w-full flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                            <img src={GO_CUOTAS_LOGO} alt="" width={100} />
                        </button>
                    </>
                }
                {paymentOptions.discount === 'false' && paymentOptions.type === 'anual' &&
                    <>
                        <button
                            onClick={() => goCuotasHandler()}
                            className='px-3 py-1 font-bold font-sans text-lg rounded-md shadow-md w-full flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                            <img src={GO_CUOTAS_LOGO} alt="" width={100} />
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
                    </>
                }
            </article>
        </section>
    )
}

export default Payment
