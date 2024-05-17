import React, { useEffect } from 'react'
import { ImQuotesRight } from "react-icons/im";
import { BsImageFill } from "react-icons/bs";


const AboutCards = ({index, count, nombre, testimony, img}) => {

  useEffect(()=>{
    
  },[count])

  return (
    <li className={`w-[300px] h-[220px] bg-white rounded-[15px] relative shadow flex items-start justify-center flex-col p-8  mx-5   max-[600px]:w-[98%] `}>
            <div className='w-[80px] h-[80px] rounded-full bg-white shadow-md absolute mt-[-200px] ml-[200px] flex items-center justify-center max-[600px]:ml-[66%] max-[600px]:w-[90px] max-[600px]:h-[90px] overflow-hidden'>
            <img src={img} alt={nombre} className='w-full'/>
            </div>
                <div className='p-2 '>
                <ImQuotesRight  size={15} color='#283E94'/>
                </div>
                <div className='flex items-center flex-col'>
                <p className='italic text-sm p-2'>{testimony}</p>
                <p className='self-end font-semibold text-primary-blue p-1 text-sm'>{nombre}</p>
                </div>
            </li>
  )
}

export default AboutCards