import './App.css'

function App() {

  return (
    <section className="flex flex-col items-center justify-center w-full h-[100vh]" id='landing'>
    <article className='w-[600px] flex flex-col items-center justify-center'>
    <h1 className="text-primary-blue text-4xl  py-1">
      Tu alternativa <strong>accesible</strong> para una 
    </h1>
    <h2 className='text-primary-blue text-4xl py-1'>
    cobertura <strong>integral de salud</strong> 
    </h2>
    </article>
    <article className='w-[600px] flex flex-col items-center justify-center mt-10'>
    <h3 className="text-primary-blue text-xl  py-1">
      Planes accesibles, atencion personalizada y
    </h3>
    <h3 className='text-primary-blue text-xl py-1'>
    tecnologia de vanguardia para cuidar tu salud
    </h3>
    </article>
    </section>
  )
}

export default App
