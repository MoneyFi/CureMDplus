import { useState } from 'react'
import Register from './Register';
import Login from './Login';

const Form = ({ handleForm }) => {
    const [register, setRegister] = useState(true);

    const handleAction = () => {
        setRegister(!register);
    };

    return (
        <section className='flex items-center justify-center fixed h-screen w-screen backdrop-blur-sm z-40 overflow-x-auto top-0 left-0'>
        {register ? <Register handleAction={handleAction} /> : <Login handleAction={handleAction} />}
        <button onClick={handleForm} className='absolute z-50 top-20 left-7 text-white text-sm w-8 h-8 flex justify-center items-center text-center rounded-full md:top-5 md:left-5 bg-[#df0d0d]'>x</button>
        </section>
    )
}

export default Form
