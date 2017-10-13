import * as express from 'express';
import AlunoSchema from '../../models/aluno';
import openConnection from '../../database-actions/open-connection';
import createDocument from '../../helpers/createDocument';

const router = express.Router();

router.post('/', function(req, res, next) {
    createDocument('Aluno', AlunoSchema, req.body)
    .then(result => {
        res.send(result);      
    })
    .catch(err => {
        console.error(err);
        res.send(err);
    });
});

export default router;