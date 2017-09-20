import express from 'express';
import mongoose from 'mongoose';
import config from './config/config';

const app = express();

//Setting connection with mongodb

const mongoConnection = mongoose.connect(config.mongodb_url, {
    useMongoClient: true
});

db.then(data => {
    console.log("########## ",data);
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