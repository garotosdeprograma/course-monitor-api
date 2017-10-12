import * as express from 'express';
import Aluno from '../../models/aluno';
import save from '../../database-actions/save-collection';


const router = express.Router();

router.post('/', function(req, res, next) {
    const aluno = new Aluno(req.body);
    const alunoSave = save(aluno);
    res.send(alunoSave);
})

export default router;