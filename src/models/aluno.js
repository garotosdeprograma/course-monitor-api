import mongoose from 'mongoose';
import validate from 'mongoose-validator';

const Schema = mongoose.Schema;

const emailValidate = validate({
    validator: 'isEmail',
    passIfEmpty: false,
    message: 'Email inválido'
}) 

const nameValidate = [
    validate({
        validator: ''
    })
]

const aluno = new Schema({
    nome: {type: String, trim: true, required: true},
    sobrenome: {type: String, required: true},
    email: {type: String, 
            required: true,
            validate: emailValidate
    },
    curso: {type: String, required: true},
    matricula: String,
    senha: {type: String, required: true},
    lista_turma: [String]
})