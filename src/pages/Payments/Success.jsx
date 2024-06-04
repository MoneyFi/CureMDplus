import React, { useEffect, useState } from 'react'
import success from '../../assets/icons/success.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUserThunk, loginUserThunk } from '../../features/User/userThunks'
import { createToast } from '../../features/toastSlice/toastSlice'
import { uploadData } from '../../features/User/userSlice'


const Success = () => {
  const { upload } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const nav = useNavigate()
  const registerData= localStorage.getItem('register')
  const register = JSON.parse(registerData)
  const login = () => {
    dispatch(loginUserThunk({
      email: upload.mail,
      password: upload.contraseña
    }))
    createToast('Cargando datos de usuario...')
    setTimeout(() => {
      dispatch(uploadData({}))
      nav('/myaccount')
    }, 2000)
  }

  useEffect(() => {
    if (loading) {
      // dispatch(registerUserThunk(upload))
      dispatch(registerUserThunk(register))
      setTimeout(() => {
        setLoading(false)
      }, 3000)
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