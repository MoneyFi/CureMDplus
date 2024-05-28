import Toast from './Toast.jsx';
import { useSelector } from 'react-redux';

export default function Toasts() {
  const { toasts } = useSelector((state) => state.toast);

  return (
    <div className='w-screen flex flex-col fixed bottom-0 mb-2 justify-center items-center gap-3 z-50'>
        {toasts?.map(t => (
            <Toast key={t.id} id={t.id} text={t.text}/>
        ))}
    </div>
  )
}