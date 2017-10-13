import * as express from 'express';
import databaseAction from '../../database-actions/update';
import Aluno from '../../models/aluno';
import searchBy from '../../database-actions/search-by';
import update from '../../database-actions/update';

const router = express.Router();

router.get('/:_id', function (req, res, next) {
    const result = searchBy(Aluno, req.params)
    res.send(result);
    // res.send(req.params.id);
})

router.put('/:_id', function (req, res, next) {
    update(Aluno, req.params, req.body)
    res.send('Atualizado!')
    // res.send(req.params.id);
})

router.put('/:_id/unsuscribe', function (req, res, next) {
    res.send(req.params.id);
})

console.log('ALUNO CONTROLLER');

export default router;