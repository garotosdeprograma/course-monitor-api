import * as express from 'express';
import AlunoSchema from '../models/student';

const router = express.Router();

router.get('/:_id', function (req, res, next) {
    AlunoSchema.find(req.params)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.error(err);
    })
});

router.put('/:_id', function (req, res, next) {
    AlunoSchema.update(req.params, req.body)
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