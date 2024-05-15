import React from 'react'
import { ImQuotesRight } from "react-icons/im";
import { BsImageFill } from "react-icons/bs";


const AboutCards = ({index}) => {
  return (
    <li className={`w-[322px] h-[267px] bg-white rounded-[15px] relative shadow flex items-start justify-center flex-col p-8  ${index !== 1 ? "scale-75 max-[1000px]:scale-0" : ""}  max-[600px]:w-[98%] `}>
            <div className='w-[110px] h-[110px] rounded-full bg-white shadow absolute mt-[-220px] ml-[75%] flex items-center justify-center max-[600px]:ml-[66%] max-[600px]:w-[90px] max-[600px]:h-[90px]'>
            <BsImageFill  size={25} color='#283E94'/>
            </div>
                <div className='py-2'>
                <ImQuotesRight  size={25} color='#283E94'/>
                </div>
                <div className='flex items-center flex-col'>
                <p className='italic'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit tenetur esse assumenda, quae laborum soluta reprehenderit obcaecati possimus dolorem neque consequatur</p>
                <p className='self-end font-semibold text-primary-blue p-2'>Maria Nishi</p>
                </div>
            </li>
  )
}

export default AboutCards