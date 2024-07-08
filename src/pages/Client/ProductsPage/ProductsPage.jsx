import React from 'react'
import Icono from '../../../Components/Icono/Icono'
import ProductsWrapper from './ProductsWrapper'

const ProductsPage = () => {
  return (
    <section className='layout background flex items-center justify-center flex-col p-4'>
        <Icono/>
        <>
        <p className=''>Adquiere ahora tu plan <strong className='text-primary-blue'>CureMD +</strong></p>
        </>
        <ProductsWrapper/>
    </section>
  )
}

export default ProductsPage