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
            subject: mailRenovacion.subject,
            message: mailRenovacion.text,
        },
    )
    .then(response => {
        console.log('SUCCESS!', response.status, response.text);
    })
    .catch(err => console.log('FAILED...', err));
}