import React from 'react'
import Product from './Product';
import background from '../../assets/bakground/bgproducts.png'
import { products } from '../../API/Productos/Productos';


const Products = () => {
 

    const style = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div style={style} className='w-screen min-h-screen overflow-hidden flex flex-col justify-around gap-4 items-center text-xs font-sans pt-20 pb-8 md:pb-0 px-8 md:px-2 max-[600px]:px-2' id='products'>
            <div className='flex flex-wrap justify-center gap-5 items-center'>
                {products.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
            
        </div>
    )
}

export default Products;