import * as express from 'express';
import ProfessorSchema from '../../models/professor';
import updateDocument from '../../helpers/updateDocument';
import createDocument from '../../helpers/createDocument';

const router = express.Router();

router.post('/professor', function (req, res, next) {
    createDocument('Professor', ProfessorSchema, req.body)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.error(err);
        res.send(err);
    });
})

router.put('/professor/:_id', function (req, res, next) {
    updateDocument('Professor', req.params, req.body, ProfessorSchema)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.error(err);
    })
})

export default router;