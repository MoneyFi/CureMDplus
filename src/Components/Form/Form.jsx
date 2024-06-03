import Login from './Login';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../features/formSlice/formSlice';
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const handleAction = () => {
        dispatch(changeForm(false));
        nav('/#products')
    }
    return (
        <section className='flex items-center justify-center fixed h-screen w-screen backdrop-blur-sm z-40 overflow-y-scroll top-0 left-0 py-2 md:pt-12'>
            <Login handleAction={handleAction} />
            <button
                onClick={() => dispatch(changeForm(false))}
                className='absolute z-50 top-20 left-7 text-base flex justify-center items-center rounded-full md:top-5 md:left-5 text-[#df0d0d] bg-white'>
                <MdCancel size={25} />
            </button>
        </section>
    )
}

export default Form
