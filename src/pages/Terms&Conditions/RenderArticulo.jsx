import React from 'react';
import { dividirTextoEnListas } from '../../API/TerminosYcondiciones';


const RenderArticulo = ({ articulo }) => {
    const { Articulo, titulo, texto } = articulo;
    const partes = dividirTextoEnListas(texto);

    return (
        <div className=''>
            <h2 className='font-bold text-primary-blue text-md py-1'>{Articulo}</h2>
            <h3 className='font-bold text-primary-blue text-sm'>{titulo}</h3>
            <div className='py-2'>
                {partes.map((parte, index) => {
                    if (parte.type === 'list') {
                        return (
                            <ul key={index} className='flex flex-col text-sm  py-1'>
                                {parte.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        );
                    } else {
                        return <p key={index} className='text-sm'>{parte.content.trim()}</p>;
                    }
                })}
            </div>
        </div>
    );
};

export default RenderArticulo