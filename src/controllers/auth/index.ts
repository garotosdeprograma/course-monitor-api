import loginController from './loginController';
import studentRegisterController from './studentRegisterController';
import * as express from 'express';

const router = express.Router();

router.post('/login', loginController.signIn);
router.post('/register', studentRegisterController.registrar);
router.post('/confirmation', studentRegisterController.confirmation);

export default router;
