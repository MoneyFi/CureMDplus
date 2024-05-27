import React from 'react'
import Product from './Product';
import background from '../../assets/bakground/bgproducts.png'

const Products = () => {
    const products = [
        {
            title: 'Plan ESENCIAL',
            essential: 'Consultas médicas con atención primaria en telemedicina: 24/7, incluyendo asistencia psicológica (1 por mes. Tope $20.000)_Atención por urgencias (Incluye odontológicas)_Prevención anual mujer (Pap y colpo) hombres, (Antígeno Prostático)',
            detail:'Segunda opinión casos de alta complejidad_Asistencia al viajero_50% de descuento en farmacias, ópticas y ortopedias (Red PAMI)_Visitas médicas domiciliarias_Asistencia nutricional telefónica_Indemninzatorias:_Renta diaria por internación, en caso de que necesites ser hospitalizado._Cobertura de ambulancias: Transporte terrestre en caso de urgencia._Gastos de internación 3 días (Asistencia terapéutica)._Máximo anual: 90 días.',
            price: 65000
        },
        {
            title: 'Plan PRO',
            essential:'Consultas médicas con atención primaria en telemedicina: 24/7, incluyendo asistencia psicológica (1 por mes. Tope $30.000)_Atención por urgencias (incluye odontológicas)_Prevención anual mujer (Pap y colpo) hombres, (Antígeno Prostático)',
            detail:'Segunda opinión casos de alta complejidad_Asistencia al viajero_50% off en farmacia, óptica y ortopedia._Visitas médicas domiciliarias._Asistencia nutricional telefónica_Indemnizatorias: _Renta diaria por internación._Cobertura de ambulancias: Transporte terrestre en caso de urgencia. _Intervenciones quirúrgicas ambulatorias: Cubre el costo de cirugías menores que no requieran internación. Gastos de internación 7 días (Asistencia terapéutica)_Máximo anual: 120 días.',
            price: 95000
        },
        {
            title: 'Plan SENIOR',
            essential: 'Atención primaria en telemedicina: 24/7, (1 consulta al mes. Tope $20.000)._Asistencia convalecencia: Servicio de acompañante en establecimiento médico, Servicio de acompañante en domicilio, Bonificación de acompañante en Domicilio especial, Asesor Previsional.',
            detail:'Chequeo médico anual por prevención/ control con un especialista de Gerontología para realizar una evaluación que consiste en Chequeo médico regular._Indemnizatorias:_Cobertura de internación retroactiva: Cubre los gastos de internación de hasta 3 días previos al alta, siempre que la internación esté dentro del período de vigencia de la póliza_Máximo anual de internación: 90 días._Cuidados prolongados: Cubre hasta 12 meses de cuidados en un hogar geriátrico o en el domicilio del asegurado.',
            price: 160000
        },
    ];

    const style = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div style={style} className='w-screen min-h-screen overflow-hidden flex flex-col justify-around gap-4 items-center text-xs font-sans pt-20 pb-8 md:pb-0 px-8 md:px-2 max-[600px]:px-2' id='products'>
            <div className='flex flex-wrap justify-center gap-5 items-center'>
                {products.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
            {/* <button className='py-2 px-8 bg-primary-blue text-white text-base md:text-2xl font-roboto font-bold rounded-lg shadow-2xl hover:bg-secondary-blue'>Agenda una cita con nuestros profesionales</button> */}
        </div>
    )
}

export default Products;