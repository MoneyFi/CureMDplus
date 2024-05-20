import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";

const Count = () => {
    const [count,setCount]= useState({
        usuarios: 0,
        contratos:0,
        paises: 0, 

    })

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount(prevCount => {
            // Check if all values have reached their respective targets
            if (prevCount.usuarios < 250 || prevCount.contratos < 500 || prevCount.paises < 11) {
              return {
                usuarios: prevCount.usuarios < 250 ? prevCount.usuarios + 1 : 250,
                contratos: prevCount.contratos < 500 ? prevCount.contratos + 1 : 500,
                paises: prevCount.paises < 11 ? prevCount.paises + 1 : 11,
              };
            } else {
              // Clear the interval if all values have reached their targets
              clearInterval(intervalId);
              return prevCount;
            }
          });
        }, 10); // Update interval (10ms in this case for faster counting)
    
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
      }, []);
  return (
    
    <div className="w-[98%] flex items-center justify-around  p-3  border-t-2 border-primary-blue">
    <div className="flex flex-col items-center justify-center">
    <p className="font-bold text-primary-blue text-xl flex items-center justify-center"><FaPlus /> {count.usuarios}</p>
    <p className="font-semibold text-sm">Usuarios</p>    
    </div>
    <div className="flex flex-col items-center justify-center">
    <p className="font-bold text-primary-blue text-xl flex items-center justify-center"><FaPlus /> {count.contratos}</p>
    <p className="font-semibold text-sm">Contratos</p>    
    </div>
    <div className="flex flex-col items-center justify-center">
    <p className="font-bold text-primary-blue text-xl flex items-center justify-center"><FaPlus /> {count.paises}</p>
    <p className="font-semibold text-sm">Paises</p>    
    </div>
</div>
  )
}

export default Count