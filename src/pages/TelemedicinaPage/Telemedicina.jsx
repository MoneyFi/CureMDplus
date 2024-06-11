import React from 'react'
import telemedicina from '../../assets/bakground/bgtelemedicina.jpg'

const Telemedicina = () => {
    const features = [
        {
            title: "Protección Avanzada de Datos Personales",
            content: "En un mundo donde la privacidad es fundamental, nuestra plataforma se destaca por su especial protección a los datos personales. Implementamos las más avanzadas medidas de seguridad y encriptación para asegurar que tu información médica esté siempre protegida y confidencial. Puedes confiar en nosotros para mantener tus datos seguros mientras te brindamos la mejor atención médica posible."
        },
        {
            title: "Receta Digital Fácil y Rápida",
            content: "Decimos adiós a las recetas en papel. Con nuestra receta digital, recibirás tus prescripciones de manera instantánea y segura directamente en tu dispositivo. Este sistema no solo agiliza el proceso, sino que también reduce los errores y facilita el acceso a tus medicamentos."
        },
        {
            title: "Historia Clínica con IA: Eficiencia para los Médicos",
            content: "Nuestros médicos no pierden tiempo en escribir gracias a nuestra historia clínica con inteligencia artificial. Esta innovadora herramienta recopila y organiza tu información médica de manera automática, permitiendo a los profesionales de la salud concentrarse en lo que realmente importa: tu bienestar. La IA ayuda a mantener tus datos actualizados y fácilmente accesibles para un seguimiento óptimo de tu salud."
        },
        {
            title: "Bot de Triaje y Diagnóstico Presuntivo",
            content: "Nuestro bot de triaje y diagnóstico presuntivo es tu primer contacto con el sistema de salud. Este asistente virtual realiza una evaluación inicial de tus síntomas, proporcionando una orientación preliminar y recomendándote los pasos a seguir. Con esta herramienta, aseguramos que recibas la atención adecuada desde el primer momento."
        },
        {
            title: "Monitoreo Remoto para Pacientes Domiciliarios",
            content: "Para aquellos que necesitan atención constante desde su hogar, ofrecemos un programa de monitoreo remoto. Este servicio permite a nuestros profesionales de la salud supervisar tu estado de salud en tiempo real, ajustando tratamientos y respondiendo rápidamente a cualquier cambio. Ideal para pacientes con enfermedades crónicas o en recuperación posthospitalaria."
        },
        {
            title: "Venta de Medicamentos Online con Descuento",
            content: "Adquiere tus medicamentos de manera cómoda y con descuento a través de nuestro programa de venta de medicamentos online. Pagando con nuestro token de la salud, no solo obtienes beneficios económicos, sino que también formas parte de un ecosistema de salud innovador y eficiente. Nuestra tienda virtual está diseñada para ser rápida, segura y conveniente."
        }
    ];

    return (
        <div className='landing w-screen min-h-screen scroll-smooth p-4'>
            <section className='w-full min-h-screen relative flex justify-center md:justify-around items-center gap-6 md:gap-4 flex-wrap'>
                {features.map((feature, index) => (
                    <div key={index} className='flex flex-col text-sm justify-start text-center items-start gap-3 md:min-h-[18em] md:w-[400px]  rounded py-3 px-5 transition-all hover:scale-105 hover:shadow bg-white cursor-default'>
                        <span className='text-lg font-varela text-left font-semibold text-primary-blue '>{feature.title}</span>
                        <p className='text-sm font-roboto font-light text-left'>{feature.content}</p>
                    </div>
                ))}
            </section>

        </div>
    )
}

export default Telemedicina
