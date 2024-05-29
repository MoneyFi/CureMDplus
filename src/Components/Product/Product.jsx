import { useState } from 'react'
import logo from '../../assets/icons/logo.png'
import Detail from './Detail';
import Form from '../Form/Form'
import Payment from '../../pages/Payments/Payment/Payment';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../features/formSlice/formSlice';
import { useNavigate } from 'react-router-dom';
import { changePay } from '../../features/formSlice/paySlice';
import { priceToPay, planToPay } from '../../features/paymentSlice/paymentSlice';

const Product = ({ product, index }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function formatearMonto(numero) {
        return numero.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        });
    }
    const [detail, setDetail] = useState(false)
    const [form, setForm] = useState(false)
    const [pay, setPay] = useState(false)

    const handlePay = () => {
        // dispatch(changePay({amount: product.price, plan: product.title}))
        dispatch(priceToPay(product.price))
        dispatch(planToPay(product.title))
        navigate('/payment')
    }
    const handleForm = () => {
        setForm(!form)
    }
    const handleDetail = () => {
        setDetail(!detail)
    }

    return (
        <article className='flex flex-col justify-around items-center py-5 px-10 w-[340px] h-[450px] bg-white text-[#000000] rounded-xl text-sm font-roboto shadow-2xl max-[500px]:w-[98%] ' key={index}>
            <header className='flex flex-col justify-center items-start text-2xl w-full gap-2'>
                <div className='text-primary-blue flex items-center gap-2'>
                    <img src={logo} alt="" width={55} className='rounded-full' />
                    <span>{product.title.split(' ')[0]} <b>{product.title.split(' ')[1]}</b></span>
                </div>
                <span className='font-bold font-sans self-center'>{formatearMonto(product.price)}</span>
            </header>
            <hr className='w-full text-primary-blue' />
            <div className='pt-4 text-pretty min-w-[100%] h-60 font-roboto font-light '>{product.essential.split('_').map((l,index) => (
                <li className='my-1' key={index}>{l}</li>
            ))}</div>
            <footer className='flex justify-center items-center gap-3 max-[600px]:flex-col max-[600px]:w-full'>
                <button onClick={handleDetail} className='text-white bg-primary-blue px-6 py-2 rounded-3xl font-bold hover:bg-secondary-blue transition-all max-[600px]:w-full'>Ver Mas</button>
                <button onClick={()=>handlePay()} className='text-white bg-primary-blue px-6 py-2 rounded-3xl font-bold hover:bg-secondary-blue transition-all max-[600px]:w-full'>Adquirir</button>
            </footer>
            {
                detail ?
                <Detail product={product} format={formatearMonto} handleDetail={handleDetail}/>
                : ""
            }
            {/* {form && <Form handleForm={handleForm}/>} */}
            {/* {pay && <Payment price={product.price} handlePay={handlePay} formatearMonto={formatearMonto}/>} */}
        </article>
    )
}

export default Product
