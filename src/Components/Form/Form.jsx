import { useState } from 'react'
import Logo from '../../assets/icons/Logo_bco.png'
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Form = () => {
    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);

    const toggleShowPass1 = () => {
        setShowPass1(!showPass1);
        document.getElementById("password").type = showPass1 ? "password" : "text";
    };

    const toggleShowPass2 = () => {
        setShowPass2(!showPass2);
        document.getElementById("password-repeat").type = showPass2 ? "password" : "text";
    }

    return (
        <section className='flex flex-col items-center justify-center fixed h-screen w-screen backdrop-blur-sm z-40 overflow-x-auto'>
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col min-w-[250px]:full max-w-[460px] justify-start items-center bg-white text-black rounded-2xl shadow-lg'>
                <div className='text-3xl w-full bg-secondary-blue text-white flex justify-center items-center h-28 rounded-t-lg'>
                    <img src={Logo} alt="logo" className='w-60' />
                </div>
                <article className='w-full h-full py-4 px-10 flex flex-col justify-center items-left text-lg text-roboto gap-2 bg-none'>
                    <div className='flex flex-col justify-center items-left w-full'>
                        <label htmlFor="name" className='text-varela text-secondary-blue'>Nombre Completo</label>
                        <input placeholder='Guillermo Peréz' type="text" name="name" id="name" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' />
                    </div>
                    <div className='flex flex-col justify-center items-left w-full'>
                        <label htmlFor="email" className='text-varela text-secondary-blue'>Correo Electronico</label>
                        <input placeholder='mail@example.com' type="email" name="email" id="email" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' />
                    </div>
                    <div className='flex flex-col justify-center items-left w-full'>
                        <label htmlFor="tel" className='text-varela text-secondary-blue'>Numero de Telefono</label>
                        <div className='flex justify-center items-center w-full gap-1'>
                            <div className='w-auto text-white rounded border border-secondary-blue bg-secondary-blue px-2 py-1'>+54</div>
                            <input placeholder='123456789' type="tel" name="tel" id="tel" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-left w-full'>
                        <label htmlFor="password" className='text-varela text-secondary-blue'>Contraseña</label>
                        <div className='flex justify-center items-center w-full gap-1'>
                            <input placeholder='******' type="password" name="password" id="password" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' />
                            <button
                                className='w-auto h-9 text-white rounded border border-secondary-blue bg-secondary-blue px-2 py-1'
                                onClick={toggleShowPass1}>{showPass1 ?
                                    <FaEye />
                                    :
                                    <FaEyeSlash />
                                }</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-left w-full'>
                        <label htmlFor="password-repeat" className='text-varela text-secondary-blue'>Repetir Contraseña</label>
                        <div className='flex justify-center items-center w-full gap-1'>
                            <input placeholder='******' type="password" name="password-repeat" id="password-repeat" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' />
                            <button
                                className='w-auto h-9 text-white rounded border border-secondary-blue bg-secondary-blue px-2 py-1'
                                onClick={toggleShowPass2}>{showPass2 ?
                                    <FaEye />
                                    :
                                    <FaEyeSlash />
                                }</button>
                        </div>
                    </div>
                    <hr className='w-full border-[#E0E0E0] my-2' />
                    <p className='text-roboto text-[#969696] text-sm text-center'>Ya tienes una cuenta? <a href="#" className='text-[#000000] font-bold font-roboto'>Inicia Sesion</a></p>
                    <hr className='w-full border-[#E0E0E0] my-2' />
                    <button type='submit' className='w-full bg-secondary-blue text-white font-bold font-sans text-lg rounded-lg py-2 transition-all hover:bg-primary-blue focus:bg-primary-blue'>Registrarse</button>
                    <p className='text-roboto text-[#969696] text-sm text-center'>o tambien puedes registrarte con:</p>
                    <button className='w-full bg-white text-[#000000] text-center flex justify-center items-center gap-3 border border-[#E0E0E0] font-bold font-sans text-lg rounded-lg py-2 max-h-[2.4em] transition-all hover:bg-secondary-blue hover:text-white'>
                        <FaGoogle />
                        Google
                    </button>
                    <p className='text-roboto text-[#969696] text-sm text-center'>Al registrarse, usted acepta nuestros <a href="#" className='text-[#000000] font-bold font-roboto'>Terminos de Servicio</a> y <a href="#" className='text-[#000000] font-bold font-roboto'>Politicas de Privacidad</a></p>
                </article>
            </form>
        </section>
    )
}

export default Form
