import React, { useEffect, useState } from 'react'
import { IoMdCheckbox } from "react-icons/io";

const TransfersCard = ({ id, user_id, nombre, n_referencia, monto, fecha_pago, estado, email, handleChangeState, refresh, token }) => {

    function formatearMonto(numero) {
        numero = Number(numero)
        return numero.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        });
    }

    const [status, setStatus] = useState(null)

    const onChange = (e) => {
        e.preventDefault()
        setStatus(e.target.value)
    };

    const handleConfirmar = () => {
        handleChangeState(id, status, user_id, token);
    }

    useEffect(() => {},[refresh])

    return (
        <li className='w-full p-4 bg-[#d9d9d9] rounded flex items-center justify-around text-sm mb-2 max-[750px]:flex-col max-[750px]:items-start'>

            <div className='flex w-[30%] p-2 justify-between items-center max-[750px]:w-full'>
                <div className='flex flex-col items-start'>
                    <p className='font-bold text-primary-blue'>{
                        nombre
                            .split('.')
                            .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
                            .join(' ')
                    } </p>
                    <p className=''>{email}</p>
                </div>

                <div>
                    <p className='font-bold text-primary-blue'>N° de Referencia:</p>
                    <p>{n_referencia}</p>
                </div>
            </div>


            <div className='p-2' >
                <p className='font-bold text-primary-blue'>Monto Transferido:</p>
                <p>{formatearMonto(monto)}</p>
            </div>


            <div className='flex p-2 w-[30%] justify-between items-center max-[750px]:w-full'>
                <div>
                    <p className='font-bold text-primary-blue'>Fecha de Pago:</p>
                    <p>{new Date(fecha_pago).toLocaleString().split(',')[0]}</p>
                </div>

                <select name="status" id="" defaultValue={estado} onChange={onChange} className={` text-white border border-primary-blue rounded-sm shadow-md px-4 py-2 font-bold ${status === 'aprobada' ? 'bg-[#009700]' : status === 'rechazada' ? 'bg-[#ff0f0f]' : 'bg-primary-blue'}`} >
                    <option value="aprobada">Aprobada</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="rechazada">Rechazada</option>
                </select>
                <button
                disabled={status === estado || status === null}
                title='Guardar Cambios'
                className='text-lg text-secondary-blue hover:text-primary-blue transition-colors disabled:text-[#858686]'
                onClick={handleConfirmar}>
                    <IoMdCheckbox size={30}/>
                </button>
            </div>
        </li>
    )
}

export default TransfersCard;