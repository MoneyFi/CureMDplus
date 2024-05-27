import { useState, useEffect } from 'react'
import Logo from '../../assets/icons/Logo_bco.png'
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk } from '../../features/User/userThunks';

const Register = ({ handleAction }) => {
    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);
    const dispatch = useDispatch();
    const { response, status } = useSelector(state => state.user);
    const [loading, setLoading] = useState(false);

    const toggleShowPass1 = () => {
        setShowPass1(!showPass1);
        document.getElementById("password").type = showPass1 ? "password" : "text";
    };

    const toggleShowPass2 = () => {
        setShowPass2(!showPass2);
        document.getElementById("password-repeat").type = showPass2 ? "password" : "text";
    }

    const [body, setBody] = useState({
        name:"",
        lastname:"",
        email:"",
        mobile_number:"",
        adreess:"",
        country:"",
        country_code:"",
        city:"",
        password:"",
        gender:"",
        dob:"",
        age:"",
        cuil:""
    })

    const handleForm = (e) => {
        const { name, value } = e.target;
        setBody({
            ...body,
            [name]: value
        });
        if (name === 'dob') {
            const dateNow = new Date();
            const dob = new Date(value);
            let age = dateNow.getFullYear() - dob.getFullYear();
            const monthDiff = dateNow.getMonth() - dob.getMonth();
            const dayDiff = dateNow.getDate() - dob.getDate();
            // Ajuste si el cumpleaños aún no ha ocurrido este año
            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
            }
            setBody({
                ...body,
                age: age,
                [name]: value
            })
        }
        if (name === 'country_code') {
            setBody({
                ...body,
                [name]: `+${value}`
            })
        }
    };

    const samePassword = (e) => {
        if(e.target.value !== body.password) {
            return setDiferentPass("Contraseña Distinta")
        } else {
            return setDiferentPass(null)
        }
    }

    const [diferentPass, setDiferentPass] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(registerUserThunk(body))
        setLoading(true)
    }

    useEffect(() => {
        if(loading){
            if(response === 'fail') {
                alert('Hubo un error en el servidor, porfavor intentelo de nuevo')
                setLoading(false)
            }
            if(response === 'repeat') {
                alert('El email ya se encuentra registrado')
                setLoading(false)
            }
            if(response === 'success') {
                alert('Usuario registrado con exito, ya puedes iniciar sesión')
                setLoading(false)
                handleAction()
            }
        }
    },[status])

    return (
        // <section className='flex flex-col items-center justify-center fixed h-screen w-screen backdrop-blur-sm z-40'>
        <form onSubmit={handleSubmit} className='flex flex-col min-w-[250px]:full max-w-[460px] mt-60 justify-start items-center bg-white text-black rounded-2xl shadow-lg z-50'>
            <div className='w-full bg-primary-blue text-white flex justify-center items-center py-2 rounded-t-lg'>
                <img src={Logo} alt="logo" className='w-60' />
            </div>
            <article className='w-full h-full py-4 px-10 flex flex-col flex-wrap justify-center items-left text-base text-roboto gap-1 bg-none'>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="name" className='text-varela text-secondary-blue'>Nombre</label>
                    <input placeholder='Ej: Guillermo' type="text" name="name" id="name" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' onChange={handleForm} />
                </div>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="lastname" className='text-varela text-secondary-blue'>Apellido</label>
                    <input placeholder='Ej: Peréz' type="text" name="lastname" id="lastname" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' onChange={handleForm} />
                </div>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="cuil" className='text-varela text-secondary-blue'>Cuil</label>
                    <input placeholder='Ej: 23-34567856-9' type="text" name="cuil" id="cuil" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' onChange={handleForm} />
                </div>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="gender" className='text-varela text-secondary-blue'>Genero</label>
                    <select name="gender" id="gender" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black bg-white' defaultValue="" onChange={handleForm} >
                        <option disabled value="">Elegi tu genero</option>
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Prefiero no decirlo</option>
                    </select>
                </div>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="email" className='text-varela text-secondary-blue'>Correo Electronico</label>
                    <input placeholder='Ej: mail@example.com' type="email" name="email" id="email" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' onChange={handleForm} />
                </div>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="country" className='text-varela text-secondary-blue'>Pais</label>
                    <input placeholder='Ej: Argentina' type="text" name="country" id="country" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' onChange={handleForm} />
                </div>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="city" className='text-varela text-secondary-blue'>Ciudad</label>
                    <input placeholder='Ej: La Plata' type="text" name="city" id="city" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' onChange={handleForm} />
                </div>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="adreess" className='text-varela text-secondary-blue'>Direccion</label>
                    <input placeholder='Ej: Calle 7 N° 776' type="text" name="adreess" id="adreess" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' onChange={handleForm} />
                </div>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="dob" className='text-varela text-secondary-blue'>Fecha de Nacimiento</label>
                    <input type="date" name="dob" id="dob" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' onChange={handleForm} />
                </div>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="mobile_number" className='text-varela text-secondary-blue'>Numero de Telefono</label>
                    <div className='flex justify-center items-center w-full gap-1'>
                        <div className='w-1/4 text-base flex justify-center items-center gap-1 text-white rounded border border-secondary-blue bg-secondary-blue px-2 py-1'>
                            <span>+</span>
                            <input className='font-sans w-full text-white bg-secondary-blue focus:outline-none text-center' placeholder='Ej: 54' type='text' name='country_code' id='country_code' onChange={handleForm} />
                        </div>
                        <input placeholder='Ej: 123456789' type="tel" name="mobile_number" id="mobile_number" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' onChange={handleForm} />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="password" className='text-varela text-secondary-blue'>Contraseña</label>
                    <div className='flex justify-center items-center w-full gap-1'>
                        <input placeholder='******' type="password" name="password" id="password" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' onChange={handleForm} />
                        <span
                            className='w-auto h-8 flex justify-center items-center text-white rounded border border-secondary-blue bg-secondary-blue px-2 py-1 cursor-pointer'
                            onClick={toggleShowPass1}>{showPass1 ?
                                <FaEye />
                                :
                                <FaEyeSlash />
                            }</span>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-left w-full'>
                    <label htmlFor="password-repeat" className='text-varela text-secondary-blue'>Confirmar Contraseña {diferentPass && <span className='text-xs ml-1 md:ml-3 text-[#b92929]'>{diferentPass}</span>}</label>
                    <div className='flex justify-center items-center w-full gap-1'>
                        <input placeholder='******' type="password" name="password-repeat" id="password-repeat" className='w-full rounded border border-[#E0E0E0] px-2 py-1 focus:outline-secondary-blue font-sans text-black placeholder:text-[#969696]' onChange={samePassword} />
                        <span
                            className='w-auto h-8 flex justify-center items-center text-white rounded border border-secondary-blue bg-secondary-blue px-2 py-1 cursor-pointer'
                            onClick={toggleShowPass2}>{showPass2 ?
                                <FaEye />
                                :
                                <FaEyeSlash />
                            }</span>
                    </div>
                </div>
                <hr className='w-full border-[#E0E0E0] my-2' />
                <p className='text-roboto text-[#969696] text-sm text-center'>Ya tienes una cuenta? <span onClick={handleAction} className='text-[#000000] font-bold font-roboto cursor-pointer'>Inicia Sesion</span></p>
                <hr className='w-full border-[#E0E0E0] my-2' />
                <button type='submit' className='w-full bg-secondary-blue text-white font-bold font-sans text-lg rounded-lg py-2 transition-all hover:bg-primary-blue focus:bg-primary-blue '>Registrarse</button>
                {/* <p className='text-roboto text-[#969696] text-sm text-center'>o tambien puedes registrarte con:</p>
                <button className='w-full bg-white text-[#000000] text-center flex justify-center items-center gap-3 border border-[#E0E0E0] font-bold font-sans text-lg rounded-lg py-2 max-h-[2.4em] transition-all hover:bg-secondary-blue hover:text-white'>
                    <FaGoogle />
                    Google
                </button> */}
                <p className='text-roboto text-[#969696] text-sm text-center'>Al registrarse, usted acepta nuestros <a href="#" className='text-[#000000] font-bold font-roboto'>Terminos y Condiciones</a></p>
            </article>
        </form>
        /* </section> */
    )
}

export default Register
