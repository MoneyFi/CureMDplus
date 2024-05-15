import React from 'react'
import AboutCards from './AboutCards'
import logo from '../../assets/icons/Logo_Azul.png'
import { ImQuotesRight } from "react-icons/im";





const About = () => {
    const data = [
        {
            nombre: "Maria Nishi",
            img: '',
            testimony: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis vero facilis inventore quod, quis at id voluptates alias hic necessitatibus, totam possimus soluta placeat eos blanditiis mollitia! Deserunt, obcaecati illo?'
        },
        {
            nombre: "Maria Nishi",
            img: '',
            testimony: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis vero facilis inventore quod, quis at id voluptates alias hic necessitatibus, totam possimus soluta placeat eos blanditiis mollitia! Deserunt, obcaecati illo?'
        },
         {
            nombre: "Maria Nishi",
            img: '',
            testimony: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis vero facilis inventore quod, quis at id voluptates alias hic necessitatibus, totam possimus soluta placeat eos blanditiis mollitia! Deserunt, obcaecati illo?'
        }
    ]
  return (
    <div className='layout background flex items-center justify-between flex-col' id='testimonials'>

        <div className='bg-white rounded w-[80%] p-4 shadow  relative mt-10'>
            <h4 className='font-semibold text-primary-blue text-xl'>Sobre nosotros</h4>
        <div className='py-2'>
                <ImQuotesRight  size={25} color='#283E94'/>
                </div>
            <p>Somos un equipo de profesionales multidisciplinares dedicados al campo de la salud y la tecnología con más de 10 años de experiencia. En CureMD+, nuestra misión es poder democratizar la salud de calidad y llevarla al mayor número de personas</p>
            <p className='bg-white p-4 rounded-[15px] self-end font-semibold not-italic  text-primary-blue'>
                Equipo de CureMD
            </p>
        </div>
        <ul className='w-full min-h-auto flex items-center justify-around mt-20'>
            {
                data.map((el,i)=>{
                    return(
                        <AboutCards key={i} index={i}/>
                    )
                })
            }
        </ul>
        <div className='w-full h-[150px] bg-white flex items-center justify-end px-4'>
            <div className='w-[250px]'>
                <img alt='logo' src={logo} />
            </div>
        </div>
    </div>
  )
}

export default About