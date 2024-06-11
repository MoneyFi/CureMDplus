import './App.css'
import video from './assets/bakground/video.mp4'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function App() {
  const glass = "w-full bg-[#283E94]  bg-clip-padding backdrop-filter backdrop-blur-[50%] bg-opacity-70 text-white shadow"

  return (
    <section className="flex flex-col items-center justify-center w-full h-[100vh] relative" id='landing'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-full object-cover object-[89%] md:object-[100%]'
        controls={false}
        disablePictureInPicture
        preload='auto'
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{ pointerEvents: 'none' }}
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className={`${glass} absolute w-full h-full pt-10 flex items-center justify-around flex-col`}>
        <div className='mt-28 flex flex-col items-center justify-center'>
          <article className='w-[750px] flex flex-col items-center justify-center max-[600px]:w-full mt-10 '>
            <h1 className="text-white text-5xl text-center py-1 max-[600px]:text-2xl max-[400px]:text-xl">
              Tu alternativa <strong>accesible</strong> para una cobertura <strong>integral de salud</strong>
            </h1>
          </article>

          <article className='w-[650px] flex flex-col items-center justify-around mt-5 max-[800px]:w-full'>
            <h3 className="text-white text-2xl  py-1  max-[600px]:text-sm">
              Planes accesibles, atencion personalizada y
            </h3>
            <h4 className='text-white text-2xl py-1 max-[600px]:text-sm'>
              tecnologia de vanguardia para cuidar tu salud
            </h4>
          </article>
        </div>
        <MdKeyboardDoubleArrowDown size={50} className='text-white animate-bounce' />
      </div>
    </section>
  )
}

export default App
