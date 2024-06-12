import React, { useEffect } from 'react'
import App from '../../App'
import Products from '../../Components/Product/Products'
import Publicity from '../../Components/Publicity/Publicity'
import About from '../../Components/about/About'
import { useSelector } from 'react-redux'
import Form from '../../Components/Form/Form'
import Faqs from '../FaqsPage/Faqs'
import { useNavigate } from 'react-router-dom'


const Landing = () => {
  const navigate = useNavigate()
  const form = useSelector(state => state.form)
  // const { token } = useSelector(state => state.user)
  const login = JSON.parse(localStorage.getItem('login'))

  useEffect(()=>{
    if(login){
      if(login.token) navigate('/myaccount')
    }
  },[])

  return (
    <div className={`layout background flex flex-col`}>
        <App/>
        <Products/>
        <About/>
        <Publicity/>
        <Faqs/>
        {form && <Form/>}
    </div>
  )
}

export default Landing