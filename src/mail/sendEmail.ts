import { transporter } from './transporter';

export const transportEmail = (mailOptions: any) => {
    transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
            console.log(error);
            throw new Error(error);
        }

        console.log(info);
    });
};
