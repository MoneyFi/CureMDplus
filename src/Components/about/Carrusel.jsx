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
            nombre: "Maria Nishi",
            img: '',
            testimony: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis vero facilis inventore quod, quis at id voluptates alias hic necessitatibus, totam possimus soluta placeat eos blanditiis mollitia! Deserunt, obcaecati illo?'
        },
        {
            nombre: "Maria Nishi",
            img: '',
            testimony: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis vero facilis inventore quod, quis at id voluptates alias hic necessitatibus, totam possimus soluta placeat eos blanditiis mollitia! Deserunt, obcaecati illo?'
        },
         {
            nombre: "Maria Nishi",
            img: '',
            testimony: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis vero facilis inventore quod, quis at id voluptates alias hic necessitatibus, totam possimus soluta placeat eos blanditiis mollitia! Deserunt, obcaecati illo?'
        }
    ]
    // 0 ml 644 mr 644   
  return (
    <div className=' w-[100%] relative h-[50vh] overflow-hidden flex items-center justify-center max-[700px]:mt-[40px]'>
    <ul className={`w-[966px] flex items-center justify-around mt-20 absolute  ${count === 1 ? 'ml-[644px] duration-1000' : count === 2 ? 'mr-[0px] duration-1000' : 'mr-[644px] duration-1000' }`}>
            {
                data.map((el,i)=>{
                    return(
                        <AboutCards key={i} index={i}/>
                    )
                })
            }
    </ul>
    </div>
  )
}

export default Carrusel