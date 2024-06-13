import React from 'react'

const LoginRegister = ({setExists,setHaveAccount}) => {
  return (
    <section className='fixed backdrop-blur-sm z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>
    <div className='absolute z[60] w-3/4 md:w-2/4 h-2/4 flex flex-col items-center justify-around px-5 py-2 bg-white rounded-md shadow-lg'>
        <div>
            <p className='text-xl font-varela font-bold text-center'>Ya existe un usuario con este correo</p>
            <p className='text-xl font-varela font-bold text-center text-secondary-blue'>¿Tienes una cuenta en CureMd o CureMdPlus?</p>
        </div>
        <div className='w-full flex items-center justify-around'>
            <button onClick={() => {
                setExists(false)
                setHaveAccount(true)
                }} className='bg-white text-secondary-blue border border-secondary-blue py-2 px-5 shadow-lg font-bold hover:bg-secondary-blue hover:text-white transition-colors'>Iniciar Sesion</button>
            <button onClick={() => setExists(false)} className='bg-white text-secondary-blue border border-secondary-blue py-2 px-5 shadow-lg font-bold hover:bg-secondary-blue hover:text-white transition-colors'>Probar otro correo</button>
        </div>
    </div>
</section>
  )
}

export default LoginRegister