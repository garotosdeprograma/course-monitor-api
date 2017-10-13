import * as express from 'express';
import AlunoSchema from '../../models/aluno';
import searchBy from '../../helpers/searchByDocument';
import updateDocument from '../../helpers/updateDocument';

const router = express.Router();

router.get('/:_id', function (req, res, next) {
    searchBy('Aluno', req.params, AlunoSchema)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.error(err);
    })
});

router.put('/:_id', function (req, res, next) {
    updateDocument('Aluno', req.params, req.body, AlunoSchema)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.error(err);
    })
})

router.put('/:_id/unsuscribe', function (req, res, next) {
    res.send(req.params.id);
})

console.log('ALUNO CONTROLLER');

export default router;