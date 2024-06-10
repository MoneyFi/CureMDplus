import emailjs from '@emailjs/browser';
import { mailPrincipal } from './mailPrincipal';
import { MAIL_SERVICE_ID, MAIL_USER_ID, MAIL_TEMPLATE_ID } from '../../Constants/Constants';

export const sendEmailConfirmation = (details) => {
    emailjs.init(MAIL_USER_ID)
    emailjs
    .send(
        MAIL_SERVICE_ID,
        MAIL_TEMPLATE_ID,
        {
            to_email: details.to_email,
            subject: mailPrincipal.subject,
            message: mailPrincipal.text,
        },
    )
    .then(response => {
        console.log('SUCCESS!', response.status, response.text);
    })
    .catch(err => console.log('FAILED...', err));
}

console.log(sendEmailConfirmation({to_email: ['leandromaxi2014@gmail.com', 'curemd-plus@moneyfi.io']}))