import * as express from 'express';
// import authRoutes from '../controllers/auth';
// import unAuthRoutes from '../controllers/unAuth';
import controllers from '../controllers';

const router = express.Router();

router.use('/', controllers);

// router.use('/', unAuthRoutes)
// router.use('/auth', authRoutes);

export default router;
