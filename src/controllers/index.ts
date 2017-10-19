import * as express from 'express';
import studentController from './studentController';
import userNapController from './userNapController';
import registerController from './registerController';

const router = express.Router();

router.use('/aluno', studentController);
router.use('/usuario-nap', userNapController);
router.use('/register', registerController);

export default router;