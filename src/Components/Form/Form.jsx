import { useState } from 'react'
import Register from './Register';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../features/formSlice/formSlice';

const Form = () => {
    const [register, setRegister] = useState(true);
    const handleAction = () => {
        setRegister(!register);
    };
    const dispatch = useDispatch()
    return (
        <section className='flex items-center justify-center fixed h-screen w-screen backdrop-blur-sm z-40 overflow-x-auto top-0 left-0'>
        {register ? <Register handleAction={handleAction} /> : <Login handleAction={handleAction} />}
        <button
        onClick={() => dispatch(changeForm(false))}
        className='absolute z-50 top-20 left-7 text-white text-base w-5 h-5 flex flex-col justify-center items-center text-center rounded-full md:top-5 md:left-5 bg-[#df0d0d]'>x</button>
        </section>
    )
}

export default Form
