import React from 'react'
import Faq from '../../Components/Faq/Faq';

const Faqs = () => {

    const faqs = [
        {
            title: "¿Qué es CureMD+?",
            content: "CureMD+ es una compañía de seguros médicos que ofrece planes de salud accesibles y completos para la comunidad. Nuestra misión es brindar a las personas la cobertura que necesitan para proteger su salud y bienestar sin tener que preocuparse por los altos costos."
        },
        {
            title: "¿Qué tipo de planes de seguro médico ofrece CureMD+?",
            content: "Ofrecemos una variedad de planes de seguro médico para satisfacer las diversas necesidades y presupuestos de nuestros miembros. Nuestros planes incluyen:",
            list: "Planes de salud individuales: Perfectos para personas que no tienen acceso a un seguro médico a través de su empleador. - Planes familiares: Brinda cobertura para usted y su familia a un precio asequible."
        },
        {
            title: "¿Qué cubre mi plan de seguro médico de CureMD+?",
            content: "Nuestros planes de seguro médico brindan cobertura para una amplia gama de servicios de atención médica, que incluyen:",
            list: "Atención preventiva: Visitas de control anuales, exámenes y vacunas. - Atención médica hospitalaria: Estadías en el hospital, procedimientos quirúrgicos y atención especializada. - Medicamentos recetados: Cobertura para medicamentos recetados para ayudarlo a controlar sus afecciones médicas. - Servicios de salud mental: Terapia, asesoramiento y otros servicios de salud mental."
        },
        {
            title: "¿Cómo puedo encontrar un proveedor de atención médica en la red de CureMD+?",
            content: "Puede encontrar un proveedor de atención médica en la red de CureMD+ utilizando nuestro directorio de proveedores en línea o llamando a nuestro servicio al cliente."
        },
        {
            title: "¿Cómo puedo inscribirme en un plan de seguro médico de CureMD+?",
            content: "Puede inscribirse en un plan de seguro médico de CureMD+ en línea, por teléfono o en persona con uno de nuestros agentes."
        }
    ]

    return (
        <div className='w-screen min-h-screen bg-white flex flex-col justify-start items-center pt-28 pb-6' id='faqs'>
            <h1 className='text-3xl font-bold text-center text-primary-blue py-5 font-varela'>¿Tienes preguntas?</h1>
            <h3 className='text-xl text-[#a09d9d] text-center font-roboto'>Preguntas frecuentes</h3>
            <article className='w-full h-full flex flex-col justify-center items-center gap-5 px-12 my-4'>
                {faqs.map((faq, index) => (
                    <Faq key={index} title={faq.title} content={faq.content} list={faq.list} />
                ))}
            </article>
        </div>
    )
}
export default Faqs;
