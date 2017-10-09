import * as express from 'express';
import aluno from '../models/aluno';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Funcionou caraaaaaaaaaaaaaaaalho!!!!!!');
})

console.log('ALUNO CONTROLLER');

export default router;