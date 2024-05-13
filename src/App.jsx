import './App.css'

function App() {

  return (
    <section className="flex flex-col items-center justify-center w-full h-[100vh]" id='landing'>
    <article className='w-[600px] flex flex-col items-center justify-center max-[600px]:w-full'>
    <h1 className="text-primary-blue text-4xl  py-1 max-[600px]:text-2xl max-[400px]:text-xl">
      Tu alternativa <strong>accesible</strong> para una 
    </h1>
    <h2 className='text-primary-blue text-4xl py-1 max-[600px]:text-2xl max-[400px]:text-xl'>
    cobertura <strong>integral de salud</strong> 
    </h2>
    </article>


    <article className='w-[600px] flex flex-col items-center justify-center mt-10 max-[800px]:w-full'>
    <h3 className="text-primary-blue text-xl  py-1  max-[600px]:text-sm">
      Planes accesibles, atencion personalizada y
    </h3>
    <h3 className='text-primary-blue text-xl py-1 max-[600px]:text-sm'>
    tecnologia de vanguardia para cuidar tu salud
    </h3>
    </article>
    </section>
  )
}

export default App
