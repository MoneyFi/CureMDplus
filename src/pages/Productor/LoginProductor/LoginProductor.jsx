import React, { useState } from 'react'
import logo from '../../../assets/icons/Logo_Azul.png'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { signInProductor } from '../../../API/Productores/Productores'
import { useNavigate } from 'react-router-dom';

const LoginProductor = () => {
    const navigate = useNavigate()
    const [pass, setPass] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const dataHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        await signInProductor(formData, navigate);
    };

    return (
        <div className='layout background flex items-center justify-center flex-col'>
            <div className='w-[200px]'>
                <img src={logo} alt='logo' />
            </div>

            <section className='flex flex-col min-w-[400px] items-center justify-center max-[400px]:p-4'>
                <form className='w-full' onSubmit={handleSubmit}>

                <div className='formLabel label'>
                        <input
                            onChange={dataHandler}
                            name='email'
                            value={data.email}
                            className='formLabel input w-full'
                            placeholder='Correo electrónico:'
                        />
                    </div>

                    <div className='formLabel label w-full relative'>
                        <input
                            name='password'
                            value={data.password}
                            onChange={dataHandler}
                            type={!pass ? 'password' : 'text'}
                            className='formLabel input w-full'
                            placeholder='Contraseña:'
                        />
                        <button
                            type='button'
                            onClick={() => setPass(!pass)}
                            className='absolute ml-[90%] mt-2'
                        >
                            {!pass ? <FaRegEye color='gray' size={20} /> : <FaRegEyeSlash color='gray' size={20} />}
                        </button>
                    </div>

                   

                    <div className='w-full flex items-center justify-center p-2 mt-4'>
                        <button
                            type='submit'
                            disabled={!Object.values(data).every(e => e !== '')}
                            className='bg-primary-blue font-bold text-white py-2 px-6 rounded w-full disabled:bg-[#c7c7c7]'
                        >
                            Ingresar
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default LoginProductor;