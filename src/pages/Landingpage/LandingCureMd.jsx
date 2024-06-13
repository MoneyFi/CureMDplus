import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import NavTelemedicina from '../../Components/Navbar/NavTelemedicina'
import TelemedicinaCure from './Curemd/TelemedicinaCure'
import Publicity from '../../Components/Publicity/Publicity'
import FooterLanding from '../../Components/Footer/FooterLanding'
import Telemedicina from '../TelemedicinaPage/Telemedicina'

const LandingCureMd = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='layout background flex items-center justify-between flex-col'>
        <NavTelemedicina/>
        <TelemedicinaCure/>
        <Telemedicina/>
        <Publicity/>
        <FooterLanding/>
    </div>
  )
}

export default LandingCureMd