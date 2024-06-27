import React, { useEffect, useState } from 'react'
import success from '../../assets/icons/success.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUserThunk, loginUserThunk } from '../../features/User/userThunks'
import { createToast } from '../../features/toastSlice/toastSlice'
import { uploadData } from '../../features/User/userSlice'
import { sendEmailConfirmation } from '../../API/Mails/emailjs'
import { getProdsThunk } from '../../features/prodSlice/prodThunks'
import { createScheduler } from '../../API/Cron/Cron'

const Success = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const nav = useNavigate()
  const { productores } = useSelector(state => state.prod)
  const registerData = localStorage.getItem('register')
  const register = JSON.parse(registerData)
  const loginData = JSON.parse(localStorage.getItem('login'))
  const plan = JSON.parse(localStorage.getItem('plan'))
  const login = () => {
    if (register) {
      dispatch(loginUserThunk({
        email: register.mail,
        password: register.contraseña
      }))
    }
    createToast('Cargando datos de usuario...')
    setTimeout(() => {
      dispatch(uploadData({}))
      nav('/')
    }, 2000)
  }

  useEffect(() => {
    if (loading && plan.comprado === false) {
      plan.comprado = true
      localStorage.setItem('plan', JSON.stringify(plan))
      dispatch(getProdsThunk())
      if (loginData && loginData?.data_user) {
        //Logica si los productores tienen email o no
        const find = productores && productores?.filter(p => p.prod_dni === loginData?.data_user?.dni_productor)[0]
        let productor = find && find?.prod_email || 'curemd-plus@moneyfi.io'
        sendEmailConfirmation([loginData?.data_user?.email, 'administracion@moneyfi.io', productor])
        createScheduler(loginData?.data_user?.email, plan.startDate, plan.facturacion)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        return;
      } if (register) {
        dispatch(registerUserThunk(register))
        const find = productores && productores?.filter(p => p.prod_dni === register.dni_productor)[0]
        let productor = find && find?.prod_email || 'curemd-plus@moneyfi.io'
        sendEmailConfirmation([register?.mail, 'administracion@moneyfi.io', productor])
        createScheduler(register?.mail, plan.startDate, plan.facturacion)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        return;
      }
    }
  }, [loading])

  return (
    <article className='w-full flex items-center justify-center flex-col'>
      <div className='w-[250px]'>
        <img src={success} alt='success' />
      </div>
      <div className='w-full flex items-center justify-center flex-col p-4'>
        <h3 className='text-3xl font-bold p-2'>¡Pago exitoso!</h3>
        <p className='font-light p-4'>Sus datos han sido cargados exitosamente. Pulse continuar para finalizar su registro.</p>
        <button onClick={login} className='px-12 py-3 bg-primary-blue font-bold text-white rounded-[20px]'>
          Continuar
        </button>
      </div>
    </article>
  )
}

export default Success
