import mongoose from 'mongoose';
import { emailValidator, isEmpty, containNumber } from '../helpers/validators';

const Schema = mongoose.Schema;

const turmaSchema = new Schema({

    codigo: {
        type: String,
        trim: true,
        required: [true, 'O campo codigo é obrigatório'],
    },
    //usar para cadastro - escolhe curso depois a turma
    curso: {
        type: String,
        required: true
    },

    nome_disciplina: {
        type: String,
        trim: true,
        maxlength: [20, 'O campo nome disciplina deve conter no máximo 20 caracteres.'],
        required: [true, 'O campo nome disciplina é obrigatório'],
    },
    //avaliar atributo
    status: {
        type: Boolean,
        default: false
    },
    //array com as possibilidades
    turno: {
        type: String,
        required: true
    },

    data_cadastro: {
        type: Date,
        default: Date.now
    },

    data_update: {
        type: Date,
        default: Date.now
    },

    lista_aula: [Object],

    lista_notificacao: [Object]

}, { collection: 'aluno' })

const Turma = mongoose.model('Turma', turmaSchema);
