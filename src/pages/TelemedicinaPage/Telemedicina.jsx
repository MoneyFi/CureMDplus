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
        <div className='landing w-screen min-h-screen scroll-smooth'>
            <section className='w-full h-screen relative flex flex-col justify-between items-center'>
                <div
                    className='w-full h-2/3 flex flex-col justify-start md:justify-center items-end overflow-hidden'
                ><img src={telemedicina} alt="" className='w-full object-cover h-full object-[89%] md:object-bottom' /></div>
                <div className='flex flex-col justify-center items-center w-full h-full md:h-1/3 gap-4 py-0 md:py-4 px-5 md:px-2'>
                    <span className='text-xl text-center md:text-3xl text-secondary-blue font-varela'>Bienvenido a Nuestra Plataforma de Telemedicina: Salud a tu Alcance</span>
                    <p className='font-roboto text-center text-pretty text-xs md:text-sm w-full md:w-2/3'>En nuestra plataforma de telemedicina, combinamos la última tecnología con la atención médica de calidad para ofrecerte una experiencia de salud integral y accesible desde la comodidad de tu hogar. Descubre las características que hacen de nuestra plataforma la elección ideal para tus necesidades de salud.</p>
                </div>
            </section>

            <section className='w-full min-h-screen relative flex justify-center md:justify-around items-center gap-6 md:gap-4 flex-wrap'>
                {features.map((feature, index) => (
                    <div key={index} className='flex flex-col justify-around text-center items-center gap-3 md:min-h-[18em] md:w-1/4 w-3/4 shadow-md rounded-2xl py-3 px-5 transition-all hover:scale-110 bg-white hover:bg-primary-blue hover:text-white cursor-default'>
                        <span className='text-lg font-varela font-bold'>{feature.title}</span>
                        <p className='text-sm font-roboto font-light text-balance'>{feature.content}</p>
                    </div>
                ))}
            </section>

            <section className='w-full h-screen relative flex flex-col justify-between items-center'>
                <div className='flex flex-col justify-center items-center w-full h-full md:h-2/3 gap-6 py-0 md:py-4 px-5 md:px-2'>
                    <span className='text-xl text-center md:text-3xl text-secondary-blue font-varela'>Únete a la Revolución de la Telemedicina</span>
                    <p className='font-roboto text-center text-pretty text-xs md:text-sm w-full md:w-2/3'>Estamos comprometidos a transformar la forma en que accedes a los servicios de salud. Con nuestras avanzadas herramientas y enfoque centrado en el paciente, brindamos una experiencia médica sin igual. Únete a nosotros y descubre cómo nuestra plataforma de telemedicina puede mejorar tu calidad de vida.</p>
                    <button className='text-lg font-varela text-primary-blue py-3 px-6 rounded-full shadow-md transition-colors hover:bg-primary-blue hover:text-white'>¡Unete ahora!</button>
                </div>
                <div className='w-full h-1/3 bg-primary-blue text-white flex flex-col justify-center items-center py-4 px-5 gap-4'>
                    <span className='text-lg text-center md:text-2xl font-sans font-bold'>¿Tienes preguntas o necesitas más información? No dudes en contactarnos.</span>
                    <p className='font-roboto font-light text-center text-pretty text-sm w-full md:w-2/3'>Teléfono: +54 9 3517 86-0525</p>
                </div>
            </section>
        </div>
    )
}

export default Telemedicina
