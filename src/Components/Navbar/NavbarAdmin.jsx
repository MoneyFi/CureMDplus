import logo from '../../assets/icons/Logo_Azul.png'
import { RiMenu5Fill } from 'react-icons/ri';
import AdminOptions from './Admin/AdminOptions';
import { useState } from 'react';

const NavbarAdmin = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='h-screen w-[300px] flex min-[1000px]:flex-col items-start p-2 justify-around max-[1000px]:w-full mt-5 max-[1000px]:h-[10vh] max-[1000px]:items-center max-[1000px]:justify-between max-[1000px]:p-2'>
      <div className='w-[200px] p-2 flex items-center self-center justify-center'>
        <img src={logo} alt='logo' className='mt-5' />
      </div>
      <AdminOptions open={open} setOpen={setOpen} />
      <div className='min-[1000px]:hidden p-4' onClick={() => setOpen(!open)}>
        <RiMenu5Fill className='text-primary-blue' size={24} />
      </div>
    </header>
  )
}

export default NavbarAdmin;