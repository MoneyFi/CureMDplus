import { useEffect, useState } from 'react'
import logo from '../../assets/icons/Logo_Azul.png'
import Payment from '../Payments/Payment/Payment'
import FormRegister from './FormRegister'
import { useSelector } from 'react-redux'

const NewRegister = () => {
    const payInformation = useSelector((state)=> state.payment.price)

    const[position, setPosition]= useState(1)

    useEffect(()=>{
        console.log(payInformation)
    },[position, payInformation])

    function formatearMonto(numero) {
        return numero.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        });
    }


    

  return (
    <div className='layout background pt-10 flex items-center justify-start flex-col overflow-hidden '>
        <div className='w-[200px]'>
            <img src={logo} alt='logo'/>
        </div>
        
        <section className='w-full flex items-center justify-around relative '>

            <article className={`w-[2000px] h-screen mt-[500px] flex items-center justify-between  absolute ${position ===1? 'ml-[1550px] transition duration-1500  ': 'mr-[1400px] transition duration-1500 '}`}>
            <FormRegister position={position} setPosition={setPosition}/>
            <Payment formatearMonto={formatearMonto} position={position} setPosition={setPosition} price={payInformation}/>
            </article>

           
        </section>




    </div>
  )
}

export default NewRegister