import * as express from 'express';
import registerController from './registerController';
// import loginController from './loginController';
// import resetPasswordController from './resetPasswordController'

const router = express.Router();

// router.use('/login', loginController);

router.use('/register', registerController);

// router.use('/reset-password', resetPasswordController;)

export default router;