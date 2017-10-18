import * as express from 'express';
import studentController from './studentController';
import userNapController from './userNapController';
import registerController from './registerController';
// import resetPasswordController from './resetPasswordController'

const router = express.Router();

// Users controllers
router.use('/aluno', studentController);
// router.use('/professor', professorController);
router.use('/usuario-nap', userNapController);
// router.use('/admin', adminController);

// Actions controllers 
// router.use('/aula', aulaController);
// router.use('/curso', cursoController);
// router.use('/disciplina', disciplinaCOntroller);
// router.use('/notificacao', notificacaoController);
// router.use('/propaganda', propagandaController)
// router.use('/turma', turmaController);
// router.use('/login', loginController);
router.use('/register', registerController);
// router.use('/reset-password', resetPasswordController;)

export default router;