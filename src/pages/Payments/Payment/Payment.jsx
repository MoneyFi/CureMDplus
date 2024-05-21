import React from 'react'

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
    return (
        <section className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm z-50'>
            <article className='w-2/4 bg-white rounded-lg flex flex-col justify-around items-center shadow-2xl px-12 py-8 gap-3 max-[800px]:w-[80%] max-[500px]:w-[90%]'>
                <div className='w-full flex justify-between'>
                    <div className='self-center'><span className='w-3/4 font-varela text-xl text-secondary-blue'>OPCIONES DE PAGO</span></div>
                    <div><button className='text-white w-5 h-5 flex justify-center items-center text-center rounded-full bg-[#df0d0d]' onClick={handlePay}>x</button></div>
                </div>
                <span className='text-roboto font-light'>Tipo de Plan:</span>
                <div className='flex justify-center gap-5 rounded-md px-4 py-2 shadow'>
                    <button onClick={handleType} value={'anual'}
                        className={`px-3 py-2 rounded-md shadow font-sans font-bold w-28 ${paymentOptions.type === 'anual' ? 'bg-secondary-blue text-white' : ''}`}>ANUAL</button>
                    <button onClick={handleType} value={'mensual'} className={`px-3 py-2 rounded-md shadow font-sans font-bold w-28 ${paymentOptions.type === 'mensual' ? 'bg-secondary-blue text-white' : ''}`}>MENSUAL</button>
                </div>
                {paymentOptions.type === 'anual' &&
                    <div className='w-full flex flex-col gap-2 justify-center items-center'>
                        <span className='font-roboto font-light'>A pagar en:</span>
                        <select className='w-full shadow px-3 py-1 text-secondary-blue font-sans font-bold bg-white text-center rounded-lg cursor-pointer' name="discount" defaultValue={paymentOptions.discount} id="" onChange={(e) => setPaymentOptions({ ...paymentOptions, discount: e.target.value })}>
                            <option value='true'>PAGO UNICO</option>
                            <option value='false'>CUOTAS</option>
                        </select>
                    </div>
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
                        <button className='px-3 py-1 font-bold font-sans text-2xl rounded-md shadow-md w-full text-secondary-blue flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                            <img src="https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp" alt="" width={130} />
                        </button>
                        <button className='px-3 py-1 font-bold font-sans text-lg rounded-md shadow-md w-full flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                            <img src="https://d2r9epyceweg5n.cloudfront.net/stores/419/170/rte/logo_rosa11.png" alt="" width={100} />
                        </button>
                    </>
                }
                {paymentOptions.discount === 'false' && paymentOptions.type === 'anual' &&
                    <>
                        <button className='px-3 py-1 font-bold font-sans text-lg rounded-md shadow-md w-full flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                            <img src="https://d2r9epyceweg5n.cloudfront.net/stores/419/170/rte/logo_rosa11.png" alt="" width={100} />
                        </button>
                    </>
                }
                {paymentOptions.type === 'mensual' &&
                    <>
                        <button className='px-3 py-1 font-bold font-sans text-2xl rounded-md shadow-md w-full text-secondary-blue flex justify-center items-center bg-white hover:bg-[#cac8c8] transition-all'>
                            <img src="https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp" alt="" width={130} />
                        </button>
                    </>
                }
            </article>
        </section>
    )
}

export default Payment
