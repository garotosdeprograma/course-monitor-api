import cors from 'cors'
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
// import cadastrarAula from './models/cadastrar-aula';
import { searchAll, searchBy } from './models/buscar-dados';
// import { update } from './models/atualizar';

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

// app.set('view engine', 'ejs')

// Configuracao dos Requests do app
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// cadastrarAula();
// searchAll();
searchBy({numero_aula: 1});

// TODO refazer
// update({ numero_aula: 2 }, { $set: { status: 'Cancelada' } });

app.route('/cursos')
    .get((req, res) => {
        res.json([{
            id: 1,
            nome: 'SI',
            lista_disciplina: ['idMath', 'idCalculo', 'idPW']
        }])
    })

export default app;