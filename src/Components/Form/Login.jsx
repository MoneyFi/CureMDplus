import { useEffect, useState } from 'react'
import Logo from '../../assets/icons/Logo_bco.png'
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../../features/User/userThunks';
import { createToast } from '../../features/toastSlice/toastSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = ({ handleAction, nextStep, prevStep }) => {
    const [showPass1, setShowPass1] = useState(false);
    const { pathname } = useLocation()
    const nav = useNavigate()
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { response, status } = useSelector(state => state.user)
    const [body, setBody] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBody({
            ...body,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginUserThunk(body));
        setLoading(true)
    }

    const toggleShowPass1 = () => {
        setShowPass1(!showPass1);
        document.getElementById("password").type = showPass1 ? "password" : "text";
    };

    useEffect(() => {
        if(loading){
            if(response === 'fail_password') {
                dispatch(createToast('La contraseña es incorrecta'))
                setLoading(false)
                return;
            }
            if(response === 'fail_email') {
                dispatch(createToast('El email no se encuentra registrado'))
                setLoading(false)
                return;
            }
            if(response === 'success') {
                dispatch(createToast('Inicio de sesion exitoso'))
                if (pathname === '/payment'){
                    setLoading(false)
                    nextStep()
                    return;
                }
                setLoading(false)
                handleAction()
                return;
            }
            dispatch(createToast('Hubo un fallo en el servidor, porfavor intentelo mas tarde'))
            setLoading(false)
            return;
        }
    },[loading])

    return (
        <section className='flex flex-col items-center justify-center h-screen w-screen'>
            {pathname === '/payment' && <button className='absolute top-5 left-5 text-lg text-secondary-blue' onClick={() => nav(-1)}>Salir</button>}
            <form onSubmit={handleSubmit} className='flex flex-col min-w-[250px]:full max-w-[460px] justify-start items-center bg-white text-black rounded-lg shadow-lg z-50'>
                <div className='text-3xl w-full bg-primary-blue text-white flex justify-center items-center h-28 pt-5 rounded-t-lg'>
                    <div>
                        <img src={Logo} alt="logo" className='w-60' />
                    </div>
                </div>
                <article className='w-full h-full py-4 px-10 flex flex-col justify-center items-left text-lg text-roboto gap-2 bg-none'>
                    <div className='flex flex-col justify-center items-left w-full'>
                        <label htmlFor="email" className='text-varela text-secondary-blue'>Correo Electronico</label>
                        <input onChange={handleChange} type="email" name="email" id="email" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' />
                    </div>
                    <div className='flex flex-col justify-center items-left w-full'>
                        <label htmlFor="password" className='text-varela text-secondary-blue'>Contraseña</label>
                        <div className='flex justify-center items-center w-full gap-1'>
                            <input onChange={handleChange} type="password" name="password" id="password" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' />
                            <span
                                className='w-auto h-9 text-white rounded border border-secondary-blue bg-secondary-blue px-2 py-1 cursor-pointer flex justify-center items-center'
                                onClick={toggleShowPass1}>{showPass1 ?
                                    <FaEye />
                                    :
                                    <FaEyeSlash />
                                }</span>
                        </div>
                    </div>
                    <hr className='w-full border-[#E0E0E0] my-2' />
                    <p className='text-roboto text-[#969696] text-sm text-center'>No tienes una cuenta? <span onClick={pathname === '/payment' ? prevStep : handleAction}
                    className='text-[#000000] font-bold font-roboto cursor-pointer'>
                        {pathname === '/payment' ? 'Registrate' : 'Adquiere un producto para crear tu cuenta'}
                    </span></p>
                    <hr className='w-full border-[#E0E0E0] my-2' />
                    <button disabled={!Object.values(body).every(value => value !== null && value !== "")} type='submit' className='w-full bg-secondary-blue text-white font-bold font-sans text-lg rounded-lg py-2 transition-all hover:bg-primary-blue focus:bg-primary-blue disabled:bg-alternate'>Iniciar Sesion</button>
                    {/* <p className='text-roboto text-[#969696] text-sm text-center'>o tambien puedes ingresar con:</p>
                    <button className='w-full bg-white text-[#000000] text-center flex justify-center items-center gap-3 border border-[#E0E0E0] font-bold font-sans text-lg rounded-lg py-2 max-h-[2.4em] transition-all hover:bg-secondary-blue hover:text-white'>
                        <FaGoogle />
                        Google
                    </button> */}
                    <p className='text-roboto text-[#969696] text-sm text-center'>Léa nuestros <Link to="/terminosycondiciones" className='text-[#000000] font-bold font-roboto'>Terminos y Condiciones</Link></p>
                </article>
            </form>
        </section>
    )
}

export default Login
