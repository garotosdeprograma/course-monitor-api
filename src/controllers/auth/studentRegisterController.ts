import * as express from 'express';
import studentModel from '../../models/student';
import userModel from '../../models/user';
import { ERROR } from '../../constant/errors';
import extractErrorMessage from '../../helpers/extractErrorMessage';
import customErro from '../../models/customErro';
import * as mongoose from 'mongoose';
import { activationMail } from '../../mail/ativationMail';
import { CONFIRM } from '../../constant/success';


const ObjectId = mongoose.Schema.ObjectId;
let createdStudent: any;

export default {
    registrar(req, res, next) {
        const student = new studentModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            matricula: req.body.matricula,
            degree: req.body.degree,
        });
        student.save().then(result => {
            createdStudent = result;
            return new userModel({
                email: req.body.email,
                password: req.body.password,
                student: result._id
            });
        })
        .then(user => {
            return user.save();
        })
        .then(user => {
            return activationMail(createdStudent);
        })
        .then(storedUser => {
            return res.status(201).send(createdStudent);
        })
        .catch(err => {
            if (err instanceof customErro) {
                res.status(400).send([err.message]);
            } else {
                res.status(400).send(extractErrorMessage(err.errors));
            }
        });
    },

    confirmation (req, res, next) {
        const token = req.query.token;
        if (!token) {
            throw res.status(401).send(ERROR.INVALID_TOKEN);
        }
        studentModel.update({token: token}, {$set: {status: true} })
        .then(result => {
            return res.status(200).send(CONFIRM.ACCOUNT_ACTIVATED);
        })
        .catch(err => {
            return res.status(400).send(CONFIRM.ACCOUNT_NOT_ACTIVATED);
        });
    }
};
