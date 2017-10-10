import * as express from 'express';
import authRoutes from '../controllers/auth';
import unAuthRoutes from '../controllers/unAuth';

const router = express.Router();

router.use('/unAuthRoutes', unAuthRoutes)

router.use('/authRoutes', authRoutes);

console.log("ROUTES");

export default router;



