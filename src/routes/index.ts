import * as express from 'express';
import authRoutes from '../controllers/auth';
import unAuthRoutes from '../controllers/unAuth';

const router = express.Router();

router.use('/', unAuthRoutes)

router.use('/auth', authRoutes);

export default router;
