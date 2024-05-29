import React from 'react'
import { goCuotas, mercadoPago } from '../../../API/Payment/payment'
import Anual from './Anual'
import { GO_CUOTAS_LOGO, MERCADO_PAGO_LOGO } from '../../../Constants/Constants'
import uuid from 'react-uuid'


const Payment = ({ handlePay, price, formatearMonto }) => {
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

    

    React.useEffect(() => {
        if (paymentOptions.discount === 'true' && paymentOptions.type === 'anual') {
            setAmount(price - (price * 0.1))
        } else if (paymentOptions.type === 'mensual') {
            setAmount(price / 12)
        } else {
            setAmount(price)
        }
    }, [paymentOptions, handleType, price])


    const goCuotasHandler = ()=>{
        const id = uuid()
        goCuotas({
            amount_in_cents: amount * 100,
            order_reference_id: id,
            phone_number: 2235490825
        })
    }

    const mercadoPagoHandler = ()=>{
        // const client_id = '';
        mercadoPago({
            amount: 1,
            mail: 'nahuelcempellin@gmail.com',
            producto: 'esencial',
            facturacion: 'mensual'
        })

    }

    return (
        // <section className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm z-50'>
            <article className='w-2/4 bg-white rounded-lg flex flex-col justify-around items-center shadow-2xl px-12 py-8 gap-3 max-[800px]:w-[80%] max-[500px]:w-[90%]'>
                <div className='w-full flex justify-between'>
                    <div className='self-center'><span className='w-3/4 font-varela text-xl text-secondary-blue'>OPCIONES DE PAGO</span></div>
                    <div>
                        {/* <button className='text-white w-5 h-5 flex justify-center items-center text-center rounded-full bg-[#df0d0d]' onClick={handlePay}>x</button> */}
                        </div>
                </div>
                <span className='text-roboto font-light'>Tipo de Plan:</span>
                <div className='flex justify-center gap-5 rounded-md px-4 py-2 shadow'>
                    <button onClick={handleType} value={'anual'}
                        className={`px-3 py-2 rounded-md shadow font-sans font-bold w-28 ${paymentOptions.type === 'anual' ? 'bg-secondary-blue text-white' : ''}`}>ANUAL</button>
                    <button onClick={handleType} value={'mensual'} className={`px-3 py-2 rounded-md shadow font-sans font-bold w-28 ${paymentOptions.type === 'mensual' ? 'bg-secondary-blue text-white' : ''}`}>MENSUAL</button>
                </div>
                {paymentOptions.type === 'anual' &&
                    <Anual paymentOptions={paymentOptions} setPaymentOptions={setPaymentOptions} discount={paymentOptions.discount}/>
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
                        onClick={()=>goCuotasHandler()}
                        className='px-3 py-1 font-bold font-sans text-2xl rounded-md shadow-md w-full text-secondary-blue flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                            <img src={MERCADO_PAGO_LOGO} alt="" width={130} />
                        </button>
                        <button 
                        onClick={()=>goCuotasHandler()}
                        className='px-3 py-1 font-bold font-sans text-lg rounded-md shadow-md w-full flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                            <img src={GO_CUOTAS_LOGO} alt="" width={100} />
                        </button>
                    </>
                }
                {paymentOptions.discount === 'false' && paymentOptions.type === 'anual' &&
                    <>
                        <button 
                        onClick={()=>goCuotasHandler()}
                        className='px-3 py-1 font-bold font-sans text-lg rounded-md shadow-md w-full flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                            <img src={GO_CUOTAS_LOGO} alt="" width={100} />
                        </button>
                    </>
                }
                {paymentOptions.type === 'mensual' &&
                    <>
                        <button 
                        onClick={()=>mercadoPagoHandler()}
                        className='px-3 py-1 font-bold font-sans text-2xl rounded-md shadow-md w-full text-secondary-blue flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                            <img src={MERCADO_PAGO_LOGO} alt="" width={130} />
                        </button>
                    </>
                }
            </article>
        
    )
}

export default Payment
