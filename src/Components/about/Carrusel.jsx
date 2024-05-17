import React, { useEffect, useState } from 'react'
import AboutCards from './AboutCards'

const Carrusel = () => {
    const [count, setCount] = useState(2)

    useEffect(() => {
        const change = () => {
          setCount(count + 1);
          if (count < 1) setCount(1);
          if (count >= 3) setCount(1);
        };
        setTimeout(() => {
          change();
        }, "5000");
      }, [count]);

    const data = [
        {
            nombre: " María González",
            img: 'https://randomuser.me/api/portraits/women/82.jpg',
            testimony: 'Desde que uso CureMD, gestionar mis citas médicas es más fácil. La app me permite acceder a mis registros y comunicarme con mis médicos en un solo lugar.'
        },
        {
            nombre: "Javier Martínez",
            img: 'https://randomuser.me/api/portraits/men/85.jpg',
            testimony: 'CureMD ha facilitado mucho mi vida. Antes, organizar mis consultas médicas y tratamientos era complicado. Ahora, con la app, puedo gestionar todo desde mi teléfono.'
        },
         {
            nombre: "Laura Fernández",
            img: 'https://randomuser.me/api/portraits/women/3.jpg',
            testimony: 'CureMD ha cambiado cómo manejo mi salud. La app me permite tener mis registros médicos siempre accesibles y comunicarme fácilmente con mi equipo médico.'
        }
    ]
    // 0 ml 644 mr 644   
  return (
    <div className=' w-full h-[50vh]  flex items-center justify-center max-[700px]:mt-[40px]'>
    <div className='overflow-hidden w-full relative'>   
    <ul className={`w-[1200px] flex items-center justify-around mt-20  ${count === 1 ? 'ml-[800px] duration-1000' : count === 2 ? 'mr-[0px] duration-1000' : 'mr-[800px] duration-1000' }`}>
            {
                data.map((el,i)=>{
                    return(
                        <AboutCards nombre={el.nombre} img={el.img} testimony={el.testimony} key={i} index={i}/>
                    )
                })
            }
    </ul>
    </div>
    </div>
  )
}

export default Carrusel