import React, { useEffect, useState } from 'react'
import { FaFileArrowDown } from "react-icons/fa6";
import { FaFileArrowUp } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { createToast } from '../../features/toastSlice/toastSlice';
import { uploadPdfThunk } from '../../features/User/userThunks';

const FormJurada = ({ setJurada }) => {
    const { response } = useSelector((state) => state.user)
    const register = JSON.parse(localStorage.getItem('register'))
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState(null);
    const [page, setPage] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch()
    const handleDownload = () => {
        dispatch(createToast('Descargando Declaracion Jurada...'))
    }

    const handleUploadFile = () => {
        const maxFileSize = 5 * 1024 * 1024;  // 5 MB en bytes
        if (file.size > maxFileSize) {
            document.getElementById('response').innerText = `El archivo es muy pesado. Tamaño máximo permitido: 5 MB.  Tamaño de archivo: ${(file.size / (1024 * 1024)).toFixed(2)} MB.`;
            return;
        }
        dispatch(createToast('Subiendo archivo...'))
        dispatch(uploadPdfThunk(file))
        setTimeout(() => {
            setLoading(true)
        }, 2000)
    }

    useEffect(() => {
        if(loading){
            if(response === 'success'){
                dispatch(createToast('Archivo subido correctamente'))
                setDisabled(false)
            }
            if(response === 'fail'){
                dispatch(createToast('Error al subir archivo, volver a intentar'))
            }
        }
    }, [loading])

    return (
        <>
            {page === 0 ? (
                <section className={`flex flex-col min-w-[400px] items-center justify-center max-[800px]:mt-[120px]  max-[400px]:p-4 gap-6 `} >
                    <h1 className='text-2xl md:text-3xl text-secondary-blue font-bold'>Bienvenidos a CureMD+</h1>
                    <p className='text-xs text-wrap w-2/3 text-center px-4 md:text-sm font-roboto text-[#5c5b5c]'>Como primer paso, debes descargar y completar la Declaración Jurada de Salud que figura a continuación.</p>
                    <a href='/Declaración_Jurada_de_Salud.pdf' onClick={handleDownload} download={`D.J. de Salud - ${register.nombre + ' ' + register.apellido + ' ' + register.cuil}.pdf`} target="_blank" rel="noopener noreferrer" className='py-3 px-5 text-lg bg-primary-blue rounded-lg text-white flex gap-3 justify-center items-center cursor-pointer'>
                        <FaFileArrowDown size={20} />
                        <p>Descargar Declaracion Jurada</p>
                    </a>
                    <p className='text-xs text-wrap w-2/3 text-center px-4 md:text-sm font-roboto text-[#5c5b5c]'>Una vez la Declaración Jurada sea completada, deberas subir el archivo para continuar.</p>
                    <button
                        onClick={() => setPage(1)}
                        className='py-3 px-5 text-lg text-primary-blue rounded-lg bg-white border border-secondary-blue flex justify-center items-center gap-2 hover:bg-primary-blue hover:text-white transition-colors'>
                        <p>Entendido</p>
                    </button>
                </section>
            ) : (
                <section className={`flex flex-col min-w-[400px] items-center justify-center max-[800px]:mt-[120px]  max-[400px]:p-4 gap-6 `} >
                    <button className='py-1 px-3 text-sm md:self-start text-primary-blue rounded-lg bg-white border border-secondary-blue flex justify-center items-center gap-2 hover:bg-primary-blue hover:text-white transition-colors' onClick={() => setPage(0)}>Atras</button>
                    <p className='text-xs text-wrap w-2/3 text-center px-4 md:text-sm font-roboto text-[#5c5b5c]'>Solo se aceptan archivos en formato PDF y su tamaño no debe ser mayor a 5 MB.</p>
                    <input type="file" name="pdf" id="pdf" onChange={(e) => setFile(e.target.files[0])} accept="application/pdf"  max={1} className='text-[#5c5b5c] font-bold px-5 py-3 bg-white rounded-lg border border-primary-blue file:bg-primary-blue file:text-white file:outline-none file:border-0 file:px-3 file:py-1 cursor-pointer w-2/3' />
                    <p className='text-xs text-wrap w-2/3 text-center px-4 md:text-sm font-roboto text-[#5c5b5c]' id='response'></p>
                    <button onClick={handleUploadFile} disabled={file === null} className='py-3 px-5 text-lg bg-primary-blue rounded-lg text-white flex gap-3 justify-center items-center disabled:cursor-not-allowed'>
                        <FaFileArrowUp size={20} />
                        <p>Subir Declaración Jurada</p>
                    </button>
                    <button className='py-3 px-5 text-lg text-primary-blue rounded-lg bg-white border border-secondary-blue flex justify-center items-center gap-2 hover:bg-primary-blue hover:text-white transition-colors disabled:cursor-not-allowed disabled:text-[#5c5b5c] disabled:hover:bg-white disabled:border-[#5c5b5c]' disabled={disabled} onClick={() => setJurada(false)}>Continuar con el pago</button>
                </section>
            )};
        </>
    )
}

export default FormJurada
