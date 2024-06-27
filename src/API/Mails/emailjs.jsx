import emailjs from '@emailjs/browser';
import { mailPrincipal } from './mailPrincipal';
import { mailRenovacion } from './mailRenovacion';
import { MAIL_SERVICE_ID, MAIL_USER_ID, MAIL_TEMPLATE_ID } from '../../Constants/Constants';

export const sendEmailConfirmation = (emails) => {
    emailjs.init(MAIL_USER_ID)
    emailjs
    .send(
        MAIL_SERVICE_ID,
        MAIL_TEMPLATE_ID,
        {
            to_email: emails,
            subject: mailPrincipal.subject,
            message: mailPrincipal.text,
        },
    )
    .then(response => {
        console.log('SUCCESS!', response.status, response.text);
    })
    .catch(err => console.log('FAILED...', err));
}

export const sendRenewEmail = (email) => {
    emailjs.init(MAIL_USER_ID)
    emailjs
    .send(
        MAIL_SERVICE_ID,
        MAIL_TEMPLATE_ID,
        {
            to_email: email,
            subject: 'Recordatorio de Renovación de Pago para Mantener su Póliza CureMD+ Vigente',
            message: `
Estimado/a Asegurado/a,

Esperamos que se encuentre bien. Nos dirigimos a usted para recordarle que su póliza CureMD+ está próxima a su fecha de renovación. Para evitar la pérdida de continuidad en su cobertura y asegurarse de que todos los servicios sigan activos, es importante que realice el pago de la cuota correspondiente a la brevedad.

¿Por qué es importante renovar su pago a tiempo?

    Continuidad de Cobertura: Evitará cualquier periodo de carencia y garantizará que no haya interrupciones en su cobertura.
    Acceso Ininterrumpido a Servicios: Mantendrá todos los beneficios y servicios activos sin interrupciones.
    Tranquilidad: Podrá estar seguro de que usted y su familia seguirán protegidos sin preocuparse por lapsos en la cobertura.

Ingrese a la web de CureMD+ para renovar su plan o adquirir uno nuevo:

https://plus.curemd.io/

Si tiene alguna pregunta o necesita asistencia, no dude en ponerse en contacto con nuestro equipo de atención al cliente a través de administracion@moneyfi.io.

Agradecemos su atención a este asunto y esperamos seguir brindándole el mejor servicio.

Atentamente,

Equipo CureMD+
            `,
        },
    )
    .then(response => {
        console.log('SUCCESS!', response.status, response.text);
    })
    .catch(err => console.log('FAILED...', err));
}