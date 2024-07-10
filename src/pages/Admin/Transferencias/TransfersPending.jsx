import React, { useEffect, useState } from 'react'
import TransfersCard from './TransfersCard'
import { useDispatch, useSelector } from 'react-redux';
import { getPendingTransferThunk, updateTransferThunk } from '../../../features/paymentSlice/paymentThunks';
import { updateUserThunk } from '../../../features/User/userThunks';
import { createToast } from '../../../features/toastSlice/toastSlice';
import { BiRefresh } from 'react-icons/bi';

const TransfersPending = () => {
  const { transferencias_pendientes } = useSelector(state => state.payment)
  const dispatch = useDispatch();
  const handleChangeState = (id, value, user_id, token) => {
    dispatch(updateTransferThunk({ id: id, status: value }));
    if (value === 'aprobada') {
      dispatch(updateUserThunk({ id: user_id, status: '1',user_token: token }));
      dispatch(createToast('Usuario aprobado'));
      return;
    } else {
      dispatch(updateUserThunk({ id: user_id, status: '0' }));
      dispatch(createToast('Usuario rechazado'));
      return;
    }
  };
  const [refresh, setRefresh] = useState(true)
  const handleRefresh = () => {
    dispatch(createToast('Cargando..'));
    setTimeout(() => {
      setRefresh(true)
    }, 2000)
  }
  useEffect(() => {
    if(refresh){
      setRefresh(false);
      const getTransfers = async () => {
        try {
          await dispatch(getPendingTransferThunk())
        } catch (error) {
          console.log(error)
        }
      }
      getTransfers()
    }
  }, [refresh])

  return (
    <div className='layout background flex items-center  justify-start flex-col p-4'>

      <section className='flex w-full items-start justify-center flex-col'>
        <h3 className='text-2xl font-bold text-primary-blue p-4'>Transferencias Pendientes de Revisión</h3>
        <button onClick={handleRefresh} className='px-4 py-2 bg-primary-blue text-white rounded-lg shadow-lg self-end flex gap-1 justify-center items-center'>
          <p className='font-bold'>Refrescar</p>
          <BiRefresh size={25} className={`${refresh ? ' animate-spin ' : ''}`}/>
        </button>


        {/* <div className='flex items-center justify-center p-2'>
      <div className='p-2 mr-2'>
        <input className='formLabel search' placeholder='Nombre, DNI, Poliza...'/>
      </div>

      <div className='p-2'>
        <p className='text-sm font-bold mb-2'>Filtro:</p>
        <span className='w-auto px-3 py-1 bg-primary-blue font-bold text-white rounded'>Maximo cheng x</span>
      </div>
      </div> */}

      </section>

      <section className=' w-full h-[85vh] flex items-center justify-center' >
        {
          transferencias_pendientes && transferencias_pendientes?.length > 0 ?
            (
              <ul className='w-full h-full overflow-y-scroll p-2  '>
                {transferencias_pendientes.map((t) => (
                  <TransfersCard refresh={refresh} handleChangeState={handleChangeState} key={t.id} id={t.id} user_id={t.user_id} email={t.user_email} nombre={t.user_login} n_referencia={t.n_referencia} monto={t.monto} fecha_pago={t.fecha_pago} estado={t.status} token={t.user_token} />
                ))}
              </ul>
            )
            :
            <h3 className='text-center self-start mt-10'>No hay transferencias pendientes de revisión...</h3>
        }
      </section>
    </div>
  )
}

export default TransfersPending;