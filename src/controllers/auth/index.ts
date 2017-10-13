import * as express from 'express';
import alunoController from './alunoController';
import usuarioNapController from './usuarioNapController';

const router = express.Router();

// Users controllers
router.use('/aluno', alunoController);
// router.use('/professor', professorController);
// router.use('/usuario-nap', usuarioNapController);
// router.use('/admin', adminController);

// Actions controllers 
// router.use('/aula', aulaController);
// router.use('/curso', cursoController);
// router.use('/disciplina', disciplinaCOntroller);
// router.use('/notificacao', notificacaoController);
// router.use('/propaganda', propagandaController)
// router.use('/turma', turmaController);

export default router;