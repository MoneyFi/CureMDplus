import React, { useEffect } from 'react'
import doctores from '../../assets/doctores.png'
import logo from '../../assets/icons/logo.png'
import { MdCancel } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { planToPay, priceToPay } from '../../features/paymentSlice/paymentSlice';
import { useDispatch } from 'react-redux';

const Detail = ({ product, format, handleDetail }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const style = {
        backgroundImage: `url(${doctores})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    useEffect((() => {

    }), [product])

    const handlePay = () => {
        // dispatch(changePay({amount: product.price, plan: product.title}))
        dispatch(priceToPay(product.price))
        dispatch(planToPay(product.title))
        const plan = {
            amount: product.price,
            plan: product.title,
            comprado: false
        }
        const planData = JSON.stringify(plan)
        localStorage.setItem('plan', planData)
        navigate('/register')
    }

    return (
        <section className='fixed w-screen h-screen backdrop-blur-sm top-0 right-0 z-30 flex justify-center items-center'>
            <article className='flex flex-nowrap w-[80%] bg-white h-[90vh]  rounded-lg overflow-hidden shadow-xl max-[600px]:w-[90%] '>
                <div style={style} className='w-[0%] md:w-[50%]'></div>
                <div className='w-[100%] h-full md:w-[50%] flex flex-col justify-around items-center py-5 px-10 text-[#000000] text-sm font-roboto gap-4'>
                    <header className='flex flex-col justify-center items-start text-2xl w-full'>
                        <button onClick={handleDetail} className='self-end text-sm w-8 h-8 flex justify-center items-center text-center text-[#df0d0d]'>
                            <MdCancel size={25} />
                        </button>
                        <div className='text-primary-blue flex items-center gap-2'>
                            <img src={logo} alt="" width={55} className='rounded-full' />
                            <div className='flex flex-col'>
                                <span className={product.subtitle ? 'flex gap-1 w-full -mb-2 mt-3' : 'flex gap-1 w-full'}>{product.title.split(' ')[0]} <b className='font-bold uppercase'>{product.title.split(' ')[1]}</b></span>
                                {product.subtitle && <span className='text-[10px] text-[#727274]'>{product.subtitle}</span>}
                            </div>
                        </div>
                        <span className='mt-[-.3em] font-bold font-sans self-center'>{format(product.price)}</span>
                    </header>
                    <hr className='w-full text-primary-blue' />
                    <div className='w-full h-[500px] overflow-y-scroll '>
                        <div className='text-pretty min-w-[100%] font-roboto font-light px-8 text-[12.5px]'>
                            {product.essential.split('_').map((l) => (
                                <li>{l}</li>
                            ))}
                            {product.detail.split('_').map((l) => (
                                <li>{l}</li>
                            ))}
                        </div>

                    </div>
                    <footer className='flex flex-col justify-center items-center gap-2 max-[600px]:w-full'>
                        <button onClick={() => handlePay()} className='text-white bg-primary-blue px-12 py-3 rounded-3xl font-bold hover:bg-secondary-blue transition-all max-[600px]:w-full'>Adquirir</button>
                        <Link to='/terminosycondiciones'>Terminos y Condiciones</Link>
                    </footer>
                </div>
            </article>
        </section>
    )
}

export default Detail
