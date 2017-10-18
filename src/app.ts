import * as cors from 'cors';
import * as morgan from 'morgan';
import * as express from 'express';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as responseTime from 'response-time';
import * as expressJWT from 'express-jwt';
import * as jwt from 'jsonwebtoken';
import routes from './routes';
import mongoConnect from './database-actions/open-connection';
import { secret } from './config/jwt';
import connection from './database-actions/open-connection';

// Opening mongodb connection
connection();

const app = express();

// Enabling cross-origin resource sharing
app.use(cors());

// help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
app.use(helmet());

// Response time for Node.js servers
app.use(responseTime());

// Configuracao dos Requests do app
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ type: 'application/json', limit: '10mb' }));
// app.use(expressJWT({ secret: secret }).unless({ path: ['/login'] }))

app.use('/api', routes);

export default app;