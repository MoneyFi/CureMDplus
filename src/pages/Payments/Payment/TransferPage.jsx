import React, { useState } from 'react'
import { FaRegCopy } from "react-icons/fa6";
import { createToast } from '../../../features/toastSlice/toastSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getProdsThunk } from '../../../features/prodSlice/prodThunks';
import { calculateExpiryDate, createScheduler } from '../../../API/Cron/Cron';
import { updateUserThunk } from '../../../features/User/userThunks';
import { addTransferThunk } from '../../../features/paymentSlice/paymentThunks';
import { sendEmailConfirmation } from '../../../API/Mails/emailjs';
import { useNavigate } from 'react-router-dom';

const TransferPage = ({ setBankTransfer, price,
    formatearMonto }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { productores } = useSelector(state => state.prod)
    const [step, setStep] = useState(1)
    const login = JSON.parse(localStorage.getItem('login'))
    const register = JSON.parse(localStorage.getItem('register'))
    const plan = JSON.parse(localStorage.getItem('plan'))
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        dispatch(createToast('Copiado al portapapeles'))
    }
    const [data, setData] = useState({
        num_referencia: '',
        monto: '',
        fecha_pago: '',
    })

    const [error, setError] = useState({
        num_referencia: 'Este campo es obligatorio',
        monto: 'Este campo es obligatorio',
        fecha_pago: 'Este campo es obligatorio',
    })
    const handleData = (e) => {
        const { name, value, files } = e.target;
        setData({ ...data, [name]: value })
        // if (name === 'comprobante') {
        //     setData({
        //         ...data,
        //         [name]: files[0]
        //     })
        // }
        if (name === 'monto') {
            if (Number(value) !== price) {
                setError({
                    ...error,
                    [name]: 'El monto no coincide con el plan adquirido'
                })
            }
            else if (value === '') {
                setError({
                    ...error,
                    [name]: 'Este campo es obligatorio'
                })
            } else {
                setError({
                    ...error,
                    [name]: ''
                })
            }
        }
        if (name === 'num_referencia') {
            if (value === '') {
                setError({
                    ...error,
                    [name]: 'Este campo es obligatorio'
                })
            } else {
                setError({
                    ...error,
                    [name]: ''
                })
            }
        }
        if (name === 'fecha_pago') {
            const regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
            if (!regex.test(value)) {
                setError({
                    ...error,
                    [name]: 'Formato de fecha incorrecto'
                })
            }
            if (value === '') {
                setError({
                    ...error,
                    [name]: 'Este campo es obligatorio'
                })
            } else {
                setError({
                    ...error,
                    [name]: ''
                })
            }
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (plan.comprado === false) {
            plan.comprado = true
            localStorage.setItem('plan', JSON.stringify(plan))
            localStorage.setItem('plan_adquirido', JSON.stringify(plan))
            dispatch(getProdsThunk())
            if (login && login?.data_user) {
              //Logica si los productores tienen email o no
              const find = productores && productores?.filter(p => p.prod_dni === login?.data_user?.dni_productor)[0]
              let productor = find && find?.prod_email || 'curemd-plus@moneyfi.io'
              //Update userdata
              let fecha_cobro = calculateExpiryDate(plan.startDate, plan.facturacion)
              dispatch(updateUserThunk({
                id: login?.user_id,
                plan: plan.plan,
                status: '0',
                fecha_cobro,
                descuento: plan.descuento
              }))
              dispatch(addTransferThunk({
                user_email: login?.data_user?.email,
                n_referencia: data.num_referencia,
                monto: data.monto,
                fecha_pago: data.fecha_pago
              }))
            //   sendEmailConfirmation([login?.data_user?.email, 'administracion@moneyfi.io', productor])
            //   createScheduler(login?.data_user?.email, plan.startDate, plan.facturacion)
              setTimeout(() => {
                setStep(3)
              }, 2000)
              return;
            } if (register) {
              let fecha_cobro = calculateExpiryDate(plan.startDate, plan.facturacion)
              register.status = '0';
              register.plan = plan.plan;
              register.fecha_cobro = fecha_cobro;
              register.descuento = plan.descuento;
              localStorage.setItem('register', JSON.stringify(register));
              dispatch(addTransferThunk({
                user_email: register?.mail,
                n_referencia: data.num_referencia,
                monto: data.monto,
                fecha_pago: data.fecha_pago
              }))
              dispatch(registerUserThunk(register))
              const find = productores && productores?.filter(p => p.prod_dni === register.dni_productor)[0]
              let productor = find && find?.prod_email || 'curemd-plus@moneyfi.io'
              sendEmailConfirmation([register?.mail, 'administracion@moneyfi.io', productor])
              createScheduler(register?.mail, plan.startDate, plan.facturacion)
              setTimeout(() => {
                setStep(3)
              }, 2000)
              return;
            }
          }
    }

    return (
        <section className=' w-[600px]  flex justify-center items-center mt-16 max-[500px]:w-[500px] max-[425px]:w-[425px] max-[375px]:w-[375px]'>
            <article className='w-full bg-white rounded-lg flex flex-col justify-around items-center  px-12 py-8 gap-3 max-[800px]:w-[80%] max-[500px]:w-[90%]'>
                <div className='w-full flex justify-between max-[400px]:flex-col-reverse'>
                    <div className='self-center'><span className='w-3/4 font-varela text-xl text-secondary-blue'>TRANFERENCIA BANCARIA</span></div>
                    <div className='max-[400px]:mt-[-20px] max-[400px]:text-sm max-[400px]:p-2 max-[400px]:self-end'>
                        <button className='text-secondary-blue flex justify-center items-center text-center' onClick={() => setBankTransfer(false)}>
                            Cambiar Método
                        </button>
                    </div>
                </div>
                {step === 1 ? (
                    <>
                        <div>
                            <p className='text-sm font-roboto text-[#7E7E7E]'>Debes saber que la vigencia de tu cobertura estará sujeta a la confirmación del pago.</p>
                        </div>
                        <span className='font-varela text-secondary-blue text-lg'>Datos de la cuenta destinaria:</span>
                        <div className='flex flex-col justify-around items-start w-full'>
                            <span className='flex justify-between items-start w-full'><p><strong>Banco: </strong>Banco Galicia</p></span>
                            <span className='flex justify-between items-start w-full'><p><strong>Titular: </strong>MONEYFI TECHNOLOGIES ARGENTINA S.A.S.</p></span>
                            <span className='flex justify-between items-start w-full'><p><strong>Cuit: </strong>30-71834534-7</p><button onClick={() => handleCopy('30-71834534-7')}><FaRegCopy /></button></span>
                            <span className='flex justify-between items-start w-full'><p><strong>CBU: </strong>0070076420000026639860</p><button onClick={() => handleCopy('0070076420000026639860')}><FaRegCopy /></button></span>
                            <span className='flex justify-between items-start w-full'><p><strong>Monto a pagar: </strong>{formatearMonto(price)}</p><button onClick={() => handleCopy(price)}><FaRegCopy /></button></span>
                        </div>
                        <div>
                            <p className='text-sm font-roboto text-[#7E7E7E]'>Asegurate de haber copiado los datos necesarios para la tranferencia y toca siguiente para continuar el proceso de pago.</p>
                        </div>
                        <button onClick={() => setStep(2)} className='w-2/4 mt-3 bg-primary-blue text-white font-roboto font-bold text-sm rounded-lg px-3 py-2'>Siguiente</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setStep(1)} className=' bg-primary-blue text-white font-roboto font-bold text-sm rounded-lg px-3 py-1'>Atras</button>
                        <div>
                            <p className='text-sm font-roboto text-[#7E7E7E]'>Completa este formulario para que podamos confirmar la transferencia.</p>
                            <span className='text-[#dd2f23] flex justify-end items-end font-bold text-xs font-roboto'>{error.num_referencia}</span>
                            <div className='formLabel label ' title='N° de referencia: También puede figurar como N° de Operacion/Transferencia, etc.'>
                                <input
                                    onChange={(e) => handleData(e)}
                                    name='num_referencia'
                                    className='formLabel input w-full' placeholder='N° de referencia:' />
                            </div>
                            <span className='text-[#dd2f23] flex justify-end items-end font-bold text-xs font-roboto'>{error.monto}</span>
                            <div className='formLabel label '>
                                <input
                                    onChange={(e) => handleData(e)}
                                    name='monto'
                                    className='formLabel input w-full' placeholder='Monto Transferido: (Solo el numero)' />
                            </div>
                            <span className='text-[#dd2f23] flex justify-end items-end font-bold text-xs font-roboto'>{error.fecha_pago}</span>
                            <div className='formLabel label '>
                                <input
                                    type='date'
                                    onChange={(e) => handleData(e)}
                                    name='fecha_pago'
                                    className='formLabel input w-full' placeholder='Fecha de la Transferencia:' />
                            </div>
                            <p className='text-sm font-roboto text-[#7E7E7E]'>Enviar el comprobante de pago a: administracion@moneyfi.io<button onClick={() => handleCopy('administracion@moneyfi.io')}><FaRegCopy /></button> con este asunto: CureMD+ - Comprobante de Pago<button onClick={() => handleCopy('CureMD+ - Comprobante de Pago')}><FaRegCopy /></button></p>
                        </div>
                        <button onClick={submitForm}
                            className='w-2/4 mt-3 bg-primary-blue text-white font-roboto font-bold text-sm rounded-lg px-3 py-2'>Completar</button>
                    </>
                )}
            </article>
            {step === 3 && (
                <article className='w-full h-full bg-none backdrop-blur-sm flex items-center justify-center absolute'>
                    <div className='flex items-center justify-center flex-col bg-white rounded-sm shadow-lg py-4 px-2 md:py-7 md:px-7 gap-4'>
                        <h1 className='text-primary-blue text-xl md:text-3xl font-varela font-bold'>PAGO CONFIRMADO</h1>
                        <span className='text-sm w-2/3 md:w-full text-center'>Su cobertura quedará vigente cuando revisemos los datos del pago.</span>
                        <p className='text-sm w-2/3 md:w-full text-center'>Si tiene alguna consulta escribanos a <strong>administracion@moneyfi.io</strong></p>
                        <button onClick={() => {setStep(1); navigate('/myaccount')}} className='w-2/4 mt-3 bg-primary-blue text-white font-roboto font-bold text-sm rounded-lg px-3 py-2'>Ir a mi Cuenta</button>
                    </div>
                </article>
            )}
        </section>
    )
}

export default TransferPage
