const mongoose = require('mongoose');
const url_banco = require('../config/config');
mongoose.connect(url_banco.url, {
    useMongoClient: true
});

const schema_aluno = require('./aluno');

mongoose.connection.once('open', function () {

    const aluno = new schema_aluno.Aluno({
        nome: 'Joziélio',
        sobrenome: 'Santiago',
        email: 'jozielio@email.com',
        senha: '12345',
        matricula: 142011518,
        curso: 'Sistemas de Informação'
    })

    aluno.save(function (err) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('sucess!');
            mongoose.connection.close(function () {
                console.log('Connection closed')
            })
        }
    })
});
