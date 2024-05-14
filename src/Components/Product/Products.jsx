import React from 'react'
import Product from './Product';

const Products = () => {
    const products = [
        {
            title: 'Plan BASIC',
            text: 'Consultas médicas con atención primaria en telemedicina: 24/7, incluyendo asistencia psicológica (1 por mes. Tope $20.000)_Atención por urgencias (Incluye odontológicas)_Prevención anual mujer (Pap y colpo) hombres, (Antígeno Prostático)_Segunda opinión casos de alta complejidad _Asistencia al viajero_50% de descuento en farmacias, ópticas y ortopedias (Red PAMI)_Visitas médicas domiciliarias_Asistencia nutricional telefónica_Indemninzatorias:_Renta diaria por internación, en caso de que necesites ser hospitalizado._Cobertura de ambulancias: Transporte terrestre en caso de urgencia._Gastos de internación 3 días (Asistencia terapéutica)._Máximo anual: 90 días.'
        },
        {
            title: 'Plan PRO',
            text: 'Consultas médicas con atención primaria en telemedicina: 24/7, incluyendo asistencia psicológica (1 por mes. Tope $30.000)_Atención por urgencias (C/odontológicas)_Prevención anual mujer (Pap y colpo) hombres, (Antígeno Prostático)_Segunda opinión casos de alta complejidad_Asistencia al viajero_50% off en farmacia, óptica y ortopedia._Visitas médicas domiciliarias._Asistencia nutricional telefónica_Indemnizatorias: _Renta diaria por internación._Cobertura de ambulancias: Transporte terrestre en caso de urgencia. _Intervenciones quirúrgicas ambulatorias: Cubre el costo de cirugías menores que no requieran internación. Gastos de internación 7 días (Asistencia terapéutica)_Máximo anual: 120 días.'
        },
        {
            title: 'Plan SENIOR',
            text: 'Atención primaria en telemedicina: 24/7, (1 consulta al mes. Tope $20.000)._Asistencia convalecencia: Servicio de acompañante en establecimiento médico, Servicio de acompañante en domicilio, Bonificación de acompañante en Domicilio especial, Asesor Previsional._Chequeo médico anual por prevención/ control con un especialista de Gerontología para realizar una evaluación que consiste en Chequeo médico regular._Indemnizatorias:_Cobertura de internación retroactiva: Cubre los gastos de internación de hasta 3 días previos al alta, siempre que la internación esté dentro del período de vigencia de la póliza_Máximo anual de internación: 90 días._Cuidados prolongados: Cubre hasta 12 meses de cuidados en un hogar geriátrico o en el domicilio del asegurado.'
        },
    ]
    return (
        <div className='w-[100vw]:full min-h-[100vh] flex justify-center items-center gap-8 flex-wrap text-xs font-sans my-12 md:px-8' id='products'>
            {products.map((product, index) => (
                <div className='flex flex-col flex-wrap justify-center items-center'>
                    <Product key={index} product={product} />
                </div>
            ))}
        </div>
    )
}

export default Products;