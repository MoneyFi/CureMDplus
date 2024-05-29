import axios from "axios"
import { GO_PAY, MERCADO_PAGO } from "../../Constants/Constants";
// import dotenv from 'dotenv';
// dotenv.config();



export const goCuotas = async ({amount_in_cents, order_reference_id,phone_number})=>{
    
const formData = new FormData();
formData.append('amount_in_cents', parseInt(amount_in_cents))
formData.append('order_reference_id', order_reference_id)
formData.append('phone_number', phone_number)
formData.append('curemd', 'curemd_plus')

try{
    const response = await axios.post(GO_PAY,formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    if(!response.data.errors){
        window.open(response.data.url_init);
    }else{
        console.log(response.data.errors)
    }
    return response.data
}catch(error){
    console.log(error)
}

}

export const mercadoPago = async ({amount, producto, facturacion, mail})=>{
    // const secretKey = process.env.SECRET_KEY;
    const data = {
        key: '6DD4C4768E86F70FCEAC150B270D4AA7792D672F',//llave necesaria para acceder al server, hoy como variable de entorno luego la ponemos en la base de datos para ir cambiandola cada tanto
        amount: amount,//Precio del plan contratado Ej: 65000
        mail: mail,//Este es el id de usuario de la base de datos
        producto: producto,//este es el nombre del plan contratado
        facturacion: facturacion//si paga el total de la poliza o se le tiene que cobrar todos los meses
      };

      const response = await axios.post(MERCADO_PAGO, data)
      .then(response => {
        console.log('Respuesta del servidor:', response);
        window.open(response.data);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error.response ? error.response.data : error.message);
      });

    console.log(response)
      return response

}