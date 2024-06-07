import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk, updateUserThunk } from '../../features/User/userThunks';
import { createToast } from '../../features/toastSlice/toastSlice';
import { getProdsThunk } from '../../features/prodSlice/prodThunks';

const FormData = ({ setHaveAccount, setPosition, position }) => {
    const { user_id, response } = useSelector((state) => state.user);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        cuil: '',
        dni_productor: '',
        id: user_id
    });
    const dispatch = useDispatch()
    const [productor, setProductor] = useState(false);
    const { productores } = useSelector((state) => state.prod);
    const handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        dispatch(updateUserThunk(data))
        dispatch(createToast('Subiendo datos...'))
        setTimeout(() => {
            setLoading(true)
        })
    }

    useEffect(() => {
        const fetchProds = async () => {
            dispatch(getProdsThunk())
        }
        fetchProds();
    }, [position, setPosition])


    useEffect(() => {
        if(loading){
            if (response === 'success') {
                dispatch(createToast('Datos actualizados, vuelva a iniciar sesion'))
                setTimeout(() => {
                    setPosition(1)
                    return;
                }, 2000)
            }
            if (response === 'fail') {
                dispatch(createToast('Error al subir datos'))
                return;
            }
        }
    }, [loading])

    return (
        <section className={`flex flex-col min-w-[400px] items-center justify-center max-[800px]:mt-[120px]  max-[400px]:p-4 `} >
            <p className='text-3xl font-light text-secondary-blue mb-16'>Complete los siguientes datos</p>
            <div className='formLabel label '>
                <input
                    onChange={(e) => handleData(e)}
                    name='cuil'
                    className='formLabel input w-full' placeholder='Cuil:' />
            </div>
            <div className='p-2 flex items-center justify-center'>
                <p className='text-sm font-light'>¿ya estas en contacto con un productor? (opcional)</p>
                <input onClick={() => setProductor(!productor)} className='ml-3' type='checkbox' />
            </div>

            {
                productor && (
                    <div className='formLabel label flex-col '>
                        <div className='w-full'>
                            <select
                                name='dni_productor'
                                defaultValue=""
                                onChange={(e) => handleData(e)}
                                className='w-full py-[.3em] px-[.1em] border border-[#c7c7c7] rounded-[5px] max-[800px]:w-full max-[800px]:mb-[.5rem]'>
                                <option disabled value="">Elige tu productor</option>
                                {productores ? productores?.map((p) => (
                                    <option value={p.prod_dni}>{p.prod_name + " " + p.prod_lastname}</option>
                                )) : <option disabled>No hay productores disponibles</option>}
                            </select>
                        </div>
                    </div>
                )
            }
            <div className='w-full flex items-center justify-center p-2 mt-4'>
                <button
                    onClick={(e) => handleSubmit(e)}
                    disabled={!data.cuil || data.cuil === ''}
                    className='bg-primary-blue font-bold text-white py-2 px-6 rounded w-full disabled:bg-[#c7c7c7]'>Confirmar</button>
            </div>
        </section>
    )
}

export default FormData
