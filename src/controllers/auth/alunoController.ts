import * as express from 'express';
import aluno from '../../models/aluno';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Funcionou caralho!!!!!!');
})

router.post('/', function(req, res, next) {
    res.send('Funcionou caralho!!!!!!');
})

console.log('ALUNO CONTROLLER');

export default router;