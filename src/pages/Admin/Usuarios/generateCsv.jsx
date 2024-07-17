import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getNominasThunk } from '../../../features/User/userThunks';
import { CSVLink } from 'react-csv';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

const GenerateCsv = () => {
    const [loading, setLoading] = useState(false);
    const [extended, setExtended] = useState(false);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const nominas = JSON.parse(localStorage.getItem('nominas'));
    const onClick = () => {
        reformatData(nominas);
        setLoading(true);
        setExtended(true);
    };

    const reformatData = (data) => {
        const now = new Date();
        const filterData = data.filter(i => new Date(i.fecha_cobro_curemd_plus) > now);
        const newData = filterData.map((i) => {
            const location = JSON.parse(i.user_registration_geolocation)
            return {
                cuil: i.cuil,
                name: i.first_name + ' ' + i.last_Name,
                email: i.email,
                ciudad: location.city,
                pais: location.country,
                direccion: i.user_registration_input_address,
                telefono: i.user_registration_input_phone_number,
                fecha_de_nacimiento: i.user_registration_date_box_1656279909,
                nombre_plan: i.nombre_plan_curemd_plus,
                declaracion_jurada: i.declaracion_jurada
            }
        });
        setData(newData);
    }
    const headers = [
        { label: 'Cuil', key: 'cuil' },
        { label: 'Name', key: 'name' },
        { label: 'Email', key: 'email' },
        { label: 'Ciudad', key: 'ciudad' },
        { label: 'Pais', key: 'pais' },
        { label: 'Direccion', key: 'direccion' },
        { label: 'Telefono', key: 'telefono' },
        { label: 'Fecha de Nacimiento', key: 'fecha_de_nacimiento' },
        { label: 'Nombre de Plan', key: 'nombre_plan' },
        { label: 'Declaracion Jurada', key: 'declaracion_jurada' },
    ];

    const csvReport = {
        filename: 'Altas-CureMD+.csv',
        headers: headers,
        data: data,
    };

    const generateAndDownloadCSV = () => {
        const csv = Papa.unparse(data);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'Altas-CureMD+.csv');
    };
    useEffect(() => {
        dispatch(getNominasThunk());
        if (loading) {
            setTimeout(() => {
                generateAndDownloadCSV();
            }, 2500);
            setTimeout(() => {
                setLoading(false);
                setExtended(false);
            }, 3000);
        }
    }, [loading])
    return (
        <div className={`w-full flex flex-col justify-start overflow-hidden items-start my-3 ${extended ? ' h-[150px] ' : ' h-[52px] '}`}>
            <div className='bg-primary-blue text-white font-varela text-base md:text-lg flex justify-between items-center px-5 py-2 w-full'>
                <span>Altas de CureMD+</span>
                <button onClick={onClick} className='font-bold bg-white text-primary-blue px-3 py-1'>Generar archivo csv</button>
            </div>
            <div className='bg-[#f2f2f2] w-full flex justify-center items-center min-h-[100px]'>
                {loading && <p className='animate-pulse'>Generando...</p> }
                <CSVLink {...csvReport}/>
            </div>
        </div>
    )
}

export default GenerateCsv;