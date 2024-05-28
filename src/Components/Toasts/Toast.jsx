import { useState, useEffect } from 'react';
import { deleteToast } from '../../features/toastSlice/toastSlice';
import { useDispatch } from 'react-redux';

export default function Toast({ id, text }) {
    const [currentDisplay, setCurrentDisplay] = useState('flex');
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentDisplay('none');
            dispatch(deleteToast(id));
        }, 3000);

        return () => clearTimeout(timer);
    }, [id, dispatch]);

    return (
        <>
            {currentDisplay === 'flex' && (
                <div
                    style={{ display: currentDisplay }}
                    className='text-center px-3 py-2 font-varela bg-[#e9e1e1ce] rounded-lg text-xs md:text-lg text-[#000] toastContainer shadow'
                    onClick={() => {
                        setCurrentDisplay('none');
                        dispatch(deleteToast(id));
                    }}>
                    <p>{text}</p>
                </div>
            )}
        </>
    );
}