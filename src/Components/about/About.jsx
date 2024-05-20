import { ImQuotesRight } from "react-icons/im";
import Carrusel from './Carrusel';
import logoBco from '../../assets/icons/Logo_bco.png'
import Count from "./Count";





const About = () => {
    
  return (
    <div className='layout background flex items-center justify-between flex-col  overflow-hidden' id='testimonials'>

        <div className='bg-white rounded w-[60%] min-h-[200px]  shadow  relative mt-10 flex items-center  flex-col justify-between max-[900px]:flex-col max-[800px]:min-h-[300px] max-[500px]:w-[95%]'>

        <div className='w-[100px] h-[100px] p-2 rounded-full bg-primary-blue mt-[-30px] shadow-md absolute  ml-[90%] flex items-center justify-center max-[600px]:ml-[66%] max-[600px]:w-[90px] max-[600px]:h-[90px] overflow-hidden'>
            <img src={logoBco} alt={'about'} className='w-full mt-3'/>
            </div>

        <div className='w-full flex flex-col p-4 max-[800px]:w-full'>
            <h4 className='font-semibold text-primary-blue text-md'>Sobre nosotros</h4>
        <div className='py-2'>
                <ImQuotesRight  size={20} color='#283E94'/>
                </div>
            <p className='text-sm font-light'>Somos un equipo de profesionales multidisciplinares dedicados al campo de la salud y la tecnología con más de 10 años de experiencia. En CureMD+, nuestra misión es poder democratizar la salud de calidad y llevarla al mayor número de personas.</p>
            <p className='bg-white p-4 rounded-[15px] self-end font-semibold not-italic  text-primary-blue text-sm'>
                Equipo de CureMD
            </p>
            </div>
            <Count/>
        </div>
        <Carrusel/>
        <div className='w-full h-[120px] bg-white flex items-center justify-end px-4 max-[700px]:h-[120px]'>
           
        </div>
    </div>
  )
}

export default About