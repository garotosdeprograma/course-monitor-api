import * as cors from 'cors';
import * as morgan from 'morgan';
import * as express from 'express';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as responseTime from 'response-time';
import config from './config/config';
import routes from './routes';

const app = express()


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

app.use('/api', routes);



export default app;