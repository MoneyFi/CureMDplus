import video from '../../../assets/bakground/video2.mp4'


const TelemedicinaCure = () => {
  const glass = "w-full bg-white  bg-clip-padding backdrop-filter backdrop-blur-[50%] bg-opacity-70 text-white shadow"

  return (
    <section className="flex flex-col items-center justify-center w-full h-[100vh] relative" id='landing'>
      <video 
       autoPlay 
       loop 
       muted 
       playsInline
       className='w-full h-full object-cover  md:object-[100%]'
       controls={false} 
       disablePictureInPicture
       preload='auto'
       controlsList="nodownload nofullscreen noremoteplayback"
       style={{ pointerEvents: 'none' }}
      >
      <source src={video} type="video/mp4" />
    </video>

    <div className={`${glass} absolute w-full h-full flex items-center justify-center flex-col`}>
    <article className='w-[700px] flex flex-col items-center justify-center max-[600px]:w-full mt-10 '>
    <h1 className="text-primary-blue text-4xl  py-1 max-[600px]:text-2xl max-[400px]:text-xl">
      Bienvenido a nuestra plataforma
    </h1>
    <h2 className='text-primary-blue text-4xl py-1 max-[600px]:text-2xl max-[400px]:text-xl'>
    de telemedicina:<strong> salud a tu alcance</strong> 
    </h2>
    </article>


    <article className='w-[600px] flex flex-col items-center justify-center mt-5 max-[800px]:w-full'>
    <h3 className="text-primary-blue text-sm text-center  py-1  max-[600px]:text-sm">
    En nuestra plataforma de telemedicina, combinamos la última tecnología con la atención médica de calidad para ofrecerte una experiencia de salud integral y accesible desde la comodidad de tu hogar. Descubre las características que hacen de nuestra plataforma la elección ideal para tus necesidades.
    </h3>
    </article>
    </div>
    </section>
  )

}

export default TelemedicinaCure