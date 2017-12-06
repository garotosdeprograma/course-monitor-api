import auth from './auth';
import * as express from 'express';
import studentController from './studentController';
import userNapController from './userNapController';
import registerController from './registerController';

const router = express.Router();

router.use('/', auth);

export default router;
