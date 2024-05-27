import CEspeciales from '../../Components/CEspeciales/CEspeciales'
import logo from '../../assets/icons/Logo_Azul.png'
import RenderArticulo from './RenderArticulo'
import { condicionesGenerales, polizasIndividuales, anexoMonedaExtranjera, CGProrrogaAutomatica, CGCapitalesAsegurables, CAClausulainterpretacion, ClausulaJubilados, CAReduccionCapitales, cgf1, cgf2, cgf3, cgf4, cgf5, cgf6 } from './condicionesgenerales'

const TermsConditions = () => {
  return (
    <div className='layout background flex items-center justify-start p-8 flex-col'>

      <section className='w-[80%] flex items-start justify-center flex-col max-[500px]:w-full'>
        <div className='w-[220px]'>
          <img src={logo} alt='logo' />
        </div>

        <article className=''>
          <h3 className='font-bold text-xl text-primary-blue'>Condiciones generales</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          {
            condicionesGenerales.map((articulo,i)=>{
              return  <RenderArticulo articulo={articulo} key={i} />
            })
          }
        </article>
        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>SEGURO MODULAR DE SALUD
CONDICIONES GENERALES – PÓLIZAS
INDIVIDUALES</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          {
            polizasIndividuales.map((articulo,i)=>{
              return  <RenderArticulo articulo={articulo} key={i} />
            })
          }
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ANEXA A LAS CONDICIONES GENERALES
CLÁUSULA PARA OPERACIONES EN MONEDA EXTRANJERA</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          {
            anexoMonedaExtranjera.map((articulo,i)=>{
              return  <RenderArticulo articulo={articulo} key={i} />
            })
          }
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ANEXA A LAS CONDICIONES GENERALES
CLÁUSULA PARA OPERACIONES EN MONEDA EXTRANJERA</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          {
            anexoMonedaExtranjera.map((articulo,i)=>{
              return  <RenderArticulo articulo={articulo} key={i} />
            })
          }
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ANEXA A LAS CONDICIONES GENERALES
CLÁUSULA DE PRÓRROGA AUTOMÁTICA</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          <p className='text-sm'>{CGProrrogaAutomatica}</p>
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ANEXA A LAS CONDICIONES GENERALES
CLÁUSULA DE AJUSTE DE LOS CAPITALES ASEGURADOS</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          {
            CGCapitalesAsegurables.map((articulo,i)=>{
              return  <RenderArticulo articulo={articulo} key={i} />
            })
          }
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ANEXA A LAS CONDICIONES GENERALES
CLÁUSULA DE INTERPRETACIÓN</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          <p className='text-sm'>{CAClausulainterpretacion}</p>
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ADICIONAL DE OPCIÓN PARA JUBILADOS</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          <p className='text-sm'>{ClausulaJubilados}</p>
        </article>

        <article className='py-4 mt-5 w-full'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ADICIONAL DE REDUCCIÓN DE CAPITALES</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          <p className='text-sm'>{CAReduccionCapitales}</p>
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ADICIONAL N° 1 DE COBERTURA PARA
GRUPO FAMILIAR</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          <p className='text-sm'>{cgf1}</p>
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ADICIONAL N° 2 DE COBERTURA PARA
GRUPO FAMILIAR</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          <p className='text-sm'>{cgf2}</p>
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ADICIONAL N° 3 DE COBERTURA PARA
GRUPO FAMILIAR</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          <p className='text-sm'>{cgf3}</p>
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ADICIONAL N° 4 DE COBERTURA PARA
GRUPO FAMILIAR</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          <p className='text-sm'>{cgf4}</p>
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ADICIONAL N° 5 DE COBERTURA PARA
GRUPO FAMILIAR</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          <p className='text-sm'>{cgf5}</p>
        </article>

        <article className='py-4 mt-5'>
          <h3 className='font-bold text-xl text-primary-blue'>CLÁUSULA ADICIONAL N° 6 DE COBERTURA PARA
GRUPO FAMILIAR</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          <p className='text-sm'>{cgf6}</p>
        </article>

        <article>
          <h3 className='font-bold text-xl text-primary-blue'>Condiciones especificas</h3>
          <h4 className='font-bold text-sm py-2'>Terminos de uso - CureMD Plus</h4>
          <CEspeciales/>
        </article>
      </section>
    </div>
  )
}

export default TermsConditions