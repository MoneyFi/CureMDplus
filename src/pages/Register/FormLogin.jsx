import { useEffect, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUserThunk } from '../../features/User/userThunks'
import { createToast } from '../../features/toastSlice/toastSlice'

const FormLogin = ({ setHaveAccount, position, setPosition }) => {
    const [loading, setLoading] = useState(false)
    const { response, data: data_user } = useSelector((state) => state.user)
    const [pass, setPass] = useState(false)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleData = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUserThunk(data))
        dispatch(createToast('Cargando...'))
        setTimeout(() => {
            setLoading(true)
        }, 2000)
    }

    useEffect(() => {
        if (loading) {
            if (response === 'success') {
                dispatch(createToast('Inicio exitoso, corroborando datos...'))
                setTimeout(() => {
                    if (!data_user.cuil || data_user.cuil === '' && !data_user.dni_productor || data_user.dni_productor === '') {
                        setPosition(2)
                        setLoading(false)
                        return
                    } else {
                        setPosition(2)
                        setLoading(false)
                        setHaveAccount(false)
                        return
                    }
                }, 2000)
            }
            if (response === 'fail_password') {
                dispatch(createToast('La contraseña es incorrecta'))
                setLoading(false)
                return;
            }
            if (response === 'fail_email') {
                dispatch(createToast('El email no se encuentra registrado'))
                setLoading(false)
                return;
            }
        }
    }, [loading])

    return (
        <section className={`flex flex-col min-w-[400px] items-center justify-center max-[800px]:mt-[120px]  max-[400px]:p-4 `} >
            <div className='formLabel label '>
                <input
                    onChange={(e) => handleData(e)}
                    name='email'
                    className='formLabel input w-full' placeholder='Correo electronico:' />
            </div>
            <div className='formLabel label w-full relative'>
                <input
                    name='password'
                    onChange={(e) => handleData(e)}
                    type={!pass && 'password'}
                    className='formLabel input w-full' placeholder='Contraseña:' />

                <button
                    onClick={() => setPass(!pass)}
                    className='absolute ml-[90%] mt-2'>
                    {
                        !pass ?
                            <FaRegEye color='gray' size={20} />
                            :
                            <FaRegEyeSlash color='gray' size={20} />
                    }
                </button>
            </div>
            <div className='w-full flex items-center justify-center p-2 mt-4'>
                <button
                    onClick={(e) => handleSubmit(e)}
                    disabled={!Object.values(data).every(e => e !== '')}
                    className='bg-primary-blue font-bold text-white py-2 px-6 rounded w-full disabled:bg-[#c7c7c7]'>Confirmar</button>
            </div>

            <div className='p-2 flex items-center justify-center '>
                <button onClick={() => setHaveAccount(false)}>
                    <p className='text-sm font-light '>¿No tienes una cuenta? <strong> Registrate aqui.</strong></p>
                </button>
            </div>

            <div className='p-2'>
                <p className='text-sm font-light'>Lea nuestros <strong className='text-primary-blue font-semibold'><Link to="/terminosycondiciones">Terminos y Condiciones</Link></strong></p>
            </div>
        </section>
    )
}

export default FormLogin
