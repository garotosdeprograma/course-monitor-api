import * as express from 'express';
import alunoController from './alunoController';

const router = express.Router();

router.use('/aluno', alunoController);

export default router;