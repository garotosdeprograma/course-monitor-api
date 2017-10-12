import * as express from 'express';
import databaseAction from '../../database-actions/update';
import aluno from '../../models/aluno';

const router = express.Router();

router.get('/:id', function(req, res, next) {
    res.send(req.params.id);
})

router.put('/:id', function(req, res, next) {
    res.send(req.params.id);
})

router.put('/:id/unsuscribe', function(req, res, next) {
    res.send(req.params.id);
})



console.log('ALUNO CONTROLLER');

export default router;