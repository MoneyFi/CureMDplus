import { transporter } from "./transporter.js";
import 'dotenv/config';

export const pagoExitosoMail = (email, info) => {
    const mailConfig = {
        from: 'CureMdPlus ' + process.env.MAIL_USER,
        to: email,
        subject: 'Compra de Producto - CUREMD+',
        html: `<!DOCTYPE html>
        <html lang="en">
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tu comprobante de pago</title>
            <style>
                body {
                    font-family: 'Roboto', sans-serif;
                    margin: 10px;
                }
                .comprobante {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    background-color: #1655A4;
                    color: white;
                    padding: 1em;
                    border-radius: 10px;
                    box-shadow: black 0 2px 4px;
                }
            </style>
        </head>
        <body>
            <div class='comprobante'>
                <h1>¡Tu comprobante de pago!</h1>
                <article class="info">
                    <span>Producto: ${info.name}</span>
                    <span>Monto: ${info.amount}</span>
                    <span>Vigencia: ${info.vigencia}</span>
                    <span>Fecha de pago: ${info.date} </span>
                </article>
            </div>
            <div class="footer">
                <p>Gracias por su compra, CureMD+.</p>
            </div>
        </body>
        </html>`,
    };

    transporter.sendMail(mailConfig, (error, info) => {
        if (error) {
            console.log('Error al enviar el mail:', error);
        } else {
            console.log('Mail enviado:', info);
        }
    });
}

//Ejemplo de lo que debe recibir la funcion
let date = new Date();
let info = {
    name: 'Plan Esencial',
    amount: '$65.000,00',
    vigencia: 'Anual',
    date: date.toLocaleString()
}

console.log(pagoExitosoMail('leandromaxi2014@gmail.com', info))