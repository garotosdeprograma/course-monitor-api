import { mailConfig } from '../config/config';
import { render } from 'ejs';
import { readFileSync } from 'fs';
import { transportEmail } from './sendEmail';
import * as crypto from 'crypto';
import studentModel from '../models/student';


export const activationMail = (data) => {
    const token = crypto.randomBytes(64).toString('hex');
    studentModel.update({ _id: data._id }, { $set: { token: token } })
    .then(result => {
        return {
            from: `"D'gree" <${mailConfig.auth.user}>`, // sender address
            to: `"${data.firstName} ${data.lastName}" <${data.email}>`, // list of receivers
            subject: `[Ativação de conta]`, // subject line
            text: '', // plain text body
            html: render(readFileSync(
                __dirname + '/../views/emails/accountActivation.ejs',
                'utf8'
            ),
            {
                user: data,
                url: 'localhost:3000/api/v1/student/confirmation?token=' + token
            })
        };
    })
    .then(mailOptions => {
        transportEmail(mailOptions);
    })
    .catch (error => {
        console.log(error);
        // activationMail(error);
    });
};
