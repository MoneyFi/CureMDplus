import React from 'react'
import App from '../../App'
import Products from '../../Components/Product/Products'
import Publicity from '../../Components/Publicity/Publicity'
import About from '../../Components/about/About'

const Landing = () => {
  return (
    <div className='layout background flex flex-col'>
        <App/>
        <Products/>
        <About/>
        <Publicity/>
    </div>
  )
}

export default Landing