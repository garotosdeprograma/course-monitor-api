import cors from 'cors'
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config/config';


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

//app.set('view engine', 'ejs')

// Configuracao dos Requests do app
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));


//Setting connection with mongodb
const mongoConnection = mongoose.connect(config.mongodb_url, {
    useMongoClient: true
});

mongoConnection
    .then(data => {
        console.log("########## ",data);
    })
    .catch(error => {
        console.error(error);
    })


app.route('/cursos')
    .get((req, res) => {
        res.json([{
            id: 1,
            nome: 'SI',
            lista_disciplina:['idMath','idCalculo','idPW']
        }])
    })



export default app;