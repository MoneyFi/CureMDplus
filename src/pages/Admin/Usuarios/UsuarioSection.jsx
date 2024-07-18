import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createToast } from '../../../features/toastSlice/toastSlice';
import { meses } from '../../../API/meses';
import { uploadCertificateThunk } from '../../../features/User/userThunks';
import GenerateCsv from './generateCsv';

const UsuarioSection = () => {
    const { response, errorFiles } = useSelector(state => state.user)
    const [subir, setSubir] = useState(false);
    const [loading, setLoading] = useState(false);
    const [certificados, setCertificados] = useState([]);
    const dispatch = useDispatch();

    const submitForm = () => {
        if(!subir){
            setSubir(true)
            return;
        }
        dispatch(createToast('Subiendo certificados...'));
        const date = new Date();
        let month = date.getMonth();
        let year = date.getFullYear();
        dispatch(uploadCertificateThunk({ files: certificados, month: meses[month + 1], year }));
        setTimeout(() => {
            setLoading(true)
        }, 2000);
    }
    const handleChange = (event) => {
        setCertificados(event.target.files);
    }

    useEffect(() => {
        if(loading){
            if(response === 'success'){
                setLoading(false);
                setSubir(false);
                dispatch(createToast('Certificados subidos exitosamente'));
            }
            if (response === 'fail'){
                dispatch(createToast('No se pudo subir los certificados'))
                setLoading(false);
                errorFiles?.map(e => dispatch(createToast(`Error al subir certificado ${e.file}`)))
            }
            if (response === 'error'){
                setLoading(false);
                dispatch(createToast('Fallo en el servidor, intentelo de nuevo'))
            }
        }
    },[loading])
    return (
        <div className='layout background flex items-center  justify-start flex-col p-4'>
            <section className='flex w-full items-start justify-center flex-col'>
                <h1 className='text-2xl font-bold text-primary-blue p-4'>Usuarios de CureMD+</h1>
                <button
                onClick={submitForm}
                className='text-lg font-varela py-2 px-5 bg-primary-blue text-white self-end'>{
                    subir ? 'Confirmar' : 'Subir Certificados'
                    }</button>
            </section>
            {
                subir ? 
                <>
                <div className='w-5/6 my-4 py-3 px-4 shadow rounded-lg text-sm'>
                    <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Seleccione todos los archivos a subir y luego oprima 'Confirmar'</label>
                    <input onChange={handleChange} type="file" name="files[]" multiple className="shadow appearance-none bg-secondary-blue rounded w-full py-2 px-3 file:appearance-none file:bg-white file:px-4 file:py-2 file:outline-none file:border-none file:rounded-sm file:shadow-sm file:font-roboto text-white leading-tight focus:outline-none focus:shadow-outline file:hover:cursor-pointer" />
                </div>
                </> 
                : ''
            }
            <GenerateCsv/>
        </div>
    )
}

export default UsuarioSection
