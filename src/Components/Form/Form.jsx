import { useState } from 'react'
import Register from './Register';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../features/formSlice/formSlice';
import { MdCancel } from "react-icons/md";

const Form = () => {
    const [register, setRegister] = useState(true);
    const handleAction = () => {
        setRegister(!register);
    };
    const dispatch = useDispatch()
    return (
        <section className='flex items-center justify-center fixed h-screen w-screen backdrop-blur-sm z-40 overflow-y-scroll top-0 left-0 py-2 md:pt-12'>
        {register ? <Register handleAction={handleAction} /> : <Login handleAction={handleAction} />}
        <button
        onClick={() => dispatch(changeForm(false))}
        className='absolute z-50 top-20 left-7 text-base flex justify-center items-center rounded-full md:top-5 md:left-5 text-[#df0d0d] bg-white'>
            <MdCancel size={25} />
        </button>
        </section>
    )
}

export default Form
