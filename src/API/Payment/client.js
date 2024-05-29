/* Este es un ejemplo del post que deben hacer al servidor 
donde se encuentra mercadopago activo para procesar los datos
del pago de la poliza, mientras envien el contenido de data a 
a la url pueden hacerlo como quieran  */


import axios from 'axios';

const url = 'http://199.192.30.130:3558/procesar-pago'; //a eata url deben hacer el post
const secretKey = '6DD4C4768E86F70FCEAC150B270D4AA7792D672F'

const data = {
    key: secretKey,//llave necesaria para acceder al server, hoy como variable de entorno luego la ponemos en la base de datos para ir cambiandola cada tanto
    amount: 1,//Precio del plan contratado Ej: 65000
    user_id: '123456',//Este es el id de usuario de la base de datos
    producto: 'Plan ESENCIAL',//este es el nombre del plan contratado
    facturacion: 'mensual'//si paga el total de la poliza o se le tiene que cobrar todos los meses
  };
  
  axios.post(url, data)
    .then(response => {
      console.log('Respuesta del servidor:', response.request.res.responseUrl);
    })
    .catch(error => {
      console.error('Error al realizar la solicitud:', error.response ? error.response.data : error.message);
    });