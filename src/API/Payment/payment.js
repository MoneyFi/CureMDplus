import axios from "axios"
import { GO_PAY, MERCADO_PAGO } from "../../Constants/Constants";
import {MercadoPagoConfig, Preference} from 'mercadopago'
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


// const mercado_pago_preference = async (preferencia) => {
//     const { amount, user_id, producto, facturacion, mail, productor , accessToken } = preferencia;
//     console.log(accessToken)
//     const client = new MercadoPagoConfig({ accessToken });
  
//     const preference = new Preference(client);
  
//     try {
//         const response = await preference.create({
//             payment_methods: {
//                 excluded_payment_methods: [],
//                 excluded_payment_types: [
//                     {
//                         id: "ticket"
//                     }
//                 ],
//                 installments: 1
//             },
//             items: [
//                 {
//                     title: producto,
//                     quantity: 1,
//                     currency_id: 'ARS',
//                     unit_price: Number(amount),
//                 },
//             ],
//             back_urls: {
//                 success: 'https://curemd-plus.curemd.io/payments/success',
//                 failure: 'https://curemd-plus.curemd.io/payments/failure',
//             },
//             auto_return: 'approved',
//             notification_url: 'http://199.192.30.130:3559/webhook',
//             metadata: {
//                 user_id: user_id,
//                 productor:1234,
//                 plan: producto,
//                 facturacion: facturacion,
//                 amount: amount,
//                 email: mail
//             }
//         });
  
//         // Obtén el init_point de la preferencia para redirigir al usuario a la página de pago
//         const init_point = response.init_point;
//         return init_point;
//     } catch (error) {
//         console.log('Error al crear la preferencia de pago:', error);
//         throw new Error('Error al crear la preferencia de pago');
//     }
// };
  

const mercado_pago_preference = async (data) => {
    const url = 'https://api.mercadopago.com/checkout/preferences';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.accessToken}`
        },
        body: JSON.stringify({
                        payment_methods: {
                            excluded_payment_methods: [],
                            excluded_payment_types: [
                                {
                                    id: "ticket"
                                }
                            ],
                            installments: 1
                        },
                        items: [
                            {
                                title: data.producto,
                                quantity: 1,
                                currency_id: 'ARS',
                                unit_price: Number(data.amount),
                            },
                        ],
                        back_urls: {
                            success: 'https://plus.curemd.io/payments/success',
                            failure: 'https://plus.curemd.io/payments/failure',
                        },
                        auto_return: 'approved',
                        notification_url: 'http://199.192.30.130:3559/webhook',
                        metadata: {
                            user_id: data.user_id,
                            productor:1234,
                            plan: data.producto,
                            facturacion: data.facturacion,
                            amount: data.amount,
                            email: data.mail
                        }
                    })
    });
    const { init_point } = await response.json();
    return init_point;
};


export const mercadoPago = async ({ amount, producto, facturacion, mail }) => {
    const data = {
        key: '6DD4C4768E86F70FCEAC150B270D4AA7792D672F', // Utiliza la clave desde las variables de entorno si estás en un entorno Node.js
        amount: amount, // Precio del plan contratado Ej: 65000
        user_id: '123456',
        mail: mail, // Este es el id de usuario de la base de datos
        producto: producto, // Este es el nombre del plan contratado
        facturacion: facturacion, // Si paga el total de la poliza o se le tiene que cobrar todos los meses
        accessToken: 'APP_USR-3862167906921505-010317-e5ef4a3afff2f75b3a3ce55d2c8e20bb-1568441977' // Incluye el access token directamente
    };
  
    try {
        const init_point = await mercado_pago_preference(data);
        console.log('Respuesta del servidor:', init_point);
        window.open(init_point);
    } catch (error) {
        console.log('Error al realizar la solicitud:', error);
    }
};