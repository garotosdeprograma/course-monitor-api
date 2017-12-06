import * as express from 'express';
import controllers from '../../controllers';

const router = express.Router();

router.use('/', controllers);

export default router;
