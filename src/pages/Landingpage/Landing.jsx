import React from 'react'
import App from '../../App'
import Products from '../../Components/Product/Products'
import Publicity from '../../Components/Publicity/Publicity'
import About from '../../Components/about/About'
import { useSelector } from 'react-redux'
import Form from '../../Components/Form/Form'
import Faqs from '../FaqsPage/Faqs'
import Toasts from '../../Components/Toasts/Toasts'

const Landing = () => {
  const form = useSelector(state => state.form)
  return (
    <div className={`layout background flex flex-col`}>
        <App/>
        <Products/>
        <About/>
        <Publicity/>
        <Faqs/>
        {form && <Form/>}
        <Toasts/>
    </div>
  )
}

export default Landing