import * as express from 'express';
import databaseAction from '../../database-actions/update';
import aluno from '../../models/aluno';

const router = express.Router();


router.post('/', function(req, res, next) {
    console.log(req.body);
    // databaseAction(aluno, {id: 2}, req.body)
    res.send('req');
})

router.put('/', function(req, res, next) {
    res.send('Funcionou caralho!!!!!!');
})

console.log('ALUNO CONTROLLER');

export default router;