import * as express from 'express';
import AlunoModel from '../models/aluno';
import { ERROR } from '../constant/errors';
import extractErrorMessage from '../helpers/extractErrorMessage';
import customErro from '../models/customErro';

const router = express.Router();

router.post('/', function (req, res, next) {
    const aluno = new AlunoModel(req.body);
    aluno.save().then(result => {
        return res.status(201).send(result);
    })
    .catch(err => {
        if(err instanceof customErro) {
            res.status(400).send([err.message]);            
        } else {
            res.status(400).send(extractErrorMessage(err.errors));
        }
    });
});

export default router;
