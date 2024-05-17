import { useState } from 'react'
import Logo from '../../assets/icons/Logo_bco.png'
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ handleAction }) => {
    const [showPass1, setShowPass1] = useState(false);

    const toggleShowPass1 = () => {
        setShowPass1(!showPass1);
        document.getElementById("password").type = showPass1 ? "password" : "text";
    };

    return (
        // <section className='flex flex-col items-center justify-center fixed h-screen w-screen backdrop-blur-sm z-40 overflow-x-auto'>
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col min-w-[250px]:full max-w-[460px] justify-start items-center bg-white text-black rounded-2xl shadow-lg z-50'>
                <div className='text-3xl w-full bg-primary-blue text-white flex justify-center items-center h-28 rounded-t-lg'>
                    <img src={Logo} alt="logo" className='w-60' />
                </div>
                <article className='w-full h-full py-4 px-10 flex flex-col justify-center items-left text-lg text-roboto gap-2 bg-none'>
                    <div className='flex flex-col justify-center items-left w-full'>
                        <label htmlFor="email" className='text-varela text-secondary-blue'>Correo Electronico</label>
                        <input type="email" name="email" id="email" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' />
                    </div>
                    <div className='flex flex-col justify-center items-left w-full'>
                        <label htmlFor="password" className='text-varela text-secondary-blue'>Contraseña</label>
                        <div className='flex justify-center items-center w-full gap-1'>
                            <input type="password" name="password" id="password" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' />
                            <button
                                className='w-auto h-9 text-white rounded border border-secondary-blue bg-secondary-blue px-2 py-1'
                                onClick={toggleShowPass1}>{showPass1 ?
                                    <FaEye />
                                    :
                                    <FaEyeSlash />
                                }</button>
                        </div>
                    </div>
                    <hr className='w-full border-[#E0E0E0] my-2' />
                    <p className='text-roboto text-[#969696] text-sm text-center'>No tienes una cuenta? <span onClick={handleAction} className='text-[#000000] font-bold font-roboto cursor-pointer'>Registrate</span></p>
                    <hr className='w-full border-[#E0E0E0] my-2' />
                    <button type='submit' className='w-full bg-secondary-blue text-white font-bold font-sans text-lg rounded-lg py-2 transition-all hover:bg-primary-blue focus:bg-primary-blue'>Iniciar Sesion</button>
                    <p className='text-roboto text-[#969696] text-sm text-center'>o tambien puedes ingresar con:</p>
                    <button className='w-full bg-white text-[#000000] text-center flex justify-center items-center gap-3 border border-[#E0E0E0] font-bold font-sans text-lg rounded-lg py-2 max-h-[2.4em] transition-all hover:bg-secondary-blue hover:text-white'>
                        <FaGoogle />
                        Google
                    </button>
                    <p className='text-roboto text-[#969696] text-sm text-center'>Léa nuestros <a href="#" className='text-[#000000] font-bold font-roboto'>Terminos de Servicio</a> y <a href="#" className='text-[#000000] font-bold font-roboto'>Politicas de Privacidad</a></p>
                </article>
            </form>
        /* </section> */
    )
}

export default Login
