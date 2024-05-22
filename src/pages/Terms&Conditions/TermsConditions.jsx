import logo from '../../assets/icons/Logo_Azul.png'

const TermsConditions = () => {
  return (
    <div className='layout background flex items-center justify-start p-8 flex-col'>

      <section className='w-[80%] flex items-start justify-center flex-col'>
      <div className='w-[220px]'>
        <img src={logo} alt='logo'/>
      </div>

      <article>
      <h3 className='font-bold text-xl text-primary-blue'>Condiciones generales</h3>
      <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
      </article>

      <article>
      <h3 className='font-bold text-xl text-primary-blue'>Condiciones especificas</h3>
      <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
      </article>
      </section>
    </div>
  )
}

export default TermsConditions