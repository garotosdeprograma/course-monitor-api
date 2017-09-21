import express from 'express';
import mongoose from 'mongoose';
import config from './config/config';

const app = express();

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