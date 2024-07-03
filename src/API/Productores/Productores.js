import axios from "axios"
import { PRODUCTORES_CLIENTES, PRODUCTORES_LIST, PRODUCTORES_LOGIN, PRODUCTORES_REGISTER } from "../../Constants/Constants"



export const Productores_Call = async () =>{
    const response = await axios.get(PRODUCTORES_LIST)

    console.log(response)

    return response.data
}


export const registerProductor = async (formData, navigate) => {
    try {
        const response = await axios.post(PRODUCTORES_REGISTER, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if(response.data.response === 'success'){
            navigate('/productorsuccess')
        }
        console.log(response.data);
    } catch (error) {
        console.error('Error registering user:', error);
    }
};


export const signInProductor = async (formData, navigate)=>{
    try{
        const response = await axios.post(PRODUCTORES_LOGIN, formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response.data);
        if(response.data.response === 'fail_email'){
            alert('Error de autenticacion.')
        }else{
            const productor_data = JSON.stringify(response.data.data)
            localStorage.setItem('productor',productor_data)
            navigate('/productores/home')
        }
    } catch (error) {
        console.error('Error registering user:', error);
    }
}

export const getClientes = async(e) =>{
    try{
        const code = new FormData()
        code.append("code" , e)
        const response = await axios.post(PRODUCTORES_CLIENTES,code,
        {    
            headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

        console.log(response)

    }catch(error){
        console.error('Error al traer clientes:', error);

    }
}