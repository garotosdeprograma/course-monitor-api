import * as cors from 'cors';
import * as morgan from 'morgan';
import * as express from 'express';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as responseTime from 'response-time';
import * as expressJWT from 'express-jwt';
import * as jwt from 'jsonwebtoken';
import * as helpers from 'express-helpers';
import routes from './routes';
import mongoConnect from './database-actions/open-connection';
import { secret } from './config/jwt';
import connection from './database-actions/open-connection';
import { ERROR } from './constant/errors';

// opening mongodb connection
connection();

const app = express();

// enabling cross-origin resource sharing
app.use(cors());

app.locals.link_to = helpers.link_to;

// help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
app.use(helmet());

// response time for Node.js servers
app.use(responseTime());

// setting views dir
app.set('views', __dirname + '/views');

console.log(__dirname);

// setting view engine
app.set('view engine', 'ejs');

// configuracao dos Requests do app
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ type: 'application/json', limit: '10mb' }));
app.use(expressJWT({ secret: secret }).unless({ path: ['/api/v1/login', '/api/v1/register'] }));
// tslint:disable-next-line:typedef
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({error: ERROR.ERRO_NAO_AUTORIZADO});
    }
});

app.use('/api', routes);

export default app;


// "start": "nodemon --watch ./src -e ts  --exec \"npm run build\"",
