import * as express from 'express';
import alunoController from './alunoController';

const router = express.Router();

router.use('/', alunoController);

console.log("CONTROLLER");

export default router;
