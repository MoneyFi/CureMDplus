import React from 'react'
import App from '../../App'
import Products from '../../Components/Product/Products'
import Publicity from '../../Components/Publicity/Publicity'
import About from '../../Components/about/About'
import Faqs from '../FaqsPage/Faqs'

const Landing = () => {
  return (
    <div className='layout background flex flex-col'>
        <App/>
        <Products/>
        <About/>
        <Publicity/>
        <Faqs/>
    </div>
  )
}

export default Landing