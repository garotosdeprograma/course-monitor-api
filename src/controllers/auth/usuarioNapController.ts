import * as express from 'express';
import Professor from '../../models/professor';
import save from '../../database-actions/save-collection';
import update from '../../database-actions/update';

const router = express.Router();

// router.post('/professor', function (req, res, next) {
//     const professor = new Professor(req.body);
//     const professorSave = save(professor);
//     res.send(professorSave);
// })

router.put('/professor/:_id', function (req, res, next) {
    update(Professor, req.params, req.body);
    res.send('Atualizado!')
})

export default router;