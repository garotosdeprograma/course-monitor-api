import * as nodemailer from 'nodemailer';
import { mailConfig } from '../config/config';

export const transporter = nodemailer.createTransport(mailConfig);

