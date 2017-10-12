import * as express from 'express';
import registerController from './registerController';
//import loginController from './loginController';


const router = express.Router();

//router.use('/login', loginController);

router.use('/register', registerController);


export default router;