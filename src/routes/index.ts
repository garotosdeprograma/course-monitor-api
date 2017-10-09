import * as express from 'express';
import routes from '../controllers';

const router = express.Router();

router.use('/', routes);

console.log("ROUTEs");

export default router;



