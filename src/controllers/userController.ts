import * as express from 'express';
import loginController from './loginController';

const router = express.Router();

router.use('/', loginController);
