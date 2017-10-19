import * as express from 'express';
import ProfessorSchema from '../models/professor';
import extractErrorMessage from '../helpers/extractErrorMessage';
import customErro from '../models/customErro';

const router = express.Router();

router.post('/professor', function (req, res, next) {
    const professor = new ProfessorSchema(req.body)
    professor.save().then(result => {
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

router.put('/professor/:_id', function (req, res, next) {
    ProfessorSchema.update(req.params, req.body)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.error(err);
    })
})

export default router;