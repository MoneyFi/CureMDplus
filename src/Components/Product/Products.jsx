import React from 'react'
import Product from './Product';
import background from '../../assets/bakground/bgproducts.png'

const Products = () => {
    const products = [
        {
            title: 'Salud Esencial',
            essential: 'Consultas médicas de atención primaria en CureMD, incluyendo asistencia psicológica, (1 por mes. Tope $20.000)_Atención por urgencias (Incluye odontológicas)_Prevención anual mujer (Pap y colpo) hombres, (Antígeno Prostático)_Coberturas Indemnizatorias hasta $20.000.000,00',
            detail:[
                {
                    title:'Prestacional',
                    description:'Consultas médicas de atención primaria en CureMD, incluyendo asistencia psicológica, (1 por mes. Tope $20.000)_Atención por urgencias (Incluye odontológicas)_Prevención anual mujer (Pap y colpo) hombres, (Antígeno Prostático)_Segunda opinión casos de alta complejidad_Asistencia en viajes_50% de descuento en farmacias, ópticas y ortopedias (Red PAMI)_Visitas médicas domiciliarias_Asistencia nutricional telefónica'
                },
                {
                    title:'Indemnizatoria',
                    description:'Renta diaria por internación** en sala común (3 meses máximo anual) hasta $300.000,00_Renta diaria por internación** en terapia intermedia y cuidados especiales (3 meses máximo anual) hasta $600.000,00_Renta diaria por internación** en Unidad de Terapia Intensiva (UTI) (3 meses máximo anual) hasta $900.000,00_Intervenciones Quirúrgicas Alta Complejidad (12 cirugías - Alt. B) hasta $20.000.000,00_Intervenciones Quirúrgicas Media Complejidad (68 cirugías - Alt. B) hasta $10.000.000,00_Realización de Transplantes (Médula, Riñón, Hígado, Corazón, Pulmón, Pancreas) hasta $20.000.000,00_*Periodos de carencia: Intervenciones: 90 días/Trasplante: 120 días/Intervenciones Cardíacas: 300 días._** Internación: De 1 a 3 días, no se cubre, a partir del día 4 se abona retroactivo desde el día 1.'
                },

            ],
            price: 80000
        },
        {
            title: 'Salud Plus',
            essential:'Consultas médicas de atención primaria en CureMD, incluyendo asistencia psicológica, (1 por mes. Tope $30.000)_Atención por urgencias (incluye odontológicas)_Prevención anual mujer (Pap y colpo) hombres, (Antígeno Prostático)_Coberturas Indemnizatorias hasta $50.000.000,00',
            detail:[
                {
                    title:'Prestacional',
                    description:'Consultas médicas de atención primaria en CureMD, incluyendo asistencia psicológica, (1 por mes. Tope $20.000)_Atención por urgencias (Incluye odontológicas)_Prevención anual mujer (Pap y colpo) hombres, (Antígeno Prostático)_Segunda opinión casos de alta complejidad_Asistencia en viajes_50% de descuento en farmacias, ópticas y ortopedias (Red PAMI)_Visitas médicas domiciliarias_Asistencia nutricional telefónica'
                },
                {
                    title:'Indemnizatoria',
                    description:'Renta diaria por internación** en sala común (3 meses máximo anual) hasta $300.000,00_Renta diaria por internación** en terapia intermedia y cuidados especiales (3 meses máximo anual) hasta $600.000,00_Renta diaria por internación** en Unidad de Terapia Intensiva (UTI) (3 meses máximo anual) hasta $900.000,00_Intervenciones Quirúrgicas Alta Complejidad (12 cirugías - Alt. B) hasta $20.000.000,00_Intervenciones Quirúrgicas Media Complejidad (68 cirugías - Alt. B) hasta $10.000.000,00_Realización de Transplantes (Médula, Riñón, Hígado, Corazón, Pulmón, Pancreas) hasta $20.000.000,00_*Periodos de carencia: Intervenciones: 90 días/Trasplante: 120 días/Intervenciones Cardíacas: 300 días._** Internación: De 1 a 3 días, no se cubre, a partir del día 4 se abona retroactivo desde el día 1.'
                },
            ],
            price: 115000
        },
        {
            title: 'Salud Senior',
            subtitle: 'Desde 65 hasta 74 años y 11 meses.',
            essential: 'Consultas médicas de atención primaria en CureMD, incluyendo asistencia psicológica, (1 consulta al mes. Tope $20.000)._Asistencia convalecencia: Servicio de acompañante en establecimiento médico, Servicio de acompañante en domicilio, Bonificación de acompañante en Domicilio especial, Asesor Previsional_Coberturas Indemnizatorias hasta $100.000.000,00',
            detail:[
                {
                    title:'Prestacional',
                    description:'Consultas médicas de atención primaria en CureMD, incluyendo asistencia psicológica, (1 por mes. Tope $20.000)_Atención por urgencias (Incluye odontológicas)_Prevención anual mujer (Pap y colpo) hombres, (Antígeno Prostático)_Segunda opinión casos de alta complejidad_Asistencia en viajes_50% de descuento en farmacias, ópticas y ortopedias (Red PAMI)_Visitas médicas domiciliarias_Asistencia nutricional telefónica'
                },
                {
                    title:'Indemnizatoria',
                    description:'Renta diaria por internación** en sala común (3 meses máximo anual) hasta $300.000,00_Renta diaria por internación** en terapia intermedia y cuidados especiales (3 meses máximo anual) hasta $600.000,00_Renta diaria por internación** en Unidad de Terapia Intensiva (UTI) (3 meses máximo anual) hasta $900.000,00_Intervenciones Quirúrgicas Alta Complejidad (12 cirugías - Alt. B) hasta $20.000.000,00_Intervenciones Quirúrgicas Media Complejidad (68 cirugías - Alt. B) hasta $10.000.000,00_Realización de Transplantes (Médula, Riñón, Hígado, Corazón, Pulmón, Pancreas) hasta $20.000.000,00_*Periodos de carencia: Intervenciones: 90 días/Trasplante: 120 días/Intervenciones Cardíacas: 300 días._** Internación: De 1 a 3 días, no se cubre, a partir del día 4 se abona retroactivo desde el día 1.'
                },
            ],
            price: 195000
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
            
        </div>
    )
}

export default Products;