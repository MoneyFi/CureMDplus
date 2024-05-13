import React from 'react'
import App from '../../App'
import Products from '../../Components/Product/Products'
import Publicity from '../../Components/Publicity/Publicity'

const Landing = () => {
  return (
    <div className='layout background flex flex-col'>
        <App/>
        <Products/>
        <Publicity/>
    </div>
  )
}

export default Landing