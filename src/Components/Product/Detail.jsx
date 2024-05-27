import React from 'react'
import doctores from '../../assets/doctores.png'
import logo from '../../assets/icons/logo.png'
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';

const Detail = ({ product, format, handleDetail }) => {
    const style = {
        backgroundImage: `url(${doctores})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return (
        <section className='fixed w-screen h-screen backdrop-blur-sm top-0 right-0 z-30 flex justify-center items-center'>
            <article className='flex flex-nowrap w-[80%] bg-white h-[90vh]  rounded-lg overflow-hidden shadow-xl max-[600px]:w-[90%] '>
                <div style={style} className='w-[0%] md:w-[50%]'></div>
                <div className='w-[100%] h-full md:w-[50%] flex flex-col justify-around items-center py-5 px-10 text-[#000000] text-sm font-roboto gap-4'>
                    <header className='flex flex-col justify-center items-start text-2xl w-full'>
                        <button onClick={handleDetail} className='self-end text-sm w-8 h-8 flex justify-center items-center text-center text-[#df0d0d]'>
                            <MdCancel size={25}/>
                        </button>
                        <div className='text-primary-blue flex items-center gap-2'>
                            <img src={logo} alt="" width={55} className='rounded-full' />
                            <span className='flex gap-1 w-full'>{product.title.split(' ')[0]}<b>{product.title.split(' ')[1]}</b></span>
                        </div>
                        <span className='mt-[-.3em] font-bold font-sans self-center'>{format(product.price)}</span>
                    </header>
                    <hr className='w-full text-primary-blue' />
                    <div className='w-full h-[500px] overflow-y-scroll '>
                    <div className='text-pretty min-w-[100%] font-roboto font-light px-8 text-[12.5px]'>
                        {product.essential.split('_').map((l) => (
                            <li>{l}</li>
                        ))}
                        {product.detail.split('_').map((l) => (
                            <li>{l}</li>
                        ))}
                    </div>

                    </div>
                    <footer className='flex flex-col justify-center items-center gap-2 max-[600px]:w-full'>
                        <button className='text-white bg-primary-blue px-12 py-3 rounded-3xl font-bold hover:bg-secondary-blue transition-all max-[600px]:w-full'>Comprar</button>
                        <Link to='/terminosycondiciones'>Terminos y Condiciones</Link>
                    </footer>
                </div>
            </article>
        </section>
    )
}

export default Detail
