import { useEffect, useState } from 'react'
import logo from '../../assets/icons/Logo_Azul.png'
import Payment from '../Payments/Payment/Payment'
import FormRegister from './FormRegister'
import { useSelector } from 'react-redux'
import FormLogin from './FormLogin'
import FormData from './FormData'
import FormJurada from './FormJurada'

const NewRegister = () => {
    const plan = JSON.parse(localStorage.getItem('plan'))
    const [position, setPosition] = useState(1)
    const [haveAccount, setHaveAccount] = useState(false)
    const [jurada, setJurada] = useState(true)

    useEffect(() => {

    }, [position, plan])

    function formatearMonto(numero) {
        return numero.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        });
    }

    return (
        <div className='layout background  min-h-[100vh] pt-10 flex items-center justify-start flex-col  '>
            <div className='w-[200px] '>
                <img src={logo} alt='logo' />
            </div>
            {
                !haveAccount && position === 1 &&
            <div className='p-2 flex items-center justify-center text-[#000000] z-20 mb-14'>
                <button onClick={() => setHaveAccount(true)}>
                    <p className='text-sm font-light'>¿Tienes una cuenta en CureMd? <strong className='font-bold text-primary-blue'> Inicia sesión aquí.</strong></p>
                </button>
            </div>
            }
            <section className='w-full flex items-center justify-around relative '>
                {haveAccount ? (
                    <article className={`w-[2000px] min-h-screen mt-[500px] flex items-center justify-between  absolute ${position === 1 ? 'ml-[1600px] transition duration-1500  max-[400px]:ml-[1600px] max-[500px]:ml-[1600px] ' : 'mr-[1600px] transition duration-1500 max-[500px]:mr-[1580px]  max-[375px]:mr-[1620px]'}`}>
                        <FormLogin position={position} setPosition={setPosition} setHaveAccount={setHaveAccount} />
                        <FormData position={position} setPosition={setPosition} />
                    </article>
                ) : (
                    <article className={`w-[2000px] min-h-screen mt-[500px] flex items-center justify-between  absolute ${position === 1 ? 'ml-[1550px] transition duration-1500  max-[400px]:ml-[1600px] max-[500px]:ml-[1600px] ' : jurada ? 'mr-[470px] transition duration-1500 max-[500px]:mr-[390px]  max-[375px]:mr-[390px]' : 'mr-[1400px] transition duration-1500 max-[500px]:mr-[1580px]  max-[375px]:mr-[1620px]'}`}>
                        <FormRegister position={position} setPosition={setPosition} setHaveAccount={setHaveAccount} haveAccount={haveAccount} />
                        {jurada ? <FormJurada setJurada={setJurada} position={position} setPosition={setPosition} /> :
                            <Payment setJurada={setJurada} formatearMonto={formatearMonto} position={position} setPosition={setPosition} price={plan.amount} />
                        }
                    </article>
                )}
            </section>
        </div>
    )
}

export default NewRegister