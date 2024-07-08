import React, { useEffect } from 'react'
import { products } from '../../../API/Productos/Productos'
import ProductosCards from './ProductosCards'
import { useParams } from 'react-router-dom'

const ProductsWrapper = () => {
    const {id} = useParams()

    const producto = id === 'todos'? products :  products.filter((el)=> el.title === id)

    useEffect(()=>{
        
    },[id])

   
    return (
        <div  className='flex flex-col justify-around gap-4 items-center text-xs font-sans pt-10 pb-8 md:pb-0 px-8 md:px-2 max-[600px]:px-2' id='products'>
            <div className='flex flex-wrap justify-center gap-5 items-center'>
                {producto.map((product, index) => (
                    <ProductosCards key={index} product={product} />
                ))}
            </div>
            
        </div>
    )
}

export default ProductsWrapper