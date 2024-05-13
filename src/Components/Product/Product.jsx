import React from 'react'

const Product = ({ product, index }) => {
    return (
        <>
            <div className='font-sans text-[3.7em] flex gap-2 justify-center items-center text-secondary-blue'>
                <p>{product.title.split(' ')[0]}</p>
                <p className='font-extrabold'>{product.title.split(' ')[1]}</p>
            </div>
            <article className='flex flex-col justify-between items-center py-5 px-10 w-[30em] h-[49em] bg-[#4073B4] text-white rounded-3xl my-9' key={index}>
                <div>
                    <div style={{ lineHeight: '1.23em' }} className='text-[1.23em] text-pretty min-w-[100%] font-sans font-normal '>{product.text.split('_').map((l) => (
                        <li className='my-1'>{l}</li>
                    ))}</div>
                </div>
                <div>
                    <button className='text-primary-blue bg-white px-12 py-3 rounded-3xl font-bold text-[1.4em] hover:bg-primary-blue hover:text-white transition-all'>Comprar</button>
                </div>
            </article>
        </>
    )
}

export default Product
