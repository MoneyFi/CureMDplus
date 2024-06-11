import React from 'react'
import NavTelemedicina from '../../Components/Navbar/NavTelemedicina'
import TelemedicinaCure from './Curemd/TelemedicinaCure'
import Publicity from '../../Components/Publicity/Publicity'
import FooterLanding from '../../Components/Footer/FooterLanding'
import Telemedicina from '../TelemedicinaPage/Telemedicina'

const LandingCureMd = () => {
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